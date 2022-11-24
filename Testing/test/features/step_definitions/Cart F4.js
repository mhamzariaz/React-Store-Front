const { Given, When, Then, AfterAll } = require("cucumber");
const { By } = require("selenium-webdriver");
const assert = require("assert");
const driver = require("../../../src/Driver/chromeDriver.js");

When(
  "I click on + button in front of product to increase {string}",
  async function (string) {
    // Write code here that turns the phrase above into concrete actions

    let temp = [];

    let x = [];
    try {
      temp = await driver.findElement(
        By.className("MuiSvgIcon-root RSFCartButton-icon-26")
      );
      temp.click();
      await driver.sleep(1000);
      temp = await driver.findElements(
        By.className(
          "MuiButtonBase-root MuiIconButton-root RSFQuantitySelector-button-171 RSFQuantitySelector-add-173 MuiIconButton-sizeSmall"
        )
      );
      await driver.sleep(1000);
      temp[0].click();
      await driver.sleep(1000);
        }
     catch (error){
      console.log("cart error: ", error);
    }
  }
);

Then(
  "the {string} of that product must be increase by {int}", async function (string, int) {
    // Write code here that turns the phrase above into concrete actions
    await driver.sleep(1000);
    let temp = [];

    let x ;
    try {
      temp = await driver.findElements(
        By.className(
          "RSFQuantitySelector-input-174 root subtract add input"
        )
      );
      await driver.sleep(1000);
      console.log(temp);
      x=await temp[0].getAttribute("value");
      console.log(x);
      assert.equal(x, string)
      await driver.sleep(1000);
        }
     catch (error){
      console.log("cart error: ", error);
    }
  }
);
