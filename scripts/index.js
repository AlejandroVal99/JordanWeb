//Mobile navigation menu--> Header
$navBar = document.querySelector(".header__navBar");
$icon_navBar = document.querySelector(".header__iconMobile");
$navBar_mobile = document.querySelector(".header__navMobile");

let isOpen = false;
$navBar_mobile.style.display = 'none';

function handle_iconNavBar() {
    if (isOpen) {
        $navBar_mobile.style.display = 'none';
        document.body.style.overflowY = 'scroll';
    } else {
        $navBar_mobile.style.display = 'flex';
        document.body.style.overflow = 'hidden';

    }
    isOpen = !isOpen;
}

$icon_navBar.addEventListener('click', handle_iconNavBar);
console.log($navBar);
console.log($icon_navBar);

//Gallery image--> Buy now



$mainImage = document.querySelector(".buyNow__main");
$otherImages = document.querySelectorAll(".buyNow__slide");

$otherImages.forEach(img => {
    const handle_imgGallery= () => {
        const imgSrc=img.getAttribute('src');
        $mainImage.setAttribute('src',imgSrc);
    }

    img.addEventListener('click',handle_imgGallery);
});


//Design interaction
$mainContain = document.querySelector(".design__main");
// $jumpmanContain= document.querySelector(".design__jumpman");
// $tinkerContain=document.querySelector(".design__tinker");
// $printContain=document.querySelector('.design__print');
$pointsSelect=document.querySelectorAll('.design__point');
$otherSections=document.querySelectorAll('.design__section');

$pointsSelect.forEach(point=>{
    const handle_pointSelect=()=>{
        const nameSection = point.getAttribute('data-section');
        const sectionContainer = document.querySelector(`.design__${nameSection}`);

        $mainContain.style.display="none";
        sectionContainer.style.display="flex";
        console.log(sectionContainer);

    }
    point.addEventListener('click',handle_pointSelect);
})

$otherSections.forEach(otherSection=>{
    const handle_otherSection=()=>{
        const sectionContainer = otherSection;

        sectionContainer.style.display='none';
        $mainContain.style.display="flex";

        console.log(sectionContainer);
    }

    otherSection.addEventListener('click',handle_otherSection);
})
