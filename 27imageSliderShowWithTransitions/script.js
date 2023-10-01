const accessKey = 'djDZBAElD-4V_QA69nNu_ebNm1gMt2o5McRvF-OjSzQ';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=nature`; // Change 'nature' to any keyword you want to search for

function getRandomImage() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const imageSrc = data.urls.regular;
        const imageElement = document.getElementById('randomImage');
        imageElement.src = imageSrc;
      })
      .catch(error => console.error('Error fetching image:', error));
  }
  
  document.addEventListener('DOMContentLoaded', getRandomImage);
  
  const generateButton = document.getElementById('generateButton');
  
  generateButton.addEventListener('click', function () {
    generateButton.classList.add('clicked');
    setTimeout(() => {
      generateButton.classList.remove('clicked');
    }, 500); // Reset the 'clicked' class after 500ms
  });