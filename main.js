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
    if (content == "take my photo") {
        speak();

    }
}
function speak() {
    var synth = window.speechSynthesis
    var speakdata = "Taking your photo in 5 4 3 2 1";
    var Utterance = new SpeechSynthesisUtterance(speakdata);
    synth.speak(Utterance);
    Webcam.attach(camera);
    setTimeout(function () {
        take_snapshot();
        save();
    }, 5000);

}


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("display").innerHTML = '<img  id="img" src="' + data_uri + '">';
    });
}
function save() {
    link = document.getElementById("link");
    img = document.getElementById("img").src;
    link.href = img;
    link.click();
}

