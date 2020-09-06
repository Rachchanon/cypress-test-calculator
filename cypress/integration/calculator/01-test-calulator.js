/// <reference types="cypress" />

// describe () คือการบอกให้เรารู้ว่าเราเทสอะไร
// it () คือการบอกให้เรารู้ว่า Step การเทสของเรามีอะไรบ้าง
// .get () คือการ get element ดูเพิ่มเติมได้ที่ https://bit.ly/2mMWokL
// .type () คือการ input text
// .click () คือการ click ปกติ

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://test-cal.herokuapp.com/')
    // cy.visit('http://localhost:3000/');
  });

  describe('ทดสอบการบวก', function () {
    it('1++1+', () => {
      cy.get('#A .num1').click();
      cy.get('#A .btn-plus').click();
      cy.get('#A .btn-plus').click();
      cy.get('#A .num1').click();
      cy.get('#A .btn-plus').click();
      cy.get('#A .btn-result').click();
      cy.get('#A .result').contains('2');
    });

    it('+0..2+3555.0.2', () => {
      cy.get('#A .btn-plus').click();
      cy.get('#A .num0').click();
      cy.get('#A .btn-dot').click();
      cy.get('#A .btn-dot').click();
      cy.get('#A .num2').click();
      cy.get('#A .btn-plus').click();
      cy.get('#A .num3').click();
      cy.get('#A .num5').click();
      cy.get('#A .num5').click();
      cy.get('#A .num5').click();
      cy.get('#A .btn-dot').click();
      cy.get('#A .num0').click();
      cy.get('#A .btn-dot').click();
      cy.get('#A .num2').click();
      cy.get('#A .btn-result').click();
    });
  });

  describe('ทดสอบการลบ', function () {
    it('-7.239---5.', () => {
      cy.get('#B .btn-minus').click();
      cy.get('#B .num7').click();
      cy.get('#B .btn-dot').click();
      cy.get('#B .num2').click();
      cy.get('#B .num3').click();
      cy.get('#B .num9').click();
      cy.get('#B .btn-minus').click();
      cy.get('#B .btn-minus').click();
      cy.get('#B .btn-minus').click();
      cy.get('#B .num5').click();
      cy.get('#B .btn-dot').click();
      cy.get('#B .btn-result').click();
      cy.get('#B .result').contains('-12.239');
    });
  });

  describe('ทดสอบการคูณ', function () {
    it('1000*.3**C1*5.+2', () => {
      cy.get('#B .num1').click();
      cy.get('#B .num0').click();
      cy.get('#B .num0').click();
      cy.get('#B .num0').click();
      cy.get('#B .btn-multiply').click();
      cy.get('#B .btn-dot').click();
      cy.get('#B .num3').click();
      cy.get('#B .btn-multiply').click();
      cy.get('#B .btn-multiply').click();
      cy.get('#B .num2').click();
      cy.get('#B .btn-result').click();
      cy.get('#B .btn-clear').click();
      cy.get('#B .btn-multiply').click();
      cy.get('#B .num5').click();
      cy.get('#B .btn-dot').click();
      cy.get('#B .btn-plus').click();
      cy.get('#B .num2').click();
      cy.get('#B .btn-result').click();
      cy.get('#B .result').contains('7');
    });
  });

});
