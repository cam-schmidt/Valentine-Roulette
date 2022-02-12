

(function() {
  const wheel = document.querySelector(".wheel");
  const marker = document.querySelector(".marker");
  const spinButton = document.querySelector(".spin-button");
  const display = document.querySelector(".display");
  const playButton = document.querySelector(".play-button");
  const title = document.querySelector(".title");
  const textBox = document.querySelector(".text-box");
  const infoButton = document.querySelector(".info");
  const heart = document.querySelector(".heart");


  let deg = 0;
  // The 360 degree wheel has 8 zones, so each zone is 45 degrees
  let zoneSize = 45;

//question categories and questions
  const interests = [
    "If you could only have three things on your life bucket list, what would they be?",
    "If you could only eat one thing for the rest of your life, what would it be?",
    "Where do you want to travel the most?",
    "What was the last TV show you binge-watched?",
    "What’s your favorite quote from a TV show/movie/book?",
    "What is your biggest pet peeve?",
    "What’s your favorite content genre (horror, sci-fi, rom-com, etc.)? Why do you think that is?",
    "What have you only recently formed an opinion about?",
    "What could you give a 40-minute presentation on with absolutely no preparation?",
    "What piece of entertainment do you wish you could erase from your mind so that you could experience it for the first time again?"
];

  const career = [
    "Would you like to be famous? In what way?",
    "Where do you hope to be five years from now?",
    "What’s the career highlight you’re most proud of?",
    "What’s the worst job you’ve ever had?",
    "Have you ever had a side hustle or considered having one?",
    "What's one work-related thing you want to accomplish in the next year?",
    "If you could do it all over again, would you pursue the same career? Why or why not?",
    "What was your dream job as a child?",
    "Does your job make you feel happy and fulfilled? Why or why not?",
    "What originally got you interested in your current field of work?"
  ];

  const family = [
    "If you could change anything about the way you were raised, what would it be?",
    "How close and warm is your family? Do you feel your childhood was happier than most other people's?",
    "How do you feel about your relationship with your mother?",
    "Out of all your family members, who are you closest to?",
    "Do you want to have kids one day? How many?",
    "What TV family most reminds you of your own?",
    "What’s the best piece of advice a family member has given you?",
    "Do you wish you had more siblings? If so, why?",
    "Do you have any family-given nicknames? If so, what are they?",
    `Who in your family would you describe as a "character"?`
  ];

  const values = [
    "What do you value most in a friendship?",
    "What does friendship mean to you?",
    "Who do you look up to the most, and what qualities do you love about that person?",
    "What is your definition of success?",
    `Are you more of a "work to live" or a "live to work" type of person?`,
    "What do you think makes someone a “good person”?",
    "Do you believe in soulmates? Why or why not?",
    "What life lessons have you had to learn the hard way?",
    "Would you rather make more money doing a job you hate or less doing one you love?",
    "What’s the first thing you look for in a partner and/or friend?"
  ];

  const dreams = [
    "If you choose to get married one day, what would your dream proposal scenario be?",
    "What would your dream home look like?",
    "If money was no object, what would you buy?",
    "If you had three wishes, what would you wish for?",
    "If you had to live in another time period, what would you choose?",
    "If you had unlimited money to start your own business, what would it be?",
    "If you could live anywhere in the world, where would it be?",
    "What's your dream car?",
    "If you could have any superpower, what would it be?",
    "If you had a clock that would countdown to any one event of your choosing, what event would you want it to countdown to?"
  ];

  const unconventional = [
    "Given the choice of anyone in the world, who would you want as a dinner guest?",
    "If you were able to live to the age of 90 and retain either the mind or body of a 30-year old for the last 60 years of your life, which would you choose?",
    "Do you have a secret hunch about how you will die?",
    "If you could wake up tomorrow having gained one quality or ability, what would it be?",
    "If a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know?",
    "Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be? Why?",
    "Before making a phone call, do you ever rehearse what you're going to say? Why?",
    "What’s your game plan in a zombie apocalypse?",
    "What age do you wish you could permanently be? Why?",
    "If you could make a 20-second phone call to yourself at any point in your life present or future, when would you call and what would you say?"

  ];

  const personal = [
    "What is your love language?",
    "If you were going to get a tattoo, what would you get and why?",
    "What would constitute a perfect day for you?",
    "When did you last sing to yourself? To someone else?",
    "For what in your life do you feel most grateful?",
    "If you knew that in one year you would die suddenly, would you change anything about the way you are now living? Why?",
    "What’s your biggest fear?",
    "If you could change one thing about yourself, what would it be?",
    "Do you feel that you’re young at heart, or an old soul?",
    "Which fictional character do you relate to most?"
  ];

  const memories = [
    "What is the greatest accomplishment of your life?",
    "What is your most treasured memory?",
    "What is your most terrible memory?",
    "When have you felt the most proud?",
    "When have you felt the most challenged?",
    "What's the best present you ever received? Who gave it to you and why was it so special?",
    "What's your earliest childhood memory?",
    "What’s been your most questionable haircut and/or fashion moment?",
    "What’s the worst gift you’ve ever received? How did you react?",
    "What’s the best concert you ever attended?"
  ];


  const symbolZones = [];

// display a question from the winning category
  const handleWin = (actualDeg) => {
    // zones for each 8 categories
    symbolZones[1] = interests[Math.floor(Math.random()*interests.length)];
    symbolZones[2] = career[Math.floor(Math.random()*career.length)];
    symbolZones[3] = family[Math.floor(Math.random()*family.length)];
    symbolZones[4] = values[Math.floor(Math.random()*values.length)];
    symbolZones[5] = dreams[Math.floor(Math.random()*dreams.length)];
    symbolZones[6] = unconventional[Math.floor(Math.random()*unconventional.length)];
    symbolZones[7] = personal[Math.floor(Math.random()*personal.length)];
    symbolZones[8] = memories[Math.floor(Math.random()*memories.length)];

    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    //change innerHTML to question
    display.innerHTML = symbolZones[winningSymbolNr];
  }

playButton.addEventListener('click', () => {
  // hide title, play button, text box, and infoButton
  playButton.style.display = "none";
  title.style.display = "none";
  infoButton.style.display = "none";
  textBox.style.display = "none";
  heart.style.display = "none";
  // fade in wheel, marker, and spin button
  wheel.style.animation = "fadein 2s";
  marker.style.animation = "fadein 2s";
  spinButton.style.animation = "fadein 2s";
  // display wheel, marker, and spin button
  wheel.style.display = "block";
  marker.style.display = "block";
  spinButton.style.display = "block";
})

//when info button is clicked, toggle display textbox with information
infoButton.addEventListener('click', () => {
    textBox.classList.toggle('show')
})


  spinButton.addEventListener('click', () => {
    //Reset display
    display.innerHTML = "";
    display.style.display = "none"
    // Disable button while wheel is spinning
    spinButton.style.pointerEvents = 'none';
    //Calculate a new rotation between 5000 and 10,000
    deg = Math.floor(5000 + Math.random() * 5000);
    //Set the transition on the wheel
    wheel.style.transition = 'all 5s ease-out';
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    //Apply the blur effect
    wheel.classList.add('blur');
  });

  wheel.addEventListener('transitionend', () => {
    //Remove the blur effect
    wheel.classList.remove('blur');
    //Re-enable button when spin is over
    spinButton.style.pointerEvents = 'auto';
    //Set transiiton to none to rotate instantly
    wheel.style.transition = 'none';
    //Calculate degree on a 360 degree rotation to get the natural rotation
    const actualDeg = deg % 360;
    //Set real rotation instantly without applying animation effect
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    //Calculate and display winning symbol
    handleWin(actualDeg);
    // unhide a div that displays the result
    display.style.display = "table-cell"

  });
})();
