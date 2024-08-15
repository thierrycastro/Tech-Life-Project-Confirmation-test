import {Builder, By, Key, until} from "selenium-webdriver"
import {should, expect} from "chai"
should()

describe("Projeto: Tech Life", function() {
    it("TC001.001 - Aba Inicial", async function() {
    
        //DADO que eu acesse o site
        //QUANDO abre a Página Inicial
        //Abrir o navegador
        let driver = await new Builder().forBrowser("chrome").build()
        //Navegar até o site
        await driver.get("https://techlifept.com/")
      
        //ENTÃO aparecere no cabeçalho da página o Logo, o Menu de Navegação com os links. (assertion)
        let menuInicial = await driver.findElement(By.xpath('//*[@id="navcol-2"]/ul/li[1]/a')).getText()
        menuInicial.should.equal('Inicial')
        
        //No corpo da página aparecem informações sobre Metodologia e Testemunhos.
        let corpoPag = await driver.findElement(By.xpath('/html/body/section[2]/div/div[1]/div/p[1]')).getText()
        corpoPag.should.equal('Testemunhos')

        //E no rodapé da página aparecem os botões das redes sociais
        let rodape = await driver.findElement(By.xpath('/html/body/footer/div/div/div[1]/p')).getText()
        rodape.should.equal('Copyright © 2024 TECH LIFE')

        //Fechar o navegador
        await driver.quit()
    })


    it("TC001.002 - Banner Carrossel", async function() {
    
        //DADO que eu acesse o site
        //QUANDO abre a Página Inicial
        //Abrir o navegador
        let driver = await new Builder().forBrowser("chrome").build()
        //Navegar até o site
        await driver.get("https://techlifept.com/")
      
        //ENTÃO aparece o Banner Carrossel interativo giratório e o mesmo deve alterar as imagens
        let banner = await driver.findElement(By.id('carousel-1'))
        let isDisplayed = await banner.isDisplayed();
        expect(isDisplayed).to.be.true;    
      
        //Fechar o navegador
        await driver.quit()
    })


    it("TC001.003 - Botão Facebook", async function() {
   
        //DADO que eu acesse o site
        //QUANDO abre a Página Inicial
        //Abrir o navegador
        let driver = await new Builder().forBrowser("chrome").build()
        //Navegar até o site
        await driver.get("https://techlifept.com/")

        //E desço a página até o rodapé
        await driver.executeScript('window.scrollTo(0, document.body.scrollHeight);')
        await driver.sleep(2000)     

        //E clico no Botão "Linkedin"
        await driver.findElement(By.xpath('/html/body/footer/div/div/div[2]/ul/li[1]/a/div')).click()

        //E clico no "X" do pop-up
        let popupCloseButton = await driver.wait(until.elementLocated(By.xpath("//icon[@class='contextual-sign-in-modal__modal-dismiss-icon lazy-loaded']//*[@class='artdeco-icon lazy-loaded']")), 10000)
        await popupCloseButton.click()
        await driver.sleep(2000)

        //E aceitar a Política
        await driver.findElement(By.xpath('//*[@id="artdeco-global-alert-container"]/div/section/div/div[2]/button[1]')).click()      

        //ENTÃO abre a página da Tech Life no Linkedin (assertion)
        driver.get("https://www.linkedin.com/company/techfixe/posts/?feedView=all")
        .then(function(){
            return driver.getCurrentUrl();
        })      
        .then(function(currentUrl){
          //trabalhar com a URL atual do navegador
        }) 
      
        //Fechar o navegador
        await driver.quit()
    })


    it("TC001.004 - Botão Instagram", async function() {
   
      //DADO que eu acesse o site
      //QUANDO abre a Página Inicial
      //Abrir o navegador
      let driver = await new Builder().forBrowser("chrome").build()
      //Navegar até o site
      await driver.get("https://techlifept.com/")

      //E desço a página até o rodapé
      await driver.executeScript('window.scrollTo(0, document.body.scrollHeight);')
      await driver.sleep(2000)     

      //E clico no Botão "Instagram"
      await driver.findElement(By.xpath('/html/body/footer/div/div/div[2]/ul/li[2]/a/div')).click()

      //ENTÃO abre a página da Tech Life no Linkedin (assertion)
      driver.get("https://www.instagram.com/techlife.pt/")
      .then(function(){
          return driver.getCurrentUrl();
      })      
      .then(function(currentUrl){
        //trabalhar com a URL atual do navegador
      }) 
    
      //Fechar o navegador
      await driver.quit()
  })


    function sleep(ms){
      return new Promise (resolve =>setTimeout(resolve, ms));
    }

})

//no Terminal para rodar o teste: npm test