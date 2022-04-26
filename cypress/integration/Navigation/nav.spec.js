/// <reference types="cypress" />

context("Navigation", () => {
  context("720p resolution", () => {
    beforeEach(() => {
      /**
       * Run these tests as if in a desktop browser,
       * with a 720p monitor
       */
      cy.visit("/");
      cy.viewport(1280, 720);
    });
    describe("When you visit home", () => {
      it("Should visit home page", () => {
        cy.visit("/");
      });
      describe("nav", () => {
        it("Should navigate to About page", () => {
          cy.get(`nav a`).each(($el) => {
            cy.wrap($el).click();

            console.log($el);
            //cy.url().should("include", $el);
          });
          //   cy.url().should("include", "/erinnerungsparlament/");
        });
      });
    });
  });

  //   context("iphone-5 resolution", () => {
  //     beforeEach(() => {
  //       /**
  //        * Run these tests as if in a desktop browser,
  //        * with a 720p monitor
  //        */
  //       cy.viewport("iphone-5");
  //     });
  //     describe("When you visit home", () => {
  //       it("Should visit home page", () => {
  //         cy.visit("/");
  //       });
  //       describe("Mmenu", () => {
  //         it("Should open the mmenu", () => {
  //           cy.get("[data-cy=mmenu-btn]").click();
  //         });
  //         describe("nav", () => {
  //           it("Should navigate to About page", () => {
  //             cy.get("[data-cy=nav-item]").contains("About").click();
  //             cy.url().should("include", "/about/");
  //           });
  //         });
  //       });
  //     });
  //   });
});
