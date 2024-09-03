import chalk from "chalk";
import qr from "qrcode-terminal"

async function handle(err, result) {
    if(err) {
        console.log(chalk.red.italic("error on application"))
        return;
    }

    const isSmall = result.type == 2;
    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.cyan("QR Code gerado co sucesso:\n"))
        console.log(qrcode);
    })
}

export default handle