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


function easyInputs() {
    const label:any = document.getElementsByTagName("label");
    const jsinp:any = document.getElementsByClassName("jsinp");
    const jschk:any = document.getElementsByClassName("jschk");

    for (let i = 0; i < label.length; i++) {
        label[i].setAttribute("onclick", "");
        
    }

    for (let i = 0; i < jsinp.length; i++) {
        jsinp[i].disabled = true
        jschk[i].setAttribute("onclick", "refreshInputs(" + i + ")");
    }
    
}

function refreshInputs(num:any) {
    const jschk:any = document.getElementsByClassName("jschk");
    const jsinp:any = document.getElementsByClassName("jsinp");
    if (jsinp.length != jschk.length) {
        alert("error")
    }
    if (jsinp[num].disabled == true ) {
        jsinp[num].disabled = false 
        jsinp[num].required = true
    } else {
        jsinp[num].disabled = true
        jsinp[num].required = false 
    }
}