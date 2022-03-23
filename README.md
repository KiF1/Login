# Login de Usuário usando Node.js e Mongo DB

## Um mural de avisos com as seguintes tecnologias:
<div style="display=inline-block">
<img alt="css3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" width="180px" height="100px" >
<img alt="html" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" width="180px" height="100px" >
<img alt="Node.Js" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" width="180px" height="100px" >
 <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" width="180px" height="100px" >
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" width="180px" height="100px" >
 </div>

## Funcionalidades:
- Login e Registro do usuário no Banco de dados
- Senhas e emails criptografados e cookies para logar usuário automaticamente ao entrar na página
- Totalmente Responsivo

## Descrição:
- Para testar as skills que venho adquirindo ao longo do curso ProgramadorBR, em conjunto com o projeto desenvolvido pelo curso, fiz uma aplicação onde faz o login e registro de usuários, sendo assim uma ação em conjunto entre bak-end, front-end e banco de dados. O projeto além disso conta com criptografia de senhas e email ao registrar com o auxílio do bcrypt e também conta com o sistema de cookies para salvar o token no local-storage do usuário.
- O projeto funciona de forma conjunta entre todas as stacks utilizadas. De primeiro ele utliza os métodos http (get e delete) para fazerem as requisições ao servidor e interagirem com o banco de dados. A integração entre back e front se deu pelo EJS, que posteriormente irei substituir pelo REACT.JS. 
- A criptografia de senhas foi feita pelo bcrypt, que após as senhas serem recebidas pelo front-end, às criptografa e salva no banco de dados. Posteriormente o node faz a função de comparar as senhas coletadas pelo front e criptografadas pelo bcrypt e se na comparação forem iguais dá acesso ao login do usuário.
- Para fazer a persistência de dados utilizei os cookies, eles pegam o token gerado no login e salvam no local storage do usuário. Assim, sempre que o usuário for entar novamente não precisa ficar fazendo login toda hora.

## Apresentação do Pojeto:
- <img src="./gf.gif">

## Observação:
- Não consegui subir o porjeto, mas ele está disponível no google drive: https://drive.google.com/file/d/1HstdatGzxHqFSj4atuEo7sPhnPKsFyBz/view?usp=sharing
- Para rodar apenas basta baixar e no terminal colocar: npm start e no navegador: http://localhost:3000
- Pronto, fazendo esses passos você pode testar a aplicação

## Gostou do meu projeto? :D Entre em contato comigo! 
- [Linkedin](https://www.linkedin.com/in/abner-santos-b195b8228/) <br/>
- [Email: abner.kif1@gmail.com](mailto:abner.kif1@gmail.com)
