const Page = require('./page')

class FrontPage extends Page {
    
    get element() {
        return $(`[viewBox='0 0 448 512']`);
    }
    async btnelements() {
        await this.element.scrollIntoView()
        await this.element.click()
        await browser.pause(1000);
    }
    get interactions() {
        return $(`[viewBox='0 0 1024 1024']`);
    }
    async btninteractions() {
        await this.interactions.scrollIntoView()
        await this.interactions.click()
        await browser.pause(1000);

    }

    
    open() {
        return super.open('')
    }

}

module.exports = new FrontPage()