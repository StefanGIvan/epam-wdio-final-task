const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CheckoutPage = require('../pageobjects/checkout.page');
const CheckoutCompletePage = require('../pageobjects/checkout.complete.page');
const CartPage = require('../pageobjects/cart.page');

describe('UC-1 Checkout Flow', () => {
    it('should complete checkout successfully for a selected product', async() => {
        const productName = 'Sauce Labs Backpack';

        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        await InventoryPage.addProductToCart(productName);
        await InventoryPage.openCart();

        await CartPage.isProductDisplayed(productName);
        await CartPage.clickCheckout();

        await CheckoutPage.fillInformation('John', 'Doe', '12345');
        await CheckoutPage.finishCheckout();

        await CheckoutCompletePage.verifySuccessMessage();
    });
});