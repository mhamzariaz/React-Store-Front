const { Given, When, Then, AfterAll } = require("cucumber");
const { By } = require("selenium-webdriver");
const assert = require("assert");
const driver = require("../../../src/Driver/chromeDriver.js");

When(
  "I click remove button from any {string} in the cart list",
  async function (string) {
    
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
          "MuiButtonBase-root MuiIconButton-root makeStyles-remove-227"
        )
      );
      await driver.sleep(1000);
      temp[0].click();
      await driver.sleep(1000);

      temp = await driver.findElements(
        By.className("MuiButtonBase-root MuiButton-root MuiButton-text")
      );

      await driver.sleep(1000);
      console.log(temp);
      temp[0].click();
    } catch (error) {
      console.log("cart error", error);
    }
  }
);

Then('the {string} remove from the Cart List', async function (string)  {
  await driver.sleep(1000);
  let temp = [];

  let x = [];
  try {
    temp = await driver.findElements(
      By.className("MuiTypography-root MuiTypography-subtitle1")
    );

    temp.forEach(async (element) => {
      x.push(await element.getText());
    });
    await driver.sleep(1000);
  } catch (error) {
    console.log("cart error", error);
  }
  console.log("last", x);
  var found = x.find(function (element) {
    return element == string;
  });
  if (found === string) {
    assert.equal(false, true);
  }
  else{
    assert.equal(true, true);
  }
});
