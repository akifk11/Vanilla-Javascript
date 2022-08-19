const wordText = document.querySelector(".word")
const hintText = document.querySelector(".hint span")
const inputField = document.querySelector("input")
const refreshBtn = document.querySelector(".ref")
const checkBtn = document.querySelector(".check")
const timeText = document.querySelector(".time span")

let correctWord, init;
const initTimer = maxtime => {
    timer = setInterval(() => {
        clearInterval(timer)
        if (maxtime > 0) {
            maxtime--;
            return timeText.innerHTML = maxtime
        }
        clearInterval(timer)
        alert(`Time off! ${correctWord} doğru kelime`)
        initGame()
    }, 1000)
}

const initGame = () => {
    initTimer(30)
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerHTML = wordArray.join("")
    hintText.innerHTML = randomObj.hint
    correctWord = randomObj.word.toLowerCase();
    inputField.value = ""
    inputField.setAttribute("maxlength", correctWord.length)
    console.log(randomObj);

}
initGame();
const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase()
    if (!userWord) return alert("please enter a word")
    if (userWord !== correctWord) { alert(`Oooops! ${userWord} is not correct`) }
    initGame()
    console.log(userWord)
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);