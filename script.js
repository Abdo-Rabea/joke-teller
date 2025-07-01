const audioElement = document.getElementById("audio");
const jokeBtn = document.getElementById("joke-button");

// VoiceRSS Speech Function
function tellMe(joke) {
  const jokeString = joke.trim().replace(/ /g, "%20");
  // VoiceRSS Speech Parameters
  VoiceRSS.speech({
    // Normally, don't write out API Keys like this, but an exception made here because it's free.
    key: "e985f868e96c46d9b0789c3855350152",
    src: jokeString,
    hl: "en-us",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}
function startloadingJoke() {
  jokeBtn.disabled = true;
}

async function getJoke() {
  const apiURL = "https://v2.jokeapi.dev/joke/Programming";
  let joke = "";
  try {
    startloadingJoke();
    const res = await fetch(apiURL);
    const data = await res.json();
    console.log(data);
    if (data.type == "single") {
      joke = data.joke;
    } else {
      joke = `${data.setup} ... ${data.delivery}`;
    }

    // calling speach api to speach joke
    tellMe(joke);
  } catch (error) {
    console.log(error);
  }
}
// event listners
// audioElement.onplay = () => {
//   jokeBtn.disabled = true;
// };
audioElement.onended = () => {
  jokeBtn.disabled = false;
};
jokeBtn.onclick = getJoke;
