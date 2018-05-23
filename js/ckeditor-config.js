(function ($, Drupal) {
  Drupal.behaviors.customCKEditorConfig = {
    attach: function (context, settings) {
      if (typeof CKEDITOR !== "undefined") {
        // CKEDITOR.config.contentsLangDirection = 'rtl';
        // these settings add classes to the "Formats" dropdown selection
        // CKEDITOR.config.format_h1 = { element: 'h1', attributes: { 'class': 'cke__h1' } };
        // CKEDITOR.config.format_p = { element: 'p', attributes: { 'class': 'p' } };


        // this automatically adds these classes everywhere the tag is added
        CKEDITOR.on( 'instanceReady', function( evt ) {
          evt.editor.dataProcessor.htmlFilter.addRules( {
            elements: {
              h1: function(el) {
                el.addClass('wysiwyg__h1 wysiwyg__h1--alt-dw');
              },
              h2: function(el) {
                el.addClass('wysiwyg__h2 wysiwyg__h2--alt-dw');
              },
              h3: function(el) {
                el.addClass('wysiwyg__h3 wysiwyg__h3--alt-dw');
              },
              h4: function(el) {
                el.addClass('wysiwyg__h4 wysiwyg__h4--alt-dw');
              },
              p: function(el) {
                el.addClass('wysiwyg__p wysiwyg__p--alt-dw');
              },
              ul: function(el) {
                el.addClass('wysiwyg__ul');
              },
            }
          });
        });
      }
    }
  }
})(jQuery, Drupal);


// (function ($, Drupal) {
//   Drupal.behaviors.customCKEditorConfig = {
//     attach: function (context, settings) {
//       if (typeof CKEDITOR !== "undefined") {
//       CKEDITOR.dtd.$removeEmpty['i'] = false;
//       CKEDITOR.dtd.$removeEmpty['span'] = false;
// console.log(CKEDITOR.dtd);
//       }
//     }
//   }
// })(jQuery, Drupal);
