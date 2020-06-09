console.log("========================================")
console.log("CONTA DOM")

let arrayNodes = []

contaNodes(document)

console.log("Conta nodes: ", arrayNodes)

function contaNodes(node) {

    while (node != undefined) {

        insertNode(node.nodeName)

        if (node.hasChildNodes) {
            for (let i = 0; i < node.children.length; i++)
                contaNodes(node.children[i])
        }

        //O node pode não ter filhos, mas pode ter irmãos - nodes no mesmo nível.
        //Assim, o trecho a seguir busca o próximo irmão (sibling), se houver.
        node = node.nextSibiling
    }
    return
}

function insertNode(nodeName) {
    let tmp = nodeName
    let adicionou
    for (let i = 0; i < arrayNodes.length; i++) {

        if (arrayNodes[i][0] === tmp) {
            arrayNodes[i][1] += 1
            adicionou = true
            break
        }
    }

    if (adicionou !== true)
        arrayNodes.push([nodeName, 1])

}