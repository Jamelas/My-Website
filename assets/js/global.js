/* ----- Head -----*/
class Head extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
    
    <!-- CSS Styles -->
    <link rel="stylesheet" href="assets/css/styles.css"/> 
    <link rel="stylesheet" href="assets/css/nav-bar.css"/> 
    <link rel="stylesheet" href="assets/css/footer.css"/> 

    <link rel="stylesheet" href="assets/css/index.css"/>
    <link rel="stylesheet" href="assets/css/projects.css"/>
    <link rel="stylesheet" href="assets/css/contact.css"/>
    
    <!-- Favicons -->
    <link rel="icon" type="image/png" sizes="32x32" href="assets/icons/JD.png"/>
    `;
  }
}

customElements.define('head-component', Head);


/* ----- Nav -----*/
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


/* ----- Footer -----*/
class Footer extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
    <footer>
      <p>Find me on social media.</p>    
      <a href="https://www.github.com/jamelas" target="_blank"><i class="devicon-github-original"></i></a>
      <a href="https://www.linkedin.com/in/jamie-eion-douglas/" target="_blank"><i class="devicon-linkedin-plain"></i></a>        
      <hr/>
      <p>This site was created by Jamie Douglas</p>
    </footer>
    `;
  }
}

customElements.define('footer-component', Footer);