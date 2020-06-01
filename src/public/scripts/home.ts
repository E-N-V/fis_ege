function filterOpen(){
    const filterNav:any = document.getElementsByClassName("settings-but-my")[0];
    const filterBlock:any = document.getElementsByClassName("settings-my")[0];
    if (filterNav.id == 'fop') {
        filterNav.id = '';
        filterBlock.style.display = 'none';
    }else{
        filterNav.id = 'fop';
        filterBlock.style.display = 'flex';
    }
}

function updateTable(num:any){
    const filterChk:any = document.getElementsByClassName("catChk")[num-2];
    const idmy:any = "c"+num
    const filterTab:any = document.getElementsByClassName(idmy);
    if (filterChk.checked == true){
        for (let i = 0; i < filterTab.length; i++) {
            filterTab[i].id = "spotted";
        }
    }else{
        for (let i = 0; i < filterTab.length; i++) {
            filterTab[i].id = "";
        }
    }
}

function blockSwapp(num:any){
    const blocks:any = document.getElementsByClassName("form-group-of-groups");
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].id = "passiveBlock";
    }    
    blocks[num].id = "activeBlock";

    const buttons:any = document.getElementsByClassName("form-button-my");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].id = "passiveButton";
    }    
    buttons[num].id = "activeButton";
}