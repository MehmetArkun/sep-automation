import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page, paymentPlanPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Given("user clicks and fills first name section", async function () {
    await startApplicationPage.firstNameInputBox.fill("Mehmet");
});

Then("user clicks and fills last name section", async function () {
    await startApplicationPage.lastNameInputBox.fill("Arkun");
});

Then("user clicks and fills email section", async function () {
    await startApplicationPage.emailInputBox.fill("mehmetarkungb@gmail.com");
});

Then("user clicks and fills phone number section", async function () {
        await startApplicationPage.phoneNumberInputBox.fill("555-555-5555");
});

Then(
  "user chooses an option from how did you hear about us",
  async function () {
    await startApplicationPage.howDidYouHearAboutUsDropDown.click();
    await startApplicationPage.emailOptionFromDropDown.click();
  }
);

Then("user clicks on next button", async function () {
    await startApplicationPage.nextButton.click();
});

Then("user succesfully lands on the step 2 page", async function () {
    await expect(paymentPlanPage.chooseAPaymentPlanText).toBeVisible();
});