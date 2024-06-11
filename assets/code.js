var footer = document.querySelector(".footbar");
footer.innerHTML =
  "Bu site sıfırdan başlayan birine, temel olarak full-stack web developer nedir, nasıl olunur, bunu anlatmak için oluşturulmuştur.";

//MENU İŞLEMSLERİ - st
var menui = document.querySelector(".menu-i");
var mainsMenu = document.querySelector(".mains-menu");
var mainContent = document.querySelector(".main-content");

if (window.innerWidth <= 1024) {
  mainsMenu.style.display = "none";
}
menui.addEventListener("click", () => {
  if (mainsMenu.style.display == "none") {
    mainsMenu.style.display = "flex";
  } else {
    mainsMenu.style.display = "none";
    mainContent.style.display = "flex";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 1024) {
    mainsMenu.style.display = "none";
  } else {
    mainsMenu.style.display = "flex";
  }
});

//MENU İŞLEMSLERİ - done

//Kayıt-Giriş-Navİsim
var navsRi = document.querySelector(".navs-ri");
var btngiris = document.createElement("button");
var btncikis = document.createElement("button");
if (localStorage.getItem("login") == "true") {
  btncikis.innerHTML = "Çıkış Yap";
  btncikis.style.marginLeft = "6px";
  btncikis.style.backgroundColor = "white";
  btncikis.style.border = "0px";
  btncikis.style.fontSize = "14px";
  btncikis.style.padding = "4px";
  btncikis.style.borderRadius = "8px";
  btncikis.style.fontWeight = "600";
  var isim = document.createElement("h4");
  isim.innerHTML =
    localStorage.getItem("kullanıcısifre").split("é")[0].substring(1) + ", ";
  navsRi.appendChild(isim);
  navsRi.appendChild(btncikis);
} else {
  btngiris.innerHTML = "Giriş Yap";
  btngiris.style.marginLeft = "6px";
  btngiris.style.backgroundColor = "white";
  btngiris.style.border = "0px";
  btngiris.style.padding = "8px 12px";
  btngiris.style.fontSize = "14px";
  btngiris.style.borderRadius = "8px";
  btngiris.style.fontWeight = "600";
  navsRi.appendChild(btngiris);
}

btncikis.addEventListener("click", () => {
  localStorage.setItem("login", "false");
  window.location.href = "./index.html";
});

btngiris.addEventListener("click", () => {
  window.location.href = "./girisyap.html";
});
//Kayıt-Giriş-Navİsim
