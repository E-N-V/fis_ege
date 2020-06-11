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
    const delz:any = document.getElementsByClassName('del-zat')[0]
    const addz:any = document.getElementsByClassName('add-zat')[0]
    k = 0
    for (let i = 0; i < trmy.length; i++) {
        if(trmy[i].id == 'activetr'){
            k++
        }
    }
    if (k > 0) {
        del.id = 'visible'
        delz.id = 'invisible'
    }

    if (k > 1) {
        add.id = 'invisible'
        addz.id = 'visible'
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
    const delz:any = document.getElementsByClassName('del-zat')[0]
    const addz:any = document.getElementsByClassName('add-zat')[0]
    k = 0
    for (let i = 0; i < trmy.length; i++) {
        if(trmy[i].id == 'activetr'){
            k++
        }
    }
    if (k < 1) {
        del.id = 'invisible'
        delz.id = 'visible'
    }

    if (k < 2) {
        add.id = 'visible'
        addz.id = 'invisible'
    }
}

function calcSwap(num:any) {
    const calcinp:any = document.getElementsByClassName("inp-result")[0]
    const writeinp:any = document.getElementsByClassName("inp-write")[0]
    const calcmd:any = document.getElementsByClassName("calc-md")
    const writemd:any = document.getElementsByClassName("write-md")
    const butcalc:any = document.getElementsByClassName("calc-but-my")[0]
    const butwrite:any = document.getElementsByClassName("write-but-my")[0]
    if (num == 1) {

        for (let i = 0; i < writemd.length; i++) {
            writemd[i].id = "soladsnake";
        }

        for (let i = 0; i < calcmd.length; i++) {
            calcmd[i].id = "";
        }
        
        butwrite.id = ""
        butcalc.id = "calcActive"

        writeinp.disabled = true
        calcinp.disabled = false

    }else if (num == 0) {
        for (let i = 0; i < writemd.length; i++) {
            writemd[i].id = "";
        }

        for (let i = 0; i < calcmd.length; i++) {
            calcmd[i].id = "soladsnake";
        }

        butwrite.id = "calcActive"
        butcalc.id = ""

        writeinp.disabled = false
        calcinp.disabled = true

    }
}

function calcStart(){
    const calcinp:any = document.getElementsByClassName("inp-calc")
    const calcres:any = document.getElementsByClassName("inp-result")[0]
    let x:number = 0
    let y:number = 0

    for (let i = 0; i < calcinp.length; i++) {
        if (calcinp[i].value != "") {
            y++
            x = x + parseFloat(calcinp[i].value);  
        }  
    }
    calcres.setAttribute("value", x/y)
}

function calcInpCreate(){
    const inpcon:any = document.getElementsByClassName("inp-container")
    const calcinp:any = document.getElementsByClassName("inp-calc")
    let calc:any = document.createElement("input")
    calc.setAttribute("class", "calc-md inp-calc")
    calc.setAttribute("type", "number")
    inpcon[0].appendChild(calc)
}

function calcInpDestroy(){
    const calcinp:any = document.getElementsByClassName("inp-calc")
    if (calcinp.length > 1) {

        calcinp[calcinp.length - 1].remove()
    }
}