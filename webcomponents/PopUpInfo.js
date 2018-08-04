/**
 * <span class='wrapper'> --wrapper
 *      <span class='icon', tableindex='0'>--icon
 *          <img src={imgUrl} />
 *      </span>
 *      <span class='info' text={text} />
 * </span>
 */

class PopUpInfo extends HTMLElement {
    constructor(){
        super();

        let wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');
        let icon = document.createElement('span');
        icon.setAttribute('class', 'icon');
        icon.setAttribute('tableindex', 0);

        let info = document.createElement('span');
        info.setAttribute('class', 'info');

        let text = this.getAttribute('text');//passed in attribute during creation
        info.textContent = text;

        let imgUrl = this.hasAttribute('img') ? this.getAttribute('img') : 'img/alt.png';

        let img = document.createElement('img');
        img.src = imgUrl;
        img.width="32";
        img.setAttribute('height', '32');
        icon.appendChild(img);

        let style = document.createElement('style');
        style.textContent = 
        `.wrapper { 
            position: relative;' 
        }
        .info {
            font-size: 0.8rem;
            width: 200px;
            display: inline-block;
            border: 1px solid black;
            padding: 10px;
            background: white;
            border-radius: 10px;
            opacity: 0;
            transition: 0.6s all;
            position: absolute;
            bottom: 20px;
            left: 10px;
            z-index: 3;
        }

        .img {
            width: 1.2rem;
        }
        
        .icon:hover + .info, .icon:focus + .info {
            opacity: 1;
        }
    `;

        let shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);
    }
}

customElements.define('popup-info', PopUpInfo);
