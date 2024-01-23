class Header {

  hendlerOpenShoppingPage() {
    shoppingPege.render();
  }

    render(count) {
        const html = `
        <div class="header__container">
          <div class="header__counter" onclick="headerPage.hendlerOpenShoppingPage();">
          🔥 ${count}
          </div>
        </div>
        `;
        ROOT_HEADER.innerHTML = html;

    }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts()
headerPage.render(productsStore.length);