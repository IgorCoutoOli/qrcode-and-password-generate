import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js"
import createQRCode from "./service/qr-code/create.js";
import createPassword from "./service/password/create.js";

async function main() {
    prompt.get(mainPrompt, async (err, result) => {
        if(result.select == 1) 
            await createQRCode()
        else
            await createPassword();

    });

    prompt.start();
}

main();