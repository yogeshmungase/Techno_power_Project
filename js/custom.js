// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// owl carousel slider js
var owl = $('.portfolio_carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    center: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        576: {
            items: 2
        },
        991: {
            center: true,
            items: 3
        }
    }
})


// owl.owlcarousel2_filter

$('.owl-filter-bar').on('click', '.item', function (e) {
    var $items = $('.owl-filter-bar a')
    var $item = $(this);
    var filter = $item.data('owl-filter')
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);

    e.preventDefault();
})
/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});

// clinet section start
document.addEventListener('DOMContentLoaded', function () {
    const logos = document.querySelector('.client-logos');
    const logoWidth = document.querySelector('.client-logo').clientWidth;
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    let offset = 0;
    let interval;

    const slideLogos = () => {
      if (offset >= (logos.scrollWidth - logos.clientWidth)) {
        offset = 0; // Reset to the beginning for infinite loop
      } else {
        offset += logoWidth;
      }
      logos.style.transform = `translateX(-${offset}px)`;
    };

    arrowLeft.addEventListener('click', () => {
      if (offset > 0) {
        offset -= logoWidth;
        logos.style.transform = `translateX(-${offset}px)`;
      }
    });

    arrowRight.addEventListener('click', () => {
      if (offset < (logos.scrollWidth - logos.clientWidth)) {
        offset += logoWidth;
        logos.style.transform = `translateX(-${offset}px)`;
      }
    });

    logos.addEventListener('click', (e) => {
      if (e.target.closest('.client-logo')) {
        const url = e.target.closest('.client-logo').dataset.url;
        window.open(url, '_blank');
      }
    });

    interval = setInterval(slideLogos, 3000); // Set the interval for auto-slide to 6 seconds

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        clearInterval(interval);
      } else {
        interval = setInterval(slideLogos, 3000);
      }
    });
  });
// clinet section end