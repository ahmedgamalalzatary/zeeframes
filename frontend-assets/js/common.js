document.addEventListener('DOMContentLoaded', function () {
    const toggleHeader = document.getElementById('toggleHeader');
    const mobileMenu = document.getElementById('mobile-menu');

    toggleHeader.addEventListener('click', function () {
        mobileMenu.classList.toggle('shown');
        if (mobileMenu.classList.contains('shown')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
});