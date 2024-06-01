document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.service-item');
    const dots = document.querySelectorAll('.dot');
    const projectItems = document.querySelectorAll('.project-item');
    const projectImage = document.getElementById('mainImage');
    const contactBtn = document.getElementById('contactBtn');
    const contactForm = document.getElementById('contactForm');
    const closeBtn = document.getElementById('closeBtn');

    function updateActiveDot(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    items.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
            
            updateActiveDot(index);
        })
    })

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateActiveDot(index);
            items[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
        })
    })
    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const imageSrc = item.getAttribute('data-image');
            projectImage.src = imageSrc;
            projectItems.forEach(p => p.classList.remove('active'));
            item.classList.add('active');
        });
    });



    contactBtn.addEventListener('click', () => {
        contactForm.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        contactForm.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == contactForm) {
            contactForm.style.display = 'none';
        }
    });


});




