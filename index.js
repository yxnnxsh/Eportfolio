
const scaleFactor = 1/20;
let contrastToggle = false;
let isModalOpen = false;


function moveBackground(event) {
    const shapes = document.querySelectorAll('.shape');
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 ==! 0;
        const booInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * booInt}px, ${y * booInt}px)`
    }
}




function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme";
    } else {
        document.body.classList.remove("dark-theme");
    }
}


function contact(event) {
event.preventDefault();      // forms by default refresh the page, to stop that we use event.preventDefault()
const loading = document.querySelector('.modal__overlay--loading');
const success = document.querySelector('.modal__overlay--success');
loading.classList += " modal__overlay--visible"
emailjs
    .sendForm(
        'service_hdglswf',
        'template_x6cblul',
        event.target,
        '4QzP--FZEgAC3Jw-l'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            'The email service is temporarily unavailable. Please contact me directly on yannihaddad@gmail.com'
        );
    })
}


function toggleModal() {
    isModalOpen = !isModalOpen;
    if(isModalOpen) {
        return document.body.classList += " modal--open";
     
    }
        document.body.classList.remove("modal--open");
}

// isModalOpen value starts off as false
// moving into function, the evaluation of isModalOpen is false on the first execution of the function (starts off as false) 
// therefore the logic within the if statement does not get executed and we mvoe to the next line of code
// we change the value of isModalOpen to true
// and we execute the code such that the class 'modal--open' get's added to the body 
// NOTE: the fact that we change the value of isModal to true has no immediate implication/affect on the fact that we add the 'modal--open' class to the body

// next instance the function is called:
// isModalOpen is currently true
// the evaluation of isModalOpen comes out to true in the if statement, therefore the logic within the if statement will run
// isModalOpen gets assigned a false value and the 'modal--open' class is removed from the body
// we exit out of the function since we returned the previous line of code