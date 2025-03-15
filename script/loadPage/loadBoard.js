export function loadBoard() {
    const mainContentsContainer = document.getElementById('main-contents-container');
    
    mainContentsContainer.innerHTML = `
    <article>
      <div class="container" id="area-title">
        <div class="article-title">
          <h1>Board</h1>
          <h3>Activity history of ADAML</h3>
        </div>
        <div class="selector">
          <div class="btn-group" id="btn-category">
            <div class="btn-rtg btn-primary">Notice</div>
            <div class="btn-rtg btn-monotone-1">Gallery</div>
          </div>
        </div>
      <div>ADAML-BOARD</div>
    </article>
    `
}