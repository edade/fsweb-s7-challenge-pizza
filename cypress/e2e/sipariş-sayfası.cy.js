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

  describe("inputa yazı girme testi", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/order-pizza")
    })
    it("inputa yazı yazalım", () => {
        cy.get("#not-part").type("Lütfen pizza sıcak olabilir mi?")
    })
  })

  describe("Checkbox ile Birden Fazla Malzeme Seçme Testi", () => {
    it("Birden fazla malzeme seçelim", () => {
      
      cy.visit("http://localhost:3000/order-pizza"); 
  
      // Malzemeleri checkbox sınıfına sahip elemanları al
      cy.get(".checkbox input[type='checkbox']").each((checkbox, index) => {
        // Her bir checkbox'ı işaretle
        if (index < 3) {
            cy.get(checkbox).check();
          }
      });
  
      // İşaretlenen checkbox sayısını kontrol et .filter:checked sadece seçili olanları filtreler
      cy.get(".checkbox input[type='checkbox']").filter(":checked").should("have.length", 3);
    });
  });


  