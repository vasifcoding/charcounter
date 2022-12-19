let inputTextArea = document.getElementById("textarea");
let charCount= document.getElementById("char-count");
let wordCount= document.getElementById("word-count");
inputTextArea.addEventListener("input",()=>{
    charCount.textContent=inputTextArea.value.length;
    let txt = inputTextArea.value.trim();
    wordCount.textContent= txt.split(/\s+/).filter((item)=>item).length
});
