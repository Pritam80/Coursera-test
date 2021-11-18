(function (window) {
  var speakWord = "Hello ";
  var helloSpeaker={};
  name="John";
  helloSpeaker.speak = function(name) {
    console.log(speakWord + name);
  }

  window.helloSpeaker=helloSpeaker;

})(window);
