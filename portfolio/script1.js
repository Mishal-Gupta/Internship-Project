// Load the home content by default
const homeContent = document.querySelector('.home').outerHTML;
document.getElementById('content').innerHTML = homeContent;

// Function to load content dynamically
function loadContent(section) {
    const contentDiv = document.getElementById('content');
    switch (section) {
        case 'about':
            contentDiv.innerHTML = aboutContent;
            break;
        case 'services':
            contentDiv.innerHTML = servicesContent;
            break;
        case 'portfolio':
            contentDiv.innerHTML = portfolioContent;
            break;
        case 'contact':
            contentDiv.innerHTML = contactContent;
            break;
        case 'home':
        default:
            contentDiv.innerHTML = homeContent; // Reset to home content
    }
}

// Event listeners for navigation links
const navLinks = document.querySelectorAll('.navb a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const section = this.getAttribute('data-section'); // Get the section to load
        loadContent(section); // Load the corresponding content
    });
});

// Typewriter effect for the introduction text
const textElement = document.querySelector('.homecontent h1');
//const text = "Hi, I am Mishal Gupta";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust typing speed by changing the timeout
    }
}

// Start the typewriter effect when the page loads
window.onload = typeWriter;

// Alert when the "Download CV" button is clicked
const downloadButton = document.querySelector('.btn');

downloadButton.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default behavior
    alert('CV Downloaded!'); // Show alert message
});
