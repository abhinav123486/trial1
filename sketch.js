window.onload = function() {
var audioContext = new AudioContext();
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var oscillator = new OscillatorNode(audioCtx);
    oscillator.start();
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(400, audioCtx.currentTime);
    oscillator.connect(audioCtx.destination);
}