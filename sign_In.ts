// import { exception } from "console";
import { By, until, WebDriver } from "selenium-webdriver";
//Imported Boiler Plate/Page Object model ^^^^^^^^^^^^^^^^^^^^^^

//Here we export our class "Nike" from our test file
export class Nike {
    driver: WebDriver;

    url: string = "https://www.nike.com/";

//Below is a list of locators used to Sign into an active account

SignIn_tab: By = By.xpath("(//button[@data-path='sign in'])[1]");

Email_Field: By = By.xpath("//input[@type='email']");

Password_Field: By = By.xpath("//input[@type='password']");

SignIn_Button: By = By.xpath("//input[@value='SIGN IN']");


constructor(driver: WebDriver) {
    this.driver = driver;
}

async account_signIn() {

    await this.driver.get(this.url);
    await this.driver.sleep(3000);
    await this.driver.wait(until.elementLocated(this.SignIn_tab));
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.SignIn_tab)));
    await this.driver.findElement(this.SignIn_tab).click();
}
    async typeEmail(text: string) {
    return this.sendKeys(this.Email_Field, `${text}`);
    }

    async typePassword(text: string) {
    return this.sendKeys(this.Password_Field, `${text}`);
    }
    
async finish_Process() {
    await this.driver.wait(until.elementLocated(this.SignIn_Button));
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.SignIn_Button)));
    await this.driver.findElement(this.SignIn_Button).click();
    await this.driver.sleep(3000)
}




    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).sendKeys(keys);
    }    
    
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).click();
    
        }
}