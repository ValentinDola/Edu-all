import { test, expect } from "@playwright/experimental-ct-react";
import { AssessmentForm } from "./assessment";

test("it renders", async ({ mount }) => {
  const component = await mount(<AssessmentForm />);

  await expect(component).toContainText("What Path is Right for You?");
});
