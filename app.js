"use strict";

import { encrypt } from "./controller/encrypt.controller.js";

export const encryptTextareaLeft = document.querySelector("[data-encrypt-textarea-left]");
export const encryptTextareaRight = document.querySelector("[data-encrypt-textarea-right]");
export const buttonEncrypt = document.querySelector("[data-button-encrypt]");
export const buttonDecrypt = document.querySelector("[data-button-decrypt]");
export const buttonCopy = document.querySelector("[data-button-copy]");

buttonEncrypt.addEventListener("click", () => {
  encrypt(encryptTextareaLeft.value);
});