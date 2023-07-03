"use strict";

import { copy, decrypt, encrypt } from "./controller/button.controller.js";

export const encryptTextareaLeft = document.querySelector("[data-encrypt-textarea-left]");
export const encryptTextareaRight = document.querySelector("[data-encrypt-textarea-right]");
export const buttonEncrypt = document.querySelector("[data-button-encrypt]");
export const buttonDecrypt = document.querySelector("[data-button-decrypt]");
export const encryptRight = document.querySelectorAll("[data-ecrypt-right]");
export const buttonCopy = document.querySelector("[data-button-copy]");

buttonEncrypt.addEventListener("click", () => {
  encrypt(encryptTextareaLeft.value);
});

buttonDecrypt.addEventListener("click", () => {
  decrypt(encryptTextareaLeft.value);
});

buttonCopy.addEventListener("click", () => {
  copy(encryptTextareaRight.value)
});
