const btn = document.querySelector(".start");
const content = document.querySelector(".content");


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
var voices = window.speechSynthesis.getVoices();



recognition.onstart = function() {
    // console.log('voice is activated, yey ');
};

recognition.onspeechend = function(){
    // console.log('event1');
    btn.classList.remove('effect');
};

recognition.onresult = function(){
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
    
};

btn.addEventListener('click', function (){
    
    btn.classList.add('effect');
    recognition.start();
    // setTimeout(function(){
    //     btn.classList.remove('effect');
    // }, 6000);
});

function readOutLoud (message){
    const speech = new SpeechSynthesisUtterance();
    
    voices = window.speechSynthesis.getVoices();
    // console.log(voices);
    // console.log (voices[1]);
    speech.voice = voices[4];
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    // speech.pitch = 0.2;

    window.speechSynthesis.speak(speech);

};