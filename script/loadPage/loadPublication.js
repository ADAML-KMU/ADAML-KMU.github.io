function loadPublication() {
    const mainContentsContainer = document.getElementById('main-contents-container');
    
    mainContentsContainer.innerHTML = `
    <article>
      <div class="container" id="area-title">
        <div class="article-title">
          <h1>Publication</h1>
          <h3>Link to ADAML's publications, including journals</h3>
        </div>
        <div class="selector">
          <div class="btn-group" id="btn-category">
            <div class="btn-rtg btn-primary">Journals</div>
            <div class="btn-rtg btn-monotone-1">Conferences</div>
            <div class="btn-rtg btn-monotone-1">Patents</div>
          </div>
        </div>
      <div>ADAML-PUBLICATION</div>
    </article>
    `
}