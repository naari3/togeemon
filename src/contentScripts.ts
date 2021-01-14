if (!location.href.includes("twitter.com")) {
    document.body.innerHTML = document.body.innerHTML.replace(/ドラ|どら/g, "とげ");
    document.title = document.title.replace(/ドラ|どら/g, "とげ");
} else {
    setInterval(() => document.querySelectorAll("span").forEach(s => {
        s.innerText = s.innerText.replace(/ドラ|どら/g, "とげ");
    }), 1000);
}
