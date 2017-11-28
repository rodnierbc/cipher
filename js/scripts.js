

function firstLastLetters(text){
  var length = text.length;//get the string length
  var firstChar = text.charAt(0);
  var lastChar = text.charAt(length-1);
  var charsUpper = (firstChar.concat(lastChar)).toUpperCase();
  return charsUpper;
}

function reverse(text){
  myStringArray = text.split('');
  myStringArray= myStringArray.reverse();
  text = myStringArray.join('');
  return text;
}

function firstLastLettersReverse(text){
  return text.concat(reverse(firstLastLetters(text)));
}
function middleChar(text){
  var middle = parseInt(parseInt(text.length)/2);//get the string length and divide by two
  var char = text.charAt(middle);
  return char.concat(firstLastLettersReverse(text));
}



$(function() {
  var sentence = prompt("Please enter a sentence.");
  var test = reverse(middleChar(sentence));
  // alert(test);

  $("#oSentence").click(function() {
    document.getElementById("printSentence").setAttribute("value", sentence );
    // $("#printSentence").value(middleChar("Testing a string"));
  });
  $("#eSentence").click(function() {
    document.getElementById("printSentence").setAttribute("value",middleChar(test) );
    // $("#printSentence").value(middleChar("Testing a string"));
  });
});
