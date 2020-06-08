function blockSwap(num:any) {
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

function add() {
    let k:any = 0
    const trmy:any = document.getElementsByClassName('trmy')
    for (let i = 0; i < trmy.length; i++) {
        if(trmy[i].id == 'disabletr'){
            k = i
            break;
        }
    }
    trmy[k].id = 'activetr'
    const inpmy:any = trmy[k].getElementsByClassName('input-my')[0]
    inpmy.disabled = false
    const del:any = document.getElementsByClassName('del-my')[0]
    const add:any = document.getElementsByClassName('add-my')[0]
    k = 0
    for (let i = 0; i < trmy.length; i++) {
        if(trmy[i].id == 'activetr'){
            k++
        }
    }
    if (k > 0) {
        del.id = 'visible'
    }

    if (k > 1) {
        add.id = 'invisible'
    }
}

function del() {
    let k:any = 0
    const trmy:any = document.getElementsByClassName('trmy')
    for (let i = 0; i < trmy.length; i++) {
        if(trmy[i].id == 'disabletr'){
            break;
        }else{
            k = i
        }
    }
    trmy[k].id = 'disabletr'
    const inpmy:any = trmy[k].getElementsByClassName('input-my')[0]
    inpmy.disabled = true
    const del:any = document.getElementsByClassName('del-my')[0]
    const add:any = document.getElementsByClassName('add-my')[0]
    k = 0
    for (let i = 0; i < trmy.length; i++) {
        if(trmy[i].id == 'activetr'){
            k++
        }
    }
    if (k < 1) {
        del.id = 'invisible'
    }

    if (k < 2) {
        add.id = 'visible'
    }

    
}

