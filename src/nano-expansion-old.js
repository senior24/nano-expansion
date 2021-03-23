/*!
 * NanoExpansion v1.0.2
 * Simple vanilla javascript Accordion library
 * https://github.com/mcanam/nano-expansion
 * 
 * Copyright (c) mcanam
 * Published under MIT License
 */

import "./nano-expansion.scss";

class NanoExpansion {
  constructor({ wrapper = "", duration = 0.2, autoFolding = false }) {
    this.duration = duration;
    this.isAutoFolding = autoFolding;

    try {
      this.wrapper = document.querySelector(wrapper);
      if (this.wrapper.length === 0) return console.error("NanoExpansion: Wrapper element not found!");
    } catch (err) {
      return console.error("NanoExpansion: The wrapper id's cannot be empty!");
    }

    this.expansions = this.wrapper.querySelectorAll(".nano-expansion");
    if (this.expansions.length === 0) return console.error("NanoExpansion: Expansion element not found!");

    this.expansions.forEach((expansion, index) => {
      const expansionToggle = expansion.children[0];
      expansionToggle.addEventListener("click", this.evenHandler.bind(this), false);
      expansionToggle.style.transition = this.duration + "s";
      expansion.setAttribute("open", "no");
      expansion.setAttribute("index", index);
      expansion.style.maxHeight = expansionToggle.scrollHeight + "px";
      expansion.style.transition = "max-height " + this.duration + "s";
    });
  }

  evenHandler(e) {
    const parent = e.target.parentElement;

    if (this.isAutoFolding) { 
      for (let i = 0; i < this.expansions.length; i++) {
        if (i !== parseInt(parent.getAttribute("index"))) { this.hideExpansion(this.expansions[i]) }
      }
    }

    if (parent.getAttribute("open") === "no") {
      this.showExpansion(parent);
    } else {
      this.hideExpansion(parent);
    }
  }

  showExpansion(element) {
    const expansionToggle = element.children[0];
    expansionToggle.classList.add("active");
    element.style.maxHeight = element.scrollHeight + "px";
    element.setAttribute("open", "yes");
  }

  hideExpansion(element) {
    const expansionToggle = element.children[0];
    expansionToggle.classList.remove("active");
    element.style.maxHeight = expansionToggle.scrollHeight + "px";
    element.setAttribute("open", "no");
  }
}

export default NanoExpansion;