const textArea = document.getElementById("text-area")
const characterCount = document.getElementById("character-count")
const wordCount = document.getElementById("word-count")
const longestWordDisplayed = document.getElementById("longest-word")
const resetBtn = document.getElementById("reset")

textArea.addEventListener("input", count)
resetBtn.addEventListener("click", clearContent)

function count() {

    const text = textArea.value
    // regexr.com
    //match all empty spaces and remove them
    characterCount.textContent = text.replace(/\s+/g, "").length
    //match all words
    const matchedWords = text.match(/(\w+)/g)
    wordCount.textContent = matchedWords.length
    const longestWord = matchedWords.sort((first,second) => second.length - first.length)[0]
    longestWordDisplayed.textContent = longestWord

}

function clearContent(){

    textArea.value=""
    characterCount.textContent=""
    wordCount.textContent=""
    longestWordDisplayed.textContent=""

}