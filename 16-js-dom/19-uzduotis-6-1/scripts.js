let backButton = document.querySelector('.content .image-shown .back-image')
let forwardButton = document.querySelector('.content .image-shown .forward-image')

let photoNow = 1
let allPhotos = 5

backButton.addEventListener('click' , () => {
    if (photoNow == 1) {
        photoNow = allPhotos
    } else {
        photoNow --
    }

    document.querySelector('.spooted-images.active').classList.remove('active');
    document.querySelector('.spooted-images:nth-child(' + photoNow + ')').classList.add('active');

    document.querySelector('.other-image.active').classList.remove('active');
    document.querySelector('.other-image:nth-child(' + photoNow + ')').classList.add('active');
})

forwardButton.addEventListener('click' , () => {
    if (photoNow == allPhotos) {
        photoNow = 1
    } else {
        photoNow ++
    }

    document.querySelector('.spooted-images.active').classList.remove('active');
    document.querySelector('.spooted-images:nth-child(' + photoNow + ')').classList.add('active');

    document.querySelector('.other-image.active').classList.remove('active');
    document.querySelector('.other-image:nth-child(' + photoNow + ')').classList.add('active');
})
// o cia veike ant other-image uzdejus active