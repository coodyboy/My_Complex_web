let imageFrame = document.getElementById('your-decision-image')
let imageFrame2 = document.getElementById('alien-decision-image')
let computerDecision;
let result = document.getElementsByTagName('h1')[0]
let ifwin = 0;
let iflose = 0;

function rockButton(){
    imageFrame.src = './rock.png';
    imageFrame.style.transform = 'rotateZ(90deg) translateY(50%) scaleX(-1)';
    decision =0;
    computerDecision = Math.round(Math.random()*2)
    if(computerDecision == 0){
        result.innerHTML = "Draw"
        imageFrame2.src = './rock.png';
        imageFrame2.style.transform = 'rotateZ(90deg) translateY(50%) scaleY(-1) scaleX(-1)';
    }
    else if(computerDecision ==1){
        result.innerHTML = "You won"
        imageFrame2.src = './scissor.png';
        imageFrame2.style.transform = 'rotateZ(0deg) translateX(-50%) scaleY(1) scaleX(-1)';
        ifwin+=1;
    }
    else{
        result.innerHTML = "You lost"
        imageFrame2.src = './paper.png';
        imageFrame2.style.transform = 'rotateZ(90deg) translateY(50%) scaleY(-1) scaleX(1)';
        iflose+=1;

    }
    if(ifwin == 1){
        setTimeout(()=>{
            location = './ifwin/index.html'
        },2000)
    }
    if(iflose == 1){
        setTimeout(()=>{
            location = './iflose.html'
        },2000)
    }
}
function paperButton(){
    imageFrame.src = './paper.png';
    imageFrame.style.transform = 'rotateZ(90deg) translateY(50%)';
    decision =1;
    computerDecision = Math.round(Math.random()*2)
    if(computerDecision == 1){
        result.innerHTML = "Draw"
        imageFrame2.src = './paper.png';
        imageFrame2.style.transform = 'rotateZ(90deg) translateY(50%) scaleY(-1) scaleX(1)';
    }
    else if(computerDecision == 0){
        result.innerHTML = "You won"
        imageFrame2.src = './rock.png';
        imageFrame2.style.transform = 'rotateZ(90deg) translateY(50%) scaleY(-1) scaleX(-1)';
        ifwin+=1;
    }
    else{
        result.innerHTML = "You lost"
        imageFrame2.src = './scissor.png';
        imageFrame2.style.transform = 'rotateZ(0deg) translateX(-50%) scaleY(1) scaleX(-1)';
        iflose+=1;
    }
    if(ifwin == 1){
        setTimeout(()=>{
            location = './ifwin/index.html'
        },2000)
    }
    if(iflose == 1){
        setTimeout(()=>{
            location = './iflose.html'
        },2000)
    }
}
function scissorButton(){
    imageFrame.src = './scissor.png';
    imageFrame.style.transform = 'translateX(-50%)';
    decision =2;
    computerDecision = Math.round(Math.random()*2)
    if(computerDecision == 1){
        result.innerHTML = "You won"
        imageFrame2.src = './paper.png';
        imageFrame2.style.transform = 'rotateZ(90deg) translateY(50%) scaleY(-1) scaleX(1)';
        ifwin+=1;
    }
    else if(computerDecision == 0){
        result.innerHTML = "You lost"
        imageFrame2.src = './rock.png';
        imageFrame2.style.transform = 'rotateZ(90deg) translateY(50%) scaleY(-1) scaleX(-1)';
        iflose+=1;
    }
    else{
        result.innerHTML = "Draw"
        imageFrame2.src = './scissor.png';
        imageFrame2.style.transform = 'rotateZ(0deg) translateX(-50%) scaleY(1) scaleX(-1)';
    }
    if(ifwin == 1){
        setTimeout(()=>{
            location = './ifwin/index.html'
        },2000)
    }
    if(iflose == 1){
        setTimeout(()=>{
            location = './iflose.html'
        },2000)
    }
}