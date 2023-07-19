var speech = window.webkitSpeechRecognition;
var recognition = new speech();

function listen() {
    document.getElementById("textbox").innerHTMl = "";
    recognition.start();
}
Webcam.set({
    width: 360,
    height: 350,
    img_format: 'png',
    png_quality: 90
});
var camera = document.getElementById("camera");
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if (content == "photo 1") {
        speak();
    }
}
function speak() {
    var synth = window.speechSynthesis
    var speakdata = "Taking your photo in 5 4 3 2 1 ";
    var Utterance = new SpeechSynthesisUtterance(speakdata);
    synth.speak(Utterance);
    Webcam.attach(camera);
    setTimeout(function () {
        selfi1 = 'photo1';
        take_snapshot();
        var speakdata = "Taking your next photo in 10 9 8 7 6 5 4 3 2 1 ";
        var Utterance = new SpeechSynthesisUtterance(speakdata);
        synth.speak(Utterance);
        save();
    }, 5000);
    setTimeout(function () {
        selfi2 = 'photo2';
        take_snapshot();
        var speakdata = "Taking your next photo in 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 ";
        var Utterance = new SpeechSynthesisUtterance(speakdata);
        synth.speak(Utterance);
        save();
    }, 10000);
    setTimeout(function () {
        selfi3 = 'photo3';
        take_snapshot();
        var Utterance = new SpeechSynthesisUtterance(speakdata);
        synth.speak(Utterance);
        save();
    }, 15000);
}


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        if (selfi1 == 'photo1') {
            document.getElementById("result1").innerHTML = '<img  id="img1" src="' + data_uri + '">';
        }
        if (selfi2 == 'photo2') {
            document.getElementById("result2").innerHTML = '<img  id="img2" src="' + data_uri + '">';
        }
        if (selfi3 == 'photo3') {
            document.getElementById("result3").innerHTML = '<img  id="img3" src="' + data_uri + '">';
        }
    });
}
function save() {
    link = document.getElementById("link");
    img = document.getElementById("img").src;
    link.href = img;
    link.click();
}

