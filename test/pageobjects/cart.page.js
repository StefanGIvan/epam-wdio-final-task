class CartPage {
    get checkoutButton() {
        return $('#checkout');
    }

    getCartItem(productName) {
        return $(`.inventory_item_name=${productName}`);
    }

    // Verifies that the expected product is displayed in the cart
    async isProductDisplayed(productName) {
        await expect(this.getCartItem(productName)).toBeDisplayed();
    }

    // Proceeds from cart page to checkout page
    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}

module.exports = new CartPage();