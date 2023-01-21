// Inicializa o SDK do PagSeguro
PagSeguroDirectPayment.setSessionId('SUA_SESSÃO_DO_PAGSEGURO');

// Obtém a forma de pagamento selecionada pelo usuário
const formaPagamento = document.querySelector('input[name="forma-pagamento"]:checked').value;

// Obtém os dados do formulário
const cpf = document.querySelector('#cpf').value;
const endereco = document.querySelector('#endereco').value;
const telefone = document.querySelector('#telefone').value;
const valor = document.querySelector('#valor').value;

// Verifica se a forma de pagamento é "cartão"
if (formaPagamento === 'cartao') {
  // Solicita os dados do cartão de crédito ao usuário
  PagSeguroDirectPayment.createCardToken({
    cardNumber: '4111111111111111', // Substitua pelo número do cartão do usuário
    cvv: '123', // Substitua pelo código de segurança do cartão do usuário
    expirationMonth: '12', // Substitua pelo mês de vencimento do cartão do usuário
    expirationYear: '2030', // Substitua pelo ano de vencimento do cartão do usuário
    success: function(response) {
      // Obtém o token do cartão de crédito
      const tokenCartao = response.card.token;
      
      // Envia os dados do formulário e do cartão de crédito para o PagSeguro
      enviarDadosPagSeguro(formaPagamento, cpf, endereco, telefone, valor, tokenCartao);
    }
  });
} else {
  // Envia os dados do formulário para o PagSeguro
  enviarDadosPagSeguro(formaPagamento, cpf, endereco, telefone, valor);
}

function enviarDadosPagSeguro(formaPagamento, cpf, endereco, telefone, valor, tokenCartao = null) {
  // Envia os dados para o PagSeguro
  // Substitua pela sua URL de processamento de pagamentos
  const url = 'SUA_URL_DE_PROCESSAMENTO_DE_PAGAMENTOS';
  
  // Cria um novo formulário
  const formulario = document.createElement('form');
  formulario.method = 'POST';
  formulario.action = url;
  
  formulario.appendChild(campoFormaPagamento);
  formulario.appendChild(campoCpf);
  formulario.appendChild(campoEndereco);
  formulario.appendChild(campoTelefone);
  formulario.appendChild(campoValor);
  if (tokenCartao) {
    formulario.appendChild(campoTokenCartao);
  }
  
  // Adiciona o formulário à página
  document.body.appendChild(formulario);
  
  // Envia o formulário
  formulario.submit();
}

