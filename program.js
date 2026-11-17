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

    if (tePontod.textContent === "10") {
        alert("Nyertél!");
    }
    else if (gepPontja.textContent === "10") {
        alert("A gép nyert!");
    }
}

function regisztracio(event) {
    event.preventDefault();

    let nev = document.getElementById("nev").value;

    document.getElementById("jatekosNev").innerText =
        nev + " pontja";

    document.getElementById("regisztracio").style.display = "none";

    document.getElementById("main").style.display = "block";
}

function ujra() {
    document.getElementById("tePontod").textContent = "0";
    document.getElementById("gepPontja").textContent = "0";
    document.getElementById("eredmeny").textContent = "";
    document.querySelectorAll(".jatekos-valasztas").forEach((kep) => {
        kep.classList.remove("kivalasztott");
    });
}
