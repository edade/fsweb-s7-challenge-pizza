describe("sipariş sayfası testi", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });
  
    it("Sipariş sayfasında fiyatları seçimler fiyat toplamını kontrol edelim", () => {
        // önce anasayfadan sipariş sayfasına geçiş yapalım
      cy.get("#order-pizza").click();
      // hamur seç için standardı, boyut seç için ortayı ve checkboxlardan birini seçelim. Pizza adedini arttıralım
      cy.get("#pizza-hamur").select("standart");
      cy.get('input[name="boyut"][value="orta"]').check();
      cy.get("#malzemeler-checkbox").click()
      // should ile secimlerimizi yaptıktan sonra fiyatın doğru güncellendiğini test edelim
      cy.get("#secim-toplam").should("have.text", "45₺");
    })
    it("Sipariş sayfasında toplam fiyatı kontrol edelim", () => {
         // önce anasayfadan sipariş sayfasına geçiş yapalım
        cy.get("#order-pizza").click();
// hamur seç için standardı, boyut seç için ortayı ve checkboxlardan birini seçelim. Pizza adedini arttıralım
        cy.get("#pizza-hamur").select("standart");
        cy.get('input[name="boyut"][value="orta"]').check();
        cy.get("#adet-arttir").click();
        cy.get("#malzemeler-checkbox").click()
         // should ile secimlerimizi yaptıktan sonra fiyatın doğru güncellendiğini test edelim
        cy.get("#toplam-fiyat").should("have.text", "261₺");
      })
      it("Sipariş ver butonunun success sayfasına gittiğini test edelim", () => {
        cy.get("#order-pizza").click();
        cy.get("#order-button").click();
      })

  });