class ShadowText extends HTMLElement {
  constructor() {
    super()  

    const shadow = this.attachShadow({ mode: 'open'});

    // const slot = document.createElement('slot');

    const style = document.createElement('style');
    style.textContent = `
      p {
        color: purple;
      }
    `;

    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is a styled paragraph inside the shadow DOM.';

    shadow.appendChild(style);
    // shadow.appendChild(slot);
    shadow.appendChild(paragraph);
  }
}

customElements.define('shadow-text', ShadowText);