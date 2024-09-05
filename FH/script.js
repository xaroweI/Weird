const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const initialAButton = document.getElementById('initialA');
const initialBButton = document.getElementById('initialB');
const initialCButton = document.getElementById('initialC');
const words = ["Yes", "Absolutely", "I'd love to", "I love you", "I'm in", "You're lovely", "Why not", "i'm obsessed with you"];
const word = ["yeah nah retry", "not aproved", "retry", "wrong", "it's the button on the left", "oh come on please", "bruh ik you do", "denial", "COME ON", "MUST BE a misslick"];
let firstClick = true;

wrapper.addEventListener("mousemove", (event) => {
  if (firstClick==false){
  const noBtnRect = noBtn.getBoundingClientRect(); // where no button ? now i get
  const mouseX = event.clientX; // mouse x
  const mouseY = event.clientY; // f(x) i fr gotta stop doing meth

  
  const noBtnCenterX = noBtnRect.left + noBtnRect.width / 2;
  const noBtnCenterY = noBtnRect.top + noBtnRect.height / 2;

  // pythagore would be proud 
  const distance = calculateDistance(mouseX, mouseY, noBtnCenterX, noBtnCenterY);

  
  const maxDistance = 300; // idk man 300 sounds funny 
  const normalizedDistance = Math.min(distance / maxDistance, 1);

  // the closer u to no the more red it be
  const initialColor = [255, 255, 255]; 
  const targetColor = [255, 0, 0];
  const newColor = initialColor.map((val, index) => 
    val + (targetColor[index] - val) * (1 - normalizedDistance) 
  );

  document.body.style.backgroundColor = `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`;
}
});https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif

function calculateDistance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
function explodeButtons() {
  document.querySelectorAll(".yes-btn, .no-btn").forEach(button => {
    button.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
    button.style.transform = "translateY(500px)";
    button.style.opacity = "0";
  });
  setTimeout(() => {
    document.querySelectorAll(".yes-btn, .no-btn").forEach(button => button.remove());
  }, 1000);
}


question.innerHTML = "Who are you?";
gif.style.opacity = "0";
yesBtn.style.opacity = "0";
noBtn.style.opacity = "0";


function animateInitialA() {
  setTimeout(() => {
    question.style.transition = "opacity 1s ease-in-out";
    gif.style.transition = "opacity 1s ease-in-out";
    yesBtn.style.transition = "opacity 1s ease-in-out";
    noBtn.style.transition = "opacity 1s ease-in-out";
    question.style.opacity = "1";
    gif.style.opacity = "1";
    yesBtn.style.opacity = "1";
    noBtn.style.opacity = "0";
    initialAButton.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
    initialAButton.style.transform = "translateY(500px)";
    initialAButton.style.opacity = "0";
    initialBButton.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
    initialBButton.style.transform = "translateY(500px)";
    initialBButton.style.opacity = "0";
    initialCButton.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
    initialCButton.style.transform = "translateY(500px)";
    initialCButton.style.opacity = "0";
    question.innerHTML = "will you be my gf";
  }, 100);
}


initialCButton.addEventListener("click", () => {
  explodeButtons();
  question.style.opacity = "0";
});

function vibrateInitialB() {
  initialBButton.style.transition = "transform 0.1s ease-in-out";
  initialBButton.style.transform = "translateX(-5px)";
  setTimeout(() => {
    initialBButton.style.transform = "translateX(5px)";
    setTimeout(() => {
      initialBButton.style.transform = "translateX(0)";
    }, 100);
  }, 100);
}

initialAButton.addEventListener("click", () => {
  animateInitialA();
});

