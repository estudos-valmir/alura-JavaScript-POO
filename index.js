import { Cliente } from './Clientes/Cliente.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { SistemaLogin } from './Funcionarios/SistemaAutenticacao.js';

const gerente = new Gerente("José da Silva", "12345678999", 1550.00);
gerente._cadastrarSenha("xpto123");
const gerenteLogado = (SistemaLogin.login(gerente, "xpto123"));

const cliente = new Cliente("Maria da Silva", "45678913233");
cliente._senha = "xpto123";
const clienteLogado = (SistemaLogin.login(cliente, "xpto123"));

console.log(gerenteLogado);
console.log(clienteLogado);