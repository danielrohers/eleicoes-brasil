;(function (window, document, undefined) {

  var Main = (function () {

    var _addLink = function () {
      $('.add-link').on('click', function (e) {
        e.preventDefault();

        var $row = $('<div/>', { class: 'row' });
        var $inputField = $('<div/>', { class: 'input-field col s6' });
        var $input = $('<input/>', { type: 'text', name: 'links', placeholder: 'Link', required: true });

        $inputField.append($input);
        $inputField.append(this);
        $row.append($inputField);

        $('.links').append($row);
      });
    };

    return {

      init : function () {
        $('select').material_select();
        _addLink();
      }

    }

  })();

  Main.init();

})(window, document);
