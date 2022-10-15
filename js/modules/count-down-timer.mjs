// Set the date we're counting down to
export default class CountDownDateTimer {

  decimalMinutes;
  countDown;
  titleElement;
  minutes;
  selectMinutesElement;
  timeElement;
  elementStartPause;
  elementStop;

  constructor() {
    this.selectMinutesElement = document.querySelector('#select-time');
    this.timeElement = document.querySelector('#time');
    this.titleElement = document.querySelector('title');
    this.elementStartPause = document.querySelector('.start-pause');
    this.elementStop = document.querySelector('.stop');

    this.elementStartPause.addEventListener('click', (e) => {
      let element = e.target;
      if (this.countDown) clearInterval(this.countDown);
      this.startTimer();
      element.classList.toggle('activated');
      element.classList.remove('stopped');
    });

    this.elementStop.addEventListener('click', (e) => {
      this.stopTimer();
    });

    
  }
  
  startTimer(){
    if(this.elementStartPause.classList.contains('stopped')){
      this.decimalMinutes = this.selectMinutesElement.value * 60;
    }

    if(this.elementStartPause.classList.contains('activated')){
      if (this.countDown) clearInterval(this.countDown);
    } else{
      this.timer(this.decimalMinutes);
    }
  }

  stopTimer(){
    let timeNow = "00m 00s";
    this.elementStartPause.classList.add('stopped');
    this.elementStartPause.classList.remove('activated');
    this.timeElement.innerHTML = timeNow;
    this.titleElement.innerHTML = timeNow;
    if (this.countDown) clearInterval(this.countDown);
  }

  timer = (duration) => {
    let callBackCountDown = () => {
      let minutes = Math.floor(this.decimalMinutes / 60);
      let seconds = Math.floor(this.decimalMinutes % 60);
      
      let timeNow = this.parseTimeDigits(minutes) + "m " + this.parseTimeDigits(seconds) + "s ";
      
      if (this.decimalMinutes == 0) {
        let finishTxt = '💥 Finished!!';
        this.timeElement.innerHTML = finishTxt;
        this.titleElement.innerHTML = finishTxt;
        this.elementStartPause.classList.remove('activated');
        clearInterval(this.countDown);
        alert(finishTxt);
      }

      this.timeElement.innerHTML = timeNow;
      this.titleElement.innerHTML = timeNow;

      this.decimalMinutes--;
    }

    this.countDown = setInterval(callBackCountDown, 1000);
    this.decimalMinutes = duration;
  }

  parseTimeDigits(num){
    if(num / 10 >= 1) return num;
    return "0" + num;
  }

}