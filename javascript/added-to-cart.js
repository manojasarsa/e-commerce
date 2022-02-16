const liveLeadingBtn = document.querySelectorAll(".btn_leading");
const liveTopRight = document.querySelectorAll("#btn_top_right");
const toastBox = document.querySelectorAll(".toast_box");

for (let i =0 ; i < toastBox.length ; i++) {

    liveLeadingBtn[i].addEventListener('click', () => {
    

        toastBox[i].classList.add("toast_active_leading");
        toastBox[i].classList.add("toast_position");
        setTimeout(() => {
            toastBox[i].classList.remove("toast_position");
            toastBox[i].classList.remove("toast_active_leading");
        }, 3000)

    })
}