// Science question bank — 3rd Grade TEKS CBE
// Topics: Scientific Practices, Matter & Energy, Force/Motion/Energy, Earth & Space, Organisms & Environment

const SCIENCE_QUESTIONS = [

  // ─── TOPIC 1: Scientific and Engineering Practices ───────────────────────

  {
    id: "sci-001",
    subject: "science",
    topic: "Scientific Practices",
    question: "Students build a model of a volcano out of clay and simulate an eruption with baking soda and vinegar. What is a limitation of this model?",
    options: [
      "The clay model is much smaller than a real volcano.",
      "Clay represents the materials most volcanoes are made of.",
      "The speed of the reaction is much slower than a real eruption.",
      "Real volcanoes are much more predictable than the baking soda reaction."
    ],
    correct: 0,
    explanation: "A major limitation of any model is its size — the clay volcano is much smaller than a real volcano. Models can't perfectly copy every feature of the real thing."
  },
  {
    id: "sci-002",
    subject: "science",
    topic: "Scientific Practices",
    question: "Sheila sets up an experiment to see if feeder color affects bird visits. Her pie chart shows: Red 48.7%, Yellow 23.7%, Green 13.2%, Blue 7.9%, Purple 6.6%. What valid conclusion can she make?",
    options: [
      "Birds appear to have no preference of color.",
      "If Sheila wants fewer birds, she should use a red feeder.",
      "Sheila should use green or blue because they get about the same number.",
      "To have the most birds visit, Sheila should use a red feeder."
    ],
    correct: 3,
    explanation: "The data clearly shows red feeders had the highest percentage (48.7%), so using a red feeder would attract the greatest number of birds."
  },
  {
    id: "sci-003",
    subject: "science",
    topic: "Scientific Practices",
    question: "A student wants to measure the length of a caterpillar accurately. Which tool should she use?",
    options: [
      "A thermometer",
      "A metric ruler",
      "A graduated cylinder",
      "A spring scale"
    ],
    correct: 1,
    explanation: "A metric ruler measures length. Thermometers measure temperature, graduated cylinders measure liquid volume, and spring scales measure force/weight."
  },
  {
    id: "sci-004",
    subject: "science",
    topic: "Scientific Practices",
    question: "Marcus runs the same experiment three times and gets slightly different results each time. What should he do?",
    options: [
      "Only record the result he likes best.",
      "Stop the experiment because the results don't match.",
      "Run the experiment more times to increase reliability.",
      "Change the experiment until all results are the same."
    ],
    correct: 2,
    explanation: "Repeated investigations increase the reliability of results. Running the experiment more times helps scientists be more confident in their conclusions."
  },
  {
    id: "sci-005",
    subject: "science",
    topic: "Scientific Practices",
    question: "A student collects data on how many hours of sunlight different plants received and how tall they grew. The best way to display this data for comparison is a —",
    options: [
      "paragraph of sentences",
      "bar graph",
      "comic strip",
      "drawing of the plants"
    ],
    correct: 1,
    explanation: "Bar graphs are great for comparing measured data across different categories or conditions, making patterns easy to see."
  },
  {
    id: "sci-006",
    subject: "science",
    topic: "Scientific Practices",
    question: "Which of the following is safe behavior during a science lab?",
    options: [
      "Tasting a mystery liquid to identify it",
      "Running to get supplies quickly",
      "Wearing safety goggles when using chemicals",
      "Leaving spills on the floor to clean up later"
    ],
    correct: 2,
    explanation: "Safety goggles protect your eyes from chemicals and splashes. You should never taste unknown substances, run in a lab, or leave spills unattended."
  },
  {
    id: "sci-007",
    subject: "science",
    topic: "Scientific Practices",
    question: "A cereal company claims their product gives kids 'unlimited energy.' A student wants to test this claim. What is the BEST way to evaluate it?",
    options: [
      "Believe it because it is on a food label.",
      "Ask a friend if it worked for them.",
      "Design an experiment to measure energy levels after eating the cereal.",
      "Look at the colorful pictures on the box."
    ],
    correct: 2,
    explanation: "Scientific claims should be tested with actual experiments using evidence. Personal opinions or advertisements alone are not valid scientific proof."
  },
  {
    id: "sci-008",
    subject: "science",
    topic: "Scientific Practices",
    question: "Which of the following tools would you use to measure the temperature of water?",
    options: [
      "A metric ruler",
      "A Celsius thermometer",
      "A spring scale",
      "A rain gauge"
    ],
    correct: 1,
    explanation: "A Celsius thermometer measures temperature in degrees Celsius, which is the metric unit for temperature."
  },
  {
    id: "sci-009",
    subject: "science",
    topic: "Scientific Practices",
    question: "A scientist notices that plants near a window grow taller than plants away from the window. She writes: 'Plants grow taller when they get more sunlight.' This statement is —",
    options: [
      "a hypothesis",
      "a conclusion based on observation",
      "a safety rule",
      "an opinion with no evidence"
    ],
    correct: 1,
    explanation: "The scientist observed a pattern and used it to draw a conclusion. A conclusion is a reasonable explanation supported by evidence from observations."
  },
  {
    id: "sci-010",
    subject: "science",
    topic: "Scientific Practices",
    question: "Why do scientists recycle materials like aluminum cans and plastic in their labs when possible?",
    options: [
      "Because recycled materials are always more accurate",
      "To make informed choices about conserving natural resources",
      "Because it is faster than ordering new materials",
      "To make the lab look neat and organized"
    ],
    correct: 1,
    explanation: "Scientists make informed choices about conserving natural resources. Recycling reduces waste and helps protect the environment."
  },

  // ─── TOPIC 2: Matter and Energy ──────────────────────────────────────────

  {
    id: "sci-011",
    subject: "science",
    topic: "Matter and Energy",
    question: "Darren heats water on a stove. As the water nears its boiling point, what will happen?",
    options: [
      "The liquid water will condense and turn into gaseous water vapor.",
      "The liquid water will evaporate and turn into gaseous water vapor.",
      "The gaseous water vapor will sublimate and turn into liquid water.",
      "The gaseous water vapor will condense and turn into solid ice."
    ],
    correct: 1,
    explanation: "When water is heated to its boiling point, it evaporates — changing from liquid to gas (water vapor). Condensation is the opposite (gas to liquid)."
  },
  {
    id: "sci-012",
    subject: "science",
    topic: "Matter and Energy",
    question: "Madeline wants to test objects for magnetism and whether they sink or float. What should she do?",
    options: [
      "Use a thermometer for magnetism; use a pan balance for floating.",
      "Use a hand lens for magnetism; use a computer for floating.",
      "Touch objects with a magnet for magnetism; place them in water for floating.",
      "Use a triple beam balance for magnetism; place them in vinegar for floating."
    ],
    correct: 2,
    explanation: "A magnet tests magnetism — objects either stick or they don't. Placing an object in water tests whether it sinks or floats."
  },
  {
    id: "sci-013",
    subject: "science",
    topic: "Matter and Energy",
    question: "Which of the following is an example of a solid?",
    options: [
      "Milk in a glass",
      "Steam from boiling water",
      "An ice cube",
      "Air inside a balloon"
    ],
    correct: 2,
    explanation: "An ice cube is a solid — it has a definite shape and does not change shape on its own. Milk is a liquid, steam is a gas, and air is a gas."
  },
  {
    id: "sci-014",
    subject: "science",
    topic: "Matter and Energy",
    question: "When you pour water from a round cup into a square container, what happens to the water?",
    options: [
      "The water stays in a round shape.",
      "The water becomes a solid.",
      "The water takes the shape of the square container.",
      "The water evaporates immediately."
    ],
    correct: 2,
    explanation: "Liquids take the shape of whatever container they are in. This is one of the key properties of liquids — they don't have a fixed shape."
  },
  {
    id: "sci-015",
    subject: "science",
    topic: "Matter and Energy",
    question: "You mix sand and gravel together in a bowl. What did you create?",
    options: [
      "A chemical reaction",
      "A mixture",
      "A solid",
      "A new material"
    ],
    correct: 1,
    explanation: "Mixing two materials together creates a mixture. The sand and gravel can still be separated — they haven't chemically changed."
  },
  {
    id: "sci-016",
    subject: "science",
    topic: "Matter and Energy",
    question: "What happens to an ice cube when you leave it on the counter on a warm day?",
    options: [
      "It stays a solid because it is frozen.",
      "It changes from a solid to a liquid because heat is added.",
      "It changes from a liquid to a gas immediately.",
      "It gets heavier as it melts."
    ],
    correct: 1,
    explanation: "Heating causes matter to change state. When ice (a solid) gains heat from the warm surroundings, it melts and becomes liquid water."
  },
  {
    id: "sci-017",
    subject: "science",
    topic: "Matter and Energy",
    question: "A balloon filled with air is put in a freezer. What would most likely happen?",
    options: [
      "The balloon gets bigger because cold air expands.",
      "The balloon stays exactly the same size.",
      "The balloon gets smaller because cold causes gases to take up less space.",
      "The balloon pops because of the cold."
    ],
    correct: 2,
    explanation: "Cold temperatures cause gases to contract (take up less space), so a balloon in a freezer shrinks. Warm temperatures cause gases to expand."
  },
  {
    id: "sci-018",
    subject: "science",
    topic: "Matter and Energy",
    question: "Which physical property can be measured using a pan balance?",
    options: [
      "Temperature",
      "Volume",
      "Mass",
      "Magnetism"
    ],
    correct: 2,
    explanation: "A pan balance measures mass — how much matter is in an object. Thermometers measure temperature, graduated cylinders measure volume, and magnets test magnetism."
  },
  {
    id: "sci-019",
    subject: "science",
    topic: "Matter and Energy",
    question: "Sofia separates metal paper clips from plastic paper clips using a magnet. This shows that magnetism is —",
    options: [
      "a form of energy",
      "a state of matter",
      "a physical property of matter",
      "a chemical reaction"
    ],
    correct: 2,
    explanation: "Magnetism is a physical property — a characteristic you can observe and measure without changing what the material is made of."
  },
  {
    id: "sci-020",
    subject: "science",
    topic: "Matter and Energy",
    question: "What state of matter does NOT have a definite shape or a definite volume?",
    options: [
      "Solid",
      "Liquid",
      "Gas",
      "Ice"
    ],
    correct: 2,
    explanation: "Gas has no definite shape and no definite volume — it spreads out to fill any container. Solids have definite shape and volume. Liquids have definite volume but no fixed shape."
  },

  // ─── TOPIC 3: Force, Motion, and Energy ──────────────────────────────────

  {
    id: "sci-021",
    subject: "science",
    topic: "Force, Motion, and Energy",
    question: "Troy plucks the strings of an acoustic guitar. What two forms of energy does he observe?",
    options: [
      "Thermal and sound energy",
      "Electrical and light energy",
      "Mechanical and sound energy",
      "Mechanical and light energy"
    ],
    correct: 2,
    explanation: "Plucking a string involves mechanical energy (movement) and produces sound energy (vibrations we hear). No electricity or light is involved."
  },
  {
    id: "sci-022",
    subject: "science",
    topic: "Force, Motion, and Energy",
    question: "Kyle plays a carnival game tossing a ball at cans. His second toss uses more force than his first. Which toss likely knocked down more cans?",
    options: [
      "The first toss, because less force knocks over more cans.",
      "The first toss, because more force makes cans more stable.",
      "The second toss, because more force will knock over more cans.",
      "The second toss, because pulling back farther gave Kyle better aim."
    ],
    correct: 2,
    explanation: "Greater force causes more motion and more work done. More force on the cans means more cans will be knocked down."
  },
  {
    id: "sci-023",
    subject: "science",
    topic: "Force, Motion, and Energy",
    question: "A child pushes a toy wagon across the floor. What type of energy does the moving wagon have?",
    options: [
      "Sound energy",
      "Light energy",
      "Thermal energy",
      "Mechanical energy"
    ],
    correct: 3,
    explanation: "Mechanical energy is the energy of motion (and position). Any moving object has mechanical energy."
  },
  {
    id: "sci-024",
    subject: "science",
    topic: "Force, Motion, and Energy",
    question: "A swing moves back and forth in a playground. What force pulls the swing back down after it swings up?",
    options: [
      "Magnetism",
      "Gravity",
      "Electricity",
      "Wind"
    ],
    correct: 1,
    explanation: "Gravity pulls objects toward Earth. After the swing rises, gravity pulls it back down — this is what makes it swing back and forth."
  },
  {
    id: "sci-025",
    subject: "science",
    topic: "Force, Motion, and Energy",
    question: "A student rubs their hands together quickly. Their hands feel warm. What type of energy was created?",
    options: [
      "Light energy",
      "Electrical energy",
      "Thermal (heat) energy",
      "Sound energy"
    ],
    correct: 2,
    explanation: "Friction from rubbing converts mechanical energy into thermal (heat) energy. That's why your hands feel warm when you rub them together."
  },
  {
    id: "sci-026",
    subject: "science",
    topic: "Force, Motion, and Energy",
    question: "Two bar magnets are pushed toward each other with their north poles facing. What will happen?",
    options: [
      "They will attract and stick together.",
      "They will repel and push away from each other.",
      "Nothing will happen.",
      "One magnet will lose its magnetism."
    ],
    correct: 1,
    explanation: "Like poles (north-north or south-south) of magnets repel each other. Opposite poles (north-south) attract each other."
  },
  {
    id: "sci-027",
    subject: "science",
    topic: "Force, Motion, and Energy",
    question: "Which example shows work being done by a push?",
    options: [
      "A book sitting still on a shelf",
      "A student pushing a door open",
      "A lamp turned on",
      "A plant growing toward sunlight"
    ],
    correct: 1,
    explanation: "Work is done when a force (push or pull) causes an object to move. Pushing a door open involves force and motion — that's work being done."
  },
  {
    id: "sci-028",
    subject: "science",
    topic: "Force, Motion, and Energy",
    question: "Light from the Sun reaches Earth. This is an example of what form of energy?",
    options: [
      "Sound energy",
      "Mechanical energy",
      "Light energy",
      "Chemical energy"
    ],
    correct: 2,
    explanation: "Sunlight is light energy — also called radiant energy. The Sun produces both light energy and heat/thermal energy that travel to Earth."
  },
  {
    id: "sci-029",
    subject: "science",
    topic: "Force, Motion, and Energy",
    question: "A heavier ball and a lighter ball are pushed with the same force. Which ball will move faster?",
    options: [
      "The heavier ball, because it has more mass.",
      "The lighter ball, because less mass means more speed from the same force.",
      "Both balls move at the same speed.",
      "Neither ball will move without a bigger push."
    ],
    correct: 1,
    explanation: "With the same force, a lighter object will accelerate more (move faster) than a heavier one. Less mass means more speed from the same push."
  },
  {
    id: "sci-030",
    subject: "science",
    topic: "Force, Motion, and Energy",
    question: "When you drop a ball, it falls to the ground. What force causes this?",
    options: [
      "Magnetism",
      "Friction",
      "Gravity",
      "Electricity"
    ],
    correct: 2,
    explanation: "Gravity is the force that pulls objects toward Earth. When you drop a ball, gravity pulls it downward to the ground."
  },

  // ─── TOPIC 4: Earth and Space ─────────────────────────────────────────────

  {
    id: "sci-031",
    subject: "science",
    topic: "Earth and Space",
    question: "Which statement about the planets in our solar system is true?",
    options: [
      "Pluto is farthest from the Sun and Venus is closest.",
      "Mars is farthest from the Sun and Jupiter is closest.",
      "Pluto is closest to the Sun and Neptune is farthest away.",
      "Mercury is closest to the Sun and Neptune is farthest away."
    ],
    correct: 3,
    explanation: "Mercury is the planet closest to the Sun, and Neptune is the farthest planet. The order is: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune."
  },
  {
    id: "sci-032",
    subject: "science",
    topic: "Earth and Space",
    question: "A bar graph shows January and July temperatures for two cities. Tokyo, Japan is slightly cooler than Waycross, Georgia in both months. What can you conclude?",
    options: [
      "Tokyo, Japan is slightly cooler than Waycross, Georgia.",
      "Tokyo, Japan is slightly warmer than Waycross, Georgia.",
      "It only snows in Tokyo and not in Waycross.",
      "The data does not allow comparison of the two cities."
    ],
    correct: 0,
    explanation: "By comparing the bar heights for each city, you can see that Waycross, Georgia has higher temperatures than Tokyo, Japan in both January and July — so Tokyo is slightly cooler."
  },
  {
    id: "sci-033",
    subject: "science",
    topic: "Earth and Space",
    question: "The Sun is best described as —",
    options: [
      "a planet made of rock",
      "a star composed of gases that provides light and heat energy",
      "a moon that orbits Earth",
      "a cold object far away in space"
    ],
    correct: 1,
    explanation: "The Sun is a star — a giant ball of hot gases (mostly hydrogen and helium) that produces light and heat energy. It is the center of our solar system."
  },
  {
    id: "sci-034",
    subject: "science",
    topic: "Earth and Space",
    question: "Heavy rains cause loose soil on a hillside to slide down. This rapid change to Earth's surface is called a —",
    options: [
      "volcano",
      "earthquake",
      "landslide",
      "tornado"
    ],
    correct: 2,
    explanation: "A landslide is a rapid movement of rock, soil, and debris down a slope, often triggered by heavy rain or earthquakes."
  },
  {
    id: "sci-035",
    subject: "science",
    topic: "Earth and Space",
    question: "How is soil formed over a very long time?",
    options: [
      "By mixing sand with water",
      "By weathering of rock and the decomposition of plant and animal remains",
      "By volcanoes erupting and cooling",
      "By rivers carving valleys"
    ],
    correct: 1,
    explanation: "Soil forms when rocks are broken down by weathering (wind, water, freezing) and when dead plants and animals decompose and mix with the rock particles."
  },
  {
    id: "sci-036",
    subject: "science",
    topic: "Earth and Space",
    question: "Which best describes how the Moon moves in relation to Earth?",
    options: [
      "The Moon stays still while Earth orbits around it.",
      "The Moon orbits (travels around) Earth.",
      "The Moon orbits the Sun directly.",
      "The Moon and Earth orbit each other equally."
    ],
    correct: 1,
    explanation: "The Moon orbits Earth, taking about 27–29 days to complete one orbit. Meanwhile, Earth orbits the Sun, taking about 365 days (one year)."
  },
  {
    id: "sci-037",
    subject: "science",
    topic: "Earth and Space",
    question: "Which natural resource is used to make wooden furniture?",
    options: [
      "Coal",
      "Water",
      "Trees (wood)",
      "Iron ore"
    ],
    correct: 2,
    explanation: "Wood comes from trees, which are a natural resource. Wood is used to make furniture, paper, and many other products."
  },
  {
    id: "sci-038",
    subject: "science",
    topic: "Earth and Space",
    question: "To measure how much rain fell during a storm, a scientist would use a —",
    options: [
      "thermometer",
      "wind vane",
      "compass",
      "rain gauge"
    ],
    correct: 3,
    explanation: "A rain gauge collects and measures the amount of precipitation (rain) that falls. A wind vane shows wind direction, and a thermometer measures temperature."
  },
  {
    id: "sci-039",
    subject: "science",
    topic: "Earth and Space",
    question: "Mountains, hills, valleys, and plains are all types of —",
    options: [
      "weather patterns",
      "natural resources",
      "landforms",
      "planets"
    ],
    correct: 2,
    explanation: "Landforms are the physical features of Earth's surface. Mountains, hills, valleys, and plains are all different types of landforms."
  },
  {
    id: "sci-040",
    subject: "science",
    topic: "Earth and Space",
    question: "The water cycle is powered by energy from which source?",
    options: [
      "The Moon",
      "The Sun",
      "Wind",
      "Volcanoes"
    ],
    correct: 1,
    explanation: "The Sun's heat energy powers the water cycle. It causes evaporation (liquid water turns to water vapor), which then rises, cools, condenses into clouds, and falls as precipitation."
  },

  // ─── TOPIC 5: Organisms and Environment ──────────────────────────────────

  {
    id: "sci-041",
    subject: "science",
    topic: "Organisms and Environment",
    question: "During a flood, fire ants form a floating island. When the flood waters recede, what will most likely have happened to the fire ants?",
    options: [
      "The ants will have moved to a new location.",
      "The ants will have built a bridge over the flood waters.",
      "The ants will take on a new role as producers in the food web.",
      "The ants will have died because they left their ecosystem."
    ],
    correct: 0,
    explanation: "When environmental conditions change (like flooding), some organisms move to new locations to survive. The fire ants use their floating island to drift to new ground."
  },
  {
    id: "sci-042",
    subject: "science",
    topic: "Organisms and Environment",
    question: "Poison dart frogs have bright colors and poisonous skin. How does this help them survive?",
    options: [
      "The frog injects colored poison into predators to keep itself alive.",
      "The frog's bright coloring warns predators that its skin is poisonous.",
      "The frog is endangered because its bright color attracts predators.",
      "The frog uses bright colors to blend in and uses a poisonous tongue."
    ],
    correct: 1,
    explanation: "Bright colors are a warning signal (called aposematism). Predators learn to avoid the frog because its colors signal danger — a survival adaptation."
  },
  {
    id: "sci-043",
    subject: "science",
    topic: "Organisms and Environment",
    question: "How is the life cycle of a chicken similar to the life cycle of a sea turtle?",
    options: [
      "The turtle has four stages; the chicken has only three.",
      "Both animals' eggs metamorphose from larva to pupa.",
      "Both animals lay eggs that hatch after a specific period of time.",
      "There are no similarities between them."
    ],
    correct: 2,
    explanation: "Both chickens and sea turtles reproduce by laying eggs that hatch after an incubation period. This is a key similarity in their life cycles."
  },
  {
    id: "sci-044",
    subject: "science",
    topic: "Organisms and Environment",
    question: "In a pond food chain: algae → tadpoles → frogs → herons. If all the frogs were removed, what would most likely happen?",
    options: [
      "The tadpole population would decrease.",
      "The heron population would increase.",
      "The tadpole population would increase and heron population would decrease.",
      "Nothing would change."
    ],
    correct: 2,
    explanation: "Removing frogs means tadpoles have fewer predators, so the tadpole population grows. Herons lose their food source, so the heron population decreases."
  },
  {
    id: "sci-045",
    subject: "science",
    topic: "Organisms and Environment",
    question: "Which characteristic of a polar bear is INHERITED, not learned?",
    options: [
      "How to hunt seals by waiting at breathing holes",
      "Which areas of ice to avoid",
      "Having thick white fur to stay warm and blend in",
      "Which other polar bears to trust"
    ],
    correct: 2,
    explanation: "Thick white fur is an inherited trait — polar bears are born with it. Hunting techniques and learning which areas are safe are learned behaviors."
  },
  {
    id: "sci-046",
    subject: "science",
    topic: "Organisms and Environment",
    question: "A caterpillar changes into a butterfly. This is an example of —",
    options: [
      "hibernation",
      "metamorphosis",
      "migration",
      "photosynthesis"
    ],
    correct: 1,
    explanation: "Metamorphosis is a series of dramatic changes in an organism's body during its life cycle. Butterflies go through complete metamorphosis: egg → caterpillar (larva) → chrysalis (pupa) → butterfly (adult)."
  },
  {
    id: "sci-047",
    subject: "science",
    topic: "Organisms and Environment",
    question: "In a food chain, plants are called producers because they —",
    options: [
      "eat other organisms to get energy",
      "use sunlight to make their own food",
      "decompose dead organisms",
      "hunt other animals for food"
    ],
    correct: 1,
    explanation: "Plants are producers because they use sunlight, water, and carbon dioxide to make their own food through photosynthesis. All other organisms in the food chain depend on this energy."
  },
  {
    id: "sci-048",
    subject: "science",
    topic: "Organisms and Environment",
    question: "A long drought hits a forest. Which organisms would most likely thrive?",
    options: [
      "Fish and frogs that need water",
      "Plants that need a lot of rain",
      "Cactus-like plants that store water",
      "Animals that only drink from rivers"
    ],
    correct: 2,
    explanation: "During a drought, organisms adapted to dry conditions thrive. Plants that store water (like succulents and cacti) are better suited to survive without much rain."
  },
  {
    id: "sci-049",
    subject: "science",
    topic: "Organisms and Environment",
    question: "A duck has webbed feet. How does this help it survive?",
    options: [
      "Webbed feet help the duck climb trees.",
      "Webbed feet help the duck swim and move through water.",
      "Webbed feet help the duck fly faster.",
      "Webbed feet help the duck stay warm in winter."
    ],
    correct: 1,
    explanation: "Webbed feet are an adaptation for life in water — they act like paddles to push against the water and help the duck swim efficiently."
  },
  {
    id: "sci-050",
    subject: "science",
    topic: "Organisms and Environment",
    question: "Which sequence correctly shows the life cycle of a frog?",
    options: [
      "Egg → Adult → Tadpole → Froglet",
      "Tadpole → Egg → Froglet → Adult",
      "Egg → Tadpole → Froglet → Adult",
      "Adult → Froglet → Egg → Tadpole"
    ],
    correct: 2,
    explanation: "Frogs go through metamorphosis: eggs hatch into tadpoles (which live in water and have tails), tadpoles grow legs and become froglets, then froglets become adult frogs."
  },
  {
    id: "sci-051",
    subject: "science",
    topic: "Organisms and Environment",
    question: "A tomato plant goes through which sequence of life stages?",
    options: [
      "Seed → Seedling → Adult plant → Flowers → Fruit with seeds",
      "Fruit → Seed → Seedling → Larva → Adult plant",
      "Seedling → Seed → Flower → Fruit",
      "Flower → Seed → Fruit → Adult plant"
    ],
    correct: 0,
    explanation: "Tomato plants begin as seeds, sprout into seedlings, grow into adult plants, produce flowers that are pollinated, and then develop fruit containing seeds for the next generation."
  },
  {
    id: "sci-052",
    subject: "science",
    topic: "Organisms and Environment",
    question: "What role do decomposers like worms and fungi play in an ecosystem?",
    options: [
      "They hunt and eat other animals.",
      "They use sunlight to make food.",
      "They break down dead organisms and return nutrients to the soil.",
      "They compete with plants for sunlight."
    ],
    correct: 2,
    explanation: "Decomposers break down dead plants and animals into simpler materials, returning important nutrients to the soil. This keeps the ecosystem healthy and cycling."
  },
  {
    id: "sci-053",
    subject: "science",
    topic: "Organisms and Environment",
    question: "Which of the following is a learned behavior in animals?",
    options: [
      "A dog having four legs",
      "A bird having feathers",
      "A dog learning to sit on command",
      "A cat having sharp claws"
    ],
    correct: 2,
    explanation: "Learned behaviors are developed through experience and practice, not inherited. A dog learning to sit on command is taught — it isn't born knowing how to do that."
  },
  {
    id: "sci-054",
    subject: "science",
    topic: "Organisms and Environment",
    question: "In which environment would you most likely find a cactus thriving?",
    options: [
      "A tropical rainforest",
      "The bottom of the ocean",
      "A hot, dry desert",
      "A cold, snowy mountain"
    ],
    correct: 2,
    explanation: "Cacti are adapted to hot, dry deserts — they store water in their thick stems and have spines instead of leaves to reduce water loss."
  },
  {
    id: "sci-055",
    subject: "science",
    topic: "Organisms and Environment",
    question: "A community is made up of —",
    options: [
      "only the plants in one area",
      "all living organisms of the same species in an area",
      "all different populations of living organisms in an area",
      "the nonliving parts of an environment"
    ],
    correct: 2,
    explanation: "A community includes all the different populations (groups of different species) living together in the same area. An ecosystem includes the community plus the nonliving environment."
  },
  {
    id: "sci-056",
    subject: "science",
    topic: "Scientific Practices",
    question: "A student wants to build a model of the Sun-Earth-Moon system. What is one limitation of any model of this system?",
    options: [
      "Models cannot show that the Earth is round.",
      "Models are always the exact same size as the real thing.",
      "The model cannot be exactly the same size as the real Sun, Earth, and Moon.",
      "Models never help scientists understand real systems."
    ],
    correct: 2,
    explanation: "A key limitation of scale models is size — the actual Sun, Earth, and Moon are enormous objects separated by vast distances that cannot be accurately reproduced in a classroom model."
  },
  {
    id: "sci-057",
    subject: "science",
    topic: "Matter and Energy",
    question: "Which of the following is NOT a physical property of matter?",
    options: [
      "Color",
      "Mass",
      "Temperature",
      "The ability to rust"
    ],
    correct: 3,
    explanation: "Rusting is a chemical change (iron reacts with oxygen), not a physical property. Color, mass, and temperature are all physical properties you can observe and measure."
  },
  {
    id: "sci-058",
    subject: "science",
    topic: "Earth and Space",
    question: "What causes day and night on Earth?",
    options: [
      "The Moon blocking sunlight",
      "Earth orbiting around the Sun",
      "Earth rotating (spinning) on its axis",
      "The Sun moving around Earth"
    ],
    correct: 2,
    explanation: "Earth rotates on its axis once every 24 hours. The side facing the Sun has day; the side facing away has night."
  },

];

export default SCIENCE_QUESTIONS;
