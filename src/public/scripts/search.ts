function blockSwappp(num:any) {
    const blocks:any = document.getElementsByClassName("criteria-group");
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