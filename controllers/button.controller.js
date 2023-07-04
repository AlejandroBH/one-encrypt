"use strict";

import { alertCopy, buttonCopy, buttonDecrypt, buttonEncrypt, encryptRight, encryptTextareaLeft, encryptTextareaRight } from "../app.js";

export const encrypt = (value) => {
  if (value != "") {
    const process = value
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat")
      .replaceAll(" ", "stdq");
    encryptTextareaRight.value = process;
    buttonEncrypt.classList.add("button--active");
    buttonDecrypt.classList.remove("button--active");
    encryptRight[0].classList.add("encrypt-right--active");
    encryptRight[1].classList.remove("encrypt-right--active");
    alertCopy.style.display = "none";
    buttonCopy.focus();
  } else {
    encryptTextareaLeft.focus();
  }
};

export const decrypt = (value) => {
  if (value != "") {
    const process = value
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u")
      .replaceAll("stdq", " ");
    encryptTextareaRight.value = process;
    buttonEncrypt.classList.remove("button--active");
    buttonDecrypt.classList.add("button--active");
    encryptRight[0].classList.add("encrypt-right--active");
    encryptRight[1].classList.remove("encrypt-right--active");
    alertCopy.style.display = "none";
    buttonCopy.focus();
  } else {
    encryptTextareaLeft.focus();
  }
};

export const copy = (value) => {
  navigator.clipboard.writeText(value);
  encryptTextareaLeft.value = value;
  alertCopy.style.display = "flex";
}

export const removeAccent = (value) => {
  const process = value
    .toLowerCase()
    .replaceAll("á","a")
    .replaceAll("é","e")
    .replaceAll("í","i")
    .replaceAll("ó","o")
    .replaceAll("ú","u")
    return process;
}
