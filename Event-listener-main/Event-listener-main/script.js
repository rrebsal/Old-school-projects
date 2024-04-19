var inpt = document.querySelector(".mc");

var body = document.querySelector("body");

inpt.addEventListener('keyup', function(event) {
    if(event.target.value == "steve") {
        body.style.backgroundImage = "url('img/steve.gif')"
    }
    else if(event.target.value == "creeper") {
        body.style.backgroundImage = "url('img/creeper.gif')"
    }
    else if(event.target.value == "enderman") {
        body.style.backgroundImage = "url('img/enderman.gif')"
    }
    else if(event.target.value == "skeleton") {
        body.style.backgroundImage = "url('img/skeleton.gif')"
    }
    else if(event.target.value == "herobrine") {
        body.style.backgroundImage = "url('img/herobrine.gif')"
    }
    else {
        document.body.style.backgroundImage = "";
    }
})