const { Given, When, Then, AfterAll } = require("cucumber");
const { By } = require("selenium-webdriver");
const assert = require("assert");
const driver = require("../../../src/Driver/chromeDriver.js");

Given('that, I selected an item from the displayed list.', { timeout: 2 * 50000 }, async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.get("http://localhost:3000/p/4");
    await driver.sleep(1000);

  });


Given('I clicked the add to cart button.', { timeout: 2 * 50000 }, async function () {
    // Write code here that turns the phrase above into concrete actions
    let temp=0
    try {
        temp=await driver.findElement(
            By.className("MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-docked-78 makeStyles-noShadow-79 MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge")
        )
        temp.click();
        //await driver.sleep(1000);

       
    } catch (error) {
        element = null;
        console.log("add to cart Error")
    }
  });


 Then('the {string}.', async function (string) {
           // Write code here that turns the phrase above into concrete actions
           //assert(true,true
           await driver.sleep(1000);
           let x=""
           try {
            
               temp=await driver.findElement(
                   By.css("h2.MuiTypography-root.MuiTypography-h6")
               )
               x=await temp.getText()
               
              
               
               //await driver.sleep(1000);
       
              
           } catch (error) {
               element = null;
               console.log("add to cart Error",error)
           }
           console.log("output:",x);
           assert.equal(string,x)
});