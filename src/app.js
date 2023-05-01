class RandomQuoteGenerator extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
  
      const template = `
        <style>
          :host {
            display: block;
            width: 80%; /* sesuaikan lebar kotak quotes */
            margin: auto;
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translate(-50%, 50%);
            text-align: center;
            padding: 20px;
            border-radius: 8px;
            background-color: #FFEAD2;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
          }        
             
          h3 {
            font-size: 18px;
            font-weight: 400;
            margin-top: 20px;
            margin-bottom: 0;
          }
  
          button {
            margin-top: 20px;
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            background-color: #ACB1D6;
            border: none;
            border-radius: 4px;
            padding: 10px 20px;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
          }
  
          button:hover {
            background-color: #DBDFEA;
          }
        </style>
  
        <div class="container">
          <p id="quote">Loading...</p>
          <h3 id="author"></h3>
          <button id="btn">Get Quote</button>
        </div>
      `;
  
      this.shadowRoot.innerHTML = template;
  
      this.quoteElement = this.shadowRoot.querySelector("#quote");
      this.authorElement = this.shadowRoot.querySelector("#author");
      this.buttonElement = this.shadowRoot.querySelector("#btn");
  
      this.buttonElement.addEventListener("click", this.getQuote.bind(this));
      this.getQuote();
    }
  
    async getQuote() {
      const url = "https://api.quotable.io/random";
      const response = await fetch(url);
      const data = await response.json();
  
      this.quoteElement.textContent = data.content;
      this.authorElement.textContent = `- ${data.author}`;
    }
  }
  
  customElements.define("random-quote-generator", RandomQuoteGenerator);
  