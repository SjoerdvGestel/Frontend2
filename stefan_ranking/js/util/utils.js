var util = {
    calcDifference: function (valueA, valueB) {
      return (valueA - valueB);
    },

    requireTemplate: function (templateName, parentNode) {
    var template = $('#template_' + templateName);
    if (template.length === 0) {
        var tmpl_dir = './tpl';
        var tmpl_url = tmpl_dir + '/' + templateName;
        var tmpl_string = '';

        $.ajax({
            url: tmpl_url,
            method: 'GET',
            async: false,
            contentType: 'text',
            success: function (data) {
                tmpl_string = data;
            }
        });

        parentNode.append('<script id="template_' + 
        templateName + '" type="text/template">' + tmpl_string + '<\/script>');
      }
    }

  };