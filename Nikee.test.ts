/**
 * File serves as a test for the Customization shoe test 
 * 
 */
import { Nike } from "./Nike";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, By, until, Key } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const page = new Nike(driver);
//Biolerplate above

const actions = driver.actions();

test("This test will go through the process of creating a pair of customized shoes through the Nike website", async () => {
await driver.manage().window().maximize();
await page.customizeProcess();
await page.finishProcess();
await driver.sleep(3000);
})

afterAll(async () => {
await driver.quit();

})