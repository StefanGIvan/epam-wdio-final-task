class CheckoutCompletePage {
    get completeHeader() {
        return $('.complete-header');
    }

    // Verifies that checkout was completed successfully
    async verifySuccessMessage() {
        await expect(this.completeHeader).toHaveText('Thank you for your order!');
    }
}

module.exports = new CheckoutCompletePage();