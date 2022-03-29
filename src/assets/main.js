import './css/style.css';
import generateCPF from './modules/generateCPF.js';

//button that generate cpf
const button = document.querySelector('.button');
const cpfDisplay = document.querySelector('.generate');

const cpf = new generateCPF();


button.addEventListener('click', e => {
    cpfDisplay.style.animation = 'none'
    setTimeout(e => {
        cpfDisplay.style.animation = '0.5s ease moveCpf'
    },2)

    cpfDisplay.innerText = cpf.gen();
})



