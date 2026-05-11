let floaty = document.getElementById("ghosty");

window.onscroll = function () {
    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {
        floaty.classList.add("show");
    } else {
        floaty.classList.remove("show");
    }
};

floaty.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};