// Set the date we're counting down to
export default class CountDownDateTimer {

  totalSeconds;
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
      this.totalSeconds = this.selectMinutesElement.value * 60;
    }

    if(this.elementStartPause.classList.contains('activated')){
      if (this.countDown) clearInterval(this.countDown);
    } else{
      this.timer(this.totalSeconds);
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
      let minutes = Math.floor(this.totalSeconds / 60);
      let seconds = Math.floor(this.totalSeconds % 60);
      
      let displayTime = this.formatDisplayTime(minutes) + "m " + this.formatDisplayTime(seconds) + "s ";
      
      if (this.totalSeconds == 0) {
        let finishTxt = '💥 Finished!!';
        this.timeElement.innerHTML = finishTxt;
        this.titleElement.innerHTML = finishTxt;
        this.totalSeconds = this.selectMinutesElement.value * 60;
        this.elementStartPause.classList.remove('activated');
        clearInterval(this.countDown);
        alert(finishTxt);
      }

      this.timeElement.innerHTML = displayTime;
      this.titleElement.innerHTML = displayTime;

      this.totalSeconds--;
    }

    this.countDown = setInterval(callBackCountDown, 1000);
    this.totalSeconds = duration;
  }

  formatDisplayTime(num){
    if(num / 10 >= 1) return num;
    return "0" + num;
  }

}