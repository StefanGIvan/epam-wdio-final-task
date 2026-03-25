class CheckoutOverviewPage{
    get finishButton() {
        return $('#finish');
    }

// Completes the checkout from the overview page
    async finishCheckout() {
        await this.finishButton.click();
    }
}

module.exports = new CheckoutOverviewPage();

