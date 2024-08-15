import {Builder, By, Key, until} from "selenium-webdriver"
import {should, expect} from "chai"
should()


describe("Projeto: Tech Life - Login", function() {
      let driver;
          // Pré-condições
          beforeEach(async function() {
            //Abrir o navegador
            driver = await new Builder().forBrowser('chrome').build();
            //Navegar até o site
            await driver.get("https://techlifept.com/login")
            await driver.sleep(1000)
          });
        
          // Encerrar o WebDriver após cada teste
          afterEach(async function() {
            await driver.quit();
          });

      it("TC004.001 - Login válido com credenciais válidas (Happy Path)", async function() {    
            //DADO que o usuário esteja na Página "Login"
            //QUANDO preencher o campo "Email"          
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[1]/input")).sendKeys("creidezulmira@uorak.com", Key.RETURN).sleep(1000)

            //E preencher o campo "Password"
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[2]/input")).sendKeys("hakunamatata", Key.RETURN).sleep(1000)

            //E clicar no botão "Enviar"      
            let enviarButton1 = await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[3]/a/button"))
            //(Usar ações do Selenium para mover e clicar)
            const actions = driver.actions({ async: true });
            await actions.move({ origin: enviarButton1 }).click().perform();

            //ENTÃO o usuário acessa a página "Comunidade"
            await driver.get("https://techlifept.com/comunidade.html")
            let loginValido = await driver.findElement(By.xpath('.fw-bold.mb-1')).getText()
            loginValido.should.equal('Comunidade')            
      })


      it("TC004.002 - Login inválido sem credenciais", async function() {    
            //DADO que o usuário esteja na Página "Login"
            //QUANDO não preencher o campo "Email"          
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[1]/input")).sendKeys("", Key.RETURN)

            //E não preencher o campo "Password"
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[2]/input")).sendKeys("", Key.RETURN)

            //E clicar no botão "Enviar"      
            let enviarButton1 = await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[3]/a/button"))
            //(Usar ações do Selenium para mover e clicar)
            const actions = driver.actions({ async: true });
            await actions.move({ origin: enviarButton1 }).click().perform();            

            //ENTÃO o usuário não acessa a página secreta e continua na página de cadastro (assertion)
            await driver.get("https://techlifept.com/login")
            let loginInvalido = await driver.findElement(By.css(".fw-bold.mb-2")).getText()
            loginInvalido.should.equal('Login')          
      })


      it("TC004.003 - Login inválido com password vazia", async function() {    
            //DADO que o usuário esteja na Página "Login"
            //QUANDO preencher o campo "Email"          
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[1]/input")).sendKeys("creidezulmira@uorak.com", Key.RETURN)

            //E não preencher o campo "Password"
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[2]/input")).sendKeys("", Key.RETURN)

            //E clicar no botão "Enviar"      
            let enviarButton1 = await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[3]/a/button"))
            //(Usar ações do Selenium para mover e clicar)
            const actions = driver.actions({ async: true });
            await actions.move({ origin: enviarButton1 }).click().perform();            

            //ENTÃO o usuário não acessa a página secreta e continua na página de cadastro (assertion)
            await driver.get("https://techlifept.com/login")
            let loginInvalido = await driver.findElement(By.css(".fw-bold.mb-2")).getText()
            loginInvalido.should.equal('Login')          
      })


      it("TC004.004 - Login inválido com e-mail vazio", async function() {    
            //DADO que o usuário esteja na Página "Login"
            //QUANDO não preencher o campo "Email"          
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[1]/input")).sendKeys("", Key.RETURN)

            //E preencher o campo "Password"
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[2]/input")).sendKeys("hakunamatata", Key.RETURN)

            //E clicar no botão "Enviar"      
            let enviarButton1 = await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[3]/a/button"))
            //(Usar ações do Selenium para mover e clicar)
            const actions = driver.actions({ async: true });
            await actions.move({ origin: enviarButton1 }).click().perform();            

            //ENTÃO o usuário não acessa a página secreta e continua na página de cadastro (assertion)
            await driver.get("https://techlifept.com/login")
            let loginInvalido = await driver.findElement(By.css(".fw-bold.mb-2")).getText()
            loginInvalido.should.equal('Login')          
      })


      it("TC004.005 - Login inválido com e-mail inválido", async function() {    
            //DADO que o usuário esteja na Página "Login"
            //QUANDO preencher o campo "Email"          
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[1]/input")).sendKeys("creidoca33@uorak.com", Key.RETURN)
            await driver.sleep(1000)

            //E preencher o campo "Password"
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[2]/input")).sendKeys("hakunamatata", Key.RETURN)
            await driver.sleep(1000)

            //E clicar no botão "Enviar"      
            let enviarButton2 = await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[3]/a/button"))
            //(Usar ações do Selenium para mover e clicar)
            const actions = driver.actions({ async: true });
            await actions.move({ origin: enviarButton2 }).click().perform();            

            //ENTÃO o usuário não acessa a página secreta e continua na página de cadastro (assertion)
            await driver.get("https://techlifept.com/login")
            let loginInvalido = await driver.findElement(By.css(".fw-bold.mb-2")).getText()
            loginInvalido.should.equal('Login')          
      })


      it("TC004.006 - Login inválido com password inválida - Palavra", async function() {    
            //DADO que o usuário esteja na Página "Login"
            //QUANDO preencher o campo "Email"          
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[1]/input")).sendKeys("creidezulmira@uorak.com", Key.RETURN)
            await driver.sleep(1000)

            //E preencher o campo "Password"
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[2]/input")).sendKeys("paoecafe", Key.RETURN)
            await driver.sleep(1000)

            //E clicar no botão "Enviar"      
            let enviarButton2 = await driver.wait(until.elementLocated(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[3]/a/button")), 10000)
            await new Promise(resolve => setTimeout(resolve, 5000))
            await driver.wait(until.elementIsVisible(enviarButton2), 10000)
            await driver.wait(until.elementIsEnabled(enviarButton2), 10000)
            await new Promise(resolve => setTimeout(resolve, 2000))
            await enviarButton2.click()           
            
            //(Usar ações do Selenium para mover e clicar)
            const actions = driver.actions({ async: true });
            await actions.move({ origin: enviarButton2 }).click().perform();         

            //ENTÃO o usuário não acessa a página secreta e continua na página de cadastro (assertion)
           await driver.get("https://techlifept.com/comunidade.html")
            let loginInvalido = await driver.findElement(By.xpath("/html/body/div/div/div[1]/h1")).getText()
            loginInvalido.should.equal('Page Not Found')       
      })


      it("TC004.007 - Login inválido com credenciais inválidas - Numéricas", async function() {    
            //DADO que o usuário esteja na Página "Login"
            //QUANDO preencher o campo "Email"          
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[1]/input")).sendKeys("123456", Key.RETURN)
            await driver.sleep(1000)

            //E preencher o campo "Password"
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[2]/input")).sendKeys("123456", Key.RETURN)
            await driver.sleep(1000)

            //E clicar no botão "Enviar"      
            let enviarButton1 = await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[3]/a/button"))
            //(Usar ações do Selenium para mover e clicar)
            const actions = driver.actions({ async: true });
            await actions.move({ origin: enviarButton1 }).click().perform();            

            //ENTÃO o usuário não acessa a página secreta e continua na página de cadastro (assertion)
            await driver.get("https://techlifept.com/login")
            let loginInvalido = await driver.findElement(By.css(".fw-bold.mb-2")).getText()
            loginInvalido.should.equal('Login')     
      })


      it("TC004.008 - Login inválido com usuário inválido - NIF", async function() {    
            //DADO que o usuário esteja na Página "Login"
            //QUANDO preencher o campo "Email"          
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[1]/input")).sendKeys("581723284", Key.RETURN)
            await driver.sleep(1000)

            //E preencher o campo "Password"
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[2]/input")).sendKeys("hakunamatata", Key.RETURN)
            await driver.sleep(1000)

            //E clicar no botão "Enviar"      
            let enviarButton1 = await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[3]/a/button"))
            //(Usar ações do Selenium para mover e clicar)
            const actions = driver.actions({ async: true });
            await actions.move({ origin: enviarButton1 }).click().perform();            

            //ENTÃO o usuário não acessa a página secreta e continua na página de cadastro (assertion)
            await driver.get("https://techlifept.com/login")
            let loginInvalido = await driver.findElement(By.css(".fw-bold.mb-2")).getText()
            loginInvalido.should.equal('Login')     
      })


      it("TC004.009 - Login inválido com usuário inválido - Emoji", async function() {    
            //DADO que o usuário esteja na Página "Login"
            //QUANDO preencher o campo "Email"          
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[1]/input")).sendKeys("✌✌✌✌✌✌", Key.RETURN)
            await driver.sleep(1000)

            //E preencher o campo "Password"
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[2]/input")).sendKeys("hakunamatata", Key.RETURN)
            await driver.sleep(1000)

            //E clicar no botão "Enviar"      
            let enviarButton1 = await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[3]/a/button"))
            //(Usar ações do Selenium para mover e clicar)
            const actions = driver.actions({ async: true });
            await actions.move({ origin: enviarButton1 }).click().perform();            

            //ENTÃO o usuário não acessa a página secreta e continua na página de cadastro (assertion)
            await driver.get("https://techlifept.com/login")
            let loginInvalido = await driver.findElement(By.css(".fw-bold.mb-2")).getText()
            loginInvalido.should.equal('Login')     
      })


      it("TC004.010 - Login inválido com usuário inválido - Caracteres especiais", async function() {    
            //DADO que o usuário esteja na Página "Login"
            //QUANDO preencher o campo "Email"          
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[1]/input")).sendKeys("!!!!!!", Key.RETURN)
            await driver.sleep(1000)

            //E preencher o campo "Password"
            await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[2]/input")).sendKeys("hakunamatata", Key.RETURN)
            await driver.sleep(1000)

            //E clicar no botão "Enviar"      
            let enviarButton1 = await driver.findElement(By.xpath("/html/body/section/div/div[2]/div/div/div/form/div[3]/a/button"))
            //(Usar ações do Selenium para mover e clicar)
            const actions = driver.actions({ async: true });
            await actions.move({ origin: enviarButton1 }).click().perform();            

            //ENTÃO o usuário não acessa a página secreta e continua na página de cadastro (assertion)
            await driver.get("https://techlifept.com/login")
            let loginInvalido = await driver.findElement(By.css(".fw-bold.mb-2")).getText()
            loginInvalido.should.equal('Login')     
      })


      it("TC004.011 - Alterar palavra passe", async function() {    
            //DADO que o usuário esteja na Página "Login"
            //QUANDO preencher o campo "Email"          
            await driver.findElement(By.xpath("//p[@class='text-muted']")).click()                   

            //ENTÃO o usuário acessa a página para alterar a palavra passe (assertion)
            await driver.get("https://techlifept.com/cadastro")
            let pagCadastro = await driver.findElement(By.xpath('/html/body/section/div/div[1]/div/p')).getText()
            pagCadastro.should.equal('Novo cadastro')   
      })


      function sleep(ms){
            return new Promise (resolve =>setTimeout(resolve, ms));
          }

})

//no Terminal para rodar o teste: npm test