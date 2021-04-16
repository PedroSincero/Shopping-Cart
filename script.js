const save = [];
function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function cartItemClickListener() {
  document.querySelector('.cart__items')
  .addEventListener('click', (event) => event.target.remove());
  localStorage.removeItem('teste');
};

 // desafio 4
function saveLocalStorage(sku, name, salePrice) {
  // save.push(`SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`);
  // const searchOL = document.querySelector('ol');
  // localStorage.setItem(sku, searchOL.innerHTML);
// versão 2 
  // localStorage.setItem('teste', JSON.stringify(save));
}
function createCartItemElement({
  id: sku,
  title: name,
  price: salePrice,
}) {
  const ol = document.querySelector('ol');
  const li = document.createElement('li');
  ol.appendChild(li);
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  // saveLocalStorage(sku, name, salePrice);
  return li;
}
// desafio 4
function createProductItemElement({ id: sku, title: name,
thumbnail: image }) {
  // const searchOL = document.querySelector('ol');
  const section = document.createElement('section');
  section.className = 'item';
  const sectionItems = document.querySelector('.items');
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
    .addEventListener('click', () => {
      const API_ITENS = `https://api.mercadolibre.com/items/${sku}`;
      fetch(API_ITENS)
        .then((response) => response.json())
        .then((teste) => createCartItemElement(teste));
    });
  return sectionItems.appendChild(section);
}
// Desafio 4
function loadingLocalStorage() {
  
  let savee = localStorage.getItem('teste');
  savee = JSON.parse(savee);
  console.log(savee);
savee.forEach((huf) => {
  const ol = document.querySelector('ol');
  const li = document.createElement('li');
  li.innerText = huf;
  ol.appendChild(li);
  li.addEventListener('click', cartItemClickListener);
});
save.push(...savee);
}

window.onload = function onload() {
  const API_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((element) =>
        createProductItemElement(element));
    });
    // loadingLocalStorage();
};

// 1° Desafio
// Baby Steps: 
// 1° informação
// 1.1 acessar a API do 'mercadolivre'
// 1.2 pega-la e transformar em .json para ser lido pelo javascript
// 2 Capturar as informações 
// 2.1 Apos capturada, percorrer as info contidas dentro
// 2.2 acionar o createProductItemElement
// 2.3 adicionar um destructuring no parametro do creatProductItemElement
// 2.4 colocar dentor do create o 'element' contendo as informações da API
// 3° o Parametro da API está desestruturado e fará a organização da pesquisa entrega-los para o crateProduction.
// 2°Desafio
// Baby Steps:
// 1° Criar evento no botão 'Adicionar ao carrinho" x
// 2° acessar as informações da API x
// 2.1 apos capturado, percorrer a info necessária
// 2.2 
// 4 °Desafio
// Baby Steps:
// 1° criar um local storage generico x
// 1.1 selecionar os item que será mandado ao localStorage x
// 1.2 mandar para o localStorage x
// 2° acessar as informações contidas no localStorage
// 2.1 adicionar elas ao windows on load
// Agradecimentos ao Alan Tanaka por ter me auxiliado no desafio 4