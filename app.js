"use strict";

import { copy, decrypt, encrypt, removeAccent } from "./controllers/button.controller.js";
import { createCredits } from "./controllers/template.controller.js";

export const encryptTextareaLeft = document.querySelector("[data-encrypt-textarea-left]");
export const encryptTextareaRight = document.querySelector("[data-encrypt-textarea-right]");
export const buttonEncrypt = document.querySelector("[data-button-encrypt]");
export const buttonDecrypt = document.querySelector("[data-button-decrypt]");
export const encryptRight = document.querySelectorAll("[data-ecrypt-right]");
export const alertCopy = document.querySelector("[data-alert-copy]");
export const buttonCopy = document.querySelector("[data-button-copy]");
export const buttonCredits = document.querySelector("[data-button-credits]");
export const bodyPage = document.querySelector("body");
export const credits = document.querySelector(".credits");

alertCopy.style.display = "none";

encryptTextareaLeft.addEventListener("keypress", (e) => {
  const forbidden = "áéíóúÁÉÍÓÚ";
  if (forbidden.includes(e.key)){
    e.preventDefault();
  }
});

buttonEncrypt.addEventListener("click", () => {
  const text = removeAccent(encryptTextareaLeft.value);
  encrypt(text);
});

buttonDecrypt.addEventListener("click", () => {
  const text = removeAccent(encryptTextareaLeft.value);
  decrypt(text);
});

buttonCopy.addEventListener("click", () => {
  copy(encryptTextareaRight.value);
});

buttonCredits.addEventListener("click", () => {
  bodyPage.style.overflow = "hidden";
  createCredits();
  credits.style.display = "flex";
  const buttonClose = document.querySelector("[data-button-close]");
  buttonClose.addEventListener("click", () => {
    bodyPage.style.overflow = "auto";
    credits.style.display = "none";
  });
});
