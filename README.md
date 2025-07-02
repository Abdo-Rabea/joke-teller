# Joke Teller

A simple and fun web app that fetches jokes and reads them out loud using **Text-to-Speech (TTS)**! It can bring a smile to your face, one joke at a time.

---
## Features

- Fetches random jokes from a public joke API
- Uses the browser’s **Text-to-Speech** to read the joke aloud
- Handles single-part and two-part jokes (setup + punchline)
- User-friendly and responsive UI

---
##  Screenshot

![Screenshot](assets/screenshot_app.png)  

---

## Live Demo

👉 [Click here to try it](https://abdo-rabea.github.io/joke-teller)  

---

## How It Works

1. Click the **"Tell Me a Joke"** button
2. The app fetches a random joke from an API like [JokeAPI.dev](https://sv443.net/jokeapi/v2/)
3. It uses the Text-to-speech (TTS) API -[Voice RSS](https://www.voicerss.org/api/)- to get the audio.
4. The button disables while reading, and re-enables after the joke is done.

---
##  Technologies Used

- HTML5 + CSS3
- Vanilla JavaScript (no frameworks)
- Text-to-speech (TTS) API -[Voice RSS](https://www.voicerss.org/api/)
- [JokeAPI](https://jokeapi.dev/)

---
## Setup
To run locally:
```bash
git clone https://github.com/abdo-rabea/joke-teller.git
cd joke-teller
open index.html

Or use Live Server in VS Code.

```
