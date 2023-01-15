// import PizzaI from './img/pizza.svg';
import home from './home';
import menu from './menu';
import contact from './contact';

function init() {
    // const fatImg = new Image();
    // fatImg.src = FatImg;

    document.body.innerHTML = `
        <div class="header">
            <div class="header-top">
                <h1>Ortleb Family Pizza</h1>
            </div>
            <div class="header-bottom">
                <div class="tab active" id="home">
                    <span>Home</span>
                </div>
                <div class="tab" id="menu">
                    <span>Menu</span>
                </div>
                <div class="tab" id="contact">
                    <span>Contact</span>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-area"></div>
        </div>
        <div class="footer">
            <span>Author: Mark Ortleb</span>
        </div>
    `;

    home();

    document.querySelector('#home').addEventListener('click', e => {
        home();
        document.querySelector('#home').classList.add('active');
        document.querySelector('#menu').classList.remove('active');
        document.querySelector('#contact').classList.remove('active');
    });
    document.querySelector('#menu').addEventListener('click', e => {
        menu();
        document.querySelector('#home').classList.remove('active');
        document.querySelector('#menu').classList.add('active');
        document.querySelector('#contact').classList.remove('active');
    });
    document.querySelector('#contact').addEventListener('click', e => {
        contact();
        document.querySelector('#home').classList.remove('active');
        document.querySelector('#menu').classList.remove('active');
        document.querySelector('#contact').classList.add('active');
    });
}

export default init;
