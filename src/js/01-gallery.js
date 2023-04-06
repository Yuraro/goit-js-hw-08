// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

const itemUl = document.querySelector('.gallery');

const marupGallery = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
    </li>`;
}).join('');

itemUl.insertAdjacentHTML('beforeend', marupGallery);

itemUl.addEventListener('click', onOpenModal);

function onOpenModal(event) {
    event.preventDefault();

    const currentItem = event.target;

    if (currentItem.nodeName !== 'IMG') {
        return;
    }

    const instance = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
    });

    instance.open({ items: galleryItems.map(item => ({ src: item.original, title: item.description })) });

    document.addEventListener('keydown', onKeyPress);

    function onKeyPress(event) {
        if (event.code === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', onKeyPress);
        }
    }
}