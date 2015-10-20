var getTimeToRead = function(wpm) {
  var string = document.querySelector('p').innerHTML;
  var string2 = string.split(" ");
  wordCount = string2.length;
  var total = Math.round(wordCount/wpm);
  return total + " minutes";};



document.querySelector('h1').innerHTML+=getTimeToRead(230);
