const products = [

    { name: 'X-Salada', price: 30, vegan: false, src: './assets/x-salada.jpeg' },
    { name: 'X-Bacon', price: 34, vegan: false, src: './assets/x-bacon.png' },
    { name: 'X-Egg', price: 39, vegan: false, src: './assets/x-egg.png' },
    { name: 'Monstruoso', price: 50, vegan: false, src: './assets/monstruoso.png' },
    { name: 'Monstruoso Vegano', price: 55, vegan: true, src: './assets/monstruoso-vegano.png' },
    { name: 'X-Vegano', price: 45, vegan: true, src: './assets/x-vegano.png' },

] // Array dos produtos


let menu = document.querySelector("#menu")
let myDivs = ``

function showAll(productsArray) { // Essa propriedade serve para dar o desconto em outra função
    myDivs = `` // Resetando informações para não ficara adicionando tudo um monte de vezes

    productsArray.forEach((product) => {

        myDivs = myDivs += `
            <div class="div-hamburguer">
            <img src="${product.src}">
            <h2>${product.name}</h2>
            <p>Preço: R$<span class="price-span">${product.price.toFixed(2)}</span></p>
            </div>
        `
        menu.innerHTML = `${myDivs}`
    })
}

function tenPercentOFF() {
    
    const newPrices = products.map((product) => ({
        ...product, // Esses "..." fazem com que o array original seja colocado na função
        price: product.price - (product.price * 0.1) // E depois pode-se alterar as informações que quiser do array
    }))

    showAll(newPrices)
}

function sumPrices() {
    menu.innerHTML = ''

    const sum = products.reduce((acc, product) => { // Soma dos produtos *[acc - Acumulador]*
        return (acc + product.price)
    }, 0)

    menu.innerHTML = `
        <div class="div-hamburguer" id="sum-div">
            <h2>A Soma de todos os produtos da página é de:<br><br>R$${sum.toFixed(2)}</h2>
        </div>
    `
}

function filterVegan() {

    const arrayVegan = products.filter((product) => product.vegan) // Se o produto for vegetariano...
    showAll(arrayVegan) // Ele aparecerá na tela por meio do showAll() novamente

}

// Adicionando as Funções

const buttonMenu = document.getElementById("b-menu") // Cardápio
buttonMenu.addEventListener('click', () => showAll(products))

const buttonSale = document.getElementById("b-sale") // Desconto de 10%
buttonSale.addEventListener('click', tenPercentOFF)

const buttonSumPrices = document.getElementById("b-sum") // Soma de Todos os Produtos
buttonSumPrices.addEventListener('click', sumPrices)

const buttonVegan = document.getElementById("b-vegan") // Opçoes Vegetarianas
buttonVegan.addEventListener('click', filterVegan)