const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector(".result");
const sound = document.getElementById("audio-sound");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let input = document.getElementById("input").value;
  fetch(url + input)
    .then((response) => response.json())
    .then((data) => {
      let meanings = data[0].meanings[0];
      let phonetics = data[0].phonetics[0];
      result.innerHTML = `
            <div class="word">
                <h4>${input}</h4>
                <button onclick="playSound()">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
            </div>
            <div class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </div>
            <div class="word-example">
                ${data[0].meanings[0].definitions[0].example || ""}
            </div> `;
      sound.setAttribute("src", `https: ${data[0].phonetics[0].audio}`);
    });
});

function playSound() {
  sound.play();
}
