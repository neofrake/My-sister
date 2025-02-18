onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = "Happy Birthday to you, My Sister💖🎂🎇".split("");
    const titleElement = document.getElementById("title");
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 70);
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
