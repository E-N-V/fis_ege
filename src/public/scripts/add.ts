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
    const assinp:any = document.getElementsByClassName("assholeinp-result")[0]
    const calcmd:any = document.getElementsByClassName("calc-md")
    const writemd:any = document.getElementsByClassName("write-md")
    const assmd:any = document.getElementsByClassName("assholecalc-md")
    const butcalc:any = document.getElementsByClassName("calc-but-my")[0]
    const butwrite:any = document.getElementsByClassName("write-but-my")[0]
    const butass:any = document.getElementsByClassName("ass-but-my")[0]
    if (num == 1) {

        for (let i = 0; i < writemd.length; i++) {
            writemd[i].id = "soladsnake";
        }

        for (let i = 0; i < calcmd.length; i++) {
            calcmd[i].id = "";
        }

        for (let i = 0; i < assmd.length; i++) {
            assmd[i].id = "soladsnake";
        }


        
        butwrite.id = ""
        butcalc.id = "calcActive"
        butass.id = ""

        writeinp.disabled = true
        calcinp.disabled = false
        assinp.disabled = true

    }else if (num == 0) {
        for (let i = 0; i < writemd.length; i++) {
            writemd[i].id = "";
        }

        for (let i = 0; i < calcmd.length; i++) {
            calcmd[i].id = "soladsnake";
        }

        for (let i = 0; i < assmd.length; i++) {
            assmd[i].id = "soladsnake";
        }

        butwrite.id = "calcActive"
        butcalc.id = ""
        butass.id = ""

        writeinp.disabled = false
        calcinp.disabled = true
        assinp.disabled = true

    }else if (num == 2) {
        for (let i = 0; i < writemd.length; i++) {
            writemd[i].id = "soladsnake";
        }

        for (let i = 0; i < calcmd.length; i++) {
            calcmd[i].id = "soladsnake";
        }

        for (let i = 0; i < assmd.length; i++) {
            assmd[i].id = "";
        }

        butwrite.id = ""
        butcalc.id = ""
        butass.id = "calcActive"

        writeinp.disabled = true
        calcinp.disabled = true
        assinp.disabled = false

    }
}

function calcStart(){
    const calcinp:any = document.getElementsByClassName("inp-calc")
    const calcres:any = document.getElementsByClassName("inp-result")[0]
    const calcdet:any = document.getElementsByClassName("calc-result")[0]
    let x:number = 0
    let y:number = 0

    for (let i = 0; i < calcinp.length; i++) {
        if (calcinp[i].value != "") {
            y++
            x = x + parseFloat(calcinp[i].value);  
        }  
    }
    calcres.setAttribute("value", x/y)
    calcdet.innerText = "Введено оценок: " + y
}

function calcAssStart(){
    const calcinp:any = document.getElementsByClassName("inp-ass")
    const calcres:any = document.getElementsByClassName("assholeinp-result")[0]
    let i:number = 0
    let l:number = 0

    i = i + (parseFloat(calcinp[0].value) * 2)
    i = i + (parseFloat(calcinp[1].value) * 3)
    i = i + (parseFloat(calcinp[2].value) * 4)
    i = i + (parseFloat(calcinp[3].value) * 5)
    l = l + parseFloat(calcinp[0].value) + parseFloat(calcinp[1].value) + parseFloat(calcinp[2].value) + parseFloat(calcinp[3].value)
    calcres.value = i/l
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