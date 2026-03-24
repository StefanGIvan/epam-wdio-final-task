class CartPage {
    get checkoutButton() {
        return $('#checkout');
    }

    getCartItem(productName) {
        return $(`.inventory_item_name=${productName}`);
    }

    async isProductDisplayed(productName) {
        await expect(this.getCartItem(productName)).toBeDisplayed();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}

module.exports = new CartPage();