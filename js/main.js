
$(document).ready(function(){


    $('.slider').slick({        
        infinite: true,        
        slidesToShow: 1,              
    });


    const headerBtn = document.querySelectorAll('.header-btn');
    const userPosition = document.querySelector('.header-logo-position');
    const card = document.querySelectorAll('.card');
    const about = document.querySelector('.about');
    const gallery = document.querySelector('.gallery');
    const contact = document.querySelector('.contact');


    function deactivate(){
        headerBtn.forEach(item=>{
            item.classList.remove('active');
        });

        card.forEach(item=>{
            item.classList.remove('active');        
        });
    };


    headerBtn.forEach(item=>{
        item.addEventListener('click', ()=>{
            deactivate();
            if(item.textContent == 'обо мне') about.classList.add('active');
            if(item.textContent == 'галерея') gallery.classList.add('active');
            if(item.textContent == 'контакты') contact.classList.add('active');
            item.classList.add('active');
        });
    });

    setTimeout(()=>{
        userPosition.style.transform = 'translate(0)';
    },1000);



  });






