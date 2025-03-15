function loadResearch() {
    const mainContentsContainer = document.getElementById('main-contents-container');
    
    mainContentsContainer.innerHTML = `
    <article>
      <div class="container" id="area-title">
        <div class="article-title">
          <h1>Research</h1>
          <h3>ADAML focuses on research in the following areas</h3>
        </div>
        <div class="selector">
          <div class="btn-group" id="btn-category">
            <div class="btn-rtg btn-primary">Research 1</div>
            <div class="btn-rtg btn-monotone-1">Research 2</div>
            <div class="btn-rtg btn-monotone-1">Research 3</div>
            <div class="btn-rtg btn-monotone-1">Research 4</div>
            <div class="btn-rtg btn-monotone-1">Research 5</div>
          </div>
        </div>
      <div>ADAML-RESEARCH</div>
    </article>
    `
}