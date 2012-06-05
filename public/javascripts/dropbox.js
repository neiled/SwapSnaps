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
      console.log("found: " + session_id);
      data.formData = {session_id: session_id};
  });

});
