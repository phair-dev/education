// ELA Question Bank — 65+ questions aligned to 3rd Grade TEKS
const ELA_QUESTIONS = [

  // ── Part 1: Speaking and Listening ────────────────────────────────────
  {
    id: "e-001", subject: "ela", topic: "Speaking and Listening",
    question: "Trinidad's mother asks him to clean his room immediately. Which response is the most POLITE?",
    options: [
      "\"I will do that now, Mother.\"",
      "\"Can't you see that I am busy?\"",
      "\"Tomorrow, I will do it.\"",
      "\"I don't want to. Do I have to?\""
    ],
    correct: 0,
    explanation: "The most polite response is to agree immediately and respectfully: 'I will do that now, Mother.' The other responses are rude, dismissive, or delay the request."
  },
  {
    id: "e-002", subject: "ela", topic: "Speaking and Listening",
    question: "Your teacher gives you instructions with three steps: (1) Read the story, (2) Answer the questions, (3) Share with a partner. What should you do FIRST?",
    options: [
      "Share with a partner",
      "Answer the questions",
      "Read the story",
      "Ask a friend for help"
    ],
    correct: 2,
    explanation: "Always follow instructions in order. The first step is to read the story before answering questions or sharing."
  },
  {
    id: "e-003", subject: "ela", topic: "Speaking and Listening",
    question: "When a classmate is presenting their report to the class, what should you do?",
    options: [
      "Talk quietly to a friend next to you",
      "Work on your own homework",
      "Listen carefully and look at the speaker",
      "Read your own book"
    ],
    correct: 2,
    explanation: "Good listening means paying full attention to the speaker — looking at them and focusing on what they say. This is respectful and helps you learn."
  },
  {
    id: "e-004", subject: "ela", topic: "Speaking and Listening",
    question: "When you speak to the whole class, you should —",
    options: [
      "talk as fast as you can to finish quickly",
      "speak clearly and loudly enough for everyone to hear",
      "whisper so only your friends can hear",
      "look down at the floor"
    ],
    correct: 1,
    explanation: "Good speaking technique means speaking clearly at a volume everyone can hear, using appropriate speed, and looking at your audience."
  },

  // ── Part 2: Reading Skills ─────────────────────────────────────────────
  {
    id: "e-101", subject: "ela", topic: "Reading Skills",
    question: "When the prefix 're-' is added to the word 'count,' how does the meaning change?",
    options: [
      "Re means before. Recount means to count something before counting something else.",
      "Re means not. Recount means to not count something.",
      "Re means again. Recount means to count again.",
      "Re means wrong. Recount means to count incorrectly."
    ],
    correct: 2,
    explanation: "The prefix 're-' means 'again.' So 'recount' means 'to count again.' Other examples: redo = do again, reread = read again, rewrite = write again."
  },
  {
    id: "e-102", subject: "ela", topic: "Reading Skills",
    question: "Which list of words is in CORRECT alphabetical order?",
    options: [
      "passage, paper, paste, pasta",
      "animal, anteater, antimatter, asteroid",
      "elephant, elementary, electricity, elated",
      "mirth, mistake, miser, mirror"
    ],
    correct: 1,
    explanation: "animal (an-i) → anteater (an-t) → antimatter (an-ti) → asteroid (as-). The second letter goes a→n→s in correct order. The others are not in alphabetical order."
  },
  {
    id: "e-103", subject: "ela", topic: "Reading Skills",
    question: "Leon sees the word 'mistaken' and wants to break it apart. What is the BEST way to divide it into syllables?",
    options: ["mi-st-ak-en", "mist-ak-e-n", "m-ist-aken", "mis-tak-en"],
    correct: 3,
    explanation: "The word 'mistaken' divides as mis-tak-en (3 syllables). The prefix 'mis-' is the first syllable, 'tak' is the second, and 'en' is the third."
  },
  {
    id: "e-104", subject: "ela", topic: "Reading Skills",
    question: "What does the prefix 'un-' mean in the word 'unhappy'?",
    options: ["very", "again", "not", "before"],
    correct: 2,
    explanation: "'Un-' means 'not.' Unhappy means not happy. Other examples: unkind = not kind, unsafe = not safe, unusual = not usual."
  },
  {
    id: "e-105", subject: "ela", topic: "Reading Skills",
    question: "Which word has the same vowel sound as 'team'?",
    options: ["tent", "steam", "stem", "tell"],
    correct: 1,
    explanation: "'Team' has the long 'ee' vowel sound (vowel team 'ea'). 'Steam' also has the 'ea' vowel team making the long 'ee' sound. The others have short vowel sounds."
  },
  {
    id: "e-106", subject: "ela", topic: "Reading Skills",
    question: "The word 'running' has two n's because —",
    options: [
      "all words ending in -ing have double letters",
      "when a short vowel word ends in one consonant and you add -ing, you double the final consonant",
      "it makes the word look longer",
      "the letter n is always doubled"
    ],
    correct: 1,
    explanation: "'Run' has a short vowel (u) followed by a single consonant (n). When adding -ing, you double the final consonant to keep the short vowel sound: run → running."
  },
  {
    id: "e-107", subject: "ela", topic: "Reading Skills",
    question: "How many syllables are in the word 'remember'?",
    options: ["2", "3", "4", "5"],
    correct: 1,
    explanation: "'Remember' has 3 syllables: re-mem-ber. You can clap to count them."
  },
  {
    id: "e-108", subject: "ela", topic: "Reading Skills",
    question: "Read this sentence: 'The enormous elephant ate leaves from the tall tree.' What does 'enormous' mean?",
    options: ["tiny", "hungry", "very large", "colorful"],
    correct: 2,
    explanation: "You can use context clues: an elephant eating from a 'tall tree' suggests it is large. 'Enormous' means very large or huge."
  },
  {
    id: "e-109", subject: "ela", topic: "Reading Skills",
    question: "Which word is spelled correctly?",
    options: ["freind", "recieve", "believe", "peice"],
    correct: 2,
    explanation: "'Believe' is spelled correctly. The rule 'i before e except after c' helps: believe (ie is correct). The others are misspelled: friend, receive, piece."
  },
  {
    id: "e-110", subject: "ela", topic: "Reading Skills",
    question: "What does the suffix '-ful' mean in the word 'hopeful'?",
    options: ["without", "full of", "able to", "one who"],
    correct: 1,
    explanation: "'-ful' means 'full of.' Hopeful = full of hope. Joyful = full of joy. Helpful = full of help (ability to help)."
  },

  // ── Part 3: Reading Comprehension ────────────────────────────────────
  // Using the "Emma's Picture" story from the study guide
  {
    id: "e-201", subject: "ela", topic: "Reading Comprehension",
    question: "In 'Emma's Picture,' what sentence lets the reader know Emma was PLEASED with her drawing?",
    options: [
      "\"She liked to figure out things.\"",
      "\"You're welcome,\" said Emma.",
      "\"But it was a beautiful butterfly.\"",
      "\"Then she was finished.\""
    ],
    correct: 2,
    explanation: "'But it was a beautiful butterfly' shows Emma's pride in what she created despite her original plans falling through. It is the emotional conclusion of the story."
  },
  {
    id: "e-202", subject: "ela", topic: "Reading Comprehension",
    question: "In 'Emma's Picture,' Emma gave away most of her drawing paper. What was the EFFECT of this?",
    options: [
      "Emma will have more than one sheet of paper next time",
      "Emma will give all her paper away to her family",
      "Emma will have to be creative with the paper she has",
      "Emma will use markers next time"
    ],
    correct: 2,
    explanation: "Because Emma gave away half her paper twice, she was left with only a small piece. She had to be creative and adapt her drawing to fit what she had — creating a butterfly instead of an eagle or robin."
  },
  {
    id: "e-203", subject: "ela", topic: "Reading Comprehension",
    question: "In 'Emma's Picture,' the author describes Emma filling in black lines with yellow crayon 'being very careful to go around the small orange spot and the small brown spot.' Why did the author include these details?",
    options: [
      "To help the reader understand what Emma was feeling",
      "To persuade the reader to draw their own picture",
      "To help the reader picture what Emma's drawing looked like",
      "To show the reader that Emma's drawing was pretty"
    ],
    correct: 2,
    explanation: "These descriptive details help the reader visualize (picture) exactly what Emma's drawing looked like — using the original spots as parts of the butterfly's wings."
  },
  {
    id: "e-204", subject: "ela", topic: "Reading Comprehension",
    question: "What is the THEME (main message) of 'Emma's Picture'?",
    options: [
      "Drawing is better than writing",
      "Always share what you have with your family",
      "When things don't go as planned, you can use creativity to find a solution",
      "Butterflies are more beautiful than eagles"
    ],
    correct: 2,
    explanation: "The theme is about creative problem-solving and adaptability. Emma's plans changed twice, but she used her creativity to make something beautiful out of what she had."
  },
  {
    id: "e-205", subject: "ela", topic: "Reading Comprehension",
    question: "What genre is 'Emma's Picture'?",
    options: ["Fable", "Fiction", "Informational text", "Poetry"],
    correct: 1,
    explanation: "'Emma's Picture' is realistic fiction — it tells a made-up story about realistic characters and events that could happen in real life."
  },
  // Using the "Benjamin Franklin" passage
  {
    id: "e-206", subject: "ela", topic: "Reading Comprehension",
    question: "In the 'Benjamin Franklin' passage, what is the MAIN IDEA of paragraph 3?",
    options: [
      "Ben Franklin was a scientist who experimented with electricity",
      "Ben Franklin improved everyday life in Philadelphia in many ways",
      "Ben Franklin was a Founding Father who signed important documents",
      "Ben Franklin invented bifocal glasses"
    ],
    correct: 1,
    explanation: "Paragraph 3 focuses on Ben's contributions to Philadelphia: the postal system, Union Fire Company, fire insurance company, and Daylight Savings Time. The main idea is that he improved daily city life."
  },
  {
    id: "e-207", subject: "ela", topic: "Reading Comprehension",
    question: "According to the 'Benjamin Franklin' passage, what is the meaning of 'reveals' in 'A list of Benjamin Franklin's inventions reveals a man of many talents'?",
    options: ["hides", "shows", "confuses", "creates"],
    correct: 1,
    explanation: "In context, 'reveals' means 'shows' or 'makes clear.' The list of inventions shows what kind of person Franklin was."
  },
  {
    id: "e-208", subject: "ela", topic: "Reading Comprehension",
    question: "What is the best TOPIC SENTENCE for an essay about Benjamin Franklin with these supporting facts: He set up the postal system, he invented the lightning rod, and he invented bifocal glasses?",
    options: [
      "He became famous for being a scientist, an inventor, a statesman, and many other things.",
      "America has never forgotten Benjamin Franklin.",
      "Ben Franklin died at the age of 84 on April 17, 1790.",
      "No other person was more involved in the birth of our nation."
    ],
    correct: 0,
    explanation: "A topic sentence introduces the main idea. The supporting facts show Franklin as a scientist, inventor, and contributor — which matches 'He became famous for being a scientist, an inventor, a statesman, and many other things.'"
  },
  {
    id: "e-209", subject: "ela", topic: "Reading Comprehension",
    question: "Read this passage: 'The wind howled like a wolf outside. Inside, the fire crackled warmly.' What is the MOOD of this passage?",
    options: ["frightening outside, cozy inside", "boring", "funny", "confusing"],
    correct: 0,
    explanation: "The metaphor 'wind howled like a wolf' suggests danger outside, while the 'fire crackled warmly' inside creates a cozy, safe feeling. The mood contrasts danger outside with warmth inside."
  },
  {
    id: "e-210", subject: "ela", topic: "Reading Comprehension",
    question: "What is a FABLE?",
    options: [
      "A true story about a real person",
      "A short story, often with animal characters, that teaches a moral lesson",
      "A poem that rhymes",
      "A story set in the future"
    ],
    correct: 1,
    explanation: "A fable is a short story, often with animal characters, that teaches a lesson (moral). Famous fables include 'The Tortoise and the Hare' and 'The Boy Who Cried Wolf.'"
  },
  {
    id: "e-211", subject: "ela", topic: "Reading Comprehension",
    question: "Read: 'Maria had been studying all week. On test day, she felt as nervous as a cat in a room full of rocking chairs.' What type of figurative language is used?",
    options: ["Hyperbole", "Simile", "Personification", "Alliteration"],
    correct: 1,
    explanation: "This is a simile — it compares Maria's nervousness to a cat in a room full of rocking chairs using the word 'as.' A simile uses 'like' or 'as' to compare two unlike things."
  },
  {
    id: "e-212", subject: "ela", topic: "Reading Comprehension",
    question: "What is HYPERBOLE?",
    options: [
      "Giving human qualities to non-human things",
      "An extreme exaggeration used for effect",
      "A comparison using 'like' or 'as'",
      "Words that imitate sounds"
    ],
    correct: 1,
    explanation: "Hyperbole is an extreme exaggeration. Example: 'I've told you a million times!' — you haven't literally told someone a million times; it's an exaggeration to show frustration."
  },
  {
    id: "e-213", subject: "ela", topic: "Reading Comprehension",
    question: "What is the SETTING of a story?",
    options: [
      "The problem in the story",
      "The lesson the story teaches",
      "The time and place where the story happens",
      "The most important character"
    ],
    correct: 2,
    explanation: "The setting is WHERE and WHEN a story takes place. For example: 'a forest in 1800' or 'a school on a rainy Monday.'"
  },

  // ── Part 4: Writing, Revising, and Research ────────────────────────────
  // Using "Juan's Surprise" passage
  {
    id: "e-301", subject: "ela", topic: "Writing and Research",
    question: "In 'Juan's Surprise,' the rubric says to use correct punctuation. The BEST revision is —",
    options: [
      "Change 'Juan's Surprise' to 'Juans Surprise' in the title",
      "Add a comma after 'stew' in sentence 28 ('stew bread, and salad')",
      "Change 'I'll' to 'Ill' in sentence 14",
      "Remove the comma after 'First' in sentence 19"
    ],
    correct: 1,
    explanation: "In a list of three items (stew, bread, and salad), commas should separate each item. Adding a comma after 'stew' is the correct revision. The apostrophe in Juan's (possessive) and I'll (contraction) must stay, and introductory words like 'First' need a comma after them."
  },
  {
    id: "e-302", subject: "ela", topic: "Writing and Research",
    question: "The BEST way to combine sentences 24 and 25 ('She said that his idea was a wonderful plan. And she would be happy to help, especially since she didn't have a present for Mom either.') is —",
    options: [
      "She said that his idea was a wonderful plan, and she would be happy to help, especially since she didn't have a present for Mom either.",
      "She said that his idea was a wonderful plan. And she would be happy to help. Especially since she didn't have a present for Mom either.",
      "She said that his idea was a wonderful plan and she would be happy to help especially since she didn't have a present for Mom either.",
      "She said that his idea was a wonderful plan. And she would be happy to help, because especially since she didn't have a present for Mom either."
    ],
    correct: 0,
    explanation: "Option A correctly combines the two ideas into one sentence using 'and' with proper comma placement."
  },
  {
    id: "e-303", subject: "ela", topic: "Writing and Research",
    question: "Eliza wants to research Benjamin Franklin from multiple sources including an expert. Which research PLAN is best?",
    options: [
      "Step 1: Encyclopedia. Step 2: Research online. Step 3: Interview history museum expert.",
      "Step 1: Find Philadelphia on a map. Step 2: Research online. Step 3: Interview best friend.",
      "Step 1: Encyclopedia. Step 2: Visit science museum. Step 3: Interview history museum expert.",
      "Step 1: Find Philadelphia on a map. Step 2: Research online. Step 3: Interview best friend."
    ],
    correct: 0,
    explanation: "The best plan uses relevant sources (encyclopedia, online research) AND an expert (history museum expert). A best friend is not an expert source, and a science museum is not the best place for American history research."
  },
  {
    id: "e-304", subject: "ela", topic: "Writing and Research",
    question: "Which of the following is an example of a PRIMARY source?",
    options: [
      "A textbook chapter about the Civil War",
      "A letter written by Abraham Lincoln himself",
      "A documentary movie about Abraham Lincoln",
      "An encyclopedia article about Lincoln"
    ],
    correct: 1,
    explanation: "A primary source is an original document created during the time being studied. A letter written BY Lincoln is a primary source. Textbooks, movies, and encyclopedias are secondary sources — they interpret primary sources."
  },
  {
    id: "e-305", subject: "ela", topic: "Writing and Research",
    question: "Which sentence uses CORRECT capitalization?",
    options: [
      "my favorite subject is Science.",
      "My Favorite Subject is science.",
      "My favorite subject is science.",
      "my Favorite subject is Science."
    ],
    correct: 2,
    explanation: "In a sentence, capitalize only the first word and proper nouns. 'My favorite subject is science.' is correct — 'My' is capitalized (first word) and 'science' is not a proper noun."
  },
  {
    id: "e-306", subject: "ela", topic: "Writing and Research",
    question: "Which sentence uses CORRECT end punctuation?",
    options: [
      "What time is it.",
      "The dog ran across the yard?",
      "Watch out for that car!",
      "Do you like pizza."
    ],
    correct: 2,
    explanation: "Exclamation points end sentences that express strong emotion or urgency. 'Watch out for that car!' is a command with urgency. Questions end with '?' and statements end with '.'"
  },
  {
    id: "e-307", subject: "ela", topic: "Writing and Research",
    question: "What is the purpose of a CONCLUDING sentence in a paragraph?",
    options: [
      "To introduce the main idea of the paragraph",
      "To give details that support the main idea",
      "To wrap up the paragraph and restate the main idea",
      "To ask a question for the reader"
    ],
    correct: 2,
    explanation: "A concluding sentence wraps up the paragraph. It often restates the main idea in different words and signals that the paragraph is complete."
  },
  {
    id: "e-308", subject: "ela", topic: "Writing and Research",
    question: "What does it mean to PLAGIARIZE?",
    options: [
      "To write a long research paper",
      "To use someone else's words or ideas without giving them credit",
      "To proofread your own writing",
      "To use the dictionary to check spelling"
    ],
    correct: 1,
    explanation: "Plagiarism means copying someone else's words or ideas and presenting them as your own without giving credit. It is academic dishonesty and should always be avoided."
  },
  {
    id: "e-309", subject: "ela", topic: "Writing and Research",
    question: "In which step of the writing process would you fix spelling errors?",
    options: ["Prewriting (brainstorming)", "Drafting (first draft)", "Revising (improving ideas)", "Editing (proofreading for errors)"],
    correct: 3,
    explanation: "Editing is the step where you fix grammar, spelling, punctuation, and capitalization errors. Revising is about improving ideas and organization."
  },
  {
    id: "e-310", subject: "ela", topic: "Writing and Research",
    question: "Which type of writing tries to convince the reader to agree with an opinion?",
    options: ["Narrative writing", "Informational writing", "Persuasive writing", "Personal narrative"],
    correct: 2,
    explanation: "Persuasive writing tries to convince readers to believe something or take action. It uses reasons and evidence. Informational writing shares facts, and narrative writing tells a story."
  },
  {
    id: "e-311", subject: "ela", topic: "Writing and Research",
    question: "Which sentence is a COMPLETE sentence?",
    options: [
      "Running fast through the park.",
      "The big fluffy dog.",
      "The children laughed at the funny clown.",
      "Because she was tired."
    ],
    correct: 2,
    explanation: "A complete sentence has a subject AND a predicate (verb). 'The children laughed at the funny clown' has a subject (The children) and a predicate (laughed at the funny clown). The others are fragments."
  },
  {
    id: "e-312", subject: "ela", topic: "Writing and Research",
    question: "Which word is a SYNONYM for 'happy'?",
    options: ["sad", "angry", "joyful", "tired"],
    correct: 2,
    explanation: "Synonyms are words with similar meanings. 'Joyful' is a synonym for 'happy' — both describe a feeling of pleasure or contentment."
  },
  {
    id: "e-313", subject: "ela", topic: "Reading Comprehension",
    question: "Read: 'After the game, Jake dragged his feet home. He didn't say a word at dinner and went straight to bed.' What can you INFER?",
    options: [
      "Jake was excited about the game",
      "Jake was tired and probably upset about something",
      "Jake's team won the game",
      "Jake wasn't hungry for dinner"
    ],
    correct: 1,
    explanation: "Making an inference means using clues in the text plus what you know. 'Dragged his feet,' 'didn't say a word,' and 'went straight to bed' are clues that Jake is tired and upset — probably his team lost."
  },
  {
    id: "e-314", subject: "ela", topic: "Reading Comprehension",
    question: "A story about three bears who eat porridge and sleep in beds is an example of which genre?",
    options: ["Myth", "Fairy tale", "Informational text", "Biography"],
    correct: 1,
    explanation: "'Goldilocks and the Three Bears' is a fairy tale — a traditional story often featuring magical or fantastical elements, animals with human qualities, and simple moral lessons."
  },
  {
    id: "e-315", subject: "ela", topic: "Reading Comprehension",
    question: "What does it mean to SUMMARIZE a story?",
    options: [
      "To copy the story word for word",
      "To share your opinion about the story",
      "To retell only the most important parts in your own words",
      "To list every character in the story"
    ],
    correct: 2,
    explanation: "A summary includes only the most important parts — the main characters, main problem, and solution — told briefly in your own words. It is not a retelling of every detail."
  },
  {
    id: "e-316", subject: "ela", topic: "Writing and Research",
    question: "Which of these is the BEST way to use an index in a book?",
    options: [
      "To find the author's name",
      "To read a brief summary of each chapter",
      "To quickly find the page number where a specific topic appears",
      "To learn new vocabulary words"
    ],
    correct: 2,
    explanation: "An index is an alphabetical list at the back of a book that tells you which pages discuss specific topics. It helps you quickly locate information without reading the whole book."
  }
];

export default ELA_QUESTIONS;
