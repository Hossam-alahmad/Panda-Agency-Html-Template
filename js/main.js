window.onload = () => {
    // Navbar show/hide
    let menuBar = document.getElementById("menubar"),
        nav = document.getElementById("navigation"),
        closeNav = document.getElementById("close-nav");
    menuBar.onclick = () => {
        nav.classList.add("show");
    };
    closeNav.onclick = () => {
        nav.classList.remove("show");
    };

    // Header fixed/relative
    let header = document.querySelector("header");
    window.onscroll = () => {
        if (document.documentElement.scrollTop > 70) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    };

    // Show more portfolio -------------
    let loading = document.getElementById("loading"),
        btn = document.getElementById("see-more"),
        morePortfolio = document.querySelectorAll(".more-portfolio"),
        checkPortfolio = true;

    btn.addEventListener("click", () => {
        loading.style.display = "block";
        checkPortfolio = true;
        setTimeout(() => {
            loading.style.display = "none";
            morePortfolio.forEach((element) => {
                if (
                    !element.classList.contains("show-portfolio") &&
                    checkPortfolio === true
                ) {
                    element.classList.add("show-portfolio");
                    checkPortfolio = false;
                }
            });
        }, 2000);
    });
};
