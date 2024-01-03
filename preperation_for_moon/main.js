
let number_of_space_press = 0;

let myProfile = document.getElementById('myProfile')
let text_1_selector = document.querySelector('#text-1')
let text_2_selector = document.querySelector('#text-2')
let text_3_selector = document.querySelector('#text-3')

function what_to_do(event){
    number_of_space_press+= 1;
    if(event.key == ' ' && number_of_space_press == 1 ){
        text_1_selector.style.opacity = '0';
        text_2_selector.style.opacity = '1';
    }
    if(event.key == ' ' && number_of_space_press == 2){
        text_2_selector.style.opacity = '0';
        text_3_selector.style.opacity = '1';
        myProfile.src = './Happy_profile.png';
    }
    if(event.key == ' ' && number_of_space_press == 3){
        location = '../to_moon/Loading-page.html';
    }
}

function button_press(){
    number_of_space_press+= 1;
    if(number_of_space_press == 1 ){
        text_1_selector.style.opacity = '0';
        text_2_selector.style.opacity = '1';
    }
    if(number_of_space_press == 2){
        text_2_selector.style.opacity = '0';
        text_3_selector.style.opacity = '1';
        myProfile.src = './Happy_profile.png';
    }
    if(number_of_space_press == 3){
        location = '../to_moon/Loading-page.html';
    }
}
addEventListener('keydown',what_to_do);

