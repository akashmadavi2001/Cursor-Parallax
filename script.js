let imgs = document.querySelectorAll('.img');

imgs.forEach(img => {
    window.addEventListener("mousemove", (e) => {
        let a = img.getAttribute('speed');

        let x = (e.clientX * a) / 100;
        let y = (e.clientY * a) / 100;

        img.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    })
})
