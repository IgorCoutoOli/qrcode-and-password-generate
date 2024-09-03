import chalk from "chalk"

const mainPrompt = [
    {
        name: "select",
        description: chalk.green("Escolha a ferramenta") + chalk.blue(" (1 - QRCODE") + chalk.green(" ou") + chalk.magenta(" (2 - PASSOWRD"),
        pattern: /^[1-2]+$/,
        message: "Escolha apenas entre 1 e 2",
        require: true,
    },
]

export default mainPrompt