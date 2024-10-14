// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Glider carousel
import Glider from 'glider-js';



new Glider(document.querySelector('.promotions .glider'), {

    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
    ,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        }
    ]
});

