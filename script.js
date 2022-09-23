// magnifier search function 
// const magnifier = document.querySelector('.fa-magnifying-glass');

// magnifier.addEventListener('click', function(){
// prompt('What are you searching for?');
// })


// When users click the hamburger menu
// the menu slides out
// the user selects where they want to go next 
// then the browser navigate them to the destination  e.g. blog page
// when click x , close the menu 



document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector('.hamburger');

    const menuCloseButton = document.querySelector('#menuClose');
    const menu = document.querySelector('.slideOutNav');

    hamburgerButton.addEventListener('click', (e) => {
        menu.classList.add('open');
    });

    menuCloseButton.addEventListener('click', (e) => {
        menu.classList.remove('open');
    })

    console.log(hamburgerButton,menuCloseButton,menu)
})
