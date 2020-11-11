import React,{ Component } from 'react';
import './App.css';
class App extends Component {
  state={
   mainText:"You may be wondering why we chose a photo of NASA's Mars Rover for the cover. We actually chose it for several reasons. Obviously, it is very exciting; in fact, space represents the most exciting frontier forth entire world! In addition, much of the Rover itself consists of all kinds of circuits. Circuits that must work without needing maintenance! Once you are on Mars, it is hard to find a technician!"
   ,typed_text:'',
   len:0,time: {},
    seconds: 60,
    wpm:0,
    accuracy:0,
    problem:'',
    isDialogOpen: false
  }

  constructor(){
    super();
    this.timer= 0;}

  secondsToTime=(secs)=>{
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }
handleOnchage=(e)=>{
  if(this.state.typed_text.length<this.state.mainText.length && this.state.seconds!=0){
  this.setState({typed_text:e.target.value},()=>{this.setState({len:this.state.typed_text.length+1})})}
}
 componentDidMount=()=>{
 let timeLeftVar = this.secondsToTime(this.state.seconds);
 this.setState({ time: timeLeftVar });
}

startTimer=()=> {
 if (this.timer == 0 && this.state.seconds > 0) {
   this.timer = setInterval(this.countDown, 1000);
 }
}

countDown=()=> {
 // Remove one second, set state so a re-render happens.
 let seconds = this.state.seconds - 1;
 this.setState({
   time: this.secondsToTime(seconds),
   seconds: seconds,
 });
 
 // Check if we're at zero.
 if (seconds == 0) { 
   clearInterval(this.timer);
   this.calculation();
 }
}

restart=()=>{
  this.setState({typed_text:'',
  len:0,time: {},
   seconds: 60,
   },()=>{this.setState({isDialogOpen:false})})
}

calculation=()=>{
  let word=0;
  let mistake=0;
  let problem='';
  for(let i=0;i<this.state.typed_text.length;i++){
    if(this.state.typed_text[i]===" "){word+=1;}
    if(this.state.typed_text[i]!=this.state.mainText[i]){
      mistake+=1;
      
    }
  }
  let acc=Math.ceil((this.state.typed_text.length-mistake)*100/(this.state.typed_text.length))
  this.setState({
    wpm:word,accuracy:acc
  },()=>{this.setState({isDialogOpen:true})})
}
openDialog = () => this.setState({ isDialogOpen: true })
 
    handleClose = () =>{ this.setState({ isDialogOpen: false })}
  render() { 
    return (
      <div className='main'>
        <header className='header'>
          <span className='header-text'>Typing speed tester</span>
    <span className='timer'>{this.state.seconds}</span>
        </header>
        <div className='main-text'>{this.state.mainText}</div>
        <div className='edit-holder'>
        <textarea className='edit-text' value={this.state.typed_text} onChange={this.handleOnchage} onClick={this.startTimer} placeholder='Type here to start..'/>
        </div>

        <div className={`dialouge-container d-none ${this.state.isDialogOpen && 'd-flex'}`}>
                {
                    this.state.isDialogOpen &&
                <div className='dialog'>
                  <h2 className='fantasy'>🎉Congratulation🎉</h2>
                  <table className='fantasy'>
                <tr><td>WPM</td><td>{this.state.wpm}</td></tr>
                    <tr><td>Accuracy</td><td>{this.state.accuracy}%</td></tr>
                    
                  </table>
                  <button className='btn btn-primary' onClick={this.restart}>Restart</button>
                </div>
                }
        </div>

        <footer className='foo'>
          Developed by MD. Razwanul Islam
        </footer>
      </div>

      );
  }
}
 

export default App;
