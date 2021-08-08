var counts=0;

function sugoroku(){
    dice();
    moveFixed(number);
    move(playerLocation, locationNumber, destinationNumber);
    
}

// Dice value
function dice(){
    var diceText = document.querySelector('#num-textarea');
    var disable = document.querySelector('#num-btn');
    disable.setAttribute("disabled","True");
    number = Math.floor(Math.random()*100 % 6 + 1) ;
    diceText.value = number;
    count();
    return number;
}

// Number of dice rolled
function count(){
    counts++;
    var setcount = document.querySelector('#count');
    setcount.value=counts;
}

// Determine the squares before and after the move
function moveFixed(diceNumber){
    if(counts===1){
        player_direction = "player_right";
    }
    var player = document.querySelector("."+player_direction);
    playerLocation = document.getElementById(player.id);
    locationNumber = Number(playerLocation.id.slice(4));
    destinationNumber = locationNumber + diceNumber;
    return(playerLocation, locationNumber, destinationNumber);
}

// player movement
function move(playerLocation, moveStart, moveEnd){
    beforeMove(playerLocation,moveStart,moveEnd);
}

function beforeMove(playerLocation,moveStart, moveEnd){
    setTimeout(function(){
        playerLocation.setAttribute("class","square");
        playerLocation.removeAttribute("style","background-color:#000000;");
        moveStart++;
        nextNumber = moveStart;
        nextStep = document.getElementById("masu"+moveStart);
        afterMove(nextNumber, nextStep, moveEnd);    
    },100);
}

function afterMove(nextNumber, nextStep, moveEnd){
    setTimeout(function(){
        if(nextNumber===13){
            player_direction = "player_left";
        }else if(nextNumber===37){
            player_direction = "player_right";
        }
        if(nextNumber < moveEnd){
            console.log(nextNumber);
            nextStep.setAttribute("class","square "+player_direction);
            nextStep.setAttribute("style","background-color:bisque;");
            if(nextNumber<=49){
                beforeMove(nextStep,nextNumber,moveEnd);
            }
        }else{
            if(moveEnd>49){
                finish(moveEnd);
            }else{
                nextStep.setAttribute("class","square "+player_direction);
                nextStep.setAttribute("style","background-color:bisque;");
                console.log("移動終了");
                var disable = document.querySelector('#num-btn');
                disable.removeAttribute("disabled","True");
                finish(moveEnd);
            }
        }
    },100);
    if(nextNumber>49){
        finish(moveEnd);
    }
}

// end processing
function finish(finishNumber){
    if(finishNumber < 49){
    }else if(finishNumber===49){
        alert("ご～～～～る！！！\n"+counts+"回でゴールしました！！\nおめでとう！！\nもう一回遊んでね！");
    }else if(finishNumber>49){
        alert("歩きすぎたのであなたは海の藻屑になりました");
    }
}
