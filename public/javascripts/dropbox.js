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

  $('#dropbox').bind('fileuploadsubmit', function (e, data) {
      // The example input, doesn't have to be part of the upload form:
      var input = $('#session_id');
      console.log("found: " + input.val());
      data.formData = {session_id: input.val()};
  });

});
