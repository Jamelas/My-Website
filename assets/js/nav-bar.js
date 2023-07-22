class NavBar extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
    <nav>
      <div class="nav-h1"><a href="index.html"><h1>Jamie Douglas</h1></a></div>
        <ul class="navigation">
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#skills" class="nav-link">Skills</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="contact.html" class="nav-link">Contact</a></li>
      </ul>
      <button class="burger-menu" id="burger-menu">
        <ion-icon class="bars" name="menu-outline"></ion-icon>
      </button>
    </nav>
    `;
  }
}

customElements.define('navigation-component', NavBar);
