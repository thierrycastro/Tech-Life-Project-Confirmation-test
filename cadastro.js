import {Builder, By, Key, until} from "selenium-webdriver"
import {should, expect} from "chai"
should()


describe("Projeto: Tech Life - Cadastro", function() {
      let driver;
            // Pré-condições
            beforeEach(async function() {
            //Abrir o navegador
            driver = await new Builder().forBrowser('chrome').build();
            //Navegar até o site
            await driver.get("https://techlifept.com/cadastro")
            await driver.sleep(1000)
            });
      
            // Encerrar o WebDriver após cada teste
            afterEach(async function() {
            await driver.quit();
            });
  
    it("TC003.001 - Novo Cadastro (Happy Path)", async function() {    
          //DADO que o usuário esteja na Página  "Novo Cadastro"
          //QUANDO preencher no formulário          
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[1]/input")).sendKeys("Creide Zulmira4", Key.RETURN)
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[2]/input")).sendKeys("creidezulmira@uorak.com", Key.RETURN)
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[3]/input")).sendKeys("01/01/1991", Key.RETURN)
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[4]/input")).sendKeys("hakunamatata", Key.RETURN)
                  
          //E clicar no botão "Enviar"      
          let enviarButton = await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[5]/button"))
          //(Usar ações do Selenium para mover e clicar)
          const actions = driver.actions({ async: true });
          await actions.move({ origin: enviarButton }).click().perform(); 

          //ENTÃO o usuário não acessa a página secreta e continua na página de cadastro (assertion)
          await driver.get("https://techlifept.com/login")
          let pagLogin = await driver.findElement(By.xpath('/html/body/section/div/div[1]/div/p')).getText()
          pagLogin.should.equal('Login com sucesso')
    }) 

})


