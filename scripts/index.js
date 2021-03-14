$navBar=document.querySelector(".header__navBar");
$icon_navBar=document.querySelector(".header__iconMobile");
$navBar_mobile= document.querySelector(".header__navMobile");

let isOpen = false;
$navBar_mobile.style.display = 'none';

function handle_iconNavBar(){
    if(isOpen){
        $navBar_mobile.style.display = 'none';
    } else {
        $navBar_mobile.style.display = 'flex';
    }
    isOpen = !isOpen;
    
     
        
}

$icon_navBar.addEventListener('click', handle_iconNavBar);
console.log($navBar);
console.log($icon_navBar);