// Quiz engine — Calvin's Study Site
// URL params: ?subject=math&topic=all&count=20

import MATH_QUESTIONS from "./questions-math.js";
import ELA_QUESTIONS  from "./questions-ela.js";
import SCI_QUESTIONS  from "./questions-science.js";
import SS_QUESTIONS   from "./questions-ss.js";
import { saveScore }  from "./firebase-config.js";

const BANKS = {
  math:           MATH_QUESTIONS,
  ela:            ELA_QUESTIONS,
  science:        SCI_QUESTIONS,
  "social-studies": SS_QUESTIONS,
};

const SUBJECT_LABELS = {
  math:           "Math",
  ela:            "ELA",
  science:        "Science",
  "social-studies": "Social Studies",
};

// ── State ──────────────────────────────────────────────────────────────────
let questions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

// ── Init ───────────────────────────────────────────────────────────────────
function init() {
  const params  = new URLSearchParams(window.location.search);
  const subject = params.get("subject") || "math";
  const topic   = params.get("topic")   || "all";
  const count   = parseInt(params.get("count") || "20", 10);

  const bank = BANKS[subject] || MATH_QUESTIONS;

  // Filter by topic
  const pool = topic === "all"
    ? bank
    : bank.filter(q => q.topic === topic);

  // Shuffle and take N
  questions = shuffle([...pool]).slice(0, Math.min(count, pool.length));
  currentIndex = 0;
  score = 0;

  // Set page title / subject color
  const label = SUBJECT_LABELS[subject] || subject;
  document.getElementById("quiz-subject").textContent = label;
  document.getElementById("quiz-topic").textContent   = topic === "all" ? "Full Practice Test" : topic;
  document.documentElement.dataset.subject = subject;

  // Back-link
  const backEl = document.getElementById("back-link");
  if (backEl) {
    const pages = { math: "math.html", ela: "ela.html", science: "science.html", "social-studies": "social-studies.html" };
    backEl.href        = pages[subject] || "index.html";
    backEl.textContent = `← Back to ${label}`;
  }

  renderQuestion();
}

// ── Render ─────────────────────────────────────────────────────────────────
function renderQuestion() {
  if (currentIndex >= questions.length) {
    showResults();
    return;
  }

  const q = questions[currentIndex];
  answered = false;

  // Progress
  const pct = Math.round((currentIndex / questions.length) * 100);
  document.getElementById("progress-bar").style.width = pct + "%";
  document.getElementById("progress-text").textContent =
    `Question ${currentIndex + 1} of ${questions.length}`;

  // Question
  document.getElementById("question-text").textContent = q.question;

  // Options
  const optContainer = document.getElementById("options-container");
  optContainer.innerHTML = "";
  const labels = ["A", "B", "C", "D"];
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="option-label">${labels[i]}</span><span class="option-text">${opt}</span>`;
    btn.addEventListener("click", () => selectAnswer(i));
    optContainer.appendChild(btn);
  });

  // Explanation
  document.getElementById("explanation").style.display = "none";
  document.getElementById("explanation").textContent   = "";

  // Next button
  const nextBtn = document.getElementById("next-btn");
  nextBtn.style.display   = "none";
  nextBtn.textContent     = currentIndex + 1 < questions.length ? "Next →" : "See Results";
}

function selectAnswer(selected) {
  if (answered) return;
  answered = true;

  const q    = questions[currentIndex];
  const btns = document.querySelectorAll(".option-btn");

  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) {
      btn.classList.add("correct");
    } else if (i === selected && selected !== q.correct) {
      btn.classList.add("wrong");
    } else {
      btn.classList.add("dimmed");
    }
  });

  if (selected === q.correct) score++;

  // Show explanation
  const expEl = document.getElementById("explanation");
  expEl.textContent   = q.explanation;
  expEl.style.display = "block";

  // Show next button
  document.getElementById("next-btn").style.display = "inline-block";
}

document.getElementById("next-btn")?.addEventListener("click", () => {
  currentIndex++;
  renderQuestion();
});

// ── Results ────────────────────────────────────────────────────────────────
function showResults() {
  document.getElementById("quiz-screen").style.display    = "none";
  document.getElementById("results-screen").style.display = "block";

  const total = questions.length;
  const pct   = Math.round((score / total) * 100);
  const stars  = getStars(pct);

  document.getElementById("result-score").textContent       = `${score} / ${total}`;
  document.getElementById("result-pct").textContent         = `${pct}%`;
  document.getElementById("result-stars").textContent       = stars;
  document.getElementById("result-message").textContent     = getMessage(pct);

  // Try Again
  document.getElementById("try-again-btn")?.addEventListener("click", () => {
    window.location.reload();
  });
}

function getStars(pct) {
  if (pct >= 90) return "★★★★★";
  if (pct >= 75) return "★★★★☆";
  if (pct >= 60) return "★★★☆☆";
  if (pct >= 40) return "★★☆☆☆";
  return "★☆☆☆☆";
}

function getMessage(pct) {
  if (pct === 100) return "PERFECT! You're amazing, Calvin! 🎉";
  if (pct >= 90)   return "Fantastic job! You really know this stuff! 🌟";
  if (pct >= 75)   return "Great work! Keep it up and you'll ace the test! 👍";
  if (pct >= 60)   return "Good effort! Review the ones you missed and try again!";
  if (pct >= 40)   return "You're learning! Study those topics and try again!";
  return "Don't give up, Calvin! Review the material and try again — you've got this!";
}

// ── Save Score ─────────────────────────────────────────────────────────────
document.getElementById("save-btn")?.addEventListener("click", async () => {
  const saveBtn = document.getElementById("save-btn");
  saveBtn.disabled     = true;
  saveBtn.textContent  = "Saving…";

  const params  = new URLSearchParams(window.location.search);
  const subject = params.get("subject") || "math";
  const topic   = params.get("topic")   || "all";

  try {
    await saveScore({ subject, topic, score, total: questions.length });
    saveBtn.textContent = "✓ Saved!";
  } catch (err) {
    console.error(err);
    saveBtn.textContent = "Error saving — try again";
    saveBtn.disabled    = false;
  }
});

// ── Utility ────────────────────────────────────────────────────────────────
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ── Start ──────────────────────────────────────────────────────────────────
init();
