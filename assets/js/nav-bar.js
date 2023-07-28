class NavBar extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
    <div class="nav-behind">
      <nav>
        <div class="nav-h1"><a href="index.html"><h1>Jamie Douglas</h1></a></div>
          <ul class="navigation">
          <li><a href="index.html" class="nav-link">About</a></li>
          <li><a href="projects.html" class="nav-link">Projects</a></li>
          <li><a href="contact.html" class="nav-link">Contact</a></li>
        </ul>
        <button class="burger-menu" id="burger-menu">
          <ion-icon class="bars" name="menu-outline"></ion-icon>
        </button>
      </nav>
    </div>
    `;
  }
}

customElements.define('navigation-component', NavBar);


const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const navLink = document.querySelectorAll(".nav-link");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);


