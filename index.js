
var button = document.querySelectorAll(".drum");
var audio0,audio1,audio2,audio3,audio4, audio5, audio6;


/*By Mouse Click*/
for(var i =0 ;i<button.length; i++){
    button[i].addEventListener("click", function audio(){
        var inhtml = this.innerHTML;
        switch(inhtml){
            case 'w':
                audio0 = new Audio('/sounds/crash.mp3');
                audio0.play();
                break;

            case 'a':
                audio1 = new Audio('/sounds/kick-bass.mp3');
                audio1.play();
                break;
                
            case 's':
                audio2 = new Audio('/sounds/snare.mp3');
                audio2.play();
                break;
                
            case 'd':
                audio3 = new Audio('/sounds/tom-1.mp3');
                audio3.play();
                break;

            case 'j':
                audio4 = new Audio('/sounds/tom-2.mp3');
                audio4.play();
                break;
                
            case 'k':
                audio5 = new Audio('/sounds/tom-3.mp3');
                audio5.play();
                break;
                
            case 'l':
                audio6 = new Audio('/sounds/tom-4.mp3');
                audio6.play();
                break;
                
            default:
                console.log("bad click");
                break;    

        }
        Animation(inhtml);
    })
}

/* By keybord */

document.addEventListener("keypress", function (event){
    var key = event.key;
    
    switch(key){
        case 'w':
            audio0 = new Audio('/sounds/crash.mp3');
            audio0.play();
            break;

        case 'a':
            audio1 = new Audio('/sounds/kick-bass.mp3');
            audio1.play();
            break;
            
        case 's':
            audio2 = new Audio('/sounds/snare.mp3');
            audio2.play();
            break;
            
        case 'd':
            audio3 = new Audio('/sounds/tom-1.mp3');
            audio3.play();
            break;

        case 'j':
            audio4 = new Audio('/sounds/tom-2.mp3');
            audio4.play();
            break;
            
        case 'k':
            audio5 = new Audio('/sounds/tom-3.mp3');
            audio5.play();
            break;
            
        case 'l':
            audio6 = new Audio('/sounds/tom-4.mp3');
            audio6.play();
            break;
            
        default:
            console.log("bad click");
            break;    

    }
    Animation(key);
});

function Animation(currkey){
    var animatingElement = document.querySelector("."+currkey);
    animatingElement.classList.add("pressed");
    setTimeout(function (){
        animatingElement.classList.remove("pressed");
    }, 100);
}




