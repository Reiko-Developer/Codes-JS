console.log("BUSCA DOM!")
console.log("==================================")

let nivel = 0;
mostraNodes(document)

function mostraNodes(node) {
    nivel++;

    while (node != undefined) {
        const identacao = "".padStart(nivel, '-') //args: número de repetição, string a repetir
        console.log(identacao + "" + node.nodeName)

        if (node.hasChildNodes) {
            for (let i = 0; i < node.children.length; i++)
                mostraNodes(node.children[i])
        }

        //O node pode não tiver filhos, mas pode ter irmãos - nodes no mesmo nível.
        //Assim, o trecho a seguir busca o próximo irmão (sibling), se houver.
        node = node.nextSibiling
    }
    nivel--
    return


}