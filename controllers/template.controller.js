"use strict";

import { credits } from "../app.js";

export const createCredits = () => {
  const templateCredit = `
  <div class="credits-content">
    <h2 class="credits-content__title">Desarrollado por A. Barrera</h2>
    <p class="credits-content__subtitle">Oracle Next Education G3 - 2022</p>
    <div class="credits-content__network">
      <a target="_blank" href="https://github.com/AlejandroBH"><img class="credits-content__icon" src="assets/images/social/github.svg" alt="Icono github"></a>
      <a target="_blank" href="https://www.linkedin.com/in/alejandro-bh91/"><img class="credits-content__icon" src="assets/images/social/linkedIn.svg" alt="Icono linkedIn"></a>
    </div>
    <div class="credits-content__buttons">
      <button class="button" data-button-close>Aceptar</button>
    </div>
  </div>
  `;
  credits.innerHTML = templateCredit;
}
