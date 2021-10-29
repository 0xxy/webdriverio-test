import LoginPage from '../pageobjects/login.page';
import resources from '../resources';
import { waitForTextChange } from '../utilities/helper';
const allure = require('@wdio/allure-reporter').default;

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://www.ebay.com/');

        await expect(browser).toHaveTitle (resources.homeTitle).saveScreenshot('./some/path/elemScreenshot.png');;
    });

    it('should search for a product and verify the search text value', async () => {
        allureReporter.addSeverity('Critical');
        LoginPage.searchInput.addValue('laptop');
        LoginPage.searchButton.click();

        await expect(LoginPage.searchInput).toHaveValue ('laptop');
    });

    it('should redirect to a new page and verify the title', async () => {
        await expect(browser).toHaveTitle(resources.laptopTitle);
    });

    it('should update the search category', async () => {
        allureReporter.addFeature('search category');
        waitForTextChange(LoginPage.category, 'Ноутбуки и нетбуки PC', 3000);
        await expect(LoginPage.category).toHaveText('Ноутбуки и нетбуки PC');
    });
});