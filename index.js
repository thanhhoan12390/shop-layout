// Form
const registerBtn = document.querySelector(
    ".header__navbar-item.header__navbar-item--strong.header__navbar-item--separate"
);
const loginBtn = document.querySelectorAll(
    ".header__navbar-item.header__navbar-item--strong"
)[1];

const registerForm = document.querySelectorAll(".auth-form")[0];

const loginForm = document.querySelectorAll(".auth-form")[1];

const switchBtnLogin = document.querySelectorAll(".auth-form__switch-btn")[0];

const switchBtnRegister = document.querySelectorAll(
    ".auth-form__switch-btn"
)[1];

if (switchBtnLogin) {
    switchBtnLogin.onclick = () => {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    };
}

if (switchBtnRegister) {
    switchBtnRegister.onclick = () => {
        registerForm.style.display = "block";
        loginForm.style.display = "none";
    };
}

if (registerBtn) {
    registerBtn.onclick = (e) => {
        const modalElement = document.querySelector(".modal");
        const overlayElement = document.querySelector(".modal__overlay");

        modalElement.style.display = "flex";
        registerForm.style.display = "block";

        modalElement.onclick = (e) => {
            if (e.target === overlayElement) {
                modalElement.style.display = "none";
                registerForm.style.display = "none";
            }
        };
    };
}

if (loginBtn) {
    loginBtn.onclick = (e) => {
        const modalElement = document.querySelector(".modal");
        const overlayElement = document.querySelector(".modal__overlay");

        modalElement.style.display = "flex";
        loginForm.style.display = "block";

        modalElement.onclick = (e) => {
            if (e.target === overlayElement) {
                modalElement.style.display = "none";
                loginForm.style.display = "none";
            }
        };
    };
}
// Header search history
const searchHistoryElement = document.querySelector(".header__search-history");

searchHistoryElement.onmousedown = function (e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của trình duyệt xảy ra khi onmousedown trên thẻ <ul>
};
