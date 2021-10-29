const Page = require('./page');

class WatchesPage extends Page {
    
    // get promoBanner () { return $('div.page-title') }
    get bannerTitle () { return $$('h2.hl-card-header__headline')[0] };
    get watchesCategoryList() {
        return $$('section[id="s0-16-13_2-0-1[0]-0-0"] ul li');
    };
    get fashionLink() {
        return $$('.hl-cat-nav__js-tab a[href*="Fashion"]')[0];
    };
    get watchesLink() {
        return $('.hl-cat-nav__sub-cat-col a[href*="Wristwatches"]');
    }

    async open () {
        await super.open('https://by.ebay.com/');
    };
    
    async getWatchesCategoryListText() {
        await this.watchesCategoryList.map( async (el) => console.log( await el.getText()));
    }
}

module.exports = new WatchesPage();