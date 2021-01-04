const btn = document.querySelector(".start");
const content = document.querySelector(".content");


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
var voices = window.speechSynthesis.getVoices();

const default1 = ['i did not understand what you said', 'sorry can you say it again please' , ' sorry can you repeat please' , ' i am sorry i dont know what you are talking about']


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
    // console.log('this is working');
    
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
    // console.log(speech);
    
    voices = window.speechSynthesis.getVoices();
    // console.log(voices);
    // console.log (voices[1]);
    speech.voice = voices[4];
    speech.text = default1[Math.floor(Math.random() * default1.length)];
    if (message.includes('hello' || 'hi' || 'hai' || 'hey')){
        const newtext = 'hello i am friday  its nice to meet you';
        speech.text = newtext;
    }
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

};