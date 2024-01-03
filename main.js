let locator = document.getElementById('side-bar')
let first_content = document.getElementById('first-content')
let second_content = document.getElementById('second-content')

function displaySideBar(){
    locator.style.transform = 'scaleX(1)'
    document.body.style.overflowY = 'hidden'
}

function hideSideBar(){
    locator.style.transform = 'scaleX(0)'
    document.body.style.overflowY = 'scroll'
}


function taking_to_moon(){
    let decision = window.confirm('Sike! you thought I am done with you? press ok to continue.')
    if(decision == true){
        window.location = './preperation_for_moon/preperation.html'
    }
}

setTimeout(taking_to_moon,4000)