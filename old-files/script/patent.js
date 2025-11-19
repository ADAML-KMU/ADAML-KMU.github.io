fetch('/include/json/patent.json')
.then(response => response.json())
.then(articles => {
  const container = document.getElementById("patent-container");
  articles.forEach(article => {
    const articleEl = document.createElement("div");
    articleEl.className = "patent-article";
    articleEl.innerHTML = `
      <div class="container">
        <div class="box-row mg0">
          <a href="${article.doi}" class="box-article-link">
            <div class="box-article-img" style="background-image: url(${article.image}); background-size: cover; background-position: center;"></div>
            <div class="box-article-text">
              <div class="box-article-title">
                <h5>${article.title}</h5>
              </div>
              <div class="box-article-info">doi: ${article.doi}</div>
              <div class="box-article-catag">
                <div class="btn-group">
                  <div class="btn-rtg btn-monotone-2">${article.journal}</div>
                  <div class="btn-rtg btn-monotone-1">${article.date}</div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <hr>
    `;
    container.appendChild(articleEl);
  });
})
.catch(error => {
  console.error("Error loading JSON file:", error);
});