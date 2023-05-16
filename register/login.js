let name = document.querySelector(".usernameLogin");
let logPass = document.querySelector(".passwordLogin");
let btnLogin = document.querySelector(".btn");

console.log("hello");

let arrAccount = JSON.parse(localStorage.getItem("container"));
console.log(arrAccount);

btnLogin.addEventListener("click", () => {
  for (let i = 0; i < arrAccount.length; i++) {
    console.log(arrAccount[i].username);
    if (
      arrAccount[i].username == name.value &&
      arrAccount[i].password == logPass.value
    ) {
      window.open("./shopping-cart-js/idx.html");
      console.log("thanh cong");
    }
  }
});
