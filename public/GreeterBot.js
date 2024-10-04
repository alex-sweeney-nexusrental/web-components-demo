class GreeterBot extends HTMLElement {
 /* runs when element is created */
 constructor () {
  super();
  this.greeting = 'stranger';
 }

 /* runs each time element is appended to or moved in DOM */
 connectedCallback() {
  this.textContent = `🤖 hello ${this.greeting}`;
  console.log('connectedCallback triggered')
 }

 /* runs when element is removed from DOM */
 disconnectedCallback() {
  console.log('diconnected')
 }

 // properties to observe
 static get observedAttributes() {
  return ['greeting']
 }

 attributeChangedCallback(property, oldValue, newValue) {
    console.log('attribute changed', newValue)
    if (newValue.length === 0) {
      newValue = 'stranger';
    }

    this[ property ] = newValue;
    this.textContent =  `🤖 hello ${this.greeting}`;
  }
}

/* register class */
if ('customElements' in window) {
  customElements.define('greeter-bot', GreeterBot)
}