import React from 'react';

import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'images/271-final-project.png',
      thumbnail: 'images/271-final-project.png',
      description: `The Final Project for 271 Computer Architecture (2023)`,
      originalHeight: '450px',
    },
    {
        original: 'images/bonnaroo-2016.jpg',
        thumbnail: 'images/bonnaroo-2016.jpg',
        description: `Art wall seen during the 2016 Bonnaroo  music festival (2016)`,
        originalHeight: '450px',
    },
    {
        original: 'images/DC-MET.jpg',
        thumbnail: 'images/DC-MET.jpg',
        description: `Painting seen at the Met in Washington DC (2018)`,
        originalHeight: '450px',
    },
    {
        original: 'images/eiffel-tower.jpg',
        thumbnail: 'images/eiffel-tower.jpg',
        description: `The Eiffel Tower(2015)`,
        originalHeight: '450px',
    },
    {
        original: 'images/golden-gates-london.jpg',
        thumbnail: 'images/golden-gates-london.jpg',
        description: `The Golden Gates(2014)`,
        originalHeight: '450px',
    },
    {
        original: 'images/NYC-2017.png',
        thumbnail: 'images/NYC-2017.png',
        description: `The Halal Guys NYC(2017)`,
        originalHeight: '450px',
    },
    {
        original: 'images/python-checkers-project.png',
        thumbnail: 'images/python-checkers-project.png',
        description: `CS 162 Final Project(2023)`,
        originalHeight: '450px',
    },
    {
        original: 'images/raiders-vegas-trip.jpg',
        thumbnail: 'images/raiders-vegas-trip.jpg',
        description: `Allegiant stadium(2021)`,
        originalHeight: '450px',
    },
    {
        original: 'images/vincent-moma.jpg',
        thumbnail: 'images/vincent-moma.jpg',
        description: `Vincent van Gogh MOMA(2017)`,
        originalHeight: '450px',
    },
]

function GalleryPage() {
    return (
        <>
        <h2>Gallery</h2>
        <article class="gallery">
            <ImageGallery items={images} />

        </article>
         </>
    );
}

export default GalleryPage;
