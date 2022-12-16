const {Given, When, Then} = require('@wdio/cucumber-framework')

const FrontPage = require('../pageobjects/front-page')
const HomePage = require('../pageobjects/home-page')
const CartPage = require('../pageobjects/cart-page')
const cartPage = require('../pageobjects/cart-page')


// Given(/^I am on the front page$/, async() => {
//     await FrontPage.open()
// })

Given('I am on the front page', async() => {
    await FrontPage.open()
})



// When(/^I try to login with username "(.*)" and password "(.*)"$/, async(username, password) => {
//     await FrontPage.login(username, password)
// })

When('I try to login with username {string} and password {string}', async(username, password) => {
    await FrontPage.login(username, password)
})

Then(/^I am successfully logged in with username "(.*)"$/, async(username) => {
    await HomePage.verifyLoginSuccess(username)
})

When('I add item {string} to cart', async(itemName) => {
    await HomePage.clickProductName(itemName)
    await CartPage.clickBtnAddToCart()
    await browser.pause(3000)
    await CartPage.clickOkAllert()
    await CartPage.clickBrowserBackBtn()
    await browser.pause(5000)
})

When('I am successfully logout', async () => {
  await HomePage.Logout()
  await browser.pause(2000)
})
 // When('I add these items to cart:', async(table) => {
  // Write code here that turns the phrase above into concrete actions
 // let data = table.hashes() //untuk menjalankan scenario format table
  // for(let i=0; i<data.length; i++){
 //   await HomePage.clickProductName(data[i].itemName)
 //   await CartPage.clickBtnAddToCart()
  //  await browser.pause(2000)
 //   await CartPage.clickOkAllert()
 //   await CartPage.clickBrowserBackBtn()
 //   await browser.pause(4000)
  //}
  
// })
