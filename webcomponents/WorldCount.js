class WordCount extends HTMLParagraphElement{
    constructor(){
        super();
        this.wcParent = this.parentNode;

        let count = 'Words:' + this.countWords(this.wcParent);
        this.textElement = document.createElement('span');
        this.textElement.textContent = count;

        let shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.textElement);

        
       this.updateContent = this.updateContent.bind(this); 
        //update count when element count changes
        this.intervalId = setInterval(this.updateContent, 200);
    }
    
    countWords(node){
        let text = node.textContent;
        return text.split(/\s+/g).length;
    }


    updateContent()
    {
        let count = 'Words: ' + this.countWords(this.wcParent);
        this.textElement.textContent = count;
    }
    
    disconnectedCallback()
    {
        console.log("disconnected");
        clearInterval(this.intervalId);
    }
}

customElements.define('word-count', WordCount, { extends: 'p'});