function alertBox(){
alert("Hello, World!");
}
function sizeIncrease(){
    document.getElementById("textarea").style.fontSize= "24pt";
}
function radioButton(){
 const boldText = document.getElementById("textarea");
 const radioAction = document.getElementById("fancy");
 const boringAction =document.getElementById("boring");

 //alert("Changing to bold");

 if(radioAction.checked){
    boldText.style.fontWeight = "bold";
    boldText.style.color = "blue";
    boldText.style.textDecoration = "underline";
 }  
 else if(boringAction.checked){
    //alert("Changing back to normal");
    boldText.style.fontWeight = "normal";
    boldText.style.color = "black";
    boldText.style.textDecoration = "none";

 }
}
function upText(){
    const upCase = document.getElementById("textarea");
    let text = upCase.value; // Get text
    // Splits based on period
    let sentences = text.split('. ');
    // array to process sentence 
    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i].trim();// remove extra whitespace
        if (sentence.length > 0) {
            if (sentence.endsWith('.')) { 
                sentence = sentence.slice(0, -1); // Remove the last period
            }
            sentences[i] = sentence.toUpperCase() + "-Moo"; // Makes to uppercase
        }
    }// Joins the sentences and adds period. 
    upCase.value = sentences.join('. ') + '.'; 
 }