const expectChai = require('chai').expect;
const assert = require('chai').assert;
import 'chai/register-should';


describe('Watches Page', () => {
    it('should show the banner container', async () => {
        await browser.url('https://export.ebay.com/ru/shipping/shipping-first-steps/international-shipping/');
        
        const promoBanner =  await $('div.page-title');

        await expect(promoBanner).toBeDisplayed();
    });

    it('should show the banner title', async () => {
        const bannerTitle =  await $('h1.page-title__element');
        const bannerTitleText = await bannerTitle.getText();

        await expect(bannerTitle).toHaveTextContaining('доставку');
        expectChai(bannerTitleText).to.not.be.empty;
        bannerTitle.should.not.be.empty;
        assert.isNotEmpty(bannerTitleText);
    });

    it('should contain link on banner', async () => {
        const shopButton =  await $('a.block-banner__button');
        const tag = await shopButton.getTagName();

        await expect(shopButton).toHaveLinkContaining('com');
        await expect(shopButton).toBeClickable();
        expectChai(tag).to.equal('a');
        tag.should.be.equal('a');
    });

    // it('should click on the shop button', async () => {
    //     // const shopButton =  await $('a.b-textlink--parent');
    //     // shopButton.click();

    //     const url = await browser.getUrl();
    //     expectChai(url).to.include('/ru/');
    //     await expect(browser).toHaveUrl('https://export.ebay.com/ru/shipping/shipping-first-steps/');
    // });
});