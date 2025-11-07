class MiBoton extends HTMLElement {
  constructor() {
    super();

    // Inicialización
    this.addEventListener('click', () => {
      this.toggleAttribute('activado');
      this.dispatchEvent(new CustomEvent('mi-clic', {
        bubbles: true,
        detail: { tiempo: new Date() }
      }));
    });
  }

  // Ciclo de vida: cuando el elemento se añade al DOM
  connectedCallback() {
    console.log('Elemento añadido al DOM');
  }
}

// Registrar el elemento
customElements.define('mi-boton', MiBoton);
