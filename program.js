function jatek(elem) {
    document.querySelectorAll(".jatekos-valasztas").forEach((kep) => {
        kep.classList.toggle("kivalasztott", kep.dataset.valasztas === elem);
    });

    const valasztasok = ["ko", "papir", "ollo"];
    const gepValasztas = valasztasok[Math.floor(Math.random() * valasztasok.length)];
    const gepValasztasKep = document.getElementById("gepValasztasKep");

    gepValasztasKep.src = `img/${gepValasztas}.png`;
    gepValasztasKep.alt = `A gép választása: ${gepValasztas}`;
    
    const eredmenyElem = document.getElementById("eredmeny");
    let eredmeny;

    if (elem === gepValasztas) {
        eredmeny = "Döntetlen!";
    } else if (
        (elem === "ko" && gepValasztas === "ollo") ||
        (elem === "papir" && gepValasztas === "ko") ||
        (elem === "ollo" && gepValasztas === "papir")
    ) {
        eredmeny = "Nyertél!";
    } else {
        eredmeny = "Vesztettél!";
    }

    eredmenyElem.textContent = eredmeny;

    if (eredmeny === "Nyertél!") {
        const pontElem = document.getElementById("tePontod");
        pontElem.textContent = Number(pontElem.textContent) + 1;
    }
    else if (eredmeny === "Vesztettél!") {
        const pontElem = document.getElementById("gepPontja");
        pontElem.textContent = Number(pontElem.textContent) + 1;
    }
}