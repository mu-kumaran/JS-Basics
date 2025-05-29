const body = document.querySelector('body');
const verseSelect = document.querySelector("select");
const poemDisplay = document.createElement("pre");
body.appendChild(poemDisplay);

verseSelect.addEventListener('change',()=>{
    const verse = verseSelect.value;
    console.log(verse)
    updateDisplay(verse);
});

function updateDisplay(verse) {

    verse = verse.replace(" ","").toLowerCase();
    const url = `${verse}.txt`;

    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        console.log(response);
        return response.text();
    })
    .then((text)=>{
        poemDisplay.textContent = text;
    })
    .catch((error)=>{
        poemDisplay.textContent = `Could not fetch verse: ${error}`;
    })
}

updateDisplay("Verse 1");
