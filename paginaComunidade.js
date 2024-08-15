import {Builder, By, Key, until} from "selenium-webdriver"
import {should, expect} from "chai"
should()

describe("Projeto: Tech Life - Comunidade", function() {
  let driver;
      // Pré-condições
      beforeEach(async function() {
        //Abrir o navegador
        driver = await new Builder().forBrowser('chrome').build();
        //Navegar até o site
        await driver.get("https://techlifept.com/")
        await driver.sleep(1000)
      });
    
      // Encerrar o WebDriver após cada teste
      afterEach(async function() {
        await driver.quit();
      });
  
    it("TC002.001 - Navegação e Design", async function() {    
          //DADO que o usuério esteja na Página Inicial
          //QUANDO o usuério clica no link "Comunidade" no menu
          await driver.findElement(By.xpath('//*[@id="navcol-2"]/ul/li[5]/a')).click()

          //ENTÃO aparecere no cabeçalho da página o Logo, o Menu de Navegação com os links. (assertion)
          driver.get("https://techlifept.com/login")
          .then(function(){
              return driver.getCurrentUrl();
          })      
          .then(function(currentUrl){
            //trabalhar com a URL atual do navegador
          }) 
    }) 
        
        
    it("TC002.002 - Cadastre-se", async function() {    
          //DADO que o usuário esteja na Página Inicial
          //QUANDO o usuério clicar no link "Comunidade" no menu
          await driver.findElement(By.xpath('//*[@id="navcol-2"]/ul/li[5]/a')).click()
          await driver.sleep(1000)

          //E acessar a página login (assertion)           
          let login = await driver.findElement(By.xpath('/html/body/section/div/div[1]/div/p')).getText()
          login.should.equal('Login') 
          await driver.sleep(2000)

          //E clicar no link "Cadastre-se"
          let cadButton = await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/a"))
          //(Usar ações do Selenium para mover e clicar)
          const actions = driver.actions({ async: true })
          await actions.move({ origin: cadButton }).click().perform()
          await driver.sleep(1000)
  
          //ENTÃO acessará a página "Novo Cadastro" (assertion)
          driver.get("https://techlifept.com/cadastro")
          .then(function(){
              return driver.getCurrentUrl();
          })      
          .then(function(currentUrl){
            //trabalhar com a URL atual do navegador
          })  
    })

    function sleep(ms){
      return new Promise (resolve =>setTimeout(resolve, ms));
    }

})


//no Terminal para rodar o teste: npm test