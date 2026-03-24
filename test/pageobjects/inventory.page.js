class InventoryPage {
    get cartButton() {
        return $('.shopping_cart_link');
    }

    async addProductToCart(productName) {
        const addToCartButton = await $(`[data-test="add-to-cart-${productName
            .toLowerCase()
        .replace(/\s+/g, '-')}"]`);

        await addToCartButton.click();
    }

    async openCart() {
        await this.cartButton.click();
    }
}

module.exports = new InventoryPage();