
//....... add-item-in-cart.........

// Select all the "Add the Cart" buttons
const addToCartButtons = document.querySelectorAll('.images a');

// Select the cart icon in the top navigation bar 
const cartIcon = document.querySelector('.top-navbar .icons a i');

let cartCount = 0; //Initialize a variable to keep track of the cart count

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++; // Increment the cart count
        cartIcon.textContent = cartCount; //Update the cart icon text with the new count
    });
});


//......... Change-items............

// Select all the images in the footer  
const footerImages = document.querySelectorAll('.footer .images img');

// Select the image in the foodbar
const foodbarImage = document.querySelector('.foodbar img');

// Add a click event listener to each footer image 
footerImages.forEach(image => {
    image.addEventListener('click', () => {
        // Update the source of the foodbar image 
        foodbarImage.src = image.src;
    });
});

//.......... remove-animation.......
const itemImages = document.querySelectorAll('.item-img');

itemImages.forEach(img => {
    img.addEventListener('click', () => {
        // Remove the 'animated' class for all images 
        itemImages.forEach(img.classList.remove('animated'));

        // Add the 'animated' class to the clicked image 
        img.classList.add('animated');
    });
});

// ......toggle-light-dark-mode......
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;
themeSwitch.addEventListener('change', function (){
    body.classList.toggle('dark-mode');
});