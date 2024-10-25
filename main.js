$(document).ready(function () {
  $('form').on('submit', function (e) {
    e.preventDefault();
    const enderecoNovaImagem = $('#endereco-imagem-nova').val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
    $(`
      <div class="overlay-imagem-link">                
        <a href="${enderecoNovaImagem}" title="Ver em tamanho real" target="_blank">
            Ver em tamanho real
        </a>              
      </div class="overlay-imagem-link">
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);

    $('#endereco-imagem-nova').val('');
  });

  $('header button').click(function () {
    $('form').slideDown();
  });

  $('#botao-cancelar').click(function () {
    $('form').slideUp();
  });
});
