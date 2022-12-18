const Page = require('./page')

class CartPage extends Page {
    get btndoubleclick(){
        return $('#doubleClickBtn')
    }
    get btnrightclick(){
        return $('#rightClickBtn')
    }
    get btnoneclick(){
        return $(`//button[.='Click Me']`)
    }
    get btndrag(){
        return $('#draggable')
    }
    get btndrop(){
       return $('#droppable')
   }
   get background(){
    return $('#droppable')
   }
 
    async doubleclick() {
        await this.btndoubleclick.doubleClick();
        await browser.pause(1000)
    }
    async clickrightme() {
        await this.btnrightclick.click({ button: 'right' })
        await browser.pause(1000)
    }
    async oneclick() {
        await browser.pause(1000)
        await this.btnoneclick.click()
        await browser.pause(1000)
    }
    async clickOkAllert(){
        await browser.acceptAlert()
    }
    async clickBrowserBackBtn(){
        await browser.back()
        await browser.back()
        await browser.back()
    }
   async dragme(){
        await this.btndrag.dragAndDrop(await this.btndrop)
        await this.background.getCSSProperty('color')
        await browser.pause(1000)
    }
}

module.exports = new CartPage()