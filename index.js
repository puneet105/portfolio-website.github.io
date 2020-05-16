var typed = new Typed('#typed' , {
    strings: [
        'Software Developer',
        'Cloud DevOps Engineer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed_2 = new Typed('#typed_2' , {
    strings: [
        'Some Information About Me'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});




  document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});