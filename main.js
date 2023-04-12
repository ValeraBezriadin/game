const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board")
const reload = document.querySelector(".game__new")
let time = 0;
let score = 0;

startBtn.addEventListener("click", () => {
  screens[0].classList.add("up");
});
timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time__btn")) {
    time = parseInt(event.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});
board.addEventListener("click",(event)=>{
    if(event.target.classList.contains("game__circle")){
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle()
  setTime(time);


}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}
function finishGame(){
    timeEl.parentNode.classList.add("hide")
    board.innerHTML = `<h2 class="score">Зібранно: <span >${score}</span> горіхів</h2>`
}
function createRandomCircle(){
    const circle = document.createElement("div")
    const {width,height} = board.getBoundingClientRect()
    const size = getRandomNumber(30,70)
    const x = getRandomNumber(0,width - size)
    const y = getRandomNumber(0,height - size)

    circle.classList.add("game__circle")
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    
    board.append(circle)
}
function getRandomNumber(min,max){
    return Math.round(Math.random() *(max-min)+min)
    
    
}

reload.addEventListener("click",()=>{
    location.reload()
})
