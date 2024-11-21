const myMessage = document.getElementById('myMessage');

// Texts
const happyText = "HAPPY";
const birthdayText = "BIRTHDAY";
const angelaText = "ANGELA";

// Colors
const colors = ['#FF69B4', '#FFA07A', '#20B2AA', '#8FBC8F', '#6495ED'];

// Create Balloons
const createBalloons = (text, top) => {
  const container = document.createElement('div');
  container.style.textAlign = 'center';
  container.style.position = 'relative';
  container.style.top = top + 'vh';
  
  for (let i = 0; i < text.length; i++) {
    const balloon = document.createElement('span');
    balloon.textContent = text[i];
    balloon.style.display = 'inline-block';
    balloon.style.margin = '0px';
     balloon.style.width = '23px';
    balloon.style.fontSize = '35px';
    balloon.style.fontWeight = 'bold';
    balloon.style.color = 'white';
    balloon.style.borderRadius = '50%';
    balloon.style.background = 'linear-gradient(' + randomColor() + ', ' + randomColor() + ')';
    balloon.style.padding = '10px';
    balloon.style.animation = 'float 5s forwards';
    container.appendChild(balloon);
  }
  
  myMessage.appendChild(container);
};

// Random Color
const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

// Animation CSS
const style = document.createElement('style');
style.innerHTML = `
  @keyframes float {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-300px);
    }
  }
`;
document.head.appendChild(style);

// Create Balloons
createBalloons(happyText, 10);
createBalloons(birthdayText, 10);
createBalloons(angelaText, 10);

// Animate Balloons
const balloons = document.querySelectorAll('#myMessage span');
for (let i = 0; i < balloons.length; i++) {
  balloons[i].style.animationDelay = (i * 0.5) + 's';
}

const myVideo = document.getElementById('myVideo');

myVideo.style.transitionDelay = '5s';
setTimeout(function(){
  myVideo.style.display = 'block';
  myVideo.style.transition = '2s ease-in-out'
  myVideo.style.opacity = '1';
  myVideo.play();
}, 9500);
