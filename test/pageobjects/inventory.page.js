class InventoryPage {
    get cartButton() {
        return $('.shopping_cart_link');
    }

    // Find and build the add cart button selector from a product name
    // then add to cart
    async addProductToCart(productName) {
        const addToCartButton = await $(`[data-test="add-to-cart-${productName
            .toLowerCase()
        .replace(/\s+/g, '-')}"]`);

        await addToCartButton.click();
    }

    // Opens the cart page
    async openCart() {
        await this.cartButton.click();
    }
}

module.exports = new InventoryPage();