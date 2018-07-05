(function ($, Drupal) {
  Drupal.behaviors.customCKEditorConfig = {
    attach: function (context, settings) {
      if (typeof CKEDITOR !== "undefined") {

        // CKEDITOR.config.contentsLangDirection = 'rtl';
        // these settings add classes to the "Formats" dropdown selection
        // CKEDITOR.config.format_h1 = { element: 'h1', attributes: { 'class': 'cke__h1' } };
        // CKEDITOR.config.format_p = { element: 'p', attributes: { 'class': 'p' } };

        CKEDITOR.on( 'instanceReady', function( evt ) {
        			var editor = evt.editor,
        				rules = {
                  elements: {
                    h1: function(el) {
                      // el.removeClass();
                      delete el.attributes.class;
                      el.addClass('wysiwyg__h1 wysiwyg__h1--alt-dw');
                    },
                    h2: function(el) {
                      // el.removeClass();
                      delete el.attributes.class;
                      el.addClass('wysiwyg__h2 wysiwyg__h2--alt-dw');
                    },
                    h3: function(el) {
                      // el.removeClass();
                      delete el.attributes.class;
                      el.addClass('wysiwyg__h3 wysiwyg__h3--alt-dw');
                    },
                    h4: function(el) {
                      // el.removeClass();
                      delete el.attributes.class;
                      el.addClass('wysiwyg__h4 wysiwyg__h4--alt-dw');
                    },
                    p: function(el) {
                      // el.removeClass();
                      delete el.attributes.class;
                      el.addClass('wysiwyg__p wysiwyg__p--alt-dw');
                    },
                    ul: function(el) {
                      // el.removeClass();
                      delete el.attributes.class;
                      el.addClass('wysiwyg__ul');
                    },
                    ol: function(el) {
                      // el.removeClass();
                      delete el.attributes.class;
                      el.addClass('wysiwyg__ol');
                    },
                    dl: function(el) {
                      // el.removeClass();
                      delete el.attributes.class;
                      el.addClass('wysiwyg__dl');
                    },
                    dd: function(el) {
                      // el.removeClass();
                      delete el.attributes.class;
                      el.addClass('wysiwyg__dd');
                    },
                    dt: function(el) {
                      // el.removeClass();
                      delete el.attributes.class;
                      el.addClass('wysiwyg__dt');
                    },
                    a: function(el) {
                      // el.removeClass();
                      delete el.attributes.class;
                      el.addClass('wysiwyg__link wysiwyg__link--alt-dw');
                    },
                  }
        				};

        			// It's good to set both filters - dataFilter is used when loading data and htmlFilter when retrieving.
        			editor.dataProcessor.htmlFilter.addRules( rules );
        			editor.dataProcessor.dataFilter.addRules( rules );

        			// Since 4.1 you need to add specific tags to to Advanced Content Filter
        			// so they will be allowed in editor.
        			// editor.filter.allow( 'figcaption figure' );
        		}

         );


      }
    }
  }
})(jQuery, Drupal);

// edit-field-txex-text-long-summary-01-0-value

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
