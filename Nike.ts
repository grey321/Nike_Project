/////The following .ts file will serve as a resource path to the Nike.test.ts file/////
/////for use of methods and xpaths to better simplified on the test file/////
//////////////////////////////////////////////////////////////////////////////////////


import { By, until, WebDriver } from "selenium-webdriver";
//Imported Boiler Plate/Page Object model ^^^^^^^^^^^^^^^^^^^^^^

//Here we export our class "Nike" from our test file
export class Nike {
    driver: WebDriver;

    url: string = "https://www.nike.com/";

//Below is a complied list of all the selctors I will be using in order for the Nike project

//This Xpath represents the Customzie tab on the homepage of Nike.com
customizeTab: By = By.xpath('//a[@href="https://www.nike.com/nike-by-you"]');

//Clicks the Men's menu button right after the customize screen
customizeMen: By = By.xpath('//a[@data-analytics-action-id="d9f8ece5-ccf9-40be-a949-c86645edd08e"]'); 

//This Xpath will navigate to the chosen shoe (Kyrie 7's) on the customization page
chosenShoe: By = By.xpath('//a[@aria-label="Kyrie 7 By You"]');

//This locator clicks the "Your Design" tab within the shoe customization page
yourDesign: By = By.xpath('//li[@class="tab-list-item tab-list-active"]');

//Clicks the Customize button to start adding changes to shoe
customizeButton: By = By.xpath('//button[@aria-label="Customize"]');

//This Xpath clicks the Skip button for the pop-up window that appears after clicking Customize
pop_upSkip: By = By.xpath('//button[@class="body-3 ncss-btn-secondary-dark css-1fc8vz0"]');

//This Xpath clicks red as the base color for the shoe 
baseRed: By = By.xpath('(//button[@data-testid="marketing-component-option"])[3]');

//Updated 'Next page arrow' that is more unique and specific  
next_pageArrow: By = By.xpath('//div[@data-testid="mc-next"]');

//'Previous page arrow' that returns user back 1 page
prev_pageArrow: By = By.xpath('//div[@data-testid="mc-prev"]');

/**
 * The locators listed below are the many customization options/pieces that you can change on a shoe from the order that you would choose them on the Nike website
 * The numbers associated in the Xpaths represent the color number value within the array
*/
 
Left_tongueBlue: By = By.xpath('(//button[@data-testid="marketing-component-option"])[6]');

Right_tongueBlue: By = By.xpath('(//button[@data-testid="marketing-component-option"])[6]');

Heel_Black: By = By.xpath('(//button[@data-testid="marketing-component-option"])[1]');

Heel_graphicSolid: By = By.xpath('//button[@class="ncss-btn css-795mz3 flx-gro-sm-0"]');

Heel_graphicRed: By = By.xpath('(//button[@data-testid="marketing-component-option"])[8]');

L_shoeSwoosh: By = By.xpath('(//button[@data-testid="marketing-component-option"])[5]');

R_shoeSwoosh: By = By.xpath('(//button[@data-testid="marketing-component-option"])[10]');

L_shoeBlades: By = By.xpath('(//button[@data-testid="marketing-component-option"])[11]');

R_shoeBlades: By = By.xpath('(//button[@data-testid="marketing-component-option"])[11]');

L_shoeLace: By = By.xpath('(//button[@data-testid="marketing-component-option"])[6]');

R_shoeLace: By = By.xpath('(//button[@data-testid="marketing-component-option"])[11]');

shoe_Lining: By = By.xpath('(//button[@data-testid="marketing-component-option"])[12]');

midSoles: By = By.xpath('(//button[@data-testid="marketing-component-option"])[4]');

midSoleNext: By = By.xpath('//div[@class="d-sm-flx flx-ai-sm-c flx-jc-sm-fs css=pzhe17"]');

foreFoot_Clip: By = By.xpath('(//button[@data-testid="marketing-component-option"])[1]');

glow_darkButton: By = By.xpath('(//button[@data-testid="marketing-component-option-other"])[3]');

gd_White: By = By.xpath('(//button[@data-testid="marketing-component-option"])[1]');

//The locator below represents the Accept button found on the customization page
accept_Button: By = By.xpath('//button[@data-testid="pid-marketing-component-accept"]');

//The locator below represents the Preview button on the customization page
preview_Button: By = By.xpath('//button[@data-testid="tray-preview-open-button"]');

//The locator below represents the Done button on the customization page
Done_Button: By = By.xpath('//button[@data-testid="done-control"]');


constructor(driver: WebDriver) {
    this.driver = driver;
}

// The customizeProcess async below will go through the process of creating a pair of shoes, starting from the Nike hoempage

async customizeProcess() {
await this.driver.get(this.url);
await this.driver.sleep(3000);
await this.driver.wait(until.elementLocated(this.customizeTab));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.customizeTab)));
await this.driver.findElement(this.customizeTab).click();

await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.customizeMen));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.customizeMen)));
await this.driver.findElement(this.customizeMen).click();

await this.driver.sleep(4000)

await this.driver.wait(until.elementLocated(this.chosenShoe));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.chosenShoe)));
await this.driver.findElement(this.chosenShoe).click();
await this.driver.sleep(2000);

