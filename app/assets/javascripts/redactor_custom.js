  $(document).ready(
    function()
      {
        var csrf_param = $("meta[name=csrf-param]").attr('content');
        var csrf_token = $("meta[name=csrf-token]").attr('content');
        var csrf = {};
        csrf[csrf_param] = csrf_token;

        $('#post_content').redactor({
          imageUpload: '/admin/upload',
          minHeight: 600,
          uploadFields: csrf
        });
      }
    );
