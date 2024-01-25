"use strict";

import * as domElement from "./js/modules/dom-elements.js";
import { encrypt, decrypt } from "./js/modules/cryptography.js";

// Function that executes the cryptography functions
function cryptographyExecutor(cryptographyFunction) {
  if (domElement.inputBox.value === "") {
    alert("Mensagem não pode ser vazia!");
    return;
  }

  if (/[A-Z]/.test(domElement.inputBox.value)) {
    alert("Mensagem não pode conter letras maiúsculas!");
    return;
  }

  domElement.messageScreen.innerHTML = cryptographyFunction;
  domElement.noMessageScreen.setAttribute("style", "display:none");
  domElement.messageScreen.removeAttribute("style");
}

// Encrypt Button
domElement.encryptButton.addEventListener("click", () => {
  cryptographyExecutor(encrypt(domElement.inputBox.value));
});

// Decrypt Button
domElement.decryptButton.addEventListener("click", () => {
  cryptographyExecutor(decrypt(domElement.inputBox.value));
});

// Copy Button
domElement.copyButton.addEventListener("click", () => {
  if (domElement.messageScreen.innerHTML === "") {
    alert("Nenhuma mensagem encontrada!");
    return;
  }

  navigator.clipboard.writeText(domElement.messageScreen.innerHTML);
  alert("Mensagem copiada!");
});
