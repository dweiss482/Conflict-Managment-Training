/**
 * Really Simple Color Picker in jQuery
 *
 * Licensed under the MIT (MIT-LICENSE.txt) licenses.
 *
 * Copyright (c) 2008-2012
 * Lakshan Perera (www.laktek.com) & Daniel Lacy (daniellacy.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

(function ($) {
    /**
     * Create a couple private variables.
    **/
    var selectorOwner,
        activePalette,
        cItterate       = 0,
        templates       = {
            control : $('<div class="fontColorPicker-picker"></div>'),
            palette : $('<div id="fontColorPicker_palette" class="fontColorPicker-palette" />'),
            swatch  : $('<div class="fontColorPicker-swatch">&nbsp;</div>'),
            hexLabel: $('<label for="fontColorPicker_hex">Hex</label>'),
            hexField: $('<input type="text" id="fontColorPicker_hex" />')
        },
        transparent     = "transparent",
        lastColor;

    /**
     * Create our fontColorPicker function
    **/
    $.fn.fontColorPicker = function (options) {

        return this.each(function () {
            // Setup time. Clone new elements from our templates, set some IDs, make shortcuts, jazzercise.
            var element      = $(this),
                opts         = $.extend({}, $.fn.fontColorPicker.defaults, options),
                defaultColor = $.fn.fontColorPicker.toHex(
                        (element.val().length > 0) ? element.val() : opts.pickerDefault
                    ),
                newControl   = templates.control.clone(),
                newPalette   = templates.palette.clone().attr('id', 'fontColorPicker_palette-' + selectedNoteId),
                newHexLabel  = templates.hexLabel.clone(),
                newHexField  = templates.hexField.clone(),
                paletteId    = newPalette[0].id,
                swatch;


            /**
             * Build a color palette.
            **/
            $.each(opts.colors, function (i) {
                swatch = templates.swatch.clone();

                if (opts.colors[i] === transparent) {
                    swatch.addClass(transparent).text('X');
                    $.fn.fontColorPicker.bindPalette(newHexField, swatch, transparent);
                } else {
                    swatch.css("background-color", "#" + this);
                    $.fn.fontColorPicker.bindPalette(newHexField, swatch);
                }
                swatch.appendTo(newPalette);
            });

            newHexLabel.attr('for', 'fontColorPicker_hex-' + cItterate);

            newHexField.attr({
                'id'    : 'fontColorPicker_hex-' + cItterate,
                'value' : defaultColor
            });

            newHexField.bind("keydown", function (event) {
                if (event.keyCode === 13) {
                    var hexColor = $.fn.fontColorPicker.toHex($(this).val());
                    $.fn.fontColorPicker.changeColor(hexColor ? hexColor : element.val());
                }
                if (event.keyCode === 27) {
                    $.fn.fontColorPicker.hidePalette();
                }
            });

            newHexField.bind("keyup", function (event) {
              var hexColor = $.fn.fontColorPicker.toHex($(event.target).val());
              $.fn.fontColorPicker.previewColor(hexColor ? hexColor : element.val());
            });

           // $('<div class="fontColorPicker_hexWrap" />').append(newHexLabel).appendTo(newPalette);

           // newPalette.find('.fontColorPicker_hexWrap').append(newHexField);

            $("body").append(newPalette);

            newPalette.hide();


            /**
             * Build replacement interface for original color input.
            **/
            newControl.css("background-color", defaultColor);

            newControl.bind("click", function () {
                if( element.is( ':not(:disabled)' ) ) {
									$.fn.fontColorPicker.togglePalette($('#' + paletteId), $(this));
                }
            });
			 newControl.bind("mousedown", function () {
       			 $.fn.fontColorPicker.hidePalette();
            });

            if( options && options.onColorChange ) {
              newControl.data('onColorChange', options.onColorChange);
            } else {
              newControl.data('onColorChange', function() {} );
            }
            element.after(newControl);

            element.bind("change", function () {
                element.next(".fontColorPicker-picker").css(
                    "background-color", $.fn.fontColorPicker.toHex($(this).val())
                );
            });

            // Hide the original input.
            element.val(defaultColor).hide();

            cItterate++;
        });
    };

    /**
     * Extend fontColorPicker with... all our functionality.
    **/
    $.extend(true, $.fn.fontColorPicker, {
        /**
         * Return a Hex color, convert an RGB value and return Hex, or return false.
         *
         * Inspired by http://code.google.com/p/jquery-color-utils
        **/
        toHex : function (color) {
            // If we have a standard or shorthand Hex color, return that value.
            if (color.match(/[0-9A-F]{6}|[0-9A-F]{3}$/i)) {
                return (color.charAt(0) === "#") ? color : ("#" + color);

            // Alternatively, check for RGB color, then convert and return it as Hex.
            } else if (color.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/)) {
                var c = ([parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10), parseInt(RegExp.$3, 10)]),
                    pad = function (str) {
                        if (str.length < 2) {
                            for (var i = 0, len = 2 - str.length; i < len; i++) {
                                str = '0' + str;
                            }
                        }

                        return str;
                    };

                if (c.length === 3) {
                    var r = pad(c[0].toString(16)),
                        g = pad(c[1].toString(16)),
                        b = pad(c[2].toString(16));

                    return '#' + r + g + b;
                }

            // Otherwise we wont do anything.
            } else {
                return false;

            }
        },

        /**
         * Check whether user clicked on the selector or owner.
        **/
        checkMouse : function (event, paletteId) {
            var selector = activePalette,
                selectorParent = $(event.target).parents("#" + selector.attr('id')).length;

            if (event.target === $(selector)[0] || event.target === selectorOwner[0] || selectorParent > 0) {
                return;
            }

            $.fn.fontColorPicker.hidePalette();
        },

        /**
         * Hide the color palette modal.
        **/
        hidePalette : function () {
            $(document).unbind("mousedown", $.fn.fontColorPicker.checkMouse);

            $('.fontColorPicker-palette').hide();
        },

        /**
         * Show the color palette modal.
        **/
        showPalette : function (palette) {
            var hexColor = selectorOwner.prev("input").val();

            palette.css({
                top: selectorOwner.offset().top + (selectorOwner.outerHeight()),
                left: selectorOwner.offset().left
            });

            $("#color_value").val(hexColor);

            palette.show();

            $(document).bind("mousedown", $.fn.fontColorPicker.checkMouse);
        },

        /**
         * Toggle visibility of the fontColorPicker palette.
        **/
        togglePalette : function (palette, origin) {
            // selectorOwner is the clicked .fontColorPicker-picker.
            if (origin) {
                selectorOwner = origin;
            }

            activePalette = palette;

            if (activePalette.is(':visible')) {
                $.fn.fontColorPicker.hidePalette();

            } else {
                $.fn.fontColorPicker.showPalette(palette);

            }
        },

        /**
         * Update the input with a newly selected color.
        **/
        changeColor : function (value) {
            selectorOwner.css("background-color", value);
			document.execCommand('ForeColor', false, value);
            selectorOwner.prev("input").val(value).change();

            $.fn.fontColorPicker.hidePalette();

            selectorOwner.data('onColorChange').call(selectorOwner, $(selectorOwner).prev("input").attr("id"), value);
			
			changedFontColor = value;
			NOTES.saveSet();
        },


        /**
         * Preview the input with a newly selected color.
        **/
        previewColor : function (value) {
            selectorOwner.css("background-color", value);
			document.execCommand('ForeColor', false, value);
        },

        /**
         * Bind events to the color palette swatches.
        */
        bindPalette : function (paletteInput, element, color) {
            color = color ? color : $.fn.fontColorPicker.toHex(element.css("background-color"));

            element.bind({
                click : function (ev) {
                    lastColor = color;

                    $.fn.fontColorPicker.changeColor(color);
                },
                mouseover : function (ev) {
                    lastColor = paletteInput.val();

                    $(this).css("border-color", "#598FEF");

                    paletteInput.val(color);

                    $.fn.fontColorPicker.previewColor(color);
                },
                mouseout : function (ev) {
                    $(this).css("border-color", "#000");

                    paletteInput.val(selectorOwner.css("background-color"));

                    paletteInput.val(lastColor);

                    $.fn.fontColorPicker.previewColor(lastColor);
                }
            });
        }
    });

    /**
     * Default fontColorPicker options.
     *
     * These are publibly available for global modification using a setting such as:
     *
     * $.fn.fontColorPicker.defaults.colors = ['151337', '111111']
     *
     * They can also be applied on a per-bound element basis like so:
     *
     * $('#element1').fontColorPicker({pickerDefault: 'efefef', transparency: true});
     * $('#element2').fontColorPicker({pickerDefault: '333333', colors: ['333333', '111111']});
     *
    **/
    $.fn.fontColorPicker.defaults = {
        // fontColorPicker default selected color.
        pickerDefault : "FFFFFF",

        // Default color set.
        colors : [
            '000000', '993300', '333300', '000080', '333399', '333333', '800000', 'FF6600',
            '808000', '008000', '008080', '0000FF', '666699', '808080', 'FF0000', 'FF9900',
            '99CC00', '339966', '33CCCC', '3366FF', '800080', '999999', 'FF00FF', 'FFCC00',
            'FFFF00', '00FF00', '00FFFF', '00CCFF', '993366', 'C0C0C0', 'FF99CC', 'FFCC99',
            'FFFF99', 'CCFFFF', '99CCFF', 'FFFFFF'
        ],

        // If we want to simply add more colors to the default set, use addColors.
        addColors : []
    };

})(jQuery);
