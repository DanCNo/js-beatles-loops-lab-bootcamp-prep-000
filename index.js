// add solution here
function theBeatlesPlay(musiciansArray, instrumentsArray){
  var beatlesPlayArray = [];
  
  for (var i = 0; i < musiciansArray.length - 1; i++){
    beatlesPlayArray.push(`${musciansArray[i]} plays ${instrumentsArray[i]}`);
  }
  return beatlesPlayArray;
}

