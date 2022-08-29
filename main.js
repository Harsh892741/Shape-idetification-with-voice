x = 0;
y = 0;
draw_circle = "";
draw_rec = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "system is listening";
    Recognition.start();
}

Recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "the speech has been recognised as "+content;
    if(content=="circle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "started drawing circle";
        draw_circle = "set";
    }

    if(content=="rectangle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "started drawing rectangle";
        draw_rec = "set";
    }
}

function setup(){
    canvas = createCanvas(900, 600);
}

function draw(){
    if(draw_circle=="set"){
        radius = Math.floor(Math.random()*100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "circle is drawn";
        draw_circle = "";
    }

    if(draw_rec=="set"){
        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML = "Rectangle is drawn";
        draw_rec = "";
    }
}