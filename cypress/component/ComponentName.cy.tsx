import Button from "../../components/Button/Button";
import React from "react";
import { mount } from "cypress/react";
describe("ComponentName.cy.ts", () => {
  it("playground", () => {
    mount(<Button>Test</Button>);
  });
});
