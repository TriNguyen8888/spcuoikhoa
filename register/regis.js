let RegisUserN = document.querySelector(".username")
console.log(RegisUserN);
let RegisPass = document.querySelector(".pass")
let emailRgis = document.querySelector(".age")

let account = [
  {
    username: "admin",
    password: "1234567",
  },
];
let user = JSON.parse(localStorage.getItem("container"));

if (user == null) {
  localStorage.setItem("container", JSON.stringify(account));
  console.log("2");
}
function submition() {
    console.log(123);
    let valueUs = RegisUserN.value;
    let valuePs = RegisPass.value;
    let valueEm = emailRgis.value;
    let tk = {
      username: valueUs,
      age:valueEm,
      password: valuePs,
    };
    console.log(valueUs.replace(/\s/g, ""));
    if (valueUs.replace(/\s/g, "").length !== valueUs.length) {
      alert("Không được để khoảng trắng") 
    } else if (valuePs.replace(/\s/g, "").length !== valuePs.length) {
    alert("kKhông được để khoảng trắng") 
    
    } else if (
      valueUs.replace(/\s/g, "").length == 0 ||
      valuePs.replace(/\s/g, "").length == 0 ||
      valueEm.replace(/\s/g, "").length == 0 
    ) {
        alert("Bạn chưa nhập gì cả") 
      
    } else {
  
        let ckeck = false;
        for (let i = 0; i < user.length; i++) {
          if (user[i].username == valueUs) {
            ckeck = true;
          }
        }
        if (ckeck == true) {
          alert("UserName đã được đăng kí")
        } else {
          alert("Đăng kí thành công")
          user.push(tk);
          localStorage.setItem("container", JSON.stringify(user));
          location.reload();
        }
      
    }
  }