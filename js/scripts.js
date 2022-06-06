$(document).ready(function() {
  $("form#word").submit(function (event) {
    event.preventDefault();
    const sentence = $("#sentence").val();
    
    const copySentence = sentence.split();
    let newSentence = [];
    newSentence.push(copySentence);
    console.log(copySentence); 
    
  });
}); 

// const array = [0,1,2,3,4,5];
// let doubledArray = [];
// array.forEach(function(element) {
//   doubledArray.push(element * 2);
// });
// doubledArray;