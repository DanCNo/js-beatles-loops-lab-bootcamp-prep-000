// add solution here
function theBeatlesPlay(musicians, instruments){
  var beatlesPlayArray = [];
  
  for (var i = 0; i < musicians.length; i++){
    beatlesPlayArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatlesPlayArray;
}

