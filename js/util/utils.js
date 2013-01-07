FrisApp.util = {
    calcDifference: function (valueA, valueB) { // calculates difference
      return (valueA - valueB);
    },

    requireTemplate: function (templateName, parentNode) { // function shoud get me a template but never got it to work...
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
    },

    getScriptName: function() { // returns the script name of the currentscript excecuting
        var scripts = document.getElementsByTagName('script');
        var explodedPath = scripts[scripts.length-1].attributes.src.textContent.split("/");
        
        return explodedPath[explodedPath.length-1].split(".")[0];
    }

  };