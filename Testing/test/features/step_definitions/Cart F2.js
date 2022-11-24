const { Given, When, Then, AfterAll } = require("cucumber");
const { By } = require("selenium-webdriver");
const assert = require("assert");
const driver = require("../../../src/Driver/chromeDriver.js");

Given(
  "that {string} added in the cart",
  { timeout: 2 * 50000 },
  async function (string) {
    await driver.get("http://localhost:3000/p/4");
    let temp = 0;
    try {
      temp = await driver.findElement(
        By.className(
          "MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-docked-78 makeStyles-noShadow-79 MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"
        )
      );
      temp.click();
      //await driver.sleep(1000);
    } catch (error) {
      temp = null;
      console.log("add to cart Error");
    }
    await driver.sleep(1000);
  }
);

When("I click view cart icon", { timeout: 2 * 50000 }, async function () {
  await driver.sleep(1000);
  let temp;
  try {
    temp = await driver.findElement(
      By.className("MuiSvgIcon-root RSFCartButton-icon-26")
    );
    temp.click();
    //await driver.sleep(1000);
  } catch (error) {
    element = null;
    console.log("add to cart Error");
  }
});

Then("The cart page is displayed", { timeout: 2 * 50000 }, async function () {
  await driver.sleep(1000);

  x = "";
  try {
    temp = await driver.findElement(
      By.className("MuiTypography-root MuiTypography-h6")
    );
    x = await temp.getText();
  } catch (error) {
    console.log("cart error");
    console.log("error", error);
  }
  console.log("output:", x);
  if (x.slice(0, 7) !== "My Cart") {
    assert.equal(false, true);
  }


});

Then("I'll be able to view all products in {string}", async function (string) {
  // Write code here that turns the phrase above into concrete actions
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
  console.log("last",x);
  var found = x.find(function (element) {
    return element == string;
});
assert.equal(found, string)

});
