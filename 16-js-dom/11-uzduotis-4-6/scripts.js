// alert('labas')

let blokeliai = document.querySelectorAll('.blokelis');

blokeliai.forEach((blokelis) => {
    blokelis.addEventListener('click', () => {
        document.querySelector('.blokelis.active').classList.remove('active');
        blokelis.classList.add('active');
    });
});
