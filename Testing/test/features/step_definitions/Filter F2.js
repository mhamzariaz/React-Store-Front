// const { Given, When, Then, AfterAll } = require("cucumber");
// const { By } = require("selenium-webdriver");
// const assert = require("assert");
// const driver = require("../../../src/Driver/chromeDriver.js");

// When(
//   "an online customer selects the option to filter the list of products by a given size {string}.",
//   async function (string) {
    
//     //temp = [];
//     try {
//       temp = await driver.findElements(
//         By.className("MuiButton-label"
//         )
//       );

//       await driver.sleep(1000);
//       console.log(await temp);
//       temp[3].click();
//       await driver.sleep(1000);
//     } catch (error) {
//       element = null;
//       console.log("add to cart Error", error);
//     }
//   }
// );

// Then(
//   "only those products in the list are shown that have the given size {string}",
//   async function (string) {

    
//     try {
//         temp = await driver.findElements(
//           By.className("makeStyles-link-103"
//           )
//         );
  
//         await driver.sleep(1000);
//         console.log(await temp);
//         temp[0].click();
//         await driver.sleep(1000);

//         temp = await driver.findElements(
//             By.className("MuiButtonBase-root MuiButton-root MuiButton-outlined"
//             )
//           );
    
//           await driver.sleep(1000);
//           console.log(await temp);
//           console.log( temp.Enable)
//           await driver.sleep(1000);
        
//       } catch (error) {
//         element = null;
//         console.log("add to cart Error", error);
//       }  
// }
// );
