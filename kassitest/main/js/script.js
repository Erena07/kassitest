//navbar-nav
const navbarnav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick=()=>{
    navbarnav.classList.toggle('active');
};

//toggle navbar tablet-mobile
const hamburger=document.querySelector('#hamburger-menu');
document.addEventListener('click',function(x){
    if(!hamburger.contains(x.target)&&!navbarnav.contains(x.target)){
        navbarnav.classList.remove('active');
    }
});