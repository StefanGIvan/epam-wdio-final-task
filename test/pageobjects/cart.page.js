class CartPage {
    get checkoutButton() {
        return $('#checkout');
    }

    itemName(productName) {
        return $(`.inventory_item_name=${productName}`);
    }

    async isProductDisplayed(productName) {
        await expect(this.itemName(productName)).toBeDisplayed();
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}

module.exports = new CartPage();