const Page = require('./page')

class HomePage extends Page {

    get btnbuttons() {
        return $(`//span[.='Buttons']`);
    }
    get btninteractions(){
        return $(`//span[.='Droppable']`)
    }
    async clickbutton(){
        await this.btnbuttons.scrollIntoView()
        await browser.pause(1000)
        await this.btnbuttons.click()
    }
    async clickinteractions (){
        await this.btninteractions.scrollIntoView()
        await browser.pause(1000)
        await this.btninteractions.click()
    }
  

}

module.exports = new HomePage();