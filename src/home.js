// import PizzaI from './img/pizza.svg';

function home() {


    const contentArea = document.querySelector('.content-area');

    contentArea.innerHTML = `
        <div class="welcome-section">
            <h2>A place for great Pizza!</h2>
            <p>
                Our signature pizzas have been developed over many years of trial and error to become one of the finest
                pizzas in all of Colorado. Our chefs use handcrafted ingredients inspired by years of culinary
                excellence to provide the finest assembled artisan pizzas. We welcome all to experience a slice of 
                fresh, savory pizza. So come on down to Mark's Pizza Cafe, and don't forget to bring your 
                taste buds.
            </p>
        </div>
        <div class="hours-section">
            <h2>Hours</h2>
            <span>Sunday: 11am - 8pm</span>
            <span>Monday: 11am - 10pm</span>
            <span>Tuesday: 11am - 10pm</span>
            <span>Wednesday: 11am - 10pm</span>
            <span>Thursday: 11am - 10pm</span>
            <span>Friday: 11am - 12am</span>
            <span>Saturday: 11am - 12am</span>
        </div>
        <div class="location-section">
            <h2>Location</h2>
            <span>123 Colorado Blvd, Denver Co, 80212</span>
        </div>
    `;


}

export default home;
