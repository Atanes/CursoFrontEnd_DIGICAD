/**
 * Base para as mascaras de entrada de dados do sistema usando jquery.mask
 */

$(function () {

    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone_us').mask('(000) 000-0000');
    $('.integer').mask("#.##0", {
        reverse: true
    });
    $('.mixed').mask('AAA 000-S0S');
    $('.sonumeros').mask('0#');
    $('.cpf').mask('000.000.000-00', {
        reverse: true
    });
    $('.cnpj').mask('00.000.000/0000-00', {
        reverse: true
    });
    $('.telefone').mask('(00) 0 0000-0000');
    $('.dinheiro').mask('#.##0,00', {
        reverse: true
    });
    $('.dinheiro2').mask('R$ #.##0,00', {
        reverse: true
    });
    $('.estado').mask('AA');
    $('.rg').mask('00.000.000-A');
    $('.horasMinutos').mask('00:00');
    $('.cartaoCredito').mask('0000 0000 0000 0000');
    $('.percent').mask('00,0%', { clearifnotmatch: true }, { reverse: true });
    $('.percent2').mask('00,0', { clearifnotmatch: true }, { reverse: true });

    $('.porcentagem').mask('P', {
        translation: {
            'P': {
                pattern: /[\d\.,]/,
                recursive: true
            }
        },
        onKeyPress: function (val, e, field, options) {
            var old_value = $(field).data('oldValue') || '';

            val = val.trim();
            val = val.replace(',', '.');
            val = val.length > 0 ? val : '0';

            // Transformando múltiplos pontos em um único ponto
            val = val.replace(/[\.]+/, '.');

            // Verificando se o valor contém mais de uma ocorrência de ponto
            var dot_occurrences = (val.match(/\./g) || []).length > 1;

            // Verificando se o valor está de acordo com a sintaxe do float
            var is_float = /[-+]?[\d]*\.?[\d]+/.test(val);

            if (dot_occurrences || !is_float) {
                val = old_value;
            }

            // Força o valor a ficar no intervalo de 0 à 100
            val = parseFloat(val) >= 100 ? '100' : val;
            val = parseFloat(val) < 0 ? '0' : val;

            $(field).val(val).data('oldValue', val);
        }
    });

    $(()=>{
        var SPMaskBehavior = function (val) {
          return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        spOptions = {
          onKeyPress: function(val, e, field, options) {
              field.mask(SPMaskBehavior.apply({}, arguments), options);
            }
        };
      
        $('.fone').mask(SPMaskBehavior, spOptions);
      });

      maskMercosul('.placaCarro');

});

function maskMercosul(selector) {
    var MercoSulMaskBehavior = function (val) {
        var myMask = 'AAA0A00';
        var mercosul = /([A-Za-z]{3}[0-9]{1}[A-Za-z]{1})/;
        var normal = /([A-Za-z]{3}[0-9]{2})/;
        var replaced = val.replace(/[^\w]/g, '');
        if (normal.exec(replaced)) {
            myMask = 'AAA-0000';
        } else if (mercosul.exec(replaced)) {
            myMask = 'AAA-0A00';
        }
        return myMask;
    },
    mercoSulOptions = {
        onKeyPress: function(val, e, field, options) {
            field.mask(MercoSulMaskBehavior.apply({}, arguments), options);
        }
    };
    $(function() {
        $(selector).bind('paste', function(e) {
            $(this).unmask();
        });
        $(selector).bind('input', function(e) {
            $(selector).mask(MercoSulMaskBehavior, mercoSulOptions);
        });
    });
}


