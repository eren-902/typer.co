
var text_check="";
var text_checker="";
var seconds = 15;
var percent=0;
var wpm=0;

function setCount(time){
  seconds = time;
  console.log(seconds)
  changeTime();
}

function changeTime(){
  document.getElementById("count").innerHTML=seconds;
}

function startCountdown() {
    let counter = seconds;

    const interval = setInterval(() => {
      document.getElementById("count").innerHTML= counter.toString();
        counter--;
      if(counter==-1){
        clearInterval(interval);
        text_check=document.getElementById("text-main").value;
        document.getElementById("count").innerHTML=seconds;
        
        textPoint();
        printPoints();
        document.getElementById("point-show").style.display= "block";
        document.getElementById("point-contain").style.display= "block";
      }
    }, 1000);
  }
  function refresh(){
    window.location.reload("index.html");
  }
  var list = [
    // text one
    "It was a rat's nest. Not a literal one, but that is what her hair seemed to resemble every morning when she got up. It was going to take at least an hour to get it under control and she was sick and tired of it. She peered into the mirror and wondered if it was worth it. It wasn't. She opened the drawer and picked up the hair clippers.",
  //text 2
  "The red glow of tail lights indicating another long drive home from work after an even longer 24-hour shift at the hospital. The shift hadn’t been horrible but the constant stream of patients entering the ER meant there was no downtime. She had some of the “regulars” in tonight with new ailments they were sure were going to kill them. It’s amazing what a couple of Tylenol and a physical exam from the doctor did to eliminate their pain, nausea, headache, or whatever other mild symptoms they had.",
  //Text 3
  "Debbie knew she was being selfish and unreasonable. She understood why the others in the room were angry and frustrated with her and the way she was acting. In her eyes, it didn't really matter how they felt because she simply didn't care.",
  //text_4
  "The shades were closed keeping the room dark. Peter knew that he should open them and let in the sunlight so he could begin the day, but he didn't have the energy or willpower. Nothing had gone as expected the day before and he no longer wanted to spend the energy to begin a new day. He stared at the shades wondering if there was a way to disappear from the reality of the world for the rest of the day.",
  //text5
  "She tried to explain that love wasn't like pie. There wasn't a set number of slices to be given out. There wasn't less to be given to one person if you wanted to give more to another. That after a set amount was given out it would all disappear. She tried to explain this, but it fell on deaf ears.",
  //text6
  "Her eyebrows were a shade darker than her hair. They were thick and almost horizontal, emphasizing the depth of her eyes. She was rather handsome than beautiful. Her face was captivating by reason of a certain frankness of expression and a contradictory subtle play of features. Her manner was engaging."
  ];
function generateText(){
    text_checker="";
    const number = randomGen(parseInt(Math.random()*10));
    console.log(number);
    if(number<3){
        document.getElementById("main_passage").innerHTML = list[0];
      text_checker=list[0];
    }
    else if(number>=4 && number <=7){
        document.getElementById("main_passage").innerHTML = list[1];
        text_checker = list[1];
    }
    else if(number>=8 && number<=10){
      document.getElementById("main_passage").innerHTML = list[2];
      text_checker = list[2];
    }
    else if(number>=11 && number<=13){
      document.getElementById("main_passage").innerHTML = list[3];
      text_checker=list[3];
    }
    else if(number>=14 && number<=17){
      document.getElementById("main_passage").innerHTML = list[4];
      text_checker=list[4];
    }
    else{
      document.getElementById("main_passage").innerHTML = list[5];
      text_checker=list[5];
    }
 }
 
 function randomGen(i){
    return (Math.abs((i*i) - (6*i) + Math.round(Math.random()*10)))
  }

 function textPoint(){
  var pointCount=0;
  let copyTextCheck = text_check.split(' ');
  let checkTextArray = text_checker.split(' ');
  console.log(copyTextCheck);
  console.log(checkTextArray);
  for(var x=0; x<copyTextCheck.length; x++){
    if(copyTextCheck[x] === checkTextArray[x]){
        pointCount++;
      }
  }
  percent = parseInt(pointCount/(copyTextCheck.length)*100);
  if(seconds==15)
    wpm= pointCount*4;
  else if(seconds==30)
    wpm= pointCount*2;
  else if(seconds ==6)
    wpm = pointCount;
  else{
    wpm= pointCount/2;
  }
    console.log(percent);
 }

 function printPoints(){
   document.getElementById("points-earned").innerHTML=parseInt(percent+wpm)/5;
   document.getElementById("accuracy").innerHTML=(percent);
   document.getElementById("speed").innerHTML=(wpm);
 }

