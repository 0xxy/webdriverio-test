const expectChai = require('chai').expect;

import WatchesPage from '../pageobjects/watches.page';
import { waitAndClick } from '../utilities/helper';

describe('Watches Page', async () => {
    it('should open url & verify the title', async () => {
        await WatchesPage.open();
        await expect(WatchesPage.bannerTitle).toHaveTextContaining('с');
        await WatchesPage.getWatchesCategoryListText();
        await WatchesPage.fashionLink.moveTo();
        waitAndClick(WatchesPage.watchesLink, 3000);
    });

    // it('should verify path', () => {
        
    // })

    // it('should show the banner container', async () => {
    //     await expect(WatchesPage.promoBanner).toBeDisplayed();
    // });

    // it('should contain link on banner', async () => {
    //     const shopButton =  await $('block-adjustable-image__text-block element--bg-1');

    //     await expect(shopButton).toHaveLinkContaining('/shipping/');
    //     await expect(shopButton).toBeClickable();
    // });

    // it('should click on the shop button', async () => {
        // const shopButton =  await $('a.b-textlink--parent');
        // shopButton.click();

    //     const url = await browser.getUrl();
    //     expectChai(url).to.include('/ru/');
    //     await expect(browser).toHaveUrl('https://export.ebay.com/ru/shipping/shipping-first-steps/');
    // });
});