await this.driver.wait(until.elementLocated(this.yourDesign));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.yourDesign)));
await this.driver.findElement(this.yourDesign).click();
await this.driver.sleep(2000);

await this.driver.wait(until.elementLocated(this.customizeButton));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.customizeButton)));
await this.driver.findElement(this.customizeButton).click();
await this.driver.sleep(2000);

await this.driver.wait(until.elementLocated(this.pop_upSkip));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.pop_upSkip)));
await this.driver.findElement(this.pop_upSkip).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.baseRed));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.baseRed)));
await this.driver.findElement(this.baseRed).click();


await this.driver.wait(until.elementLocated(this.next_pageArrow));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.next_pageArrow)));
await this.driver.findElement(this.next_pageArrow).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.Left_tongueBlue));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.Left_tongueBlue)));
await this.driver.findElement(this.Left_tongueBlue).click();


await this.driver.wait(until.elementLocated(this.next_pageArrow));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.next_pageArrow)));
await this.driver.findElement(this.next_pageArrow).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.Right_tongueBlue));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.Right_tongueBlue)));
await this.driver.findElement(this.Right_tongueBlue).click();


await this.driver.wait(until.elementLocated(this.next_pageArrow));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.next_pageArrow)));
await this.driver.findElement(this.next_pageArrow).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.Heel_Black));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.Heel_Black)));
await this.driver.findElement(this.Heel_Black).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.next_pageArrow));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.next_pageArrow)));
await this.driver.findElement(this.next_pageArrow).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.Heel_graphicSolid));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.Heel_graphicSolid)));
await this.driver.findElement(this.Heel_graphicSolid).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.next_pageArrow));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.next_pageArrow)));
await this.driver.findElement(this.next_pageArrow).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.Heel_graphicRed));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.Heel_graphicRed)));
await this.driver.findElement(this.Heel_graphicRed).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.next_pageArrow));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.next_pageArrow)));
await this.driver.findElement(this.next_pageArrow).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.L_shoeSwoosh));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.L_shoeSwoosh)));
await this.driver.findElement(this.L_shoeSwoosh).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.next_pageArrow));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.next_pageArrow)));
await this.driver.findElement(this.next_pageArrow).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.R_shoeSwoosh));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.R_shoeSwoosh)));
await this.driver.findElement(this.R_shoeSwoosh).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.next_pageArrow));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.next_pageArrow)));
await this.driver.findElement(this.next_pageArrow).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.L_shoeBlades));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.L_shoeBlades)));
await this.driver.findElement(this.L_shoeBlades).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.next_pageArrow));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.next_pageArrow)));
await this.driver.findElement(this.next_pageArrow).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.R_shoeBlades));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.R_shoeBlades)));
await this.driver.findElement(this.R_shoeBlades).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.next_pageArrow));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.next_pageArrow)));
await this.driver.findElement(this.next_pageArrow).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.L_shoeLace));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.L_shoeLace)));
await this.driver.findElement(this.L_shoeLace).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.next_pageArrow));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.next_pageArrow)));
await this.driver.findElement(this.next_pageArrow).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.R_shoeLace));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.R_shoeLace)));
await this.driver.findElement(this.R_shoeLace).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.next_pageArrow));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.next_pageArrow)));
await this.driver.findElement(this.next_pageArrow).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.shoe_Lining));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.shoe_Lining)));
await this.driver.findElement(this.shoe_Lining).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.next_pageArrow));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.next_pageArrow)));
await this.driver.findElement(this.next_pageArrow).click();
await this.driver.sleep(2000);

await this.driver.wait(until.elementLocated(this.midSoles));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.midSoles)));
await this.driver.findElement(this.midSoles).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.next_pageArrow));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.next_pageArrow)));
await this.driver.findElement(this.next_pageArrow).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.foreFoot_Clip));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.foreFoot_Clip)));
await this.driver.findElement(this.foreFoot_Clip).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.next_pageArrow));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.next_pageArrow)));
await this.driver.findElement(this.next_pageArrow).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.glow_darkButton));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.glow_darkButton)));
await this.driver.findElement(this.glow_darkButton).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.gd_White));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.gd_White)));
await this.driver.findElement(this.gd_White).click();
await this.driver.sleep(1000);

await this.driver.wait(until.elementLocated(this.next_pageArrow));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.next_pageArrow)));
await this.driver.findElement(this.next_pageArrow).click();
await this.driver.sleep(1000);

}

/**
 * Tried string interpolation to add customzed intials into shoes; however Nike UI does not register it 
 * async typeInitial1(text: string) {
 *      returnthis.sendkeys(this.inputField_A, `${text}`)
 *  }
 * async typeInitial2(text: string) {
 *      return this.sendKeys(this.inputField_B, `${text}`)
 *  }
*/


//The finishProcess below will showcase the shoes and then click the Done button
async finishProcess () {

await this.driver.wait(until.elementLocated(this.preview_Button));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.preview_Button)));
await this.driver.findElement(this.preview_Button).click();
await this.driver.sleep(5000);

await this.driver.wait(until.elementLocated(this.Done_Button));
await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.Done_Button)));
await this.driver.findElement(this.Done_Button).click();
await this.driver.sleep(3000);


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

