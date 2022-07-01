function burger(){
    let responsive = document.querySelector('.responsive-menu');
    let sideNav = document.querySelector('.sideNav');
    responsive.addEventListener('click', function(){
        
        sideNav.classList.toggle('active');
    })
    
}
