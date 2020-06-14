const meuCanvas = document.querySelector("#meuCanvas")
const context = meuCanvas.getContext('2d')
const canvasAltura = meuCanvas.height
const canvasLargura = meuCanvas.width

document.querySelector('#lbl-altura').textContent = 'Altura = '+ canvasAltura
document.querySelector('#lbl-largura').textContent = 'Largura = '+canvasLargura

context.moveTo(0,0)
context.lineTo(300,150)
context.lineTo(0,150)
context.lineWidth = '5px'
context.strokeStyle = 'black'
context.stroke()

console.log();//log+tab

