// const { Given, When, Then, AfterAll } = require("cucumber");
// const { By } = require("selenium-webdriver");
// const assert = require("assert");
// const driver = require("../../../src/Driver/chromeDriver.js");


// Given('online customer is on the e-commerce website product listing page.', 
// { timeout: 2 * 50000 },async function () { 
//     await driver.get("http://localhost:3000/s/1");
//     await driver.sleep(1000);
//   });


//   When('an online customer selects the option to filter the list of products by a given {string}.',
//   async function (string) {
//     temp=[]
//     try {
//         temp=await driver.findElements(
//             By.className("RSFSwatchProductOption-button-116 RSFSwatchProductOption-default-123")) ; 
//             await driver.sleep(1000);
//             console.log(temp);
//             temp[1].click()
//         await driver.sleep(1000);

       
//     } catch (error) {
//         element = null;
//         console.log("add to cart Error",error)
//     }
    
//   });



//   Then('only those products in the list are shown that have the given {string}',
//   async function (string) {

//   });