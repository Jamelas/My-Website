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
    <link rel="stylesheet" href="assets/css/about.css"/>
    <link rel="stylesheet" href="assets/css/projects.css"/>
    <link rel="stylesheet" href="assets/css/contact.css"/>
    
    <!-- Favicons -->
    <link rel="icon" type="image/png" sizes="32x32" href="assets/icons/JD.png"/>
    `;
  }
}

customElements.define('head-component', Head);
