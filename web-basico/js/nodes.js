const meuBody = document.querySelector("body");
const parentBody = meuBody.parentNode

console.log(`Tag selecionada: ${meuBody.tagName}, type: ${parentBody.nodeType}`)
console.log(`Pai da tag selecionada: ${parentBody.tagName}, type: ${parentBody.nodeType}`)

if (meuBody.hasChildNodes) {
    const firstChild = meuBody.firstChild
    const lastChild = meuBody.lastChild

    console.log(`First child node: ${firstChild.tagName}, type: ${firstChild.nodeType}`)
    console.log(`Last child node: ${lastChild.tagName}, type: ${lastChild.nodeType}`)

}
else console.log(`${meuBody.tagName} doesn't have child nodes.`)

console.log("================================================")


for (let i = 0; i < meuBody.children.length; i++) {
    let tmp = meuBody.children[i]
    console.log(`===Node child: ${tmp.tagName}`)
}