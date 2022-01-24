// selectors
let wrappers = document.querySelectorAll(".wrapper");
let menuBtn = document.querySelector(".menu-bar");
let overlay = document.querySelector(".sidebar-wrapper");


wrappers.forEach((wrapper, index) => {
    wrapper.addEventListener("mouseover", function () {
        // console.log(index, wrapper.children);
        wrapper.children[0].style.color = "red";
        wrapper.children[1].style.borderBottom = "2px solid red";
    });
});

wrappers.forEach((wrapper, index) => {
    wrapper.addEventListener("mouseout", function () {
        // console.log(index, wrapper.children);
        wrapper.children[0].style.color = "black";
        wrapper.children[1].style.borderBottom = "none";
    });
});


menuBtn.addEventListener("click", function () {
    overlay.classList.toggle("overlay");
})