describe("Projeto: Tech Life - Cadastro", function() {
      let driver;
            // Pré-condições
            beforeEach(async function() {
            //Abrir o navegador
            driver = await new Builder().forBrowser('chrome').build();
            //Navegar até o site
            await driver.get("https://techlifept.com/cadastro")
            await driver.sleep(1000)
            });
      
            // Encerrar o WebDriver após cada teste
            afterEach(async function() {
            await driver.quit();
            });
  

   it("TC003.002 - Cadastro (sem preenchimentos)", async function() {    
          //DADO que o usuário esteja na Página "Novo Cadastro"
          //QUANDO não preencher nenhum campo do formulário      
          //E clicar no botão "Enviar" (localizar o botão)
          let button = await driver.findElement(By.xpath("//button[normalize-space()='Enviar']"))
          //(Usar ações do Selenium para mover e clicar)
          const actions = driver.actions({ async: true });
          await actions.move({ origin: button }).click().perform(); 

          //ENTÃO o usuário não acessa a página secreta e continua na página de cadastro (assertion)
          await driver.get("https://techlifept.com/cadastro")
          let pagCadastro = await driver.findElement(By.xpath('/html/body/section/div/div[1]/div/p')).getText()
          pagCadastro.should.equal('Novo cadastro')
    })
        
        
    it("TC003.003 - Cadastro (sem nome)", async function() {    
          //DADO que o usuário esteja na Página "Novo Cadastro"
          //QUANDO não preenche o campo "Digite seu nome"
          //E preenche o campo "Digite seu e-mail"
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[2]/input")).sendKeys("creidezulmira@uorak.com", Key.RETURN)

          //E preenche o campo "Data de nascimento"
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[3]/input")).sendKeys("01/01/1991", Key.RETURN)

          //E preenche o campo "Escolha uma senha"
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[4]/input")).sendKeys("hakunamatata", Key.RETURN)
          
          //E clica no botão "Enviar" (localizar o botão)
          let button = await driver.findElement(By.xpath("//button[normalize-space()='Enviar']"))
          //(Usar ações do Selenium para mover e clicar)
          const actions = driver.actions({ async: true });
          await actions.move({ origin: button }).click().perform(); 

          //ENTÃO o usuário não acessa a página secreta e continua na página de cadastro (assertion)
          await driver.get("https://techlifept.com/cadastro")
          let pagCadastro = await driver.findElement(By.xpath('/html/body/section/div/div[1]/div/p')).getText()
          pagCadastro.should.equal('Novo cadastro')
    })


    it("TC003.004 - Cadastro (sem e-mail)", async function() {    
          //DADO que o usuário esteja na Página "Novo Cadastro"
          //QUANDO preenche o campo "Digite seu nome"
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[1]/input")).sendKeys("Creide Zulmira", Key.RETURN)

          //E não preenche o campo "Digite seu e-mail"
          
          //E preenche o campo "Data de nascimento"
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[3]/input")).sendKeys("01/01/1991", Key.RETURN)

          //E preenche o campo "Escolha uma senha"
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[4]/input")).sendKeys("hakunamatata", Key.RETURN)
          
          //E clica no botão "Enviar" (localizar o botão)
          let button = await driver.findElement(By.xpath("//button[normalize-space()='Enviar']"))
          //(Usar ações do Selenium para mover e clicar)
          const actions = driver.actions({ async: true });
          await actions.move({ origin: button }).click().perform(); 

          //ENTÃO o usuário não acessa a página secreta e continua na página de cadastro (assertion)
          await driver.get("https://techlifept.com/cadastro")
          let pagCadastro = await driver.findElement(By.xpath('/html/body/section/div/div[1]/div/p')).getText()
          pagCadastro.should.equal('Novo cadastro')
    })


    it("TC003.005 - Cadastro (e-mail sem arroba)", async function() {    
          //DADO que o usuário esteja na Página "Novo Cadastro"
          //QUANDO preenche o campo "Digite seu nome"
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[1]/input")).sendKeys("Creide Zulmira", Key.RETURN)

          //E preenche o campo "Digite seu e-mail" o email sem @
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[2]/input")).sendKeys("creidezulmirauorak.com", Key.RETURN)

          //E preenche o campo "Data de nascimento"
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[3]/input")).sendKeys("01/01/1991", Key.RETURN)

          //E preenche o campo "Escolha uma senha"
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[4]/input")).sendKeys("hakunamatata", Key.RETURN)
          
          //E clica no botão "Enviar" (localizar o botão)
          let button = await driver.findElement(By.xpath("//button[normalize-space()='Enviar']"))
          //(Usar ações do Selenium para mover e clicar)
          const actions = driver.actions({ async: true });
          await actions.move({ origin: button }).click().perform(); 

          //ENTÃO o usuário não acessa a página secreta e continua na página de cadastro (assertion)
          await driver.get("https://techlifept.com/cadastro")
          let pagCadastro = await driver.findElement(By.xpath('/html/body/section/div/div[1]/div/p')).getText()
          pagCadastro.should.equal('Novo cadastro')
    })


    it("TC003.006 - Cadastro (sem data de nascimento)", async function() {    
          //DADO que o usuário esteja na Página "Novo Cadastro"
          //QUANDO preenche o campo "Digite seu nome"
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[1]/input")).sendKeys("Creide Zulmira", Key.RETURN)

          //E preenche o campo "Digite seu e-mail"
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[2]/input")).sendKeys("creidezulmira@uorak.com", Key.RETURN)

          //E não preenche o campo "Data de nascimento"
          
          //E preenche o campo "Escolha uma senha"
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[4]/input")).sendKeys("hakunamatata", Key.RETURN)
          
          //E clica no botão "Enviar" (localizar o botão)
          let button = await driver.findElement(By.xpath("//button[normalize-space()='Enviar']"))
          //(Usar ações do Selenium para mover e clicar)
          const actions = driver.actions({ async: true });
          await actions.move({ origin: button }).click().perform(); 

          //ENTÃO o usuário não acessa a página secreta e continua na página de cadastro (assertion)
          await driver.get("https://techlifept.com/cadastro")
          let pagCadastro = await driver.findElement(By.xpath('/html/body/section/div/div[1]/div/p')).getText()
          pagCadastro.should.equal('Novo cadastro')
      })


    it("TC003.007 - Cadastro (com data de nascimento, apenas o Dia)", async function() {    
          //DADO que o usuário esteja na Página "Novo Cadastro"
          //QUANDO preenche o campo "Digite seu nome"
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[1]/input")).sendKeys("Creide Zulmira", Key.RETURN)
    
          //E preenche o campo "Digite seu e-mail"
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[2]/input")).sendKeys("creidezulmira@uorak.com", Key.RETURN)
    
          //E preenche o campo "Data de nascimento" apenas com o dia
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[3]/input")).sendKeys("01", Key.RETURN)
    
          //E preenche o campo "Escolha uma senha"
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[4]/input")).sendKeys("hakunamatata", Key.RETURN)
          
          //E clica no botão "Enviar" (localizar o botão)
          let button = await driver.findElement(By.xpath("//button[normalize-space()='Enviar']"))
          //(Usar ações do Selenium para mover e clicar)
          const actions = driver.actions({ async: true });
          await actions.move({ origin: button }).click().perform(); 
    
          //ENTÃO o usuário não acessa a página secreta e continua na página de cadastro (assertion)
          await driver.get("https://techlifept.com/cadastro")
          let pagCadastro = await driver.findElement(By.xpath('/html/body/section/div/div[1]/div/p')).getText()
          pagCadastro.should.equal('Novo cadastro')
    })


    it("TC003.008 - Cadastro (com data de nascimento, apenas o Dia e Mês)", async function() {    
          //DADO que o usuário esteja na Página "Novo Cadastro"
          //QUANDO preenche o campo "Digite seu nome"
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[1]/input")).sendKeys("Creide Zulmira", Key.RETURN)
    
          //E preenche o campo "Digite seu e-mail"
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[2]/input")).sendKeys("creidezulmira@uorak.com", Key.RETURN)
    
          //E preenche o campo "Data de nascimento" apenas o Dia e Mês)
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[3]/input")).sendKeys("01/01", Key.RETURN)
    
          //E preenche o campo "Escolha uma senha"
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[4]/input")).sendKeys("hakunamatata", Key.RETURN)
          
          //E clica no botão "Enviar" (localizar o botão)
          let button = await driver.findElement(By.xpath("//button[normalize-space()='Enviar']"))
          //(Usar ações do Selenium para mover e clicar)
          const actions = driver.actions({ async: true });
          await actions.move({ origin: button }).click().perform(); 
    
          //ENTÃO o usuário não acessa a página secreta e continua na página de cadastro (assertion)
          await driver.get("https://techlifept.com/cadastro")
          let pagCadastro = await driver.findElement(By.xpath('/html/body/section/div/div[1]/div/p')).getText()
          pagCadastro.should.equal('Novo cadastro')
    })

      it("TC003.009 - Cadastro (sem senha)", async function() {    
          //DADO que o usuário esteja na Página "Novo Cadastro"
          //QUANDO preenche o campo "Digite seu nome"
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[1]/input")).sendKeys("Creide Zulmira", Key.RETURN)
    
          //E preenche o campo "Digite seu e-mail"
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[2]/input")).sendKeys("creidezulmira@uorak.com", Key.RETURN)
    
          //E preenche o campo "Data de nascimento" apenas o Dia e Mês)
          await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[3]/input")).sendKeys("01/01", Key.RETURN)
    
          //E não preenche o campo "Escolha uma senha"            
          
          //E clica no botão "Enviar"
          let button = await driver.findElement(By.xpath("//button[normalize-space()='Enviar']"))
          //(Usar ações do Selenium para mover e clicar)
          const actions = driver.actions({ async: true });
          await actions.move({ origin: button }).click().perform(); 
    
          //ENTÃO o usuário não acessa a página secreta e continua na página de cadastro (assertion)
          await driver.get("https://techlifept.com/cadastro")
          let pagCadastro = await driver.findElement(By.xpath('/html/body/section/div/div[1]/div/p')).getText()
          pagCadastro.should.equal('Novo cadastro')
      }) 


      function sleep(ms){
            return new Promise (resolve =>setTimeout(resolve, ms));
      }

})


