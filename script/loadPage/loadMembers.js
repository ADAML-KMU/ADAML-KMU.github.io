function loadMembers() {
    const mainContentsContainer = document.getElementById('main-contents-container');
    
    mainContentsContainer.innerHTML = `
    <article>
      <div class="container" id="area-title">
        <div class="article-title">
          <h1>Members</h1>
          <h3>Members of ADAML</h3>
        </div>
        <div class="selector">
          <div class="btn-group" id="btn-category">
            <div class="btn-rtg btn-primary">Principal Investigator</div>
            <div class="btn-rtg btn-monotone-1">Students</div>
            <div class="btn-rtg btn-monotone-1">Alumni</div>
          </div>
        </div>
      <div>ADAML-MEMBERS</div>
    </article>
    `
}