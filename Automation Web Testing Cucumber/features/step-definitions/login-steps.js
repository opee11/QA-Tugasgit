const {Given, When, Then} = require('@wdio/cucumber-framework')

const FrontPage = require('../pageobjects/front-page')
const HomePage = require('../pageobjects/home-page')
const CartPage = require('../pageobjects/aksi-page')
const cartPage = require('../pageobjects/aksi-page')
const aksiPage = require('../pageobjects/aksi-page')


// Given(/^I am on the front page$/, async() => {
//     await FrontPage.open()
// })

Given('I am on the front page', async() => {
    await FrontPage.open()
})
When('I click elements', async () => {
    await FrontPage.btnelements()
    await browser.pause(2000)
  })
  When('I am on menu elemen', async () => {
    await HomePage.clickbutton()
    await browser.pause(1000)
  })
  
When('I am insert double click me', async() => {
  await aksiPage.doubleclick()
  await browser.pause(1000)
  await aksiPage.clickBrowserBackBtn()
  await browser.pause(1000)
  })

When('I am insert right click me', async() => {
    await aksiPage.clickrightme()
  await browser.pause(1000)
})

When('I am insert click me', async () => {
    await aksiPage.oneclick()
  await browser.pause(1000)
  
})

When('I click Interactions', async () => {
  await FrontPage.btninteractions()
  await browser.pause(1000)
})

When('I am on menu Interactions',async () => {
  await HomePage.clickinteractions()
  await browser.pause(1000)
})


When('I am click droppable', async () => {
  await aksiPage.dragme()
  await browser.pause(1000)
})







