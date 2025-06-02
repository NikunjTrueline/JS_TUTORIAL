// <!-- 2. LIKE DISLIKE FEATURE FOR POST  -->

let container = document.querySelector("#container");
let like = document.querySelector("i");

container.addEventListener("dblclick", () => {
    like.style.transform = "translate(-50%, -50%) scale(1.5)";
    like.style.opacity = "1";

    // first remove opacity
    setTimeout(() => {
        like.style.opacity = "0";
    }, 700);


    // then remove love icon 
    setTimeout(() => {
        like.style.transform = "translate(-50%, -50%) scale(0)";
    }, 1400);
});