describe("Projeto: Tech Life - Cadastro", function() {
   let driver;
            // Pré-condições
            beforeEach(async function() {
            //Abrir o navegador
            driver = await new Builder().forBrowser('chrome').build();
            //Navegar até o site
            await driver.get("https://techlifept.com/cadastro")
            await driver.sleep(1000)
            });
      
            // Encerrar o WebDriver após cada teste
            afterEach(async function() {
            await driver.quit();
            });
         

      it("TC003.010 - Botão Limpar", async function() {    
            //DADO que o usuário esteja na Página "Novo Cadastro"
            //QUANDO preencher o campo "Digite seu nome"
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[1]/input")).sendKeys("Creide Zulmira", Key.RETURN)
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[2]/input")).sendKeys("creidezulmira@uorak.com", Key.RETURN)
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[3]/input")).sendKeys("01/01/1991", Key.RETURN)
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[4]/input")).sendKeys("hakunamatata", Key.RETURN)
            
            //E clica no botão "Limpar"
            let button2 = await driver.findElement(By.css("div:nth-child(6) button:nth-child(1)")).click()     
            
            //ENTÃO a página Cadastro atualiza e os campos de preenchimentos são limpos para que sejam novamente preenchidos (assertion)
            await driver.get("https://techlifept.com/cadastro")
            let pagCadastro = await driver.findElement(By.xpath('/html/body/section/div/div[1]/div/p')).getText()
            pagCadastro.should.equal('Novo cadastro')
      })      
     
})


//no Terminal para rodar o teste: npm test