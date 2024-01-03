
let number_of_presses = 0
let special_case =0;
let decision ;

function next(event){ 
    number_of_presses+=1;
    if(event.key == ' ' && number_of_presses == 1 ){
        document.getElementById('text1').style.display = 'none';
        document.getElementById('text2').style.display = 'block';
        document.getElementById('me').style.animationName = 'animation2'
    }
    if(event.key == ' ' && number_of_presses == 2 ){
        document.getElementById('text2').style.display = 'none';
        document.getElementById('text3').style.display = 'block';
        document.getElementById('me').style.animationName = 'animation3'
        document.getElementById('me').style.animationDuration = '5s';
        document.getElementById('me').style.animationFillMode = 'forwards';
        setTimeout(() =>{
            document.getElementById('me').style.display = 'none';
            document.getElementById('text3').style.display = 'none';
            document.getElementById('text4').style.display = 'block';
        },5000)
        setTimeout(()=>{
            decision = window.confirm("Press ok to save Coody boy.")
            if(decision == true){
                document.getElementById('dialogue-me').src = './my_friend.webp'
                document.getElementById('text4').style.display = 'none';
                document.getElementById('text5').style.display = 'block';
                document.getElementById('my_friend').style.animationName = 'animation4'
                setTimeout(()=>{
                    location = '../my_rescue/my_rescue.html'
                    console.log('hellow r')
                },7000)
            }
            else{
                document.getElementById('dialogue-me').src = './my_friend.webp'
                document.getElementById('text4').style.display = 'none';
                document.getElementById('text6').style.display = 'block';
                document.getElementById('my_friend').style.animationName = 'animation5'
                setTimeout(()=>{
                    document.getElementById('my_friend').style.display = 'none'
                },6000)
                setTimeout(()=>{
                    document.getElementById('rocket').style.animationName = 'animation6'
                },7000)
                special_case+=1;
                if(special_case == 1){
                    setTimeout(()=>{
                        location = '../bad_ending/Loading-page.html'
                    },8000)
                }
            }
        },7000)
    }
}

function buttonNext(){ 
    number_of_presses+=1;
    if(number_of_presses == 1){
        document.getElementById('text1').style.display = 'none';
        document.getElementById('text2').style.display = 'block';
        document.getElementById('me').style.animationName = 'animation2'
    }
    if(number_of_presses == 2){
        document.getElementById('text2').style.display = 'none';
        document.getElementById('text3').style.display = 'block';
        document.getElementById('me').style.animationName = 'animation3'
        document.getElementById('me').style.animationDuration = '5s';
        document.getElementById('me').style.animationFillMode = 'forwards';
        setTimeout(() =>{
            document.getElementById('me').style.display = 'none';
            document.getElementById('text3').style.display = 'none';
            document.getElementById('text4').style.display = 'block';
        },5000)
        setTimeout(()=>{
            decision = window.confirm("Press ok to save Coody boy.")
            if(decision == true){
                document.getElementById('dialogue-me').src = './my_friend.webp'
                document.getElementById('text4').style.display = 'none';
                document.getElementById('text5').style.display = 'block';
                document.getElementById('my_friend').style.animationName = 'animation4'
                setTimeout(()=>{
                    location = '../my_rescue/my_rescue.html'
                },6000)
            }
            else{
                document.getElementById('dialogue-me').src = './my_friend.webp'
                document.getElementById('text4').style.display = 'none';
                document.getElementById('text6').style.display = 'block';
                document.getElementById('my_friend').style.animationName = 'animation5'
                setTimeout(()=>{
                    document.getElementById('my_friend').style.display = 'none'
                },6000)
                setTimeout(()=>{
                    document.getElementById('rocket').style.animationName = 'animation6'
                },7000)
                special_case+=1;
                if(special_case == 1){
                    setTimeout(()=>{
                        location = '../bad_ending/Loading-page.html'
                    },8000)
                }
            }
            }
        ,7000)
    }
    }


addEventListener('keydown',next)