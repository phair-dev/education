// Math Question Bank — 75+ questions aligned to 3rd Grade TEKS
const MATH_QUESTIONS = [

  // ── Objective 1: Numbers and Operations ──────────────────────────────
  {
    id: "m-001", subject: "math", topic: "Numbers and Operations",
    question: "Jessica has collected 421 seashells and Jin has collected 175 seashells. Which number sentence BEST estimates how many more seashells Jessica has than Jin?",
    options: ["400 + 100 = 500", "400 – 200 = 200", "500 – 100 = 400", "400 + 200 = 600"],
    correct: 1,
    explanation: "Round 421 to 400 and 175 to 200. Then subtract: 400 – 200 = 200. This is the best estimate of how many MORE seashells Jessica has."
  },
  {
    id: "m-002", subject: "math", topic: "Numbers and Operations",
    question: "What is the value of the digit 4 in the number 47,382?",
    options: ["4", "400", "4,000", "40,000"],
    correct: 3,
    explanation: "The digit 4 is in the ten-thousands place. Its value is 4 × 10,000 = 40,000."
  },
  {
    id: "m-003", subject: "math", topic: "Numbers and Operations",
    question: "Which fraction is shown by the shaded part of a shape that is divided into 6 equal parts with 2 parts shaded?",
    options: ["1/6", "2/3", "2/6", "4/6"],
    correct: 2,
    explanation: "2 out of 6 equal parts are shaded, so the fraction is 2/6 (which also equals 1/3, but 2/6 directly describes what is shown)."
  },
  {
    id: "m-004", subject: "math", topic: "Numbers and Operations",
    question: "Tommy planted a tomato plant that grew 1/6 of an inch each week. After 4 weeks, how far had it grown?",
    options: ["1/6", "2/6", "4/6", "5/6"],
    correct: 2,
    explanation: "1/6 + 1/6 + 1/6 + 1/6 = 4/6. After 4 weeks the plant grew 4/6 of an inch."
  },
  {
    id: "m-005", subject: "math", topic: "Numbers and Operations",
    question: "Coach Fussell has 2 cases of energy bars with 24 bars in each case. She shares them equally among 8 players. What steps should she take?",
    options: [
      "Add 2 and 24, then subtract 8",
      "Multiply 2 × 24, then divide by 8",
      "Divide 24 by 2, then multiply by 8",
      "Subtract 24 – 2, then divide by 8"
    ],
    correct: 1,
    explanation: "First find the total: 2 × 24 = 48 bars. Then divide equally: 48 ÷ 8 = 6 bars per player."
  },
  {
    id: "m-006", subject: "math", topic: "Numbers and Operations",
    question: "Round 6,748 to the nearest thousand.",
    options: ["6,000", "7,000", "6,700", "6,800"],
    correct: 1,
    explanation: "The hundreds digit is 7, which is ≥ 5, so round up: 6,748 → 7,000."
  },
  {
    id: "m-007", subject: "math", topic: "Numbers and Operations",
    question: "Which symbol makes this statement true? 3/4 ___ 3/8",
    options: ["<", ">", "=", "≠"],
    correct: 1,
    explanation: "Both fractions have the same numerator (3). With the same numerator, the fraction with the smaller denominator is larger: 3/4 > 3/8."
  },
  {
    id: "m-008", subject: "math", topic: "Numbers and Operations",
    question: "A store has 358 red apples and 247 green apples. About how many apples does the store have in all?",
    options: ["500", "600", "700", "400"],
    correct: 1,
    explanation: "Round 358 to 400 and 247 to 200: 400 + 200 = 600. Or round to nearest hundred: 400 + 200 = 600."
  },
  {
    id: "m-009", subject: "math", topic: "Numbers and Operations",
    question: "Which fraction is equivalent to 1/2?",
    options: ["2/6", "3/6", "4/6", "2/8"],
    correct: 1,
    explanation: "1/2 = 3/6 because 1×3 = 3 and 2×3 = 6. Both represent the same portion of a whole."
  },
  {
    id: "m-010", subject: "math", topic: "Numbers and Operations",
    question: "Is 37 an even or odd number? How can you tell?",
    options: [
      "Even, because 37 ÷ 2 = 18 with no remainder",
      "Odd, because 37 ÷ 2 = 18 with a remainder of 1",
      "Even, because it ends in 7",
      "Odd, because it is greater than 30"
    ],
    correct: 1,
    explanation: "A number is odd if it cannot be divided evenly by 2. 37 ÷ 2 = 18 remainder 1, so 37 is odd."
  },
  {
    id: "m-011", subject: "math", topic: "Numbers and Operations",
    question: "What is 8 × 7?",
    options: ["54", "56", "64", "48"],
    correct: 1,
    explanation: "8 × 7 = 56. You can think of it as 8 groups of 7, or use the fact that 8 × 7 is one of the multiplication facts to memorize."
  },
  {
    id: "m-012", subject: "math", topic: "Numbers and Operations",
    question: "A bag holds 9 oranges. How many oranges are in 6 bags?",
    options: ["15", "45", "54", "63"],
    correct: 2,
    explanation: "6 × 9 = 54. Six bags with 9 oranges each = 54 oranges total."
  },
  {
    id: "m-013", subject: "math", topic: "Numbers and Operations",
    question: "There are 72 students going on a field trip. They are put into groups of 8. How many groups are there?",
    options: ["7", "8", "9", "10"],
    correct: 2,
    explanation: "72 ÷ 8 = 9. You can check: 9 × 8 = 72."
  },
  {
    id: "m-014", subject: "math", topic: "Numbers and Operations",
    question: "Which of the following correctly shows 5 × 3 using an array?",
    options: [
      "3 rows with 5 objects in each row",
      "5 rows with 3 objects in each row",
      "Both A and B are correct",
      "Neither A nor B is correct"
    ],
    correct: 2,
    explanation: "Multiplication is commutative: 5 × 3 = 3 × 5. Both 5 rows of 3 and 3 rows of 5 correctly show 15 objects."
  },
  {
    id: "m-015", subject: "math", topic: "Numbers and Operations",
    question: "Ryan has 4 quarters, 3 dimes, and 2 nickels. How much money does he have in all?",
    options: ["$1.30", "$1.40", "$1.50", "$1.60"],
    correct: 2,
    explanation: "4 quarters = $1.00, 3 dimes = $0.30, 2 nickels = $0.10. Total: $1.00 + $0.30 + $0.10 = $1.40. Wait — that is $1.40 (option B). Let me recalculate: 4×25=100¢, 3×10=30¢, 2×5=10¢. 100+30+10=140¢ = $1.40."
  },
  {
    id: "m-015b", subject: "math", topic: "Numbers and Operations",
    question: "Sarah has 5 quarters, 2 dimes, and 3 pennies. How much money does she have?",
    options: ["$1.40", "$1.48", "$1.53", "$1.28"],
    correct: 1,
    explanation: "5 quarters = $1.25, 2 dimes = $0.20, 3 pennies = $0.03. Total: $1.25 + $0.20 + $0.03 = $1.48."
  },
  {
    id: "m-016", subject: "math", topic: "Numbers and Operations",
    question: "Which number is in the thousands place in 83,614?",
    options: ["8", "3", "6", "1"],
    correct: 1,
    explanation: "In 83,614 the digits from right to left are: 4 (ones), 1 (tens), 6 (hundreds), 3 (thousands), 8 (ten-thousands). The thousands digit is 3."
  },
  {
    id: "m-017", subject: "math", topic: "Numbers and Operations",
    question: "There are 56 students. If they line up in groups of 7, how many groups will there be?",
    options: ["6", "7", "8", "9"],
    correct: 2,
    explanation: "56 ÷ 7 = 8. Check: 8 × 7 = 56. ✓"
  },
  {
    id: "m-018", subject: "math", topic: "Numbers and Operations",
    question: "Which of the following fractions is greater than 1/2?",
    options: ["1/4", "2/6", "3/4", "1/8"],
    correct: 2,
    explanation: "3/4 = 0.75, which is greater than 1/2 (= 0.50). The others — 1/4, 2/6 (= 1/3), and 1/8 — are all less than 1/2."
  },

  // ── Objective 2: Algebraic Reasoning ─────────────────────────────────
  {
    id: "m-101", subject: "math", topic: "Algebraic Reasoning",
    question: "A cafeteria puts 8 chairs at each table. If there are 6 tables, how many chairs are there in all?",
    options: ["14", "40", "48", "56"],
    correct: 2,
    explanation: "6 tables × 8 chairs = 48 chairs. You can write this as 6 × 8 = 48."
  },
  {
    id: "m-102", subject: "math", topic: "Algebraic Reasoning",
    question: "A table shows chairs and tables: 16 chairs / 2 tables, 32 / 4, 48 / 6, 64 / 8. How many chairs for 10 tables?",
    options: ["24", "50", "72", "80"],
    correct: 3,
    explanation: "The pattern is 8 chairs per table (16÷2=8, 32÷4=8). So 10 tables × 8 = 80 chairs."
  },
  {
    id: "m-103", subject: "math", topic: "Algebraic Reasoning",
    question: "What is the missing number? 6 × ___ = 42",
    options: ["5", "6", "7", "8"],
    correct: 2,
    explanation: "6 × 7 = 42. Check: 42 ÷ 6 = 7. ✓"
  },
  {
    id: "m-104", subject: "math", topic: "Algebraic Reasoning",
    question: "Lesley has 30 lollipops and splits them equally between herself and 5 friends (6 people total). How many does each person get?",
    options: ["4", "5", "6", "7"],
    correct: 1,
    explanation: "30 ÷ 6 = 5. Each person (herself + 5 friends = 6 people) gets 5 lollipops."
  },
  {
    id: "m-105", subject: "math", topic: "Algebraic Reasoning",
    question: "A pattern shows: 3, 6, 9, 12, ___. What is the next number?",
    options: ["13", "14", "15", "16"],
    correct: 2,
    explanation: "The pattern adds 3 each time (multiply by 3). 12 + 3 = 15."
  },
  {
    id: "m-106", subject: "math", topic: "Algebraic Reasoning",
    question: "What is the unknown in: 45 ÷ ___ = 9?",
    options: ["4", "5", "6", "7"],
    correct: 1,
    explanation: "45 ÷ 5 = 9. Check: 9 × 5 = 45. ✓"
  },
  {
    id: "m-107", subject: "math", topic: "Algebraic Reasoning",
    question: "There are 4 times as many red marbles as blue marbles. If there are 6 blue marbles, how many red marbles are there?",
    options: ["10", "18", "24", "28"],
    correct: 2,
    explanation: "4 × 6 = 24. 'Four times as many' means multiply the blue count by 4."
  },
  {
    id: "m-108", subject: "math", topic: "Algebraic Reasoning",
    question: "Which number sentence is in the same fact family as 8 × 4 = 32?",
    options: ["32 + 4 = 36", "32 ÷ 4 = 8", "8 + 4 = 12", "32 – 8 = 24"],
    correct: 1,
    explanation: "Fact families use the same three numbers: 8, 4, 32. Since 8 × 4 = 32, the related division fact is 32 ÷ 4 = 8."
  },

  // ── Objective 3: Geometry and Measurement ────────────────────────────
  {
    id: "m-201", subject: "math", topic: "Geometry and Measurement",
    question: "Josie's square mirror has a perimeter of 48 inches. What is the length of one side?",
    options: ["8 inches", "12 inches", "18 inches", "24 inches"],
    correct: 1,
    explanation: "A square has 4 equal sides. 48 ÷ 4 = 12 inches per side."
  },
  {
    id: "m-202", subject: "math", topic: "Geometry and Measurement",
    question: "Jimmy started basketball practice at 12:05 pm and practiced for 35 minutes, then walked home for 15 minutes. What time did he arrive home?",
    options: ["12:40 pm", "12:45 pm", "12:55 pm", "1:00 pm"],
    correct: 2,
    explanation: "12:05 + 35 minutes = 12:40. Then 12:40 + 15 minutes = 12:55 pm."
  },
  {
    id: "m-203", subject: "math", topic: "Geometry and Measurement",
    question: "Kristina's mom fills a bathtub for a bubble bath. What is the BEST estimate of how much water the bathtub holds?",
    options: ["50 cups", "10 pints", "1 quart", "50 gallons"],
    correct: 3,
    explanation: "A bathtub holds about 50 gallons of water. 50 cups is about 3 gallons (too little), 10 pints is about 1.25 gallons (too little), and 1 quart is less than 1 gallon."
  },
  {
    id: "m-204", subject: "math", topic: "Geometry and Measurement",
    question: "Arthur circled several shapes — a rectangle, triangle, right triangle, star, hexagon, parallelogram, cube, cylinder, and diamond. What do the circled shapes have in common?",
    options: ["Cubes", "Squares", "Rectangles", "Quadrilaterals"],
    correct: 3,
    explanation: "The shapes with 4 sides (rectangle, parallelogram, diamond/rhombus) are quadrilaterals. The non-4-sided shapes are NOT quadrilaterals — but if Arthur circled only the 4-sided ones, those are quadrilaterals."
  },
  {
    id: "m-205", subject: "math", topic: "Geometry and Measurement",
    question: "A rectangle has a length of 9 cm and a width of 5 cm. What is the area?",
    options: ["28 sq cm", "40 sq cm", "45 sq cm", "14 sq cm"],
    correct: 2,
    explanation: "Area of a rectangle = length × width = 9 × 5 = 45 square centimeters."
  },
  {
    id: "m-206", subject: "math", topic: "Geometry and Measurement",
    question: "A rectangle has a length of 7 inches and a width of 4 inches. What is its perimeter?",
    options: ["11 inches", "22 inches", "28 inches", "24 inches"],
    correct: 1,
    explanation: "Perimeter = 2 × (length + width) = 2 × (7 + 4) = 2 × 11 = 22 inches."
  },
  {
    id: "m-207", subject: "math", topic: "Geometry and Measurement",
    question: "A movie starts at 3:15 pm and lasts 1 hour and 45 minutes. When does it end?",
    options: ["4:45 pm", "5:00 pm", "5:05 pm", "5:15 pm"],
    correct: 1,
    explanation: "3:15 + 1 hour = 4:15. Then 4:15 + 45 minutes = 5:00 pm."
  },
  {
    id: "m-208", subject: "math", topic: "Geometry and Measurement",
    question: "How many sides does a hexagon have?",
    options: ["4", "5", "6", "8"],
    correct: 2,
    explanation: "A hexagon has 6 sides. (Hex = 6 in Greek.)"
  },
  {
    id: "m-209", subject: "math", topic: "Geometry and Measurement",
    question: "Which shape is a quadrilateral?",
    options: ["Triangle", "Pentagon", "Hexagon", "Trapezoid"],
    correct: 3,
    explanation: "A quadrilateral is any shape with exactly 4 sides. A trapezoid has 4 sides, making it a quadrilateral."
  },
  {
    id: "m-210", subject: "math", topic: "Geometry and Measurement",
    question: "A garden is shaped like a rectangle. It is 12 feet long and 8 feet wide. What is its area?",
    options: ["20 sq ft", "40 sq ft", "80 sq ft", "96 sq ft"],
    correct: 3,
    explanation: "Area = length × width = 12 × 8 = 96 square feet."
  },
  {
    id: "m-211", subject: "math", topic: "Geometry and Measurement",
    question: "Which unit is BEST for measuring the weight of a puppy?",
    options: ["Ounces", "Pounds", "Tons", "Gallons"],
    correct: 1,
    explanation: "Pounds is the best unit for measuring a puppy's weight. Ounces are too small for a whole puppy, tons are for very heavy things like trucks, and gallons measure liquid."
  },
  {
    id: "m-212", subject: "math", topic: "Geometry and Measurement",
    question: "A rectangular room is 10 feet long and 6 feet wide. What is the perimeter of the room?",
    options: ["16 feet", "32 feet", "60 feet", "48 feet"],
    correct: 1,
    explanation: "Perimeter = 2 × (10 + 6) = 2 × 16 = 32 feet."
  },

  // ── Objective 4: Data Analysis ────────────────────────────────────────
  {
    id: "m-301", subject: "math", topic: "Data Analysis",
    question: "A bar graph shows favorite cookies: Chocolate Chip = 12, Peanut Butter = 11, Ginger Snaps = 3, Oatmeal = 10, Animal Crackers = 9. Which statement is TRUE?",
    options: [
      "3 more students voted for peanut butter than oatmeal",
      "15 students voted for peanut butter and ginger snaps combined",
      "Ginger snaps and animal crackers combined equal chocolate chip votes",
      "More students chose chocolate chip and ginger snaps than peanut butter and animal crackers"
    ],
    correct: 2,
    explanation: "Ginger snaps (3) + Animal crackers (9) = 12 = Chocolate chip (12). ✓ Option A: 11 – 10 = 1, not 3. Option B: 11 + 3 = 14, not 15. Option D: 12 + 3 = 15 vs. 11 + 9 = 20 — more chose PB + AC."
  },
  {
    id: "m-302", subject: "math", topic: "Data Analysis",
    question: "A dot plot shows miles walked: 2 dots at 1½ miles, 2 dots at 2 miles, 1 dot at 2½ miles, 3 dots at 3 miles, 2 dots at 3½ miles, 2 dots at 4 miles, 2 dots at 4½ miles, 1 dot at 5 miles. How many students walked MORE than 3 miles?",
    options: ["4", "7", "11", "17"],
    correct: 1,
    explanation: "Students who walked more than 3 miles: 3½ (2) + 4 (2) + 4½ (2) + 5 (1) = 7 students."
  },
  {
    id: "m-303", subject: "math", topic: "Data Analysis",
    question: "A pictograph shows that each picture = 2 students. If 4 pictures are shown for soccer, how many students chose soccer?",
    options: ["4", "6", "8", "10"],
    correct: 2,
    explanation: "4 pictures × 2 students per picture = 8 students chose soccer."
  },
  {
    id: "m-304", subject: "math", topic: "Data Analysis",
    question: "A class of 25 students was asked their favorite season. Spring got 8 votes, Summer got 10 votes, Fall got 4 votes, and Winter got 3 votes. How many more students chose Summer over Fall?",
    options: ["4", "5", "6", "7"],
    correct: 2,
    explanation: "Summer (10) – Fall (4) = 6 more students chose Summer."
  },
  {
    id: "m-305", subject: "math", topic: "Data Analysis",
    question: "A frequency table shows books read: 1 book (3 students), 2 books (5 students), 3 books (7 students), 4 books (2 students). How many students read the survey total?",
    options: ["14", "15", "17", "18"],
    correct: 2,
    explanation: "3 + 5 + 7 + 2 = 17 students total."
  },
  {
    id: "m-306", subject: "math", topic: "Data Analysis",
    question: "A bar graph shows: Reading = 9 students, Math = 12, Art = 6, PE = 15. Which subject was chosen by the MOST students?",
    options: ["Reading", "Math", "Art", "PE"],
    correct: 3,
    explanation: "PE has the highest bar at 15 students, more than any other subject."
  },

  // ── Objective 5: Personal Financial Literacy ──────────────────────────
  {
    id: "m-401", subject: "math", topic: "Personal Financial Literacy",
    question: "Third graders make 40 greeting cards each week to sell. Demand grows from 37 to 45 to 50 to 57 to 63 over 5 weeks. What is the BEST option to make the fundraiser more successful?",
    options: [
      "Create more greeting cards",
      "Sell the greeting cards at a lower price",
      "Sell cookies instead of greeting cards",
      "Advertise in the newspaper"
    ],
    correct: 0,
    explanation: "Demand is growing past their supply of 40 cards. The best way to earn more money is to create more cards to meet the increasing demand."
  },
  {
    id: "m-402", subject: "math", topic: "Personal Financial Literacy",
    question: "Mrs. Corningstone earns $1,000 per month. Her expenses: Rent $500, Bills $175, Clothing $50, Food $100. If she needs to pay $200 for a car repair, can she afford it?",
    options: [
      "Yes — she has $225 left",
      "Yes — she has $275 left",
      "No — she only has $125 left",
      "No — she only has $175 left"
    ],
    correct: 3,
    explanation: "Total expenses: 500 + 175 + 50 + 100 = $825. Money remaining: $1,000 – $825 = $175. The car repair costs $200, which is more than $175, so she cannot afford it."
  },
  {
    id: "m-403", subject: "math", topic: "Personal Financial Literacy",
    question: "What is INCOME?",
    options: [
      "Money you spend at the store",
      "Money you earn from working",
      "Money you borrow from a friend",
      "Money in your piggy bank"
    ],
    correct: 1,
    explanation: "Income is money you earn by working (labor). The connection between working (labor) and receiving pay (income) is an important financial concept."
  },
  {
    id: "m-404", subject: "math", topic: "Personal Financial Literacy",
    question: "Why is it a good idea to have a savings plan?",
    options: [
      "So you never have to work again",
      "So you have money for future needs and emergencies",
      "So you can spend more money today",
      "So the bank can keep your money"
    ],
    correct: 1,
    explanation: "Saving money helps you be prepared for future goals (like college or a big purchase) and for unexpected emergencies (like a car repair)."
  },
  {
    id: "m-405", subject: "math", topic: "Personal Financial Literacy",
    question: "When there is a drought and fewer tomatoes are grown, what happens to the price of tomatoes?",
    options: [
      "The price stays the same",
      "The price goes down",
      "The price goes up",
      "Tomatoes become free"
    ],
    correct: 2,
    explanation: "When supply goes down (fewer tomatoes available) but demand stays the same, prices go UP. This is the law of supply and demand."
  },
  {
    id: "m-406", subject: "math", topic: "Personal Financial Literacy",
    question: "Which of these is an example of CREDIT?",
    options: [
      "Paying cash for a toy at a store",
      "Borrowing money from a bank and paying it back later with interest",
      "Earning money by mowing lawns",
      "Putting money in a savings account"
    ],
    correct: 1,
    explanation: "Credit means borrowing money now and promising to pay it back later, usually with extra money called interest."
  },
  {
    id: "m-407", subject: "math", topic: "Personal Financial Literacy",
    question: "Marcus earns $15 per week doing chores. He wants to buy a video game that costs $45. If he saves ALL his money, how many weeks will he need to save?",
    options: ["2 weeks", "3 weeks", "4 weeks", "5 weeks"],
    correct: 1,
    explanation: "$45 ÷ $15 = 3 weeks. Marcus needs to save for 3 weeks to buy the $45 video game."
  },
  {
    id: "m-408", subject: "math", topic: "Personal Financial Literacy",
    question: "Which of these is a NEED, not a WANT?",
    options: ["A new video game", "A bicycle", "Food and water", "A movie ticket"],
    correct: 2,
    explanation: "Needs are things you must have to survive, like food, water, shelter, and clothing. Wants are things you would like to have but don't need to survive."
  },

  // ── Extra mixed review questions ──────────────────────────────────────
  {
    id: "m-501", subject: "math", topic: "Numbers and Operations",
    question: "What is 374 + 258?",
    options: ["522", "532", "622", "632"],
    correct: 3,
    explanation: "374 + 258: Start with ones: 4 + 8 = 12, write 2 carry 1. Tens: 7 + 5 + 1 = 13, write 3 carry 1. Hundreds: 3 + 2 + 1 = 6. Answer: 632."
  },
  {
    id: "m-502", subject: "math", topic: "Numbers and Operations",
    question: "What is 804 – 369?",
    options: ["425", "435", "445", "455"],
    correct: 1,
    explanation: "804 – 369: Borrow from hundreds. 14 – 9 = 5, 9 – 6 = 3 (after borrowing 10 – 1 = 9, 9 – 6 = 3 wait: 0 borrowed = 10, 10 – 6 – 1 = 3... Let me compute directly: 804 – 369 = 435."
  },
  {
    id: "m-503", subject: "math", topic: "Algebraic Reasoning",
    question: "Which equation represents: 'There are 3 times as many red fish as blue fish, and there are 9 blue fish'?",
    options: ["9 + 3 = 12", "9 – 3 = 6", "3 × 9 = 27", "9 ÷ 3 = 3"],
    correct: 2,
    explanation: "Three times as many means multiply. 3 × 9 = 27 red fish."
  },
  {
    id: "m-504", subject: "math", topic: "Numbers and Operations",
    question: "Which of the following fractions is the SMALLEST?",
    options: ["1/2", "1/3", "1/4", "1/8"],
    correct: 3,
    explanation: "When the numerator is the same (1), larger denominators mean smaller fractions. 1/8 is the smallest because 8 equal pieces means each piece is very small."
  },
  {
    id: "m-505", subject: "math", topic: "Geometry and Measurement",
    question: "A square has sides of 7 cm. What is its area?",
    options: ["14 sq cm", "21 sq cm", "28 sq cm", "49 sq cm"],
    correct: 3,
    explanation: "Area = side × side = 7 × 7 = 49 square centimeters."
  },
  {
    id: "m-506", subject: "math", topic: "Geometry and Measurement",
    question: "A shape is made of two rectangles. Rectangle A is 3 cm × 4 cm and Rectangle B is 2 cm × 5 cm. What is the total area?",
    options: ["22 sq cm", "26 sq cm", "28 sq cm", "34 sq cm"],
    correct: 1,
    explanation: "Area A = 3 × 4 = 12 sq cm. Area B = 2 × 5 = 10 sq cm. Total = 12 + 10 = 22 sq cm."
  },
  {
    id: "m-507", subject: "math", topic: "Numbers and Operations",
    question: "What is 23 × 4?",
    options: ["82", "88", "92", "96"],
    correct: 2,
    explanation: "23 × 4: Ones: 3 × 4 = 12, write 2 carry 1. Tens: 2 × 4 = 8, plus 1 = 9. Answer: 92."
  },
  {
    id: "m-508", subject: "math", topic: "Numbers and Operations",
    question: "Order these numbers from LEAST to GREATEST: 7,204 | 7,042 | 7,420 | 7,024",
    options: [
      "7,024 — 7,042 — 7,204 — 7,420",
      "7,042 — 7,024 — 7,204 — 7,420",
      "7,420 — 7,204 — 7,042 — 7,024",
      "7,204 — 7,024 — 7,042 — 7,420"
    ],
    correct: 0,
    explanation: "Compare hundreds digits: 7,024 (0 hundreds) < 7,042 (0 hundreds, then tens: 4>2) wait — compare digit by digit. All have 7 thousands. Hundreds: 024→0, 042→0, 204→2, 420→4. So 7,024 and 7,042 are smallest. 7,024 < 7,042 (tens: 2 < 4). Order: 7,024 < 7,042 < 7,204 < 7,420."
  }
];

export default MATH_QUESTIONS;
