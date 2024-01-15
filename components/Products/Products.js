
 class Products {
    render() {
        let htmlCatalog = '';

        CATALOG.forEach(({id, name, img, price}) => {
            htmlCatalog += `
            <li class="products__element">
            <span class="products__element-name">${name}</span>
            <img class="products__element-img" src="${img}"/>
            <span class="products__element-price">
            ⚡️ ${price.toLocaleString()} USD
            </span>
            <button class="products__element-btn">Добавить в корзину</button>
            </li>
            `;
        });
        const html = `
        <ul class="products__container">
        ${htmlCatalog}
        </ul>
        `;
        ROOT_PRODUCTS.innerHTML = html
    }
 }

 const productsPage = new Products();
 productsPage.render()