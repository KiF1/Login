# Login de Usuário usando Node.js e Mongo DB

## Um mural de avisos com as seguintes tecnologias:
<div style="display=inline-block">
<img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" alt="javascript"width="50px" height="50px" >
<img src="https://cdn.iconscout.com/icon/free/png-64/html5-2038876-1720089.png" alt="html"width="50px" height="50px" >
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css" width="50px" height="50px" >
 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="Bootstrap" width="50px" height="50px" >
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="Node" width="50px" height="50px" >
 </div>

## Funcionalidades:
- Login e Registro do usuário no Banco de dados
- Senhas e emails criptografados e cookies para logar usuário automaticamente ao entrar na página

## Descrição:
- Para testar as skills que venho adquirindo ao longo do curso ProgramadorBR, em conjunto com o projeto desenvolvido pelo curso, fiz uma aplicação onde faz o login e registro de usuários, sendo assim uma ação em conjunto entre bak-end, front-end e banco de dados. O projeto além disso conta com criptografia de senhas e email ao registrar com o auxílio do bcrypt e também conta com o sistema de cookies para salvar o token no local-storage do usuário.
- O projeto funciona de forma conjunta entre todas as stacks utilizadas. De primeiro ele utliza os métodos http (get e delete) para fazerem as requisições ao servidor e interagirem com o banco de dados. A integração entre back e front se deu pelo EJS, que posteriormente irei substituir pelo REACT.JS. 
- A criptografia de senhas foi feita pelo bcrypt, que após as senhas serem recebidas pelo front-end, às criptografa e salva no banco de dados. Posteriormente o node faz a função de comparar as senhas coletadas pelo front e criptografadas pelo bcrypt e se na comparação forem iguais dá acesso ao login do usuário.
- Para fazer a persistência de dados utilizei os cookies, eles pegam o token gerado no login e salvam no local storage do usuário. Assim, sempre que o usuário for entar novamente não precisa ficar fazendo login toda hora.

## Apresentação do Pojeto:
- <img src="./gf.gif">

## Gostou do meu projeto? :D Entre em contato comigo! 
- [Linkedin](https://www.linkedin.com/in/abner-santos-b195b8228/) <br/>
- [Email: abner.kif1@gmail.com](mailto:abner.kif1@gmail.com)
