// Firebase configuration for Calvin's Study Site
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD61ovnb5VJZyJlLihqwFaysEiPGksDxQs",
  authDomain: "calvin-study.firebaseapp.com",
  projectId: "calvin-study",
  storageBucket: "calvin-study.firebasestorage.app",
  messagingSenderId: "783538643429",
  appId: "1:783538643429:web:4ab58b0892ae8ce8718f0c"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

const USER_ID = "calvin";

// Save a quiz result to Firestore
async function saveScore({ subject, topic, score, total }) {
  const pct = Math.round((score / total) * 100);
  const ref = collection(db, "users", USER_ID, "scores");
  await addDoc(ref, {
    subject,
    topic,
    score,
    total,
    pct,
    timestamp: serverTimestamp()
  });
  return pct;
}

// Load the last N scores (default 20) across all subjects
async function loadHistory(limitCount = 20) {
  const ref = collection(db, "users", USER_ID, "scores");
  const q   = query(ref, orderBy("timestamp", "desc"), limit(limitCount));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Load best score per subject (returns object keyed by subject)
async function loadBestScores() {
  const history = await loadHistory(200);
  const best = {};
  for (const row of history) {
    if (!best[row.subject] || row.pct > best[row.subject].pct) {
      best[row.subject] = row;
    }
  }
  return best;
}

export { db, saveScore, loadHistory, loadBestScores };
