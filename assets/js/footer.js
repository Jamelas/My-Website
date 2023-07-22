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