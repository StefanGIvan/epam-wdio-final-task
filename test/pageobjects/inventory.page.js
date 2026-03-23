class InventoryPage {
    get cartLink() {
        return $('.shopping_cart_link');
    }

    async addProductToCart(productName) {
        const addToCartButton = await $(`[data-test="add-to-cart-${productName
            .toLowerCase()
        .replace(/\s+/g, '-')}"]`);

        await addToCartButton.click();
    }

    async openCart() {
        await this.cartLink.click();
    }
}

module.exports = new InventoryPage();