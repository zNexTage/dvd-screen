document.addEventListener("DOMContentLoaded", function () {
    const dvdLogo = document.getElementById("dvd_logo");

    let deltaX = 30;
    let deltaY = 10;

    dvdLogo.style.top = "10px";

    setInterval(() => {
        const dvdLogoCoord = dvdLogo.getBoundingClientRect();

        const objWidth = (window.innerWidth - dvdLogoCoord.width) - 20;
        const objHeight = (window.innerHeight - dvdLogoCoord.height) - 20;

        if (dvdLogoCoord.left >= objWidth || dvdLogoCoord.left <= 0) {
            deltaX = deltaX * -1;
        }

        if(dvdLogoCoord.top >= objHeight || dvdLogoCoord.top <= 0){
            deltaY = deltaY * -1;
        }

        dvdLogo.style.left = `${dvdLogoCoord.left + deltaX}px`;
        dvdLogo.style.top = `${dvdLogoCoord.top + deltaY}px`;
    }, 100);
})