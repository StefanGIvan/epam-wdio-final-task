class CheckoutCompletePage {
    get completeHeader() {
        return $('.complete-header');
    }

    async verifySuccessMessage() {
        await expect(this.completeHeader).toHaveText('Thank you for your order!');
    }
}

module.exports = new CheckoutCompletePage();