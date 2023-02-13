document.addEventListener("DOMContentLoaded", function() {

    // slå dig løs her... IORDEN

    // Hero
    let heroArray = [hero];

    let hero_sections = document.querySelector(".hero");

    heroArray.forEach((heros) => {
        let billede = document.createElement("img");
        let card = document.createElement("section");
        let h1 = document.createElement("h1");
        h1.setAttribute("id", "text");
        let p = document.createElement("p");
        let a = document.createElement("a");
        let ikon = document.createElement("img");

        billede.src = heros.image;
        ikon.src = heros.icon;
        h1.textContent = heros.headline;
        p.textContent = heros.copy;
        a.textContent = "Explore";

        hero_sections.append(billede);
        hero_sections.append(card);
        card.append(h1);
        card.append(p);
        card.append(a);
        a.append(ikon);
        
        a.setAttribute("href", "#");

        let textColor = document.getElementById("text");
        textColor.innerHTML = "Find out how we can <span class='orange'>save your time</span> in Backpacking in Europe"
    });

    // Services
    let services_section = document.querySelector(".services")

    services.forEach((service) => {
        let card = document.createElement("section");
        card.setAttribute("class", "services_card");
        let billede = document.createElement("img");
        let title = document.createElement("h2");
        let kort_tekst = document.createElement("p");
        let kort_link = document.createElement("a");

        billede.src = service.illustration;
        title.textContent = service.headline;
        kort_tekst.textContent = service.text;
        kort_link.textContent = service.linktext;

        card.append(billede);
        card.append(title);
        card.append(kort_tekst);
        card.append(kort_link);
        services_section.append(card);

    })

    //eksempel på at udskrive alle overskrifter i services i konsollen:
    services.forEach(service => console.log(service.headline))

}) // DOMContentLoaded slut
