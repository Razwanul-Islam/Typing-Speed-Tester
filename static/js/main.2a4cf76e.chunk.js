(this["webpackJsonppractical-ract"]=this["webpackJsonppractical-ract"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(2),o=a.n(c),i=a(3),r=a(4),l=a(6),m=a(5),d=a(7),u=(a(13),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={mainText:"You may be wondering why we chose a photo of NASA\u2019s Mars Rover for the cover. We actually chose it for several reasons. Obviously, it is very exciting; in fact, space represents the most exciting frontier forth entire world! In addition, much of the Rover itself consists of all kinds of circuits. Circuits that must work without needing maintenance! Once you are on Mars, it is hard to find a technician!",typed_text:"",len:0,time:{},seconds:60,wpm:0,accuracy:0,problem:"",isDialogOpen:!1},e.secondsToTime=function(e){var t=e%3600,a=t%60;return{h:Math.floor(e/3600),m:Math.floor(t/60),s:Math.ceil(a)}},e.handleOnchage=function(t){e.state.typed_text.length<e.state.mainText.length&&0!=e.state.seconds&&e.setState({typed_text:t.target.value},(function(){e.setState({len:e.state.typed_text.length+1})}))},e.componentDidMount=function(){var t=e.secondsToTime(e.state.seconds);e.setState({time:t})},e.startTimer=function(){0==e.timer&&e.state.seconds>0&&(e.timer=setInterval(e.countDown,1e3))},e.countDown=function(){var t=e.state.seconds-1;e.setState({time:e.secondsToTime(t),seconds:t}),0==t&&(clearInterval(e.timer),e.calculation())},e.restart=function(){e.setState({typed_text:"",len:0,time:{},seconds:60},(function(){e.setState({isDialogOpen:!1})}))},e.calculation=function(){for(var t=0,a=0,n=0;n<e.state.typed_text.length;n++)" "===e.state.typed_text[n]&&(t+=1),e.state.typed_text[n]!=e.state.mainText[n]&&(a+=1);var s=Math.ceil(100*(e.state.typed_text.length-a)/e.state.typed_text.length);e.setState({wpm:t,accuracy:s},(function(){e.setState({isDialogOpen:!0})}))},e.openDialog=function(){return e.setState({isDialogOpen:!0})},e.handleClose=function(){e.setState({isDialogOpen:!1})},e.timer=0,e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"main"},s.a.createElement("header",{className:"header"},s.a.createElement("span",{className:"header-text"},"Typing speed tester"),s.a.createElement("span",{className:"timer"},this.state.seconds)),s.a.createElement("div",{className:"main-text"},this.state.mainText),s.a.createElement("div",{className:"edit-holder"},s.a.createElement("textarea",{className:"edit-text",value:this.state.typed_text,onChange:this.handleOnchage,onClick:this.startTimer,placeholder:"Type here to start.."})),s.a.createElement("div",{className:"dialouge-container d-none ".concat(this.state.isDialogOpen&&"d-flex")},this.state.isDialogOpen&&s.a.createElement("div",{className:"dialog"},s.a.createElement("h2",{className:"fantasy"},"\ud83c\udf89Congratulation\ud83c\udf89"),s.a.createElement("table",{className:"fantasy"},s.a.createElement("tr",null,s.a.createElement("td",null,"WPM"),s.a.createElement("td",null,this.state.wpm)),s.a.createElement("tr",null,s.a.createElement("td",null,"Accuracy"),s.a.createElement("td",null,this.state.accuracy,"%"))),s.a.createElement("button",{className:"btn btn-primary",onClick:this.restart},"Restart"))),s.a.createElement("footer",{className:"foo"},"Developed by MD. Razwanul Islam"))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);o.a.render(s.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.2a4cf76e.chunk.js.map