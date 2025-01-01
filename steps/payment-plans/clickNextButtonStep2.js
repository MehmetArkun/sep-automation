import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  paymentPlanPage,
  page,
  startApplicationPage,
  reviewPaymentPage,
} from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Given("user has completed step one with valid information", async function () {
  await startApplicationPage.firstNameInputBox.fill("Mehmet");
  await startApplicationPage.lastNameInputBox.fill("Arkun");
  await startApplicationPage.emailInputBox.fill("mehmetarkungb@gmail.com");
  await startApplicationPage.phoneNumberInputBox.fill("555-555-5555");
  await startApplicationPage.nextButton.click();
});

Given("user is on step two of the enrollment process", async function () {
  await expect(paymentPlanPage.chooseAPaymentPlanText).toBeVisible();
});

Then("User clicks on upfront payment plan", async function () {
  await paymentPlanPage.upfrontPaymentOption.click();
});

Then("The next button is clickable", async function () {
  await expect(paymentPlanPage.activeNextButton).toBeVisible();
});

Then("The user clicks on the next button", async function () {
  await paymentPlanPage.activeNextButton.click();
});

Then("The product price is shown in middle of the page", async function () {
  await expect(reviewPaymentPage.productPriceText).toBeVisible();
});

Then("The step 1 circle is green", async function () {
    await expect(paymentPlanPage.step1Circle).toContainText("done");
});

Then("The step 2 circle is green", async function () {
        await expect(paymentPlanPage.step2Circle).toContainText("done");

});

Then("The step 3 circle is blue", async function () {
        await expect(paymentPlanPage.step3Circle).toContainText("edit")
});

Then("The payment component is displayed", async function () {
  await expect(
    reviewPaymentPage.paymentFrame.locator("//input[@id='Field-numberInput']")
  ).toBeVisible();
});

Then("The price summary is displayed", async function () {
    await expect(reviewPaymentPage.productPriceAmount).toBeVisible();
    await expect(reviewPaymentPage.processingFeeAmount).toBeVisible();
    await expect(reviewPaymentPage.totalAmount).toBeVisible();
    await expect(reviewPaymentPage.subtotalAmount).toBeVisible();
});

Then("The back button is displayed", async function () {
    await expect(reviewPaymentPage.backButton).toBeVisible();
});

Then("The pay button is displayed", async function () {
    await expect(reviewPaymentPage.payButton).toBeVisible();
});
