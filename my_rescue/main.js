
let text1 = document.getElementById('text1')
let text2 = document.getElementById('text2')
let text3 = document.getElementById('text3')
let text4 = document.getElementById('text4')
let text5 = document.getElementById('text5')
let text6 = document.getElementById('text6')
let number_of_presses = 0;
let dialogueBoxPic = document.getElementById('dialogue-box-pic')

function buttonNext(){
    number_of_presses+=1;
    if(number_of_presses == 1){
        text1.style.display = 'none';
        text2.style.display = 'block';
        dialogueBoxPic.src = './alien.png';
        dialogueBoxPic.style.borderRadius = '0';

    }
    if(number_of_presses == 2){
        text2.style.display = 'none';
        text3.style.display = 'block';
        dialogueBoxPic.src = './my_friend.webp';
        dialogueBoxPic.style.borderRadius = '50%';
    }
    if(number_of_presses == 3){
        text3.style.display = 'none';
        text4.style.display = 'block';
        dialogueBoxPic.src = './alien.png';
        dialogueBoxPic.style.borderRadius = '0';
    }
    if(number_of_presses == 4){
        text4.style.display = 'none';
        text5.style.display = 'block';
        dialogueBoxPic.src = './my_friend.webp';
        dialogueBoxPic.style.borderRadius = '50%';
    }
    if(number_of_presses == 5){
        text5.style.display = 'none';
        text6.style.display = 'block';
        dialogueBoxPic.src = './alien.png';
        dialogueBoxPic.style.borderRadius = '0';
    }
    if(number_of_presses == 6){
        location='./the_game/index.html'
    }
}