# Gerador de QR Code e Senhas

Este projeto fornece uma ferramenta de linha de comando simples que permite aos usuários gerar códigos QR ou criar senhas seguras com base nas opções selecionadas.

## Estrutura do Projeto

```bash
├── src/
│   ├── index.js
│   ├── service/
│   │   ├── qr-code/
│   │   │   ├── create.js
│   │   │   └── handle.js
│   │   ├── password/
│   │   │   ├── create.js
│   │   │   └── handle.js
│   ├── prompts/
│       ├── prompt-main.js
│       └── prompt-qrcode.js
└── .env
```

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/IgorCoutoOli/qrcode-and-password-generate.git
   cd qrcode-and-password-generate
    ```
2. Instale as dependências
    ```
    npm install
    ```
3. Crie um arquivo .env com as opções
    ```
    UPPERCASE_LETTERS=true
    LOWERCASE_LETTERS=true
    NUMBERS=true
    SPECIAL_CHARACTERS=false
    PASSWORD_LENGHT=12
    ```
4. Inice o servidor
    ```
    npm start
    ```

## Uso

Você será solicitado a escolher entre gerar um QR Code ou uma senha.
Siga as instruções exibidas no terminal.

## Dependências

- prompt: Para interações no terminal
- chalk: Para estilizar o texto no terminal
- qrcode-terminal: Para gerar QR Codes no terminal

## Contribuição

Este projeto é um desafio de Node.js dos cursos da DIO, administrado pelo Professor Felipe Bittencourt. Ele foca na criação de ferramentas básicas utilizando Node.js, como geração de QR Codes e senhas, e tem como objetivo aprimorar as habilidades dos alunos em desenvolvimento backend.
