$(function () {
      $('#dropbox').fileupload({
                dataType: 'json',
      url: '/album',
              done: function (e, data) {
                            $.each(data.result, function (index, file) {
                                              $('<p/>').text(file.name).appendTo(document.body);
                                                          });
                                    }
          });
});