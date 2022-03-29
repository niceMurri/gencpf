export default class validateCpf {
  constructor(cpfClient) {
    //cpf without letter's
    Object.defineProperty(this, 'cpf', {
      value: cpfClient.replace(/\D+/g, ''),
    })
  }

  validate() {
    const cpfWithoutDigit = this.cpf.slice(0, -2)


    //validate
    if(typeof cpfWithoutDigit !== 'string') return false;
    if(validateCpf.isSequence(cpfWithoutDigit)) return false;

    //take numbers
    const digit1 = genDigit(cpfWithoutDigit)
    const digit2 = genDigit(cpfWithoutDigit + digit1)

    //join numbers with cpf
    const cpfWithDigit = cpfWithoutDigit + digit1 + digit2

    //return true or false
    return cpfWithDigit == this.cpf
  }
  static isSequence(cpf){
    return cpf[0].repeat(cpf.length) === cpf;
  }

  static genDigit(cpf) {
      cpf = Array.from(cpf)

    const digit = 11 - (cpf
        .map((item, index) => Number(item) * (cpf.length + 1 - index))
        .reduce((acc,item) => acc + item) % 11);

    return digit > 9 ? '0' : String(digit);
  }
}