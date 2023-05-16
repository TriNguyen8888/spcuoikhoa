let wrapper = document.querySelector('.wrapper');
let login = document.querySelector('.login-link');
let registerLink = document.querySelector('.register-link');
let btnPopup = document.querySelector('.btnLogin-popup');
console.log(wrapper);

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add("active");
    console.log(wrapper);
});
login.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    console.log(wrapper);
});

// btnPopup.addEventListener('click', ()=> {
//     wrapper.classList.add("active-popup");
//     console.log(wrapper);
// });

