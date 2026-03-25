class CheckoutPage {
    // Customer information fields
    get firstNameInput() {
        return $('#first-name');
    }

    get lastNameInput() {
        return $('#last-name');
    }

    get postalCodeInput() {
        return $('#postal-code');
    }

    get continueButton() {
        return $('#continue');
    }

    // Fills the checkout form and proceeds to the overview step
    async fillCheckoutInformation(firstName, lastName, postalCode) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(postalCode);
        await this.continueButton.click();
    }
}

module.exports = new CheckoutPage();