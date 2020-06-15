const meuCanvas = document.querySelector("#meuCanvas")
const context = meuCanvas.getContext('2d')
const canvasAltura = meuCanvas.height
const canvasLargura = meuCanvas.width

document.querySelector('#lbl-altura').textContent = 'Altura = ' + canvasAltura
document.querySelector('#lbl-largura').textContent = 'Largura = ' + canvasLargura



function drawLine() {
    context.beginPath()
    context.lineWidth = 10
    context.strokeStyle = 'gray'
    context.fillStyle = 'yellow'

    context.moveTo(15, 15)
    context.lineTo(300, 150)
    context.lineTo(15, 150)
    context.stroke()
    context.fill()
}

function drawRect() {
    context.beginPath()
    context.lineWidth = 10
    context.strokeStyle = 'gray'

    let gradient = context.createLinearGradient(0, 0, 250, 0)
    gradient.addColorStop(0, "white")
    gradient.addColorStop(0.5, "green")
    gradient.addColorStop(1, "black")
    context.fillStyle = gradient

    //desenha retângulo
    context.rect(10, (canvasAltura / 3) * 2, canvasLargura / 8, canvasAltura / 4)
    context.stroke()
    context.fill()
}

function drawArc() {
    context.beginPath()
    context.lineWidth = 10
    context.strokeStyle = 'gray'

    //createLinearGradiente(xinicio, yinicio, xfim, yfim)
    let gradiente = context.createLinearGradient(canvasLargura/2, 120, canvasLargura/2, canvasAltura-120)
    gradiente.addColorStop(0, "white");
    gradiente.addColorStop(0.2, '#177E89')
    gradiente.addColorStop(0.3,'#084C61')
    gradiente.addColorStop(0.5, "blue")
    gradiente.addColorStop(1, 'black')
    context.fillStyle = gradiente;

    //desenha círculo
    //coordenadas do centro do círculo x,y
    //raio
    //ângulo inicial e ângulo final
    context.arc(canvasLargura/2, canvasAltura/2, 150, 0, 360)

    context.stroke()
    context.fill()
}

function drawText(){
    context.beginPath()
    context.fillStyle = 'black'
    context.strokeStyle = 'gray'

    context.font = '50px Arial'
    context.strokeText('Stroke text \"Bordas\"', canvasLargura*3/5, canvasAltura*1/4)
    context.fillText('Stroke text - Preenchimento', canvasLargura*3/5, canvasAltura*2/4)
    
    context.strokeText('Bordas+Preenchimento', canvasLargura*3/5, canvasAltura*3/4)
    context.fillText('Bordas+Preenchimento', canvasLargura*3/5, canvasAltura*3/4)
    

    context.stroke()
    context.fill()
}