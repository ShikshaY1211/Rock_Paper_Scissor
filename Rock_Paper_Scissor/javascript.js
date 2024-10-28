/*Shiksha Yadav, 000887718 */
var score = {
    player: 0,
    computer: 0
};

function start(){
    document.getElementById("start").style.visibility="hidden";
    document.getElementById("rock").style.visibility="visible";
    document.getElementById("paper").style.visibility="visible";
    document.getElementById("scissors").style.visibility="visible";
    document.getElementById("player-score").textContent = score.player;
    document.getElementById("computer-score").textContent = score.computer;
}

clickedHand=["<img src='images/rock.png' id='img1'>","<img src='images/paper.png' id='img1'>","<img src='images/scissors.png' id='img1'>" ];

clickedRightHand=["<img src='images/rock.png' id='img2'>","<img src='images/paper.png' id='img2'>","<img src='images/scissors.png' id='img2'>" ];

function game(position){
    document.getElementById("img1").style.animation='shakeLeft 1s 5 ease-in-out';
    document.getElementById("img2").style.animation='shakeRight 1s 5 ease-in-out';

    var random=Math.floor(Math.random()*3);
    setTimeout(() => {
        document.getElementById("hand2").innerHTML=clickedRightHand[random];
        document.getElementById("hand1").innerHTML=clickedHand[position];
    }, 5000);
    setTimeout(() => {
        if(random==position){
            alert("MATCH DRAW !!");
        }
        else if(position==0 && random==2){
            score.player++;
            alert("YOU ARE WINNER , GOOD JOB !!");
        }
        else if(position==1 && random==0){
            score.player++;
            alert("YOU ARE WINNER , GOOD JOB !!");
        }
        else if(position==2 && random==1){
            score.player++;
            alert("YOU ARE WINNER , GOOD JOB !!");
        }
        else{
            score.computer++;
            alert("COMPUTER IS WINNER,TRY NEXT TIME !!");
        }
        document.getElementById("player-score").textContent = score.player;
        document.getElementById("computer-score").textContent = score.computer;
        if (score.player === 3) {
            alert("Congratulations, you won the game!");
            window.location.reload();
        } else if (score.computer === 3) {
            alert("Sorry, you lost the game.");
            window.location.reload();
        }
    }, 5500);
}
function updateClock() {
  const now = new Date();
  const hour = now.getHours() % 12;
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const hourAngle = (hour / 12) * 360 + (minute / 60) * 30;
  const minuteAngle = (minute / 60) * 360;
  const secondAngle = (second / 60) * 360;
  const hourHand = document.getElementById('hour');
  const minuteHand = document.getElementById('minute');
  const secondHand = document.getElementById('second');
  hourHand.setAttribute('transform', `rotate(${hourAngle} 50 50)`);
  minuteHand.setAttribute('transform', `rotate(${minuteAngle} 50 50)`);
  secondHand.setAttribute('transform', `rotate(${secondAngle} 50 50)`);
}

setInterval(updateClock, 1000);