initialBButton.addEventListener("click", () => {
  vibrateInitialB();
});

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function createClones() {
  const cloneCount = 4;
  const rand = Math.random();
  const randi = Math.random();

  for (let i = 0; i < cloneCount; i++) {
    const cloneBtn = yesBtn.cloneNode(true);
    cloneBtn.innerText = getRandomWord();
    cloneBtn.classList.add("yes-btn"); 
    cloneBtn.style.position = "absolute";
    cloneBtn.style.left = `${noBtn.offsetLeft}px`; 
    cloneBtn.style.top = `${noBtn.offsetTop}px`;
    cloneBtn.style.opacity = "1"; 

    cloneBtn.addEventListener("click", () => {
      gif.src = "https://media.giphy.com/media/In5Ij0yP0uBEfwU3qF/giphy.gif";
      question.innerHTML = "this was 100% consensual";
      explodeButtons();
    });

    wrapper.appendChild(cloneBtn);

    setTimeout(() => {
      const angle = Math.random() * Math.PI * 2; 
      const distance = Math.random() * 150 + 100; 
      const deltaX = Math.cos(angle) * distance;
      const deltaY = Math.sin(angle) * distance;
      const duration = Math.random() * 1000 + 1000; 
      cloneBtn.style.transition = `transform ${duration}ms ease-out`;
      cloneBtn.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }, 10);
  }

  if (rand < 0.05) {
    const neoBtn = yesBtn.cloneNode(true);
    neoBtn.innerText = "No Ew";
    neoBtn.classList.add("no-btn");
    neoBtn.style.position = "absolute";
    neoBtn.style.left = `${noBtn.offsetLeft}px`;
    neoBtn.style.top = `${noBtn.offsetTop}px`;
    neoBtn.style.background = "green"; 
    neoBtn.addEventListener("click", () => {
      explodeButtons();
    });
    wrapper.appendChild(neoBtn);
    neoBtn.addEventListener("click", () => {
      gif.src = "https://media.giphy.com/media/VB3cK9oA48BbQWcObd/giphy.gif";
      question.innerHTML = "but why";
      explodeButtons();
    });

    setTimeout(() => {
      const angle = Math.random() * Math.PI * 2; 
      const distance = Math.random() * 150 + 100; 
      const deltaX = Math.cos(angle) * distance;
      const deltaY = Math.sin(angle) * distance;
      const duration = Math.random() * 1000 + 1000; 
      neoBtn.style.transition = `transform ${duration}ms ease-out, opacity 1s ease-in-out`;
      neoBtn.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }, 10);
  }
  if (randi < 0.05) {
    const neBtn = yesBtn.cloneNode(true);
    neBtn.innerText =  getRandomWord();
    neBtn.classList.add("no-btn");
    neBtn.style.position = "absolute";
    neBtn.style.left = `${noBtn.offsetLeft}px`;
    neBtn.style.top = `${noBtn.offsetTop}px`;
    neBtn.style.background = "blue"; 
    neBtn.addEventListener("click", () => {
      explodeButtons();
    });
    wrapper.appendChild(neBtn);
    neBtn.addEventListener("click", () => {
      gif.src = "https://media.giphy.com/media/yNvmkSbnamOXEfnYxY/giphy.gif";
      question.innerHTML = " did you just click cuz it was blue ? ";
      explodeButtons();
    });

    setTimeout(() => {
      const angle = Math.random() * Math.PI * 2; 
      const distance = Math.random() * 150 + 100; 
      const deltaX = Math.cos(angle) * distance;
      const deltaY = Math.sin(angle) * distance;
      const duration = Math.random() * 1000 + 1000; 
      neBtn.style.transition = `transform ${duration}ms ease-out, opacity 1s ease-in-out`;
      neBtn.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }, 10);
  }
}

function vibrateGif() {
  gif.style.transition = "transform 0.1s ease-in-out";
  gif.style.transform = "translateX(-20px)";
  setTimeout(() => {
    gif.style.transform = "translateX(20px)"; 
    setTimeout(() => {
      gif.style.transform = "translateX(0)"; 
    }, 100);
  }, 100);
}

function yesBtnFirstClick() {
  question.innerHTML = "jk! i value your opinion"; 
  noBtn.style.opacity = "1"; 
  firstClick=false;
  yesBtn.removeEventListener("click", yesBtnFirstClick); 
  yesBtn.addEventListener("click", yesBtnOriginalClick); 
}
function yesBtnOriginalClick() {
  explodeButtons();
  gif.src = "https://media.giphy.com/media/VpW0LoWNwGIgo7fams/giphy.gif";
  question.innerHTML = "wow fr?";
}


gif.addEventListener("click", () => {
  vibrateGif(); 
  question.innerHTML = "stop it";
});

function vibrateButton() {
  noBtn.style.transition = "transform 0.1s ease-in-out";
  noBtn.style.transform = "translateX(-5px)"
  setTimeout(() => {
    noBtn.style.transform = "translateX(5px)"; 
    setTimeout(() => {
      noBtn.style.transform = "translateX(0)"; 
      setTimeout(() => {
        createClones();
      }, 200);
    }, 100);
  }, 100);
}

yesBtn.addEventListener("click", yesBtnFirstClick);



noBtn.addEventListener("click", () => {
  vibrateButton();
  gif.src = "https://media.giphy.com/media/RNUGlbmPQ9nPjcCzW8/giphy.gif";
  const randomIndex = Math.floor(Math.random() * word.length);
  question.innerHTML = word[randomIndex];
});
