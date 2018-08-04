class ElementDetails extends HTMLElement {
    constructor(){
        super();

        const template = document.getElementById('element-details-template');
        const content = template.content;

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(content.cloneNode(true));
        console.log(content);
    }
}

customElements.define('element-details', ElementDetails);