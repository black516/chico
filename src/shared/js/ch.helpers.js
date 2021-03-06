/**
 * An object which contains all the public members.
 * @namespace
 */
var ch = {},
	/**
	 * A map of all widget's instances created by Chico.
	 * @memberOf ch
	 * @type {Object}
	 */
	instances = {},

	/**
	 * Reference to the window Selector Object.
	 * @private
	 * @type {Selector}
	 */
	$window = $(window),

	/**
	 * Reference to the navigator object.
	 * @private
	 * @type {Object}
	 */
	navigator = window.navigator,

	/**
	 * Reference to the userAgent.
	 * @private
	 * @type {String}
	 */
	userAgent = navigator.userAgent,

	/**
	 * Reference to the HTMLDocument.
	 * @private
	 * @type {Object}
	 */
	document = window.document,

	/**
	 * Reference to the document Selector Object.
	 * @private
	 * @type {Selector}
	 */
	$document = $(document),

	/**
	 * Reference to the HTMLBodyElement.
	 * @private
	 * @type {Object}
	 */
	body = document.body,

	/**
	 * Reference to the body Selector Object.
	 * @private
	 * @type {Selector}
	 */
	$body = $(body),

	/**
	 * Reference to the HTMLElement.
	 * @private
	 * @type {Object}
	 */
	html = document.getElementsByTagName('html')[0],

	/**
	 * Reference to the html Selector Object.
	 * @private
	 * @type {Selector}
	 */
	$html = $(html),

	/**
	 * Reference to the Object Contructor.
	 * @private
	 * @function
	 * @type {Function}
	 */
	Object = window.Object,

	/**
	 * Reference to the Array Contructor.
	 * @private
	 * @function
	 * @type {Function}
	 */
	Array = window.Array,

	/**
	 * Reference to the vendor prefix of the current browser.
	 * @private
	 * @constant
	 * @type {String}
	 * @see <a href="http://lea.verou.me/2009/02/find-the-vendor-prefix-of-the-current-browser/" target="_blank">http://lea.verou.me/2009/02/find-the-vendor-prefix-of-the-current-browser/</a>
	 */
	VENDOR_PREFIX = (function () {

		var regex = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/,
			styleDeclaration = document.getElementsByTagName('script')[0].style,
			prop;

		for (prop in styleDeclaration) {
			if (regex.test(prop)) {
				return prop.match(regex)[0].toLowerCase();
			}
		}

		// Nothing found so far? Webkit does not enumerate over the CSS properties of the style object.
		// However (prop in style) returns the correct value, so we'll have to test for
		// the precence of a specific property
		if ('WebkitOpacity' in styleDeclaration) { return 'webkit'; }
		if ('KhtmlOpacity' in styleDeclaration) { return 'khtml'; }

		return '';
	}()),

	/**
	 * zIndex values.
	 * @private
	 * @type {Number}
	 */
	zIndex = 1000;