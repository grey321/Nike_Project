import { Nike } from "./Nike";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, By, until, Key } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const page = new Nike(driver);
//Biolerplate above
const actions = driver.actions();


test("Test getting to the Customized men's section page and pick a shoe", async () => {
await driver.manage().window().maximize();
await page.customizeProcess();
await page.typeInitial1("g");
await page.typeInitial2("b");
// await page.sendKeys(page.inputField_A,"g\n");
// await page.sendKeys(page.inputField_B,"b\n");
await page.finishProcess();
await driver.sleep(3000);

})


afterAll(async () => {
await driver.quit();

})