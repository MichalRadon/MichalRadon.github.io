const fetchApi = fetch(
  "https://api.github.com/users/michalradon/repos?sort=created&direction=asc"
)
  .then((resp) => resp.json())
  .then((resp) => {
    const project = document.querySelector(".projects__div--js");
    for (let element of resp) {
      const { description, homepage, html_url, name } = element;

      const template = `      <article class="article">
      <h3 class="article__title">${name}</h3>
      <p class="article__description">
        ${description}
      </p>
      <footer class="article__footer">
        <div class="article__footer__demo">
          <a rel="noopener noreferrer" target="_blank" href="${homepage}"> <img class="article__footer__demo__img"
              src="img/GitHub_Logo_White.png" alt=""></a>
          <a rel="noopener noreferrer" target="_blank" class="article__footer__demo__link" href="${homepage}">Demo</a>
        </div>
        <div class="article__footer__github">
          <a rel="noopener noreferrer" target="_blank" href="${html_url}"><img class="article__footer__github__img"
              src="img/GitHub_Mark_White.png" alt=""></a>
          <a rel="noopener noreferrer" target="_blank" class="article__footer__github__link" href="${html_url}">GitHub</a>
        </div>
      </footer>
    </article>`;
      if (description) {
        project.innerHTML += template;
      }
      project.innerHTML += template;
    }
  })
  .catch((e) => console.log(e));
