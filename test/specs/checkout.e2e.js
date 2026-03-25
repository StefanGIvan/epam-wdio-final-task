const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutPage = require('../pageobjects/checkout.page');
const CheckoutOverviewPage = require('../pageobjects/checkout.overview.page');
const CheckoutCompletePage = require('../pageobjects/checkout.complete.page');


describe('UC-1 Checkout Flow', () => {
    it('should allow a standard user to add a product to cart and complete checkout successfully', async () => {
        const productName = 'Sauce Labs Backpack';

        // Open the application and log in with a valid user
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        // Add the selected product to the cart and open the cart page
        await InventoryPage.addProductToCart(productName);
        await InventoryPage.openCart();

        // Verify the product is present in the cart and start checkout
        await CartPage.isProductDisplayed(productName);
        await CartPage.proceedToCheckout();

        // Fill in checkout information and complete the order
        await CheckoutPage.fillCheckoutInformation('John', 'Doe', '12345');
        await CheckoutOverviewPage.finishCheckout();

        // Validate the successful checkout message
        await CheckoutCompletePage.verifySuccessMessage();
    });
});