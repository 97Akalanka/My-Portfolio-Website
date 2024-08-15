var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }


    const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.carousel-control.next');
const prevButton = document.querySelector('.carousel-control.prev');
const dots = document.querySelectorAll('.carousel-dot');
let currentIndex = 0;

const updateDots = () => {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
};

const moveToSlide = (index) => {
    track.style.transform = 'translateX(-' + index * 100 + '%)';
    currentIndex = index;
    updateDots();
};

nextButton.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
        moveToSlide(currentIndex + 1);
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        moveToSlide(currentIndex - 1);
    }
});

// the first dot as active
updateDots();

