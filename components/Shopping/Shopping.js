class Shopping {
    hendleClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    let sumCatalog = 0;

    CATALOG.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
            <tr>
            <td class="shopping__element-name">⚡️ ${name}</td>
            <td class="shopping__element-price">${price.toLocaleString()} USD</td>
            </tr>
            `;
            sumCatalog += price;
      }
    });

    const html = `
        <div class="shopping__container">
        <div class="shopping__close" onclick="shoppingPege.hendleClear()">
        
        </div>
        <table>
            ${htmlCatalog}
            <tr>
            <td class="shopping__element-name">💥 Сумма:</td>
            <td class="shopping__element-price">${sumCatalog.toLocaleString()} USD</td>
            </tr>
        </table>
        </div>
        `;
    ROOT_SHOPPING.innerHTML = html;
  }
}

const shoppingPege = new Shopping();
