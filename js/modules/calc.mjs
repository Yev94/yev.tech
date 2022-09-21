export default class Calc {

  time;
  elementTime;
  elementFromRange;
  elementToRange;
  elementSelectOperator;
  elementStartReset;
  elementNext;
  countDown;
  num1;
  num2;
  result;
  previousNum1;
  previousNum2;
  elementOperator;

  config = {
    seconds: 60,
    from: 2,
    to: 20,
  }

  constructor() {
      this.elementTime = document.querySelector('.time');
      document.querySelector('body').innerText = this.elementTime;
      this.elementFromRange = document.querySelector('#select-from-range');
      this.elementToRange = document.querySelector('#select-to-range');
      this.elementSelectOperator = document.querySelector('#select-operator');
      this.elementStartReset = document.querySelector('.reset');
      this.elementNext = document.querySelector('.next');
      this.elementOperator = document.querySelectorAll('.operator');
      this.num1 = document.querySelector('.num1');
      this.num2 = document.querySelector('.num2');
      this.result = document.querySelector('.result');
      this.previousNum1 = document.querySelector('.previous-num1');
      this.previousNum2 = document.querySelector('.previous-num2');

      this.optionsRange(this.config.from, this.config.to);

      this.elementStartReset.addEventListener('click', () => {
        if (this.countDown) clearInterval(this.countDown);
        this.start();
      });
      
      this.elementNext.addEventListener('click', ()=>{
        this.next();
      })
  }

  startTimer = (duration) => {
    let callBackCountDown = () => {
      if (this.time == 0) {
        clearInterval(this.countDown);
      }
      this.elementTime.innerText = this.time--;
    }

    this.countDown = setInterval(callBackCountDown, 1000);
    this.time = duration;
  }

  optionsRange = (from, to) => {
    for (let i = from; i <= to; i++) {
      let option = document.createElement('option');
      option.setAttribute("value", i);
      option.innerText = i;
      this.elementFromRange.appendChild(option);
    }

    this.setSecondNumOptionRange(to);

    this.elementFromRange.addEventListener('change', (element) => {
      this.setSecondNumOptionRange(to);
    });
  }

  setSecondNumOptionRange(to){
    while (this.elementToRange.firstChild) {
      this.elementToRange.removeChild(this.elementToRange.firstChild);
    }

    for (let i = this.elementFromRange.value; i <= to; i++) {
      let option = document.createElement('option');
      option.setAttribute("value", i);
      option.innerText = i;
      this.elementToRange.appendChild(option);
    }
  }

  createRandomNum() {
    let min = Number(this.elementFromRange.value);
    let max = Number(this.elementToRange.value);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  insertRandomNum(){
    this.num1.innerText = this.createRandomNum();
    this.num2.innerText = this.createRandomNum();
  }

  start() {
    this.startTimer(this.config.seconds);
    this.insertRandomNum();
    this.elementOperator.forEach(element => element.innerText = this.elementSelectOperator.value);
  }

  next(){
    this.previousNum1.innerText = this.num1.innerText;
    this.previousNum2.innerText = this.num2.innerText;
    this.insertRandomNum();
    this.operate();
  }

  operate () {
    let numOp1 = Number(this.previousNum1.innerText);
    let numOp2 = Number(this.previousNum2.innerText);

    let operation = {
      '+': () =>  {return numOp1 + numOp2},
      '-': () => {return numOp1 - numOp2},
      '*': () => {return numOp1 * numOp2},
      '/': () => {return numOp1 / numOp2},
    }

    let resultOp = (operation[this.elementOperator[0].innerText])();

    this.result.innerText = resultOp;
  }

}