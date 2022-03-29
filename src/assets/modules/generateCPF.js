import validateCpf from "./validateCPF";


export default class generateCPF{
    rand(){
        const min = 100000000;
        const max = 999999999;

        const cpfWithoutDigit = String(Math.floor(Math.random() * (max - min) + min));

        if(validateCpf.isSequence(cpfWithoutDigit)) return this.rand();

        return cpfWithoutDigit;
    }

    gen(){
        const cpfWithoutDigit = this.rand();

        const digit1 = validateCpf.genDigit(cpfWithoutDigit);
        const digit2 = validateCpf.genDigit(cpfWithoutDigit + digit1);

        const cpfWithDigit = cpfWithoutDigit + digit1 + digit2;
        

        return this.format(cpfWithDigit);
    }

    format(cpf){
        //using regex for format
        return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
}



