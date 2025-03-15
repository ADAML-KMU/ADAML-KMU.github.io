function initGnb() {
    const figure = document.querySelector("figure");
    const ResearchBtns = document.querySelectorAll("#research-btn");
    const PublicationBtns = document.querySelectorAll("#publication-btn");
    const MembersBtns = document.querySelectorAll("#members-btn");
    const FacilityBtns = document.querySelectorAll("#facility-btn");
    const BoardBtns = document.querySelectorAll("#board-btn");

    //어떤 요소가 null인지 check
    if (!figure) console.log("figure is null");
    if (!ResearchBtns) console.log("researchBtns is null");
    if (!PublicationBtns) console.log("PublicationBtns is null");
    if (!MembersBtns) console.log("MembersBtns is null");
    if (!FacilityBtns) console.log("FacilityBtns is null");
    if (!BoardBtns) console.log("BoardBtns is null");

    if (ResearchBtns && PublicationBtns && MembersBtns && FacilityBtns && BoardBtns) {        
        ResearchBtns.forEach(ResearchBtn => {
            ResearchBtn.addEventListener("click", async () => {
                //cleanupBeforeNavigation();
                const { loadResearch } = await import('./load_page/loadResearch.js');
                loadResearch();
            });
        })
        PublicationBtns.forEach(PublicationBtn => {
            PublicationBtn.addEventListener("click", async () => {
                //cleanupBeforeNavigation();
                const { loadPublication } = await import('./load_page/loadPublication.js');
                loadPublication();
            });
        })
        MembersBtns.forEach(MembersBtn => {
            MembersBtn.addEventListener("click", async () => {
                //cleanupBeforeNavigation();
                const { loadMembers } = await import('./load_page/loadMembers.js');
                loadMembers();
            });
        })
        FacilityBtns.forEach(FacilityBtn => {
            FacilityBtn.addEventListener("click", async () => {
                //cleanupBeforeNavigation();
                const { loadFacility } = await import('./load_page/loadFacility.js');
                loadFacility();
            });
        })
        BoardBtns.forEach(BoardBtn => {
            BoardBtn.addEventListener("click", async () => {
                //cleanupBeforeNavigation();
                const { loadBoard } = await import('./load_page/loadBoard.js');
                loadBoard();
            });
        })
        
        console.log('GNB initialization completed.');
        return true;
    } else {
        console.log('Waiting for GNB elements to load...');
        return false;
    }
}

function pollForGnb() {
    if (!initGnb()) {
        console.log('Retrying GNB initialization in 100ms...');
        setTimeout(pollForGnb, 100);  // 100ms 후에 다시 시도
    }
}

pollForGnb();