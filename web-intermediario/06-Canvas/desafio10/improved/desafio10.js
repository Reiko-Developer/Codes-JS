const canvas = document.querySelector("#canvas")
const context = canvas.getContext('2d')

const canvasAltura = canvas.height
const canvasLargura = canvas.width

document.querySelector('#larg').value = canvasLargura
document.querySelector('#alt').value = canvasAltura

//vars da parte superior
let xpos, ypos, lthickness, sStyle, fStyle, ffamily, fsize, text

//vars da parte inferior
let x, y, larg, alt, radius

init()

function init() {
    xpos = document.querySelector('#x-pos')
    xpos.value = 0
    ypos = document.querySelector('#y-pos')
    ypos.value = 0

    lthickness = document.querySelector("#line-t")
    lthickness.value = 5

    sStyle = document.querySelector('#line-s')
    sStyle.value = 'yellow'

    fStyle = document.querySelector('#line-f')
    fStyle.value = 'red'

    ffamily = document.querySelector('#font-f')
    ffamily.value = 'Arial'

    fsize = document.querySelector('#font-s')
    fsize.value = '16'

    text = document.querySelector('#text')
    text.value = ''

    //let x, y, larg, alt, radius
    x = document.querySelector('#txt-x')
    y = document.querySelector('#txt-y')
    larg = document.querySelector('#txt-larg')
    alt = document.querySelector('#txt-alt')
    radius = document.querySelector('#txt-rad')   

}

function drawLine() {
    context.beginPath()
    context.lineWidth = lthickness.value
    context.strokeStyle = sStyle.value
    context.fillStyle = fStyle.value

    context.moveTo(xpos.value, ypos.value)
    context.lineTo(x.value, y.value)

    context.stroke()
    context.fill()
}

function drawRect() {
    context.beginPath()
    context.lineWidth = lthickness.value
    context.strokeStyle = sStyle.value
    context.fillStyle = fStyle.value

    context.rect(xpos.value, ypos.value, larg.value, alt.value)

    context.stroke()
    context.fill()
}

function drawCircle() {
    context.beginPath()
    context.lineWidth = lthickness.value
    context.strokeStyle = sStyle.value
    context.fillStyle = fStyle.value

    context.arc(xpos.value, ypos.value, radius.value, 0, 360)

    context.stroke()
    context.fill()
}

function drawText() {
    context.beginPath()
    context.strokeStyle = sStyle.value
    context.fillStyle = fStyle.value
    context.font = fsize.value + "px " + ffamily.value
    let txtToShow = text.value

    context.strokeText(txtToShow, xpos.value, ypos.value)
    context.fillText(txtToShow, xpos.value, ypos.value)

    context.stroke()
    context.fill()
}

