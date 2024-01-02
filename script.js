
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];


// Unsplash API
const count = 10;
const apiKey = 'zW50gQun7Itc84E1NZgcnT5zmoAdkpJhSyaDNC2KKQk';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;



// Helper function to set Attributes on DOM Elements
function setAttribute(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create Elements For LInks & Photos, add to DOM

function displayPhotos() {
    // RUn function for each object in photosArray
    photosArray.forEach((photo) => {
        // Creat <a> to link to Unsplash
        const item = document.createElement('a');       
       setAttribute(item, {
        href: photo.links.html,
        target: '_blank',
       });
        // Creat <Img> for Photo
        const img = document.createElement('img');     
       setAttribute(img, {
        src: photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description,
       });
        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json(); 
        displayPhotos();       
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getPhotos();
