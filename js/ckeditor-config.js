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
                      // remove classes with this prefix -- this allows other
                      // alignment classes from the editor to stick
                      if (el.attributes.class) {
                        var prefix = "wysiwyg";
                        var classes = el.attributes.class.split(" ").filter(function(c) {
                            return c.lastIndexOf(prefix, 0) !== 0;
                        });
                        el.attributes.class = classes.join(" ").trim();
                      }

                      el.addClass('wysiwyg__h1');
                    },
                    h2: function(el) {
                      // remove classes with this prefix -- this allows other
                      // alignment classes from the editor to stick
                      if (el.attributes.class) {
                        var prefix = "wysiwyg";
                        var classes = el.attributes.class.split(" ").filter(function(c) {
                            return c.lastIndexOf(prefix, 0) !== 0;
                        });
                        el.attributes.class = classes.join(" ").trim();
                      }
                      el.addClass('wysiwyg__h2');
                    },
                    h3: function(el) {
                      // remove classes with this prefix -- this allows other
                      // alignment classes from the editor to stick
                      if (el.attributes.class) {
                        var prefix = "wysiwyg";
                        var classes = el.attributes.class.split(" ").filter(function(c) {
                            return c.lastIndexOf(prefix, 0) !== 0;
                        });
                        el.attributes.class = classes.join(" ").trim();
                      }
                      el.addClass('wysiwyg__h3');
                    },
                    h4: function(el) {
                      // remove classes with this prefix -- this allows other
                      // alignment classes from the editor to stick
                      if (el.attributes.class) {
                        var prefix = "wysiwyg";
                        var classes = el.attributes.class.split(" ").filter(function(c) {
                            return c.lastIndexOf(prefix, 0) !== 0;
                        });
                        el.attributes.class = classes.join(" ").trim();
                      }
                      el.addClass('wysiwyg__h4');
                    },
                    h5: function(el) {
                      // remove classes with this prefix -- this allows other
                      // alignment classes from the editor to stick
                      if (el.attributes.class) {
                        var prefix = "wysiwyg";
                        var classes = el.attributes.class.split(" ").filter(function(c) {
                            return c.lastIndexOf(prefix, 0) !== 0;
                        });
                        el.attributes.class = classes.join(" ").trim();
                      }
                      el.addClass('wysiwyg__h5');
                    },
                    h6: function(el) {
                      // remove classes with this prefix -- this allows other
                      // alignment classes from the editor to stick
                      if (el.attributes.class) {
                        var prefix = "wysiwyg";
                        var classes = el.attributes.class.split(" ").filter(function(c) {
                            return c.lastIndexOf(prefix, 0) !== 0;
                        });
                        el.attributes.class = classes.join(" ").trim();
                      }
                      el.addClass('wysiwyg__h6');
                    },
                    p: function(el) {
                      // remove classes with this prefix -- this allows other
                      // alignment classes from the editor to stick
                      if (el.attributes.class) {
                        var prefix = "wysiwyg";
                        var classes = el.attributes.class.split(" ").filter(function(c) {
                            return c.lastIndexOf(prefix, 0) !== 0;
                        });
                        el.attributes.class = classes.join(" ").trim();
                      }
                      el.addClass('wysiwyg__p');
                    },
                    ul: function(el) {
                      // remove classes with this prefix -- this allows other
                      // alignment classes from the editor to stick
                      if (el.attributes.class) {
                        var prefix = "wysiwyg";
                        var classes = el.attributes.class.split(" ").filter(function(c) {
                            return c.lastIndexOf(prefix, 0) !== 0;
                        });
                        el.attributes.class = classes.join(" ").trim();
                      }
                      el.addClass('wysiwyg__ul');
                    },
                    ol: function(el) {
                      // remove classes with this prefix -- this allows other
                      // alignment classes from the editor to stick
                      if (el.attributes.class) {
                        var prefix = "wysiwyg";
                        var classes = el.attributes.class.split(" ").filter(function(c) {
                            return c.lastIndexOf(prefix, 0) !== 0;
                        });
                        el.attributes.class = classes.join(" ").trim();
                      }
                      el.addClass('wysiwyg__ol');
                    },
                    dl: function(el) {
                      // remove classes with this prefix -- this allows other
                      // alignment classes from the editor to stick
                      if (el.attributes.class) {
                        var prefix = "wysiwyg";
                        var classes = el.attributes.class.split(" ").filter(function(c) {
                            return c.lastIndexOf(prefix, 0) !== 0;
                        });
                        el.attributes.class = classes.join(" ").trim();
                      }
                      el.addClass('wysiwyg__dl accordion');
                    },
                    dt: function(el) {
                      // remove classes with this prefix -- this allows other
                      // alignment classes from the editor to stick
                      if (el.attributes.class) {
                        var prefix = "wysiwyg";
                        var classes = el.attributes.class.split(" ").filter(function(c) {
                            return c.lastIndexOf(prefix, 0) !== 0;
                        });
                        el.attributes.class = classes.join(" ").trim();
                      }
                      el.addClass('wysiwyg__dt accordion__heading');
                    },
                    dd: function(el) {
                      // remove classes with this prefix -- this allows other
                      // alignment classes from the editor to stick
                      if (el.attributes.class) {
                        var prefix = "wysiwyg";
                        var classes = el.attributes.class.split(" ").filter(function(c) {
                            return c.lastIndexOf(prefix, 0) !== 0;
                        });
                        el.attributes.class = classes.join(" ").trim();
                      }
                      el.addClass('wysiwyg__dd accordion__content');
                    },
                    a: function(el) {
                      // remove classes with this prefix -- this allows other
                      // alignment classes from the editor to stick
                      if (el.attributes.class) {
                        var prefix = "wysiwyg";
                        var classes = el.attributes.class.split(" ").filter(function(c) {
                            return c.lastIndexOf(prefix, 0) !== 0;
                        });
                        el.attributes.class = classes.join(" ").trim();
                      }
                      el.addClass('wysiwyg__link');
                    },
                    table: function(el) {
                      // remove classes with this prefix -- this allows other
                      // alignment classes from the editor to stick
                      if (el.attributes.class) {
                        var prefix = "wysiwyg";
                        var classes = el.attributes.class.split(" ").filter(function(c) {
                            return c.lastIndexOf(prefix, 0) !== 0;
                        });
                        el.attributes.class = classes.join(" ").trim();
                      }
                      el.addClass('wysiwyg__table');
                    },
                    tbody: function(el) {
                      // remove classes with this prefix -- this allows other
                      // alignment classes from the editor to stick
                      if (el.attributes.class) {
                        var prefix = "wysiwyg";
                        var classes = el.attributes.class.split(" ").filter(function(c) {
                            return c.lastIndexOf(prefix, 0) !== 0;
                        });
                        el.attributes.class = classes.join(" ").trim();
                      }
                      el.addClass('wysiwyg__tbody');
                    },
                    tr: function(el) {
                      // remove classes with this prefix -- this allows other
                      // alignment classes from the editor to stick
                      if (el.attributes.class) {
                        var prefix = "wysiwyg";
                        var classes = el.attributes.class.split(" ").filter(function(c) {
                            return c.lastIndexOf(prefix, 0) !== 0;
                        });
                        el.attributes.class = classes.join(" ").trim();
                      }
                      el.addClass('wysiwyg__tr');
                    },
                    td: function(el) {
                      // remove classes with this prefix -- this allows other
                      // alignment classes from the editor to stick
                      if (el.attributes.class) {
                        var prefix = "wysiwyg";
                        var classes = el.attributes.class.split(" ").filter(function(c) {
                            return c.lastIndexOf(prefix, 0) !== 0;
                        });
                        el.attributes.class = classes.join(" ").trim();
                      }
                      el.addClass('wysiwyg__td');
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
