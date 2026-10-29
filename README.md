# CV website — JSON and EJS

This project uses Express and EJS to render the CV from `data/cv.json`.

## Run locally

1. Install Node.js 20 or newer.
2. In the project folder, run:

   ```bash
   npm install
   npm start
   ```

3. Open http://localhost:3000.

## Project structure

- `data/cv.json` — CV data (name, surname, age, education, skills, languages, contacts, and more).
- `views/cv.ejs` — EJS template that receives the `cv` object from the server.
- `app.js` — Express server.
- `css/style.css` and `photo/` — existing design assets.
- `public/client.js` — small browser script for switching the profile photo.

## Deploy to Render

Create a **Web Service** from the `ErikMT2026/CV` GitHub repository and use branch `master`. Render can use the settings in `render.yaml`; the build command is `npm install` and the start command is `npm start`.