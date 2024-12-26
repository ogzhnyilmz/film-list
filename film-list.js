function filmList() {
    let choose = prompt("Lütfen bir film adı giriniz.");

    if (choose) {
        let films = JSON.parse(localStorage.getItem("films")) || [];
        films.push({choose});
        localStorage.setItem("films", JSON.stringify(films));
    }

    let films = JSON.parse(localStorage.getItem("films")) || [];

    if (films.length > 0) {
        let msg = films.map(film => `Film: ${film.choose}`).join("\n");
        alert(msg);
    }
}

filmList();