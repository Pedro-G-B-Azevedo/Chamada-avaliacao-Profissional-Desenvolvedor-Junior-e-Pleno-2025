# Projeto Prático Implementação Front-end

Este é o Projeto Prático Implementação Front-end, desenvolvido para o processo seletivo do DesenvolveMT.

## ✒️ Meus Dados de Inscrição

* **Nome:** Pedro Gabriel Branco de Azevedo
* **Email:** pedrogba345@gmail.com
* **Telefone para contato:** (65) 99948-0168

## 🚀 Como Executar o Projeto

Siga os passos abaixo para instalar e rodar o projeto em sua máquina.

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão 18 ou superior)
* [npm](https://www.npmjs.com/)
* [Docker](https://www.docker.com/) (Opcional, para execução via contêiner)

---

### 🔧 Opção 1: Execução Local (Tradicional)

#### Instalação

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/Pedro-G-B-Azevedo/Chamada-avaliacao-Profissional-Desenvolvedor-Junior-e-Pleno-2025](https://github.com/Pedro-G-B-Azevedo/Chamada-avaliacao-Profissional-Desenvolvedor-Junior-e-Pleno-2025)
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd Chamada-avaliacao-Profissional-Desenvolvedor-Junior-e-Pleno-2025
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

#### Execução em Modo de Desenvolvimento

1.  Para iniciar o servidor de desenvolvimento, execute:
    ```bash
    npm run dev
    ```
2.  Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver a aplicação.

---

### 🐳 Opção 2: Execução com Docker

Se você tiver o Docker instalado, pode construir e rodar a aplicação em um contêiner de forma isolada.

1.  **Construa a imagem Docker:**
    Na raiz do projeto, execute o comando:
    ```bash
    docker build -t projeto-desenvolvemt .
    ```

2.  **Execute o contêiner:**
    Após a imagem ser construída, inicie o contêiner com o comando:
    ```bash
    docker run -p 3000:3000 projeto-desenvolvemt
    ```

3.  Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver a aplicação.

---

### 📦 Build para Produção

Para gerar a versão otimizada do projeto para produção, execute o seguinte comando:
```bash
npm run build