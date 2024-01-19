class Products {
  constructor() {
    this.classNameActive = "products__element-btn-active";
    this.labelAdd = "Добавить в корзину";
    this.labelRemove = "Удалить из корзины";
  }

  handleSetLocalionStorage(element, id) {
    const {pushProducts, products} = localStorageUtil.putProducts(id);
    if (pushProducts) {
        element.classList.add(this.classNameActive);
        element.innerHTML = this.labelRemove;
    } else {
        element.classList.remove(this.classNameActive);
        element.innerHTML = this.labelAdd;
    }
    headerPage.render(products.length);
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";

    CATALOG.forEach(({ id, name, img, price }) => {
      let activClass = "";
      let activText = "";

      if (productsStore.indexOf(id) === -1) {
        activText = this.labelAdd;
      } else {
        activClass = " " + this.classNameActive;
        activText = this.labelRemove;
      }

      htmlCatalog += `
            <li class="products__element">
                <span class="products__element-name">${name}</span>
                <img class="products__element-img" src="${img}"/>
                <span class="products__element-price">
                ⚡️ ${price.toLocaleString()} USD
                </span>
                <button class="products__element-btn${activClass}" onclick = "productsPage.handleSetLocalionStorage(this, '${id}');">
                ${activText}
                </button>
            </li>
        `;
    });
    const html = `
        <ul class="products__container">
            ${htmlCatalog}
        </ul>
    `;
    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
