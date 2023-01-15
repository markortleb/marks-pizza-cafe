import ClassicPizzaImg from './img/classic_pizza.jpg';
import HawaiianPizzaImg from './img/hawaiian_pizza.jpg';
import BuffaloWingsImg from './img/buffalo_wings.jpg';
import OffBrandSodaImg from './img/off_brand_soda.jpeg';

function menu() {
    const contentArea = document.querySelector('.content-area');

    const classicPizzaImg = new Image();
    const hawaiianPizzaImg = new Image();
    const buffaloWingsImg = new Image();
    const offBrandSodaImg = new Image();

    classicPizzaImg.src = ClassicPizzaImg;
    hawaiianPizzaImg.src = HawaiianPizzaImg;
    buffaloWingsImg.src = BuffaloWingsImg;
    offBrandSodaImg.src = OffBrandSodaImg;

    contentArea.innerHTML = `
        <div class="menu-header">
            <h2>Menu</h2>
        </div>
        <div class="menu-category">
            <h3>Pizzas</h3>
        </div>
        <div class="menu-item">
            <h4>Classic Ortleb Family Pizza</h4>
            <p>
                The classic pizza that started it all! Comes with cheese, pepperoni, and sauce all on top of our
                signature crust.
            </p>
            <img src="${classicPizzaImg.src}" alt="">
            <div class="price-area">
                <span>14 Inch - $14.99</span>
                <span>18 Inch - $18.99</span>
                <span>22 Inch - $20.99</span>
            </div>
        </div>
        <div class="menu-item">
            <h4>Hawaiian Pizza</h4>
            <p>
                Our take on the controversial Hawaiian Pizza. This pizza is stacked with ham, bacon, pineapple,
                and jalepeño.
            </p>
            <img src="${hawaiianPizzaImg.src}" alt="">
            <div class="price-area">
                <span>14 Inch - $16.99</span>
                <span>18 Inch - $20.99</span>
                <span>22 Inch - $22.99</span>
            </div>
        </div>
        <div class="menu-category">
            <h3>Sides</h3>
        </div>
        <div class="menu-item">
            <h4>Buffalo Wings</h4>
            <p>
                The finest selected chicken wings, fried in high quality peanut oil, tossed in our hand crafted
                Buffalo Sauce. Comes with carrots and celery, and a side of Ranch or Bleu Cheese.
            </p>
            <img src="${buffaloWingsImg.src}" alt="">
            <div class="price-area">
                <span>8 Wings - $7.99</span>
                <span>12 Wings - $12.99</span>
                <span>18 Wings - $16.99</span>
            </div>
        </div>
        <div class="menu-category">
            <h3>Beverages</h3>
        </div>
        <div class="menu-item">
            <h4>Off Brand Soft Drinks</h4>
            <p>
                Off-brand soft drinks that are sure to quench your thirst.
            </p>
            <img src="${offBrandSodaImg.src }" alt="">
            <div class="price-area">
                <span>2 Liter - $2.99</span>
            </div>
        </div>
    `;


}

export default menu;