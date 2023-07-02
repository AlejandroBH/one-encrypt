"use strict";

import { encryptTextareaRight } from "../app.js";

export const encrypt = (value) => {
  const process = value.replaceAll("a","ei");

  encryptTextareaRight.value = process;

  console.log(process);
}