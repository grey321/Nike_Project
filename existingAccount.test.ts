/**
 *File serves as a test that will sign-in to a pre existing account and return to homepage
 */

import { Nike } from "./sign_In";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, By, until, Key } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const page = new Nike(driver);
//Biolerplate above

const actions = driver.actions();

test("Test will sign-in to a pre existing account and return to homepage", async () => {
await driver.manage().window().maximize();
await page.account_signIn();
await page.typeEmail('greyxx321@gmail.com'); 
await page.typePassword('Simba007!'); 
await page.finish_Process();
})

afterAll(async () => {
await driver.quit();
    
})