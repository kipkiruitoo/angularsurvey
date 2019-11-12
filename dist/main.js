(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_home_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home/home/home.component */ "./src/app/components/home/home/home.component.ts");
/* harmony import */ var _components_respondent_answer_survey_survey_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/respondent/answer-survey/survey.component */ "./src/app/components/respondent/answer-survey/survey.component.ts");
/* harmony import */ var _components_admin_create_survey_survey_creator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/admin/create-survey/survey.creator.component */ "./src/app/components/admin/create-survey/survey.creator.component.ts");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/auth/register/register.component */ "./src/app/components/auth/register/register.component.ts");
/* harmony import */ var _components_usersPages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/usersPages/profile/profile.component */ "./src/app/components/usersPages/profile/profile.component.ts");
/* harmony import */ var _components_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/admin/admin/admin.component */ "./src/app/components/admin/admin/admin.component.ts");
/* harmony import */ var _components_respondent_view_surveys_view_surveys_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/respondent/view-surveys/view-surveys.component */ "./src/app/components/respondent/view-surveys/view-surveys.component.ts");
/* harmony import */ var _components_respondent_edit_answer_edit_answer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/respondent/edit-answer/edit-answer.component */ "./src/app/components/respondent/edit-answer/edit-answer.component.ts");
/* harmony import */ var _components_admin_editsurvey_editsurvey_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/admin/editsurvey/editsurvey.component */ "./src/app/components/admin/editsurvey/editsurvey.component.ts");
/* harmony import */ var _components_category_index_category_index_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/category-index/category-index.component */ "./src/app/components/category-index/category-index.component.ts");
/* harmony import */ var _components_reset_reset_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/reset/reset.component */ "./src/app/components/reset/reset.component.ts");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/confirm/confirm.component */ "./src/app/components/confirm/confirm.component.ts");
/* harmony import */ var _components_respondent_category_summary_category_summary_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/respondent/category-summary/category-summary.component */ "./src/app/components/respondent/category-summary/category-summary.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");



















var routes = [
    {
        path: "editsurvey",
        component: _components_admin_editsurvey_editsurvey_component__WEBPACK_IMPORTED_MODULE_11__["EditsurveyComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]]
    },
    {
        path: "editanswer",
        component: _components_respondent_edit_answer_edit_answer_component__WEBPACK_IMPORTED_MODULE_10__["EditAnswerComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]]
    },
    {
        path: "survey",
        component: _components_respondent_answer_survey_survey_component__WEBPACK_IMPORTED_MODULE_3__["SurveyComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]]
    },
    {
        path: "reset",
        component: _components_reset_reset_component__WEBPACK_IMPORTED_MODULE_13__["ResetComponent"],
    },
    {
        path: "confirm",
        component: _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"],
    },
    {
        path: "admin",
        component: _components_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]]
    },
    {
        path: "profile",
        component: _components_usersPages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]]
    },
    {
        path: "login",
        component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: "register",
        component: _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
    },
    {
        path: "",
        component: _components_home_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: "createsurvey",
        component: _components_admin_create_survey_survey_creator_component__WEBPACK_IMPORTED_MODULE_4__["SurveyCreatorComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]]
    },
    {
        path: "surveys",
        component: _components_category_index_category_index_component__WEBPACK_IMPORTED_MODULE_12__["CategoryIndexComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]]
    },
    {
        path: "editsurvey",
        component: _components_admin_editsurvey_editsurvey_component__WEBPACK_IMPORTED_MODULE_11__["EditsurveyComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]]
    },
    {
        path: "viewsurvey",
        component: _components_respondent_view_surveys_view_surveys_component__WEBPACK_IMPORTED_MODULE_9__["ViewSurveysComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]]
    },
    {
        path: "surveysummary",
        component: _components_respondent_category_summary_category_summary_component__WEBPACK_IMPORTED_MODULE_15__["CategorySummaryComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<notifier-container></notifier-container>\r\n<!-- <app-footer class=\"mt-auto\"></app-footer> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "app works!";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_respondent_answer_survey_survey_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/respondent/answer-survey/survey.component */ "./src/app/components/respondent/answer-survey/survey.component.ts");
/* harmony import */ var _components_admin_create_survey_survey_creator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/create-survey/survey.creator.component */ "./src/app/components/admin/create-survey/survey.creator.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _components_home_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home/home.component */ "./src/app/components/home/home/home.component.ts");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/auth/register/register.component */ "./src/app/components/auth/register/register.component.ts");
/* harmony import */ var _components_usersPages_verifier_verifier_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/usersPages/verifier/verifier.component */ "./src/app/components/usersPages/verifier/verifier.component.ts");
/* harmony import */ var _components_usersPages_judge_judge_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/usersPages/judge/judge.component */ "./src/app/components/usersPages/judge/judge.component.ts");
/* harmony import */ var _components_usersPages_scripter_scripter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/usersPages/scripter/scripter.component */ "./src/app/components/usersPages/scripter/scripter.component.ts");
/* harmony import */ var _components_usersPages_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/usersPages/profile/profile.component */ "./src/app/components/usersPages/profile/profile.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _services_answers_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/answers.service */ "./src/app/services/answers.service.ts");
/* harmony import */ var _services_survey_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/survey.service */ "./src/app/services/survey.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _services_tokeninterceptor_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/tokeninterceptor.service */ "./src/app/services/tokeninterceptor.service.ts");
/* harmony import */ var _components_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/admin/admin/admin.component */ "./src/app/components/admin/admin/admin.component.ts");
/* harmony import */ var _components_admin_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/admin/admin-sidebar/admin-sidebar.component */ "./src/app/components/admin/admin-sidebar/admin-sidebar.component.ts");
/* harmony import */ var _components_respondent_view_surveys_view_surveys_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/respondent/view-surveys/view-surveys.component */ "./src/app/components/respondent/view-surveys/view-surveys.component.ts");
/* harmony import */ var _components_admin_editsurvey_editsurvey_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/admin/editsurvey/editsurvey.component */ "./src/app/components/admin/editsurvey/editsurvey.component.ts");
/* harmony import */ var _components_respondent_edit_answer_edit_answer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/respondent/edit-answer/edit-answer.component */ "./src/app/components/respondent/edit-answer/edit-answer.component.ts");
/* harmony import */ var _components_category_index_category_index_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/category-index/category-index.component */ "./src/app/components/category-index/category-index.component.ts");
/* harmony import */ var _components_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/sidemenu/sidemenu.component */ "./src/app/components/sidemenu/sidemenu.component.ts");
/* harmony import */ var _components_shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/shared/loader/loader.component */ "./src/app/components/shared/loader/loader.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./interceptors/loader.interceptor */ "./src/app/interceptors/loader.interceptor.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_reset_reset_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/reset/reset.component */ "./src/app/components/reset/reset.component.ts");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/confirm/confirm.component */ "./src/app/components/confirm/confirm.component.ts");
/* harmony import */ var _components_respondent_category_summary_category_summary_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/respondent/category-summary/category-summary.component */ "./src/app/components/respondent/category-summary/category-summary.component.ts");








// import { CreateSurveyComponent } from "./admin/create-survey/create-survey.component";



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_respondent_answer_survey_survey_component__WEBPACK_IMPORTED_MODULE_6__["SurveyComponent"], _components_admin_create_survey_survey_creator_component__WEBPACK_IMPORTED_MODULE_7__["SurveyCreatorComponent"], _components_home_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], _components_usersPages_verifier_verifier_component__WEBPACK_IMPORTED_MODULE_12__["VerifierComponent"], _components_usersPages_judge_judge_component__WEBPACK_IMPORTED_MODULE_13__["JudgeComponent"], _components_usersPages_scripter_scripter_component__WEBPACK_IMPORTED_MODULE_14__["ScripterComponent"], _components_usersPages_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"], _components_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_24__["AdminComponent"], _components_admin_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_25__["AdminSidebarComponent"], _components_respondent_view_surveys_view_surveys_component__WEBPACK_IMPORTED_MODULE_26__["ViewSurveysComponent"], _components_admin_editsurvey_editsurvey_component__WEBPACK_IMPORTED_MODULE_27__["EditsurveyComponent"], _components_category_index_category_index_component__WEBPACK_IMPORTED_MODULE_29__["CategoryIndexComponent"], _components_respondent_edit_answer_edit_answer_component__WEBPACK_IMPORTED_MODULE_28__["EditAnswerComponent"], _components_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_30__["SidemenuComponent"], _components_shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_31__["LoaderComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_38__["ModalComponent"], _components_reset_reset_component__WEBPACK_IMPORTED_MODULE_40__["ResetComponent"], _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_41__["ConfirmComponent"], _components_respondent_category_summary_category_summary_component__WEBPACK_IMPORTED_MODULE_42__["CategorySummaryComponent"],],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_material__WEBPACK_IMPORTED_MODULE_33__["MatExpansionModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_35__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_39__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_18__["NotifierModule"]],
            providers: [_services_answers_service__WEBPACK_IMPORTED_MODULE_19__["AnswersService"], _services_survey_service__WEBPACK_IMPORTED_MODULE_20__["SurveyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"], _services_loader_service__WEBPACK_IMPORTED_MODULE_36__["LoaderService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_37__["LoaderInterceptor"], multi: true }, {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _services_tokeninterceptor_service__WEBPACK_IMPORTED_MODULE_23__["TokenInterceptorService"],
                    multi: true
                }],
            entryComponents: [_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_38__["ModalComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/admin-sidebar/admin-sidebar.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/admin/admin-sidebar/admin-sidebar.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4tc2lkZWJhci9hZG1pbi1zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/admin/admin-sidebar/admin-sidebar.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin/admin-sidebar/admin-sidebar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin-sidebar works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/admin/admin-sidebar/admin-sidebar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin/admin-sidebar/admin-sidebar.component.ts ***!
  \***************************************************************************/
/*! exports provided: AdminSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSidebarComponent", function() { return AdminSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminSidebarComponent = /** @class */ (function () {
    function AdminSidebarComponent() {
    }
    AdminSidebarComponent.prototype.ngOnInit = function () {
    };
    AdminSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-sidebar',
            template: __webpack_require__(/*! ./admin-sidebar.component.html */ "./src/app/components/admin/admin-sidebar/admin-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./admin-sidebar.component.css */ "./src/app/components/admin/admin-sidebar/admin-sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminSidebarComponent);
    return AdminSidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin/admin.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/admin/admin/admin.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#dec{\r\n  text-decoration:none;\r\n}\r\n#footer{\r\n  background:#000000;\r\n  height: 50px;\r\ntext-align: center;\r\nmargin-bottom: 00px;\r\n}\r\n.dash-box{\r\n  text-align: center;\r\n}\r\n.navbar{\r\n  min-height: 33px !important ;\r\n  margin-bottom: 0;\r\n  border-radius: 0;\r\n}\r\n.navbar-nav > li >a, .navbar-brand{\r\n  padding-top: 5px !important;\r\n  padding-bottom: 2px;\r\n  height: 33px;\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n}\r\n#nam{\r\n  background-color:#ffb900;\r\n  border-color: #ffffff;\r\n  color: black;\r\n\r\n}\r\n.mine ul{\r\n  list-style: none;\r\n\r\n\r\n}\r\n.mine ul li{\r\n  list-style: none;\r\n  text-decoration: none;\r\nbackground: #ffb900;\r\nwidth: auto;\r\nborder-top: 1px solid #ffffff;\r\n  position: relative;\r\n  border-color: #ffffff;\r\n\r\n}\r\n.mine ul ul {\r\n  -webkit-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n  opacity: 0;\r\n  position:absolute;\r\n  visibility: hidden;\r\n  left: 100%;\r\n  top: -2%;\r\n}\r\n.mine ul li:hover > ul{\r\nopacity: 1;\r\nvisibility: visible;}\r\n.mine ul li a{\r\n\r\n  text-decoration: none;\r\n}\r\n.list-group-item{\r\n\r\n  background: #ffb900;\r\n  color: #ffffff;\r\n}\r\n.progress-bar{\r\n  background: #ffb900;\r\n  color: #ffffff;\r\n}\r\n.navbar {\r\n  background-color: #060506;\r\n}\r\n.navbar .navbar-brand {\r\n  color: #e6e9ea;\r\n}\r\n.navbar .navbar-brand:hover,\r\n.navbar .navbar-brand:focus {\r\n  color: #f20b29;\r\n}\r\n.navbar .navbar-text {\r\n  color: White;\r\n}\r\n.navbar .navbar-text a {\r\n  color: #f20b29;\r\n}\r\n.navbar .navbar-text a:hover,\r\n.navbar .navbar-text a:focus {\r\n  color: #f20b29;\r\n}\r\n.navbar .navbar-nav .nav-link {\r\n  color: #e6e9ea;\r\n  border-radius: .25rem;\r\n  margin: 0 0.25em;\r\n}\r\n.navbar .navbar-nav .nav-link:not(.disabled):hover,\r\n.navbar .navbar-nav .nav-link:not(.disabled):focus {\r\n  color: #f20b29;\r\n}\r\n.navbar .navbar-nav .dropdown-menu {\r\n  background-color: #060506;\r\n  /* black colour #060506*/\r\n  border-color: #d29f07;\r\n}\r\n.navbar .navbar-nav .dropdown-menu .dropdown-item {\r\n  color: #e6e9ea;\r\n}\r\n.navbar .navbar-nav .dropdown-menu .dropdown-item:hover,\r\n.navbar .navbar-nav .dropdown-menu .dropdown-item:focus,\r\n.navbar .navbar-nav .dropdown-menu .dropdown-item.active {\r\n  color: #f20b29;\r\n  background-color: #d29f07;\r\n}\r\n.navbar .navbar-nav .dropdown-menu .dropdown-divider {\r\n  border-top-color: #d29f07;\r\n}\r\n.navbar .navbar-nav .nav-item.active .nav-link,\r\n.navbar .navbar-nav .nav-item.active .nav-link:hover,\r\n.navbar .navbar-nav .nav-item.active .nav-link:focus,\r\n.navbar .navbar-nav .nav-item.show .nav-link,\r\n.navbar .navbar-nav .nav-item.show .nav-link:hover,\r\n.navbar .navbar-nav .nav-item.show .nav-link:focus {\r\n  color: #f20b29;\r\n  background-color: #d29f07;\r\n}\r\n.navbar .navbar-toggle {\r\n  border-color: #d29f07;\r\n}\r\n.navbar .navbar-toggle:hover,\r\n.navbar .navbar-toggle:focus {\r\n  background-color: #d29f07;\r\n}\r\n.navbar .navbar-toggle .navbar-toggler-icon {\r\n  color: #e6e9ea;\r\n}\r\n.navbar .navbar-collapse,\r\n.navbar .navbar-form {\r\n  border-color: #e6e9ea;\r\n}\r\n.navbar .navbar-link {\r\n  color: #e6e9ea;\r\n}\r\n.navbar .navbar-link:hover {\r\n  color: #f20b29;\r\n}\r\n/* custom */\r\n.main-colour-bg{\r\nbackground-color: #060506 !important;\r\nborder-color: #c0332b;\r\ncolor:#ffffff;\r\n}\r\n/* haeder */\r\n#header {\r\n  background:#ffb900;\r\n  color:#ffffff;\r\n  padding-bottom: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n#header .Create{\r\n  padding-top: 20px;\r\n}\r\n/* breadcrumb */\r\n.breadcrumb{\r\n  background: #ffb900;\r\n  color: #333333;\r\n}\r\n.breadcrumb a{\r\n  color: #333333;\r\n}\r\n#one{\r\n  color: #ffffff;\r\n}\r\n@media (max-width: 575px) {\r\n  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item {\r\n    color: #e6e9ea;\r\n  }\r\n  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:hover,\r\n  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:focus {\r\n    color: #f20b29;\r\n  }\r\n  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item.active {\r\n    color: #f20b29;\r\n    background-color: #d29f07;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item {\r\n    color: #e6e9ea;\r\n  }\r\n  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:hover,\r\n  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:focus {\r\n    color: #f20b29;\r\n  }\r\n  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item.active {\r\n    color: #f20b29;\r\n    background-color: #d29f07;\r\n  }\r\n}\r\n@media (max-width: 991px) {\r\n  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item {\r\n    color: #e6e9ea;\r\n  }\r\n  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:hover,\r\n  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:focus {\r\n    color: #f20b29;\r\n  }\r\n  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item.active {\r\n    color: #f20b29;\r\n    background-color: #d29f07;\r\n  }\r\n}\r\n@media (max-width: 1199px) {\r\n  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item {\r\n    color: #e6e9ea;\r\n  }\r\n  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:hover,\r\n  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:focus {\r\n    color: #f20b29;\r\n  }\r\n  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item.active {\r\n    color: #f20b29;\r\n    background-color: #d29f07;\r\n  }\r\n}\r\n.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item {\r\n  color: #e6e9ea;\r\n}\r\n.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:hover,\r\n.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:focus {\r\n  color: #f20b29;\r\n}\r\n.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item.active {\r\n  color: #f20b29;\r\n  background-color: #d29f07;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZCxrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLFlBQVk7O0FBRWQ7QUFDQTtFQUNFLGdCQUFnQjs7O0FBR2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCLG1CQUFtQjtBQUNuQixXQUFXO0FBQ1gsNkJBQTZCO0VBQzNCLGtCQUFrQjtFQUNsQixxQkFBcUI7O0FBRXZCO0FBRUE7RUFDRSw0QkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVixtQkFBbUIsQ0FBQztBQUVwQjs7RUFFRSxxQkFBcUI7QUFDdkI7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCO0FBRUE7O0VBRUUsY0FBYztBQUNoQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7O0VBR0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7Ozs7OztFQU1FLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBLFdBQVc7QUFDWDtBQUNBLG9DQUFvQztBQUNwQyxxQkFBcUI7QUFDckIsYUFBYTtBQUNiO0FBRUEsV0FBVztBQUVYO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFHQSxlQUFlO0FBQ2Y7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUtBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7O0lBRUUsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTs7SUFFRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0VBQzNCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBOztJQUVFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7SUFDZCx5QkFBeUI7RUFDM0I7QUFDRjtBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7O0lBRUUsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjtBQUNGO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jZGVje1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcbiNmb290ZXJ7XHJcbiAgYmFja2dyb3VuZDojMDAwMDAwO1xyXG4gIGhlaWdodDogNTBweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5tYXJnaW4tYm90dG9tOiAwMHB4O1xyXG59XHJcblxyXG4uZGFzaC1ib3h7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uYXZiYXJ7XHJcbiAgbWluLWhlaWdodDogMzNweCAhaW1wb3J0YW50IDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLm5hdmJhci1uYXYgPiBsaSA+YSwgLm5hdmJhci1icmFuZHtcclxuICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICBoZWlnaHQ6IDMzcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiNuYW17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZiOTAwO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxuICBjb2xvcjogYmxhY2s7XHJcblxyXG59XHJcbi5taW5lIHVse1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG5cclxufVxyXG4ubWluZSB1bCBsaXtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuYmFja2dyb3VuZDogI2ZmYjkwMDtcclxud2lkdGg6IGF1dG87XHJcbmJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcblxyXG59XHJcblxyXG4ubWluZSB1bCB1bCB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgbGVmdDogMTAwJTtcclxuICB0b3A6IC0yJTtcclxufVxyXG4ubWluZSB1bCBsaTpob3ZlciA+IHVse1xyXG5vcGFjaXR5OiAxO1xyXG52aXNpYmlsaXR5OiB2aXNpYmxlO31cclxuXHJcbi5taW5lIHVsIGxpIGF7XHJcblxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbXtcclxuXHJcbiAgYmFja2dyb3VuZDogI2ZmYjkwMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4ucHJvZ3Jlc3MtYmFye1xyXG4gIGJhY2tncm91bmQ6ICNmZmI5MDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLm5hdmJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MDUwNjtcclxufVxyXG4ubmF2YmFyIC5uYXZiYXItYnJhbmQge1xyXG4gIGNvbG9yOiAjZTZlOWVhO1xyXG59XHJcbi5uYXZiYXIgLm5hdmJhci1icmFuZDpob3ZlcixcclxuLm5hdmJhciAubmF2YmFyLWJyYW5kOmZvY3VzIHtcclxuICBjb2xvcjogI2YyMGIyOTtcclxufVxyXG4ubmF2YmFyIC5uYXZiYXItdGV4dCB7XHJcbiAgY29sb3I6IFdoaXRlO1xyXG59XHJcbi5uYXZiYXIgLm5hdmJhci10ZXh0IGEge1xyXG4gIGNvbG9yOiAjZjIwYjI5O1xyXG59XHJcbi5uYXZiYXIgLm5hdmJhci10ZXh0IGE6aG92ZXIsXHJcbi5uYXZiYXIgLm5hdmJhci10ZXh0IGE6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZjIwYjI5O1xyXG59XHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICBjb2xvcjogI2U2ZTllYTtcclxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgbWFyZ2luOiAwIDAuMjVlbTtcclxufVxyXG5cclxuLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWxpbms6bm90KC5kaXNhYmxlZCk6aG92ZXIsXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1saW5rOm5vdCguZGlzYWJsZWQpOmZvY3VzIHtcclxuICBjb2xvcjogI2YyMGIyOTtcclxufVxyXG4ubmF2YmFyIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwNTA2O1xyXG4gIC8qIGJsYWNrIGNvbG91ciAjMDYwNTA2Ki9cclxuICBib3JkZXItY29sb3I6ICNkMjlmMDc7XHJcbn1cclxuLm5hdmJhciAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XHJcbiAgY29sb3I6ICNlNmU5ZWE7XHJcbn1cclxuLm5hdmJhciAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlcixcclxuLm5hdmJhciAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpmb2N1cyxcclxuLm5hdmJhciAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbS5hY3RpdmUge1xyXG4gIGNvbG9yOiAjZjIwYjI5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMjlmMDc7XHJcbn1cclxuLm5hdmJhciAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tZGl2aWRlciB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2QyOWYwNztcclxufVxyXG4ubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbS5hY3RpdmUgLm5hdi1saW5rLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbS5hY3RpdmUgLm5hdi1saW5rOmhvdmVyLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbS5hY3RpdmUgLm5hdi1saW5rOmZvY3VzLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbS5zaG93IC5uYXYtbGluayxcclxuLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbms6aG92ZXIsXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rOmZvY3VzIHtcclxuICBjb2xvcjogI2YyMGIyOTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDI5ZjA3O1xyXG59XHJcbi5uYXZiYXIgLm5hdmJhci10b2dnbGUge1xyXG4gIGJvcmRlci1jb2xvcjogI2QyOWYwNztcclxufVxyXG4ubmF2YmFyIC5uYXZiYXItdG9nZ2xlOmhvdmVyLFxyXG4ubmF2YmFyIC5uYXZiYXItdG9nZ2xlOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDI5ZjA3O1xyXG59XHJcbi5uYXZiYXIgLm5hdmJhci10b2dnbGUgLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gIGNvbG9yOiAjZTZlOWVhO1xyXG59XHJcbi5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSxcclxuLm5hdmJhciAubmF2YmFyLWZvcm0ge1xyXG4gIGJvcmRlci1jb2xvcjogI2U2ZTllYTtcclxufVxyXG4ubmF2YmFyIC5uYXZiYXItbGluayB7XHJcbiAgY29sb3I6ICNlNmU5ZWE7XHJcbn1cclxuLm5hdmJhciAubmF2YmFyLWxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiAjZjIwYjI5O1xyXG59XHJcblxyXG4vKiBjdXN0b20gKi9cclxuLm1haW4tY29sb3VyLWJne1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMDYwNTA2ICFpbXBvcnRhbnQ7XHJcbmJvcmRlci1jb2xvcjogI2MwMzMyYjtcclxuY29sb3I6I2ZmZmZmZjtcclxufVxyXG5cclxuLyogaGFlZGVyICovXHJcblxyXG4jaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiNmZmI5MDA7XHJcbiAgY29sb3I6I2ZmZmZmZjtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbiNoZWFkZXIgLkNyZWF0ZXtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcbi8qIGJyZWFkY3J1bWIgKi9cclxuLmJyZWFkY3J1bWJ7XHJcbiAgYmFja2dyb3VuZDogI2ZmYjkwMDtcclxuICBjb2xvcjogIzMzMzMzMztcclxufVxyXG4uYnJlYWRjcnVtYiBhe1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbiNvbmV7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC5uYXZiYXItZXhwYW5kLXNtIC5uYXZiYXItbmF2IC5zaG93IC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIHtcclxuICAgIGNvbG9yOiAjZTZlOWVhO1xyXG4gIH1cclxuICAubmF2YmFyLWV4cGFuZC1zbSAubmF2YmFyLW5hdiAuc2hvdyAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlcixcclxuICAubmF2YmFyLWV4cGFuZC1zbSAubmF2YmFyLW5hdiAuc2hvdyAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpmb2N1cyB7XHJcbiAgICBjb2xvcjogI2YyMGIyOTtcclxuICB9XHJcbiAgLm5hdmJhci1leHBhbmQtc20gLm5hdmJhci1uYXYgLnNob3cgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjZjIwYjI5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QyOWYwNztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5uYXZiYXItZXhwYW5kLW1kIC5uYXZiYXItbmF2IC5zaG93IC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIHtcclxuICAgIGNvbG9yOiAjZTZlOWVhO1xyXG4gIH1cclxuICAubmF2YmFyLWV4cGFuZC1tZCAubmF2YmFyLW5hdiAuc2hvdyAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlcixcclxuICAubmF2YmFyLWV4cGFuZC1tZCAubmF2YmFyLW5hdiAuc2hvdyAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpmb2N1cyB7XHJcbiAgICBjb2xvcjogI2YyMGIyOTtcclxuICB9XHJcbiAgLm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci1uYXYgLnNob3cgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjZjIwYjI5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QyOWYwNztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IC5zaG93IC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIHtcclxuICAgIGNvbG9yOiAjZTZlOWVhO1xyXG4gIH1cclxuICAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAuc2hvdyAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlcixcclxuICAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAuc2hvdyAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpmb2N1cyB7XHJcbiAgICBjb2xvcjogI2YyMGIyOTtcclxuICB9XHJcbiAgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLnNob3cgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjZjIwYjI5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QyOWYwNztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAubmF2YmFyLWV4cGFuZC14bCAubmF2YmFyLW5hdiAuc2hvdyAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XHJcbiAgICBjb2xvcjogI2U2ZTllYTtcclxuICB9XHJcbiAgLm5hdmJhci1leHBhbmQteGwgLm5hdmJhci1uYXYgLnNob3cgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06aG92ZXIsXHJcbiAgLm5hdmJhci1leHBhbmQteGwgLm5hdmJhci1uYXYgLnNob3cgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06Zm9jdXMge1xyXG4gICAgY29sb3I6ICNmMjBiMjk7XHJcbiAgfVxyXG4gIC5uYXZiYXItZXhwYW5kLXhsIC5uYXZiYXItbmF2IC5zaG93IC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2YyMGIyOTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMjlmMDc7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2YmFyLWV4cGFuZCAubmF2YmFyLW5hdiAuc2hvdyAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XHJcbiAgY29sb3I6ICNlNmU5ZWE7XHJcbn1cclxuLm5hdmJhci1leHBhbmQgLm5hdmJhci1uYXYgLnNob3cgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06aG92ZXIsXHJcbi5uYXZiYXItZXhwYW5kIC5uYXZiYXItbmF2IC5zaG93IC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmZvY3VzIHtcclxuICBjb2xvcjogI2YyMGIyOTtcclxufVxyXG4ubmF2YmFyLWV4cGFuZCAubmF2YmFyLW5hdiAuc2hvdyAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbS5hY3RpdmUge1xyXG4gIGNvbG9yOiAjZjIwYjI5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMjlmMDc7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/admin/admin/admin.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/admin/admin/admin.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id='header'>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-10\">\r\n          <h1><span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span>Dashboard <small><i>Manage your Analysis process</i></small></h1>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <br>\r\n        <!-- Small button group -->\r\n          <div class=\"btn-group Create\">\r\n            <button class=\"btn btn-default btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              New Users <span class=\"caret\"></span>\r\n            </button>\r\n            <ul class=\"dropdown-menu\" arial-labelledby='dropdownMenu1'>\r\n              <li ><a type='button' data-toggle='modal' data-target='#addUser'>Users</a></li>\r\n              <li><a type='button' data-toggle='modal' data-target='#addRoles'>roles</a></li>\r\n              <li><a type='button' data-toggle='modal' data-target='#Permissions'>Permissions</a></li>\r\n            </ul>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<section id='main'>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <!-- side bar -->\r\n\r\n      <div  class=\"col-md-3\">\r\n\r\n        <div class=\"list-group\">\r\n          <div class='mine'>\r\n<ul>\r\n  <a href=\"index.html\" id='nam' class=\"list-group-item active main-color-bg\">\r\n    <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span>Dashboard\r\n  </a>\r\n\r\n      <li><a href=\"inbox.html\" class=\"list-group-item\"><span class=\"glyphicon glyphicon-list-alt\" aria-hidden=\"true\"></span> Inbox <span class=\"badge\">3</span> </a>\r\n        <ul>\r\n          <li>one</li>\r\n          <li>two</li>\r\n        </ul>\r\n      </li>\r\n    <li>  <a href=\"Survey.html\" class=\"list-group-item\"><span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span> Survay <span class=\"badge\">6</span></a></li>\r\n    <li>  <a href=\"Calendar\" class=\"list-group-item\"><span class=\"glyphicon glyphicon-book\" aria-hidden=\"true\"></span> Calender</a></li>\r\n    <li>  <a href=\"users.html\" class=\"list-group-item\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> users <span class=\"badge\">51</span></a></li>\r\n    <li>  <a href=\"Settings.html\" class=\"list-group-item\"><span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span> Settings</a></li>\r\n</ul>\r\n</div>\r\n    </div>\r\n<ul>\r\n    <div class=\"well\">\r\n      <h6>program progress</h6>\r\n      <div class=\"progress\">\r\n        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\r\n    60%\r\n  </div>\r\n</div>\r\n<h6>Active respondent</h6>\r\n<div class=\"progress\">\r\n  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%;\">\r\n90%\r\n</div>\r\n</div>\r\n<h6>Used forms</h6>\r\n<div class=\"progress\">\r\n  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"12\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 12%;\">\r\n12%\r\n</div>\r\n</div>\r\n    </div>\r\n  </ul>\r\n      </div>\r\n      <!-- main area -->\r\n      <div class=\"col-md-9\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\" id='nam'>\r\n\r\n            <h3 class=\"panel-title\">Survey Overview</h3>\r\n            </div>\r\n          <div class=\"panel-body\">\r\n            <div class=\"col-md-3\">\r\n                <div class=\"well dash-box\">\r\n                  <h2><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> 270</h2>\r\n                  <h4>Respondents</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"well dash-box\">\r\n                  <h2><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span> 103</h2>\r\n                  <h4>Verifiers</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"well dash-box\">\r\n                  <h2><span class=\"glyphicon glyphicon-book\" aria-hidden=\"true\"></span> 205</h2>\r\n                  <h4>Scripters</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"well dash-box\">\r\n                  <h2><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> 20</h2>\r\n                  <h4>Judges</h4>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- latest Users -->\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">\r\n            <h3 class=\"panel-title\">latest users</h3>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n              <table class=\"table table-strip table-hover\">\r\n                <thead>\r\n                  <th>Name</th>\r\n                  <th>Email</th>\r\n                  <th>Date Joined</th>\r\n                </thead>\r\n                <tr>\r\n                  <td>Lincoln</td>\r\n                  <td>Lincoln@gmail.com</td>\r\n                  <td>22/12/2019</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Jane</td>\r\n                  <td>jane@gmail.com</td>\r\n                  <td>22/12/2019</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>June</td>\r\n                  <td>june@gmail.com</td>\r\n                  <td>22/12/2019</td>\r\n                </tr>\r\n              </table>\r\n\r\n          </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/admin/admin/admin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/admin/admin/admin.component.ts ***!
  \***********************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/create-survey/create-survey.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin/create-survey/create-survey.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"surveyCreatorContainer\" class=\"\">\r\n</div>\r\n<app-loader *ngIf=\"isloading\"></app-loader>\r\n"

/***/ }),

/***/ "./src/app/components/admin/create-survey/survey.creator.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/admin/create-survey/survey.creator.component.ts ***!
  \****************************************************************************/
/*! exports provided: SurveyCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyCreatorComponent", function() { return SurveyCreatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var survey_knockout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-knockout */ "./node_modules/survey-knockout/survey.ko.js");
/* harmony import */ var survey_knockout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_creator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-creator */ "./node_modules/survey-creator/survey-creator.js");
/* harmony import */ var survey_creator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_creator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! surveyjs-widgets */ "./node_modules/surveyjs-widgets/surveyjs-widgets.js");
/* harmony import */ var surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_survey_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/survey.service */ "./src/app/services/survey.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var inputmask_dist_inputmask_phone_codes_phone_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! inputmask/dist/inputmask/phone-codes/phone.js */ "./node_modules/inputmask/dist/inputmask/phone-codes/phone.js");
/* harmony import */ var inputmask_dist_inputmask_phone_codes_phone_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(inputmask_dist_inputmask_phone_codes_phone_js__WEBPACK_IMPORTED_MODULE_8__);









surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["icheck"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["select2"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["inputmask"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["jquerybarrating"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["jqueryuidatepicker"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["nouislider"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["select2tagbox"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["signaturepad"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["sortablejs"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["ckeditor"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["autocomplete"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["bootstrapslider"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
var CkEditor_ModalEditor = {
    afterRender: function (modalEditor, htmlElement) {
        var editor = window["CKEDITOR"].replace(htmlElement);
        editor.on("change", function () {
            modalEditor.editingValue = editor.getData();
        });
        editor.setData(modalEditor.editingValue);
    },
    destroy: function (modalEditor, htmlElement) {
        var instance = window["CKEDITOR"].instances[htmlElement.id];
        if (instance) {
            instance.removeAllListeners();
            window["CKEDITOR"].remove(instance);
        }
    }
};
survey_creator__WEBPACK_IMPORTED_MODULE_3__["SurveyPropertyModalEditor"].registerCustomWidget("html", CkEditor_ModalEditor);
var SurveyCreatorComponent = /** @class */ (function () {
    function SurveyCreatorComponent(surveyservice, _router, notifierService) {
        var _this = this;
        this.surveyservice = surveyservice;
        this._router = _router;
        this.notifierService = notifierService;
        this.isloading = false;
        this.data = { "pages": "" };
        this.page = this.data.pages;
        this.categories = [];
        this.category = { "name": '', "description": '' };
        this.surveySaved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saveMySurvey = function () {
            _this.isloading = true;
            // console.log(JSON.stringify(this.surveyCreator.text));
            _this.json = JSON.parse(_this.surveyCreator.text);
            _this.surveyservice.saveSurvey(_this.json['pages']);
            // console.log(this.json['title'])
            // console.log(this.json['description'])
            _this.page = JSON.stringify(_this.surveyCreator.text);
            console.log(_this.json);
            _this.saveMyCategory();
        };
        this.saveMyCategory = function () {
            _this.json = JSON.parse(_this.surveyCreator.text);
            if (!_this.json['title']) {
                _this.isloading = false;
                _this.notifier.notify('error', 'pleas add a title before trying to save');
            }
            else if (!_this.json['description']) {
                _this.isloading = false;
                _this.notifier.notify('error', 'pleas add a description before trying to save');
            }
            else if (!_this.json['pages']) {
                _this.notifier.notify('error', 'it seems you have not added questions yet');
            }
            else {
                // console.log(this.json['title'])
                _this.surveyservice.saveCategory(_this.json['title'], _this.json['description']);
                _this.category = { "name": _this.json['title'], "description": _this.json['description'] };
                // console.log(this.json['title'])
                // this.submitCategories()
                //  this is what i changed... rather than calling another method.. i called the post category method in the service..
                // then got the id from the response
                // and passed it to the category part in the json
                // and then make another service request to save the json with the new category;
                _this.surveyservice.postCategory(_this.category).subscribe(function (res) {
                    console.log(res);
                    _this.cat_id = res.id;
                    console.log(_this.cat_id);
                    _this.json['category'] = _this.cat_id;
                    console.log(_this.json);
                    _this.surveyservice.postQuestionnaire(_this.json).subscribe(function (res) {
                        console.log(res);
                        _this.surveyservice.getCategory()
                            .subscribe(function (res) {
                            _this.isloading = false;
                            _this.categories.push(res),
                                console.log(_this.categories);
                            localStorage.setItem('question', JSON.stringify(_this.categories[0]));
                            _this.notifier.notify('success', 'Category Saved Sucessfully');
                            // window.location.reload()
                            _this._router.navigate(['surveys']);
                        }, function (err) {
                            _this.notifier.notify('error', 'Something terrible happened');
                            _this.isloading = false;
                            console.log(err);
                        });
                    });
                });
            }
        };
        this.notifier = notifierService;
    }
    SurveyCreatorComponent.prototype.ngOnInit = function () {
        // this.surveyservice.getSurveys().subscribe(json => {
        //   console.log(json);
        //   this.json = json.json;
        // });
        this.json = this.surveyservice.getSurveys();
        survey_knockout__WEBPACK_IMPORTED_MODULE_2__["JsonObject"].metaData.addProperty("questionbase", "popupdescription:text");
        survey_knockout__WEBPACK_IMPORTED_MODULE_2__["JsonObject"].metaData.addProperty("page", "popupdescription:text");
        var options = { showEmbededSurveyTab: true, generateValidJSON: true };
        this.surveyCreator = new survey_creator__WEBPACK_IMPORTED_MODULE_3__["SurveyCreator"]("surveyCreatorContainer", options);
        this.surveyCreator.text = JSON.stringify(this.json);
        this.surveyCreator.saveSurveyFunc = this.saveMySurvey;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SurveyCreatorComponent.prototype, "surveySaved", void 0);
    SurveyCreatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "survey-creator",
            template: __webpack_require__(/*! ./create-survey.component.html */ "./src/app/components/admin/create-survey/create-survey.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_survey_service__WEBPACK_IMPORTED_MODULE_5__["SurveyService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], angular_notifier__WEBPACK_IMPORTED_MODULE_7__["NotifierService"]])
    ], SurveyCreatorComponent);
    return SurveyCreatorComponent;
}());

// this.submitSurveys


/***/ }),

/***/ "./src/app/components/admin/editsurvey/editsurvey.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/editsurvey/editsurvey.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"surveyCreatorContainer\"></div>\r\n\r\n<app-loader *ngIf=\"isloading\"></app-loader>\r\n"

/***/ }),

/***/ "./src/app/components/admin/editsurvey/editsurvey.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/editsurvey/editsurvey.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditsurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditsurveyComponent", function() { return EditsurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var survey_knockout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-knockout */ "./node_modules/survey-knockout/survey.ko.js");
/* harmony import */ var survey_knockout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_creator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-creator */ "./node_modules/survey-creator/survey-creator.js");
/* harmony import */ var survey_creator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_creator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! surveyjs-widgets */ "./node_modules/surveyjs-widgets/surveyjs-widgets.js");
/* harmony import */ var surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_survey_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/survey.service */ "./src/app/services/survey.service.ts");
/* harmony import */ var _services_answers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/answers.service */ "./src/app/services/answers.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var inputmask_dist_inputmask_phone_codes_phone_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! inputmask/dist/inputmask/phone-codes/phone.js */ "./node_modules/inputmask/dist/inputmask/phone-codes/phone.js");
/* harmony import */ var inputmask_dist_inputmask_phone_codes_phone_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(inputmask_dist_inputmask_phone_codes_phone_js__WEBPACK_IMPORTED_MODULE_8__);









surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["icheck"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["select2"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["inputmask"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["jquerybarrating"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["jqueryuidatepicker"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["nouislider"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["select2tagbox"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["signaturepad"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["sortablejs"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["ckeditor"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["autocomplete"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["bootstrapslider"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
var CkEditor_ModalEditor = {
    afterRender: function (modalEditor, htmlElement) {
        var editor = window["CKEDITOR"].replace(htmlElement);
        editor.on("change", function () {
            modalEditor.editingValue = editor.getData();
        });
        editor.setData(modalEditor.editingValue);
    },
    destroy: function (modalEditor, htmlElement) {
        var instance = window["CKEDITOR"].instances[htmlElement.id];
        if (instance) {
            instance.removeAllListeners();
            window["CKEDITOR"].remove(instance);
        }
    }
};
survey_creator__WEBPACK_IMPORTED_MODULE_3__["SurveyPropertyModalEditor"].registerCustomWidget("html", CkEditor_ModalEditor);
var EditsurveyComponent = /** @class */ (function () {
    function EditsurveyComponent(surveyservice, answerservice, notifier) {
        var _this = this;
        this.surveyservice = surveyservice;
        this.answerservice = answerservice;
        this.notifier = notifier;
        this.data = { "pages": "" };
        this.page = this.data.pages;
        this.categories = [];
        this.isloading = true;
        this.category = { "name": '', "description": '' };
        this.saveMySurvey = function () {
            _this.isloading = true;
            // console.log(JSON.stringify(this.surveyCreator.text));
            _this.json = JSON.parse(_this.surveyCreator.text);
            _this.surveyservice.saveSurvey(_this.json['pages']);
            // console.log(this.json['title'])
            // console.log(this.json['description'])
            _this.page = JSON.stringify(_this.surveyCreator.text);
            console.log(_this.json);
            _this.saveMyCategory();
        };
        this.saveMyCategory = function () {
            _this.json = JSON.parse(_this.surveyCreator.text);
            // console.log(this.json['title'])
            _this.surveyservice.saveCategory(_this.json['title'], _this.json['description']);
            _this.category = { "name": _this.json['title'], "description": _this.json['description'] };
            // console.log(this.json['title'])
            // this.submitCategories()
            //  this is what i changed... rather than calling another method.. i called the post category method in the service..
            // then got the id from the response
            // and passed it to the category part in the json
            // and then make another service request to save the json with the new category;
            _this.surveyservice.putCategory(_this.category).subscribe(function (res) {
                console.log(res);
                _this.cat_id = res.id;
                console.log(_this.cat_id);
                _this.json['category'] = _this.cat_id;
                console.log(_this.json);
                _this.surveyservice.putQuestionnaire(_this.json).subscribe(function (res) {
                    console.log(res);
                    _this.surveyservice.getCategory()
                        .subscribe(function (res) {
                        _this.categories.push(res),
                            console.log(_this.categories);
                        localStorage.setItem('questions', JSON.stringify(_this.categories[0]));
                        _this.isloading = false;
                        _this.notifier.notify('success', 'Edit was successful');
                    }, function (err) {
                        console.log(err);
                        _this.notifier.notify('error', 'Something terrible happened');
                    });
                });
            });
        };
    }
    // @Output() surveySaved: EventEmitter<Object> = new EventEmitter();
    EditsurveyComponent.prototype.ngOnInit = function () {
        // this.surveyservice.getSurveys().subscribe(json => {
        //   console.log(json);
        //   this.json = json.json;
        // });
        this.json = this.answerservice.getSurvey();
        console.log(this.json);
        survey_knockout__WEBPACK_IMPORTED_MODULE_2__["JsonObject"].metaData.addProperty("questionbase", "popupdescription:text");
        survey_knockout__WEBPACK_IMPORTED_MODULE_2__["JsonObject"].metaData.addProperty("page", "popupdescription:text");
        var options = { showEmbededSurveyTab: true, generateValidJSON: true };
        this.surveyCreator = new survey_creator__WEBPACK_IMPORTED_MODULE_3__["SurveyCreator"]("surveyCreatorContainer", options);
        this.surveyCreator.text = JSON.stringify(this.json);
        this.surveyCreator.saveSurveyFunc = this.saveMySurvey;
        this.isloading = false;
    };
    EditsurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "survey-creator",
            template: __webpack_require__(/*! ./editsurvey.component.html */ "./src/app/components/admin/editsurvey/editsurvey.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_survey_service__WEBPACK_IMPORTED_MODULE_5__["SurveyService"], _services_answers_service__WEBPACK_IMPORTED_MODULE_6__["AnswersService"], angular_notifier__WEBPACK_IMPORTED_MODULE_7__["NotifierService"]])
    ], EditsurveyComponent);
    return EditsurveyComponent;
}());

// this.submitSurveys


/***/ }),

/***/ "./src/app/components/auth/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n  background-color: #F48637;\r\n}\r\n\r\n.container {\r\n  background-color: #F48637;\r\n  width: 50%;\r\n}\r\n\r\nform {\r\n  margin-top: 50px;\r\n}\r\n\r\n.form-label-group {\r\n  margin: 30px;\r\n}\r\n\r\n.btn-block {\r\n  width: 90%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.checkbox {\r\n  margin-left: 30px;\r\n}\r\n\r\n.card {\r\n  margin-top: 80px;\r\n  box-shadow: 10px 10px 5px 5px grey;\r\n  border-radius: 10px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNDg2Mzc7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNDg2Mzc7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAge1xyXG4gIG1hcmdpbjogMzBweDtcclxufVxyXG5cclxuLmJ0bi1ibG9jayB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNoZWNrYm94IHtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCA1cHggZ3JleTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/auth/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/auth/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\r\n\r\n<div class=\"well\">\r\n  <div class=\"card col-md-6 offset-md-3\">\r\n    <div class=\"card-body\">\r\n      <form class=\"form-signin\">\r\n        <div class=\"form-label-group\">\r\n          <input type=\"text\" id=\"inputEmail\" class=\"form-control\" placeholder=\"School's Email address\"\r\n            [(ngModel)]=\"loginUserData.email\" name=\"email\" required autofocus>\r\n        </div>\r\n\r\n        <div class=\"form-label-group\">\r\n          <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\"\r\n            [(ngModel)]=\"loginUserData.password\" name=\"password\" required>\r\n        </div>\r\n\r\n        <div class=\"checkbox mb-3\">\r\n          <label>\r\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n          </label>\r\n        </div>\r\n        <button class=\"btn btn-lg btn-primary  btn-block\" (click)=\"loginUser()\" type=\"button\">Sign in</button>\r\n\r\n        <div class=\"text-center mb-3\">\r\n          <!-- <img class=\"mb-4\" src=\"/docs/4.3/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\"> -->\r\n          <h1 class=\"h5 mb-3 font-weight-normal\">Don't have an account?</h1>\r\n          <p class=\"h6 mb-3 font-weight-normal\"><a routerLink=\"/register\">Sign Up.</a></p>\r\n        </div>\r\n        <div class=\"text-center mb-3\">\r\n          <!-- <img class=\"mb-4\" src=\"/docs/4.3/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\"> -->\r\n          <h1 class=\"h5 mb-3 font-weight-normal\">Forgot your password?</h1>\r\n          <p class=\"h6 mb-3 font-weight-normal\"><a routerLink=\"/reset\">Reset Your Password</a></p>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/auth/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_answers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/answers */ "./src/app/models/answers.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(_auth, _router, notifierService, http) {
        this._auth = _auth;
        this._router = _router;
        this.notifierService = notifierService;
        this.http = http;
        this.loginUserData = { email: '', password: '' };
        this.user_url = "https://gptsbackend.eu-gb.mybluemix.net/api/users/";
        this.user = { groups: '' };
        this.isLoading = false;
        this.role = "";
        this.notifier = notifierService;
        this.role = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.role = "";
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.role = "";
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.isLoading = true;
        // console.log(this.loginUserData);
        this.role = "";
        this._auth.loginUser(this.loginUserData)
            .subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
            _this.user_id = res.id;
            console.log(res.id);
            _this._auth.saveUserId(_this.user_id);
            localStorage.setItem('userId', res.id);
            _this._auth.getRole(_this.user_id).subscribe(function (user) {
                _this.notifier.notify('success', 'Login Successful');
                // console.log(user.groups[0].name)
                _this.role = "";
                console.log(user);
                _this.role = user['groups'][0].name;
                console.log("this is the role returned" + _this.role);
                if (user['groups'][0].name == "Scripter") {
                    console.log("redirect to scripter");
                    // console.log(this.role);
                    _this._router.navigate(['surveys']);
                }
                else if (user['groups'][0].name == "Respondent") {
                    _this._router.navigate(['surveysummary']);
                }
                else if (user['groups'][0].name == "Administrator") {
                    _this._router.navigate(['admin']);
                }
                else {
                    _this._router.navigate(['']);
                }
            });
        }, function (err) {
            console.log(err);
            _this.notifier.notify('error', 'Check your credentials again');
            _this.isLoading = false;
        });
    };
    LoginComponent.prototype.resetRole = function () {
        this.role = "Respondent";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_answers__WEBPACK_IMPORTED_MODULE_6__["Answers"])
    ], LoginComponent.prototype, "answers", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n  background-color: #F48637;\r\n}\r\n\r\n.container {\r\n  background-color: #F48637;\r\n  width: 50%;\r\n}\r\n\r\nform {\r\n  margin-top: 50px;\r\n}\r\n\r\n.form-label-group {\r\n  margin: 30px;\r\n}\r\n\r\n.btn-block {\r\n  width: 90%;\r\n  margin: 10px auto;\r\n}\r\n\r\n.checkbox {\r\n  margin-left: 30px;\r\n}\r\n\r\n.card {\r\n  margin-top: 80px;\r\n  box-shadow: 10px 10px 5px 5px grey;\r\n  border-radius: 10px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0ODYzNztcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0ODYzNztcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCB7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG59XHJcblxyXG4uYnRuLWJsb2NrIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcblxyXG4uY2hlY2tib3gge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDVweCBncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/auth/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\r\n\r\n<div class=\"card col-md-6 offset-md-3\">\r\n  <div class=\"card-body\">\r\n    <form class=\"form-signin\">\r\n\r\n      <div class=\"form-label-group\">\r\n        <input required type=\"text\" [(ngModel)]=\"registerUserData.username\" placeholder=\"School Name\" name=\"username\"\r\n          class=\"form-control rounded-0\" required>\r\n      </div>\r\n      <div class=\"form-label-group\">\r\n        <input required type=\"email\" [(ngModel)]=\"registerUserData.email\" placeholder=\"School's Email address\"\r\n          name=\"email\" class=\"form-control rounded-0\" required>\r\n      </div>\r\n      <div class=\"form-label-group\">\r\n        <input required type=\"password\" [(ngModel)]=\"registerUserData.password\" placeholder=\"Password\" name=\"password\"\r\n          class=\"form-control rounded-0\" required>\r\n      </div>\r\n      <button type=\"button\" (click)=\"registerUser()\" class=\"btn btn-lg btn-primary btn-block\">Register</button>\r\n      <div class=\"text-center mb-3\">\r\n        <img class=\"mb-4\" src=\"/docs/4.3/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\r\n        <h1 class=\"h5 mb-3 font-weight-normal\">Already have an account?</h1>\r\n        <p class=\"h6 mb-3 font-weight-normal\"><a routerLink=\"/login\">Sign In.</a></p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/auth/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_auth, _router, notifierService) {
        this._auth = _auth;
        this._router = _router;
        this.notifierService = notifierService;
        this.registerUserData = { username: '', email: '', password: '' };
        this.isLoading = false;
        this.notifier = notifierService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this.isLoading = true;
        // console.log(this.registerUserData);
        if (!this.validateEmail(this.registerUserData.email)) {
            this.isLoading = false;
            this.notifier.notify('error', 'Enter a valid email');
        }
        else if (!this.checklength(this.registerUserData.password)) {
            this.isLoading = false;
            this.notifier.notify('error', 'Password must be at least 6 characters');
        }
        else {
            this._auth.registerUser(this.registerUserData)
                .subscribe(function (res) {
                console.log(res);
                _this.notifier.notify('success', 'Registration Successful');
                _this._router.navigate(['profile']);
            }, function (err) {
                console.log(err);
                _this.isLoading = false;
                _this.notifier.notify('error', 'Looks like that email is already used');
            });
        }
    };
    RegisterComponent.prototype.checklength = function (pass) {
        console.log(pass);
        if (pass.length < 6) {
            return false;
        }
        else {
            return true;
        }
    };
    RegisterComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/auth/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/category-index/category-index.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/category-index/category-index.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  margin-top: 65px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yeS1pbmRleC9jYXRlZ29yeS1pbmRleC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yeS1pbmRleC9jYXRlZ29yeS1pbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDY1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/category-index/category-index.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/category-index/category-index.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isloading\"></app-loader>\n\n<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"row up\">\n        <div class=\"col-md-6 offset-md-3\">\n          <button class=\"btn btn-primary\" (click)=\"add()\">Add a new Category</button>\n        </div>\n\n      </div>\n      <div class=\"row\">\n        <table class=\"table\" *ngIf=\"!isloading\">\n          <thead>\n            <tr>\n              <th>Category #</th>\n              <th>Category name</th>\n              <th>Category Description</th>\n              <td>Actions</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let question of questions\">\n              <td>\n                {{question.id}}\n              </td>\n              <td>\n                {{question.name}}\n              </td>\n              <td>\n                {{question.description}}\n              </td>\n              <td>\n                <a id=\"edit\" class=\"btn btn-primary\" (click)=\"editCategory(question.id)\">Edit</a>\n                <a id=\"delete\" class=\"btn btn-danger\" (click)=\"delete(question.id)\">Delete</a>\n\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/category-index/category-index.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/category-index/category-index.component.ts ***!
  \***********************************************************************/
/*! exports provided: CategoryIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryIndexComponent", function() { return CategoryIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_survey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/survey.service */ "./src/app/services/survey.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");





var CategoryIndexComponent = /** @class */ (function () {
    function CategoryIndexComponent(_router, surveyservice, notifier) {
        this._router = _router;
        this.surveyservice = surveyservice;
        this.notifier = notifier;
        this.categories = [];
        this.isloading = true;
    }
    CategoryIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.surveyservice.getCategory()
            .subscribe(function (res) {
            _this.categories.push(res),
                console.log(_this.categories);
            localStorage.setItem('questions', JSON.stringify(_this.categories[0]));
            _this.questions = JSON.parse(localStorage.getItem('questions'));
            _this.isloading = !_this.isloading;
        }, function (err) { return console.log(err); });
        // console.log(this.questions)
    };
    CategoryIndexComponent.prototype.editCategory = function (id) {
        var _this = this;
        this.loadspinner();
        this.isloading = true;
        this.surveyservice.getCategory()
            .subscribe(function (res) {
            _this.categories.push(res),
                console.log(_this.categories);
            localStorage.setItem('question', JSON.stringify(_this.categories[0]));
            localStorage.setItem('categoryedit', id);
            // console.log("clicked")
            _this._router.navigate(['editsurvey']);
            // this.isloading = false;
        }, function (err) { return console.log(err); });
    };
    CategoryIndexComponent.prototype.loadspinner = function () {
        this.isloading = true;
    };
    CategoryIndexComponent.prototype.add = function () {
        console.log('add');
        this._router.navigate(['createsurvey']);
    };
    CategoryIndexComponent.prototype.delete = function (id) {
        var _this = this;
        this.isloading = true;
        this.surveyservice.deleteCategory(id).subscribe(function (res) {
            console.log(res);
            _this.surveyservice.getCategory()
                .subscribe(function (res) {
                _this.categories.push(res),
                    console.log(_this.categories);
                localStorage.setItem('question', JSON.stringify(_this.categories[0]));
                _this.isloading = false;
                _this._router.navigate(['surveys']);
                _this.notifier.notify('error', 'Delete was Successful');
                location.reload();
            }, function (err) { return console.log(err); });
        });
    };
    CategoryIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-index',
            template: __webpack_require__(/*! ./category-index.component.html */ "./src/app/components/category-index/category-index.component.html"),
            styles: [__webpack_require__(/*! ./category-index.component.css */ "./src/app/components/category-index/category-index.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_survey_service__WEBPACK_IMPORTED_MODULE_3__["SurveyService"], angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]])
    ], CategoryIndexComponent);
    return CategoryIndexComponent;
}());



/***/ }),

/***/ "./src/app/components/confirm/confirm.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/confirm/confirm.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n  background-color: #F48637;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25maXJtL2NvbmZpcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb25maXJtL2NvbmZpcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNDg2Mzc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/confirm/confirm.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/confirm/confirm.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"well\">\n    <p>Please Enter the code you received via email below</p>\n    <form>\n      <div class=\"form-group\">\n        <label for=\"code\">Code</label>\n        <textarea class=\"form-control\" name=\"key\" [(ngModel)]=\"key\" rows=\"5\" id=\"code\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password1\" [(ngModel)]=\"password1\" id=\"exampleInputPassword1\"\n          placeholder=\"Password\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword2\">Confirm Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" name=\"password2\" [(ngModel)]=\"password2\"\n          placeholder=\"Confirm Password\">\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-block\" (click)=\"reset()\">Reset Password</button>\n      </div>\n    </form>\n  </div>\n</div>\n<app-loader *ngIf=\"isloading\"></app-loader>\n"

/***/ }),

/***/ "./src/app/components/confirm/confirm.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/confirm/confirm.component.ts ***!
  \*********************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(http, _router, notifier) {
        this.http = http;
        this._router = _router;
        this.notifier = notifier;
        this.url = "https://gptsbackend.eu-gb.mybluemix.net/api/password_reset/confirm/";
        this.isloading = false;
        this.data = { password: '', token: '' };
    }
    ConfirmComponent.prototype.ngOnInit = function () {
    };
    ConfirmComponent.prototype.reset = function () {
        var _this = this;
        this.isloading = true;
        if (this.password1 === this.password2) {
            this.data.password = this.password2;
            this.data.token = this.key;
            this.http.post(this.url, this.data).subscribe(function (res) {
                console.log(res);
                _this.isloading = false;
                if (res['status'] == "OK") {
                    _this.notifier.notify('success', "Password Set Successfully");
                    _this._router.navigate(['login']);
                }
                else {
                    _this.notifier.notify('error', "The token might have expired");
                }
            }, function (err) {
                console.log(err);
                if (err.error.status == "notfound") {
                    _this.notifier.notify('error', "The token might have expired or has been used please request for another password reset token");
                }
                _this.isloading = false;
            });
        }
        else {
            this.isloading = false;
            this.notifier.notify('error', 'passwords not matching');
        }
    };
    ConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__(/*! ./confirm.component.html */ "./src/app/components/confirm/confirm.component.html"),
            styles: [__webpack_require__(/*! ./confirm.component.css */ "./src/app/components/confirm/confirm.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"]])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n  background-color: #FFB900;\r\n  position: absolute;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  text-align: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  bottom: 0;\r\n  width: 100%;\r\n  /* Set the fixed height of the footer here */\r\n  height: 50px;\r\n  line-height: 50px;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #FFB900;\r\n  color: white;\r\n  text-align: center;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  margin-top: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsNENBQTRDO0VBQzVDLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQjkwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIFNldCB0aGUgZml4ZWQgaGVpZ2h0IG9mIHRoZSBmb290ZXIgaGVyZSAqL1xyXG4gIGhlaWdodDogNTBweDtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkI5MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n  <div class=\"content has-text-centered\">\r\n    <p>&copy; All rights reserved for <i>GPTS</i> 2019</p>\r\n  </div>\r\n  </div>\r\n  </footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sticky-top {\r\n  background: #fff;\r\n  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, .08);\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 55;\r\n  height: 70px;\r\n  width: 100%;\r\n}\r\n\r\n.navbar-brand {\r\n  margin-top: -15px;\r\n}\r\n\r\n.collapse {\r\n  margin-right: 0;\r\n}\r\n\r\n.content {\r\n  height: 200vh;\r\n}\r\n\r\n.collapse {\r\n  padding-right: 0px;\r\n}\r\n\r\n.mr-auto {\r\n  margin-right: auto !important;\r\n  /* float: right; */\r\n}\r\n\r\n@media screen and (min-width: 960px) {\r\n  .mr-auto {\r\n    margin-right: auto !important;\r\n    float: left;\r\n  }\r\n}\r\n\r\n@media (min-width: 100px) and (max-width: 480px) {\r\n\r\n  .l {\r\n    width: 260px;\r\n    height: 30px;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsNkJBQTZCO0lBQzdCLFdBQVc7RUFDYjtBQUNGOztBQUVBOztFQUVFO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0aWNreS10b3Age1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMTJweCAwIHJnYmEoMCwgMCwgMCwgLjA4KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogNTU7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuLmNvbGxhcHNlIHtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBoZWlnaHQ6IDIwMHZoO1xyXG59XHJcblxyXG4uY29sbGFwc2Uge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLm1yLWF1dG8ge1xyXG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIC8qIGZsb2F0OiByaWdodDsgKi9cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAubXItYXV0byB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgLmwge1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light navbar-custom \">\r\n  <!-- <div class=\"container-fluid\"> -->\r\n\r\n  <a class=\"navbar-brand mb-2\" routerLink=\"/\"><img class=\"l\" src=\"/assets/gpts_logo_long1.png\" alt=\"\" srcset=\"\"\r\n      width=\"360\" height=\"50\"></a>\r\n\r\n  <button class=\"navbar-toggler  collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse w-100 order-3\" id=\"navbarSupportedContent\">\r\n    <ul class=\" nav navbar-nav \" style=\"float: right; margin-right: 55px;\">\r\n\r\n      <!-- to be displayed when user is not logged in-->\r\n\r\n      <!-- to be displayed on login -->\r\n      <!-- <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/\"><b>About Us</b></a>\r\n          </li> -->\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" class=\"btn btn-outline-secondary\" routerLink=\"/\"><b>Home</b></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" class=\"btn btn-outline-secondary\" *ngIf=\"!_authService.loggedIn()\" routerLink=\"/login\"\r\n          routerLinkActive=\"active\"><b>Login</b></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" class=\"btn btn-outline-secondary\" *ngIf=\"!_authService.loggedIn()\" routerLink=\"/register\"\r\n          routerLinkActive=\"active\"><b>Register</b></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/viewsurvey\" class=\"nav-link \" class=\"btn btn-outline-secondary\" *ngIf=\"_authService.loggedIn()\"\r\n          routerLinkActive=\"active\"><b>Categories</b></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" class=\"btn btn-outline-secondary\" *ngIf=\"_authService.loggedIn()\" routerLink=\"/profile\"\r\n          routerLinkActive=\"active\"><b>Profile</b></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" class=\"btn btn-outline-secondary\" style=\"cursor:pointer\" *ngIf=\"_authService.loggedIn()\"\r\n          (click)=\"_authService.logoutUser()\"><b>Logout</b></a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <!-- </div> -->\r\n</nav>\r\n<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Link</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\r\n      </li>\r\n    </ul>\r\n    <form class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>\r\n  </div>\r\n</nav> -->\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_authService) {
        this._authService = _authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home/home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/home/home/home.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".foot {\r\n  width: 100%;\r\n  position: bottom;\r\n  left: 0;\r\n  bottom: 0;\r\n  background-color: rgb(27, 27, 27);\r\n  color: white;\r\n  text-align: center;\r\n  padding: 5px;\r\n}\r\n\r\n.carousel-item {\r\n  height: 100vh;\r\n  min-height: 350px;\r\n  width: 100%;\r\n  /* background-size: auto; */\r\n  background: no-repeat center center scroll;\r\n  background-size: cover;\r\n}\r\n\r\n.slide {\r\n  /* height: 200px; */\r\n  /* background: url(\"http://placehold.it/800x800/FF00FF\") no-repeat #21639e; */\r\n  border-radius: 100%/0 0 100px 100px;\r\n  box-shadow: 0px 10px 0px #F48637;\r\n}\r\n\r\n.contact {\r\n  border-top: solid #F48637 1px;\r\n  /* border-top-left-radius:  40%;\r\n  border-top-right-radius: 40%; */\r\n  /* box-shadow: 10px 0px 0px #F48637; */\r\n}\r\n\r\n#sticky-footer {\r\n  border-top: solid #F48637 1px;\r\n}\r\n\r\n.flip-card {\r\n  background-color: transparent;\r\n  width: 250px;\r\n  border-radius: 10px;\r\n  height: 250px;\r\n  -webkit-perspective: 1000px;\r\n          perspective: 1000px;\r\n}\r\n\r\n.lead {\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  padding: 5px;\r\n  border-radius: 30px;\r\n}\r\n\r\n.flip-card-inner {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 10px;\r\n  text-align: center;\r\n  -webkit-transition: -webkit-transform 0.6s;\r\n  transition: -webkit-transform 0.6s;\r\n  transition: transform 0.6s;\r\n  transition: transform 0.6s, -webkit-transform 0.6s;\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.flip-card:hover .flip-card-inner {\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n}\r\n\r\n.flip-card-front,\r\n.flip-card-back {\r\n  border-radius: 10px;\r\n  margin-bottom: 20px;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n}\r\n\r\n.flip-card-front {\r\n  background-color: #bbb;\r\n  color: #222;\r\n}\r\n\r\n.flip-card-back {\r\n  padding: 10px;\r\n  background-color: #F48637;\r\n  text-align: left;\r\n  color: #222;\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n}\r\n\r\n.flip-card-back p i {\r\n  padding: 8px;\r\n\r\n}\r\n\r\n#loginBtn {\r\n  background-color: #F48637;\r\n}\r\n\r\n.img-responsive,\r\n.thumbnail>img,\r\n.thumbnail a>img,\r\n.carousel-inner>.item>img,\r\n.carousel-inner>.item>a>img {\r\n  display: block;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.flippy .space img {\r\n  width: 250px;\r\n  height: 250px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.flippy .space {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  margin-bottom: 20px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.flippy .space .flip-card {\r\n  margin: 0 auto;\r\n}\r\n\r\n.flippy .space .flip-card p {\r\n  font-family: Montserrat;\r\n}\r\n\r\n.flippy .space p {\r\n  font-size: 18px;\r\n  text-align: center;\r\n}\r\n\r\n.flippy .space h4 {\r\n  color: #ffffff;\r\n  font-weight: 600;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  padding-bottom: 4px;\r\n}\r\n\r\n.flippy .space .flip-card i {\r\n  color: #ffffff;\r\n  font-size: 15px;\r\n  line-height: 15px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .flippy .space {\r\n    margin-bottom: 125px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .carousel-containers {\r\n    padding: 1.5em 0;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n  .container {\r\n    max-width: 930px;\r\n  }\r\n}\r\n\r\n@media (min-width: 320px) and (max-width: 480px) {\r\n\r\n  .carousel .carousel-inner .carousel-item {\r\n    max-height: 350px;\r\n  }\r\n\r\n}\r\n\r\n.collapsed {\r\n  margin-top: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsU0FBUztFQUNULGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsV0FBVztFQUNYLDJCQUEyQjtFQUMzQiwwQ0FBMEM7RUFJMUMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDZFQUE2RTtFQUM3RSxtQ0FBbUM7RUFDbkMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCO2lDQUMrQjtFQUMvQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMkJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwwQ0FBMEI7RUFBMUIsa0NBQTBCO0VBQTFCLDBCQUEwQjtFQUExQixrREFBMEI7RUFDMUIsb0NBQTRCO1VBQTVCLDRCQUE0QjtFQUM1QiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxrQ0FBMEI7VUFBMUIsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUNBQTJCO1VBQTNCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0NBQTBCO1VBQTFCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7Ozs7O0VBS0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTs7RUFFRTtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFRjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYm90dG9tO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNywgMjcsIDI3KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWluLWhlaWdodDogMzUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogYmFja2dyb3VuZC1zaXplOiBhdXRvOyAqL1xyXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIHNjcm9sbDtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnNsaWRlIHtcclxuICAvKiBoZWlnaHQ6IDIwMHB4OyAqL1xyXG4gIC8qIGJhY2tncm91bmQ6IHVybChcImh0dHA6Ly9wbGFjZWhvbGQuaXQvODAweDgwMC9GRjAwRkZcIikgbm8tcmVwZWF0ICMyMTYzOWU7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJS8wIDAgMTAwcHggMTAwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMHB4ICNGNDg2Mzc7XHJcbn1cclxuXHJcbi5jb250YWN0IHtcclxuICBib3JkZXItdG9wOiBzb2xpZCAjRjQ4NjM3IDFweDtcclxuICAvKiBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAgNDAlO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0MCU7ICovXHJcbiAgLyogYm94LXNoYWRvdzogMTBweCAwcHggMHB4ICNGNDg2Mzc7ICovXHJcbn1cclxuXHJcbiNzdGlja3ktZm9vdGVyIHtcclxuICBib3JkZXItdG9wOiBzb2xpZCAjRjQ4NjM3IDFweDtcclxufVxyXG5cclxuLmZsaXAtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG59XHJcblxyXG4ubGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG4uZmxpcC1jYXJkLWlubmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmQtaW5uZXIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG4uZmxpcC1jYXJkLWZyb250LFxyXG4uZmxpcC1jYXJkLWJhY2sge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmZsaXAtY2FyZC1mcm9udCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcclxuICBjb2xvcjogIzIyMjtcclxufVxyXG5cclxuLmZsaXAtY2FyZC1iYWNrIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNDg2Mzc7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogIzIyMjtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG5cclxuLmZsaXAtY2FyZC1iYWNrIHAgaSB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG5cclxufVxyXG5cclxuI2xvZ2luQnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjQ4NjM3O1xyXG59XHJcblxyXG4uaW1nLXJlc3BvbnNpdmUsXHJcbi50aHVtYm5haWw+aW1nLFxyXG4udGh1bWJuYWlsIGE+aW1nLFxyXG4uY2Fyb3VzZWwtaW5uZXI+Lml0ZW0+aW1nLFxyXG4uY2Fyb3VzZWwtaW5uZXI+Lml0ZW0+YT5pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmZsaXBweSAuc3BhY2UgaW1nIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmZsaXBweSAuc3BhY2Uge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZmxpcHB5IC5zcGFjZSAuZmxpcC1jYXJkIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmZsaXBweSAuc3BhY2UgLmZsaXAtY2FyZCBwIHtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxufVxyXG5cclxuLmZsaXBweSAuc3BhY2UgcCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZsaXBweSAuc3BhY2UgaDQge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG5cclxuLmZsaXBweSAuc3BhY2UgLmZsaXAtY2FyZCBpIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZsaXBweSAuc3BhY2Uge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTI1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNhcm91c2VsLWNvbnRhaW5lcnMge1xyXG4gICAgcGFkZGluZzogMS41ZW0gMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDkzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNTBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG4uY29sbGFwc2VkIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/home/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"overflow: hidden;\">\r\n  <div class=\"row\" style=\"height: 30px; background-color: transparent;\">\r\n  </div>\r\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide mb-0 mt-4\" data-ride=\"carousel\">\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n      <!-- Slide One - Set the background image for this slide in the line below -->\r\n      <div class=\"carousel-item active\" style=\"background: url('/assets/preview.png') ;background-size: cover; \">\r\n        <div class=\"carousel-caption d-none d-md-block\">\r\n          <h2 class=\"display-4\"></h2>\r\n          <!-- <p class=\"lead\"></p> -->\r\n        </div>\r\n      </div>\r\n      <!-- Slide Two - Set the background image for this slide in the line below -->\r\n      <div class=\"carousel-item\" style=\"background: url('/assets/carousel2.jpg');background-size: cover; \">\r\n        <div class=\"carousel-caption d-none d-md-block\">\r\n          <h2 class=\"display-4\" style=\"color:#F48637\"></h2>\r\n          <p class=\"lead\">Some of Last year's Winners during the'Great Places to School' gala Dinner at Safari Park\r\n            Hotel, Nairobi.</p>\r\n        </div>\r\n      </div>\r\n      <!-- Slide Three - Set the background image for this slide in the line below -->\r\n      <div class=\"carousel-item\" style=\"background-image: url('/assets/standard group.jpg')\">\r\n        <div class=\"carousel-caption d-none d-md-block\">\r\n          <h2 class=\"display-4\"></h2>\r\n          <p class=\"lead\">Standard Group CEO Orlando Lyomu (Right) with representatives of Makini Schools, who won in\r\n            two categories during the 'Great Places to School' gala Dinner at Safari Park Hotel, Nairobi. </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n\r\n\r\n  <div class=\"row mt-4 d-flex justify-content-center\">\r\n    <div class=\"col-md-10\" style=\"font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n          font-size: 32px;\r\n          margin-top: 80px;\r\n          text-align: center;\r\n          color: #F48637;\r\n          background-color: transparent\">\r\n      <b>Why Great Places to School?</b>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-center\">\r\n      <div class=\"col-md-10\" style=\"\r\n            font-size: 16px;\r\n            text-align: center;\r\n            color: #333;\r\n            background-color: transparent\">\r\n        <p>“Students spend most of their formative years in schools, and it is critical that schools offer a vital\r\n          opportunity to ensure that they get the support required to reach their full potential.</p>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"row mt-4 d-flex justify-content-center\">\r\n    <div class=\"col-md-10\" style=\"\r\n        margin-top: 40px;\r\n        font-size: 32px;\r\n        text-align: center;\r\n        color: #F48637;\r\n        background-color: transparent\">\r\n      <b>What We Do </b>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-center\">\r\n      <div class=\"col-md-10\" style=\"\r\n          font-size: 16px;\r\n          text-align: center;\r\n          color: #333;\r\n          background-color: transparent\">\r\n\r\n        <p>We are an impact-driven initiative with the aim of identifying, rating and recognizing schools whose innovative learning\r\n          environment and overall school culture contribute to the wholesome development of students.</p>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row mt-4 d-flex justify-content-center\">\r\n    <div class=\"col-md-6\" style=\"\r\n        margin-top: 60px;\r\n        font-size: 32px;\r\n          text-align: center;\r\n          color: #F48637;\r\n          background-color: transparent\">\r\n      <b>Why You Should Participate</b>\r\n    </div>\r\n  </div>\r\n  <div class=\"bs-example\" style=\"font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n  font-size: 20px;\">\r\n    <div class=\"accordion bg-white\" id=\"accordionExample\">\r\n      <div class=\"card \">\r\n        <div class=\"card-header\" id=\"headingOne\">\r\n          <h2 class=\"mb-0\">\r\n            <button type=\"button\" class=\"btn btn-link\" style=\"\r\n                      font-size: 20px; color:#F48637;\" data-toggle=\"collapse\" data-target=\"#collapseOne\"><i\r\n                class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Know Your\r\n              School Better</button>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseOne\" class=\"collapse\" style=\"\r\n        font-size: 16px;\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <p>Know what is working best for your School</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingTwo\">\r\n          <h2 class=\"mb-0\">\r\n            <button type=\"button\" class=\"btn btn-link\" style=\"\r\n                      font-size: 20px; color:#F48637;\" data-toggle=\"collapse\" data-target=\"#collapseTwo\"><i\r\n                class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Assess and\r\n              Benchmark Your School</button>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseTwo\" class=\"collapse\" style=\"\r\n        font-size: 16px;\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <p>Assess and benchmark your school culture and be able to identify the gaps and how to best transform your school.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingThree\">\r\n          <h2 class=\"mb-0\">\r\n            <button type=\"button\" class=\"btn btn-link\" style=\"\r\n                      font-size: 20px; color:#F48637;\" data-toggle=\"collapse\" data-target=\"#collapseThree\"><i\r\n                class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Earn\r\n              National Recognition</button>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseThree\" class=\"collapse\" style=\"\r\n        font-size: 16px;\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <p>Earn national recognition by being ranked among the Great Places to School\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingFour\">\r\n          <h2 class=\"mb-0\">\r\n            <button type=\"button\" class=\"btn btn-link\" style=\"\r\n                      font-size: 20px; color:#F48637;\" data-toggle=\"collapse\" data-target=\"#collapseFour\"><i\r\n                class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>Grow Your\r\n              Brand</button>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseFour\" class=\"collapse\" style=\"\r\n        font-size: 16px;\" aria-labelledby=\"headingFour\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <p>Our recognition will build your brand and make your school be recognized as a Great Place to School\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row mt-4 d-flex justify-content-center\">\r\n    <div class=\"col-md-6\" style=\"\r\n          font-size: 32px;\r\n          text-align: center;\r\n          color: #F48637;\r\n          background-color: transparent\">\r\n      <b>Great Places to School Categories</b>\r\n    </div>\r\n  </div>\r\n  <!---Flipcards Starts Here-->\r\n  <div class=\"container flippy\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 col-sm-6 space\">\r\n        <p><b>STEM (Science, Technology, Engineering & Mathematics)</b></p>\r\n        <div class=\"flip-card\">\r\n          <div class=\"flip-card-inner\">\r\n            <div class=\"flip-card-front\">\r\n              <img src=\"/assets/stem.jpg\" alt=\"Avatar\">\r\n            </div>\r\n            <div class=\"flip-card-back\">\r\n              <h4>LAST YEAR'S WINNERS IN THIS CATEGORY</h4>\r\n              <p><i class=\"fa fa-trophy fa-3x\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Juja Preparatory and Senior Schools</i></p>\r\n              <p ><i class=\"fa fa-certificate fa-2x\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Sacho High School</i></p>\r\n              <p ><i class=\"fa fa-certificate fa-2x\" aria-hidden=\"true\" style=\"font-size: 20px;\"> M-pesa Foundation Academy</i></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 space\">\r\n        <p><b>Talent Development (Music, Dance, Art, Drama, and Sports)</b></p>\r\n\r\n        <div class=\"flip-card\">\r\n          <div class=\"flip-card-inner\">\r\n            <div class=\"flip-card-front\">\r\n              <img src=\"/assets/sports drama music.jpg\" alt=\"Avatar\">\r\n            </div>\r\n            <div class=\"flip-card-back\">\r\n              <h4>LAST YEAR'S WINNERS IN THIS CATEGORY</h4>\r\n              <p><i class=\"fa fa-trophy\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Makini Schools</i></p>\r\n              <p><i class=\"fa fa-certificate\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Greensteds International School</i></p>\r\n              <p><i class=\"fa fa-certificate\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Laiser Hill Academy, Ongata Rongai</i></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 col-sm-6 space\">\r\n        <p><b>Business/Entrepreneurship projects</b></p>\r\n        <div class=\"flip-card\">\r\n          <div class=\"flip-card-inner\">\r\n            <div class=\"flip-card-front\">\r\n              <img src=\"/assets/entrepreneurship.png\" alt=\"Avatar\">\r\n            </div>\r\n            <div class=\"flip-card-back\">\r\n              <h4>LAST YEAR'S WINNERS IN THIS CATEGORY</h4>\r\n              <p><i class=\"fa fa-trophy\" aria-hidden=\"true\" style=\"font-size: 20px;\"> M-pesa Foundation</i></p>\r\n              <p><i class=\"fa fa-certificate\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Kibera Girls’ Soccer School</i></p>\r\n              <p><i class=\"fa fa-certificate\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Rusinga Schools</i></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 col-sm-6 space\">\r\n        <p><b>Governance</b></p>\r\n        <div class=\"flip-card\">\r\n          <div class=\"flip-card-inner\">\r\n            <div class=\"flip-card-front\">\r\n              <img src=\"/assets/ipsiring-governance-1.jpg\" alt=\"Avatar\">\r\n            </div>\r\n            <div class=\"flip-card-back\">\r\n              <h4>LAST YEAR'S WINNERS IN THIS CATEGORY</h4>\r\n              <p><i class=\"fa fa-trophy\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Laiser Hill Academy, Ongata Rongai</i></p>\r\n              <p><i class=\"fa fa-certificate\" aria-hidden=\"true\" style=\"font-size: 20px;\"> The Excellence School</i></p>\r\n              <p><i class=\"fa fa-certificate\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Rusinga School</i></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 space\">\r\n        <p><b>Career development</b></p>\r\n        <div class=\"flip-card\">\r\n          <div class=\"flip-card-inner\">\r\n            <div class=\"flip-card-front\">\r\n              <img src=\"/assets/career-path-development.jpg\" alt=\"Avatar\">\r\n            </div>\r\n            <div class=\"flip-card-back\">\r\n              <h4>LAST YEAR'S WINNERS IN THIS CATEGORY</h4>\r\n              <p><i class=\"fa fa-trophy\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Crawford International School</i></p>\r\n              <p><i class=\"fa fa-certificate\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Oshwal Academy, Mombasa</i></p>\r\n              <p><i class=\"fa fa-certificate\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Rusinga Schools</i></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 space\">\r\n        <p><b>Character & creativity</b></p>\r\n        <div class=\"flip-card\">\r\n          <div class=\"flip-card-inner\">\r\n            <div class=\"flip-card-front\">\r\n              <img src=\"/assets/character.jpg\" alt=\"Avatar\">\r\n            </div>\r\n            <div class=\"flip-card-back\">\r\n              <h4>LAST YEAR'S WINNERS IN THIS CATEGORY</h4>\r\n              <p><i class=\"fa fa-trophy\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Makini School</i></p>\r\n              <p><i class=\"fa fa-certificate\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Clay International</i></p>\r\n              <p><i class=\"fa fa-certificate\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Greensteds International School</i></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 space\">\r\n        <p><b>Academics</b></p>\r\n        <div class=\"flip-card\">\r\n          <div class=\"flip-card-inner\">\r\n            <div class=\"flip-card-front\">\r\n              <img src=\"/assets/academics.jpg\" alt=\"Avatar\">\r\n            </div>\r\n            <div class=\"flip-card-back\">\r\n              <h4>LAST YEAR'S WINNERS IN THIS CATEGORY</h4>\r\n              <p><i class=\"fa fa-trophy\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Crawford International School</i></p>\r\n              <p><i class=\"fa fa-certificate\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Lukenya Academy IGCSE (British Curriculum)</i></p>\r\n              <p><i class=\"fa fa-certificate\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Rusinga Schools</i></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 space\">\r\n        <p><b>Safety & security</b></p>\r\n        <div class=\"flip-card\">\r\n          <div class=\"flip-card-inner\">\r\n            <div class=\"flip-card-front\">\r\n              <img src=\"/assets/safety.jpg\" alt=\"Avatar\">\r\n            </div>\r\n            <div class=\"flip-card-back\">\r\n              <h4>LAST YEAR'S WINNERS IN THIS CATEGORY</h4>\r\n              <p><i class=\"fa fa-trophy\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Greensteds International School</i></p>\r\n              <p><i class=\"fa fa-certificate\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Juja Preparatory and Senior Schools</i></p>\r\n              <p><i class=\"fa fa-certificate\" aria-hidden=\"true\" style=\"font-size: 20px;\"> Graceland Girls’ Senior School</i></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--Flip cards end here -->\r\n\r\n\r\n\r\n  <div class=\"row\" style=\"height: 50px; background-color: transparent;\">\r\n  </div>\r\n  <div class=\"row mt-auto mb-5 d-flex justify-content-around\">\r\n    <div class=\"col-lg-8 mx-auto text-center\" style=\"font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n          font-size: 32px;\r\n          text-align: center;\r\n          color: #F48637;\r\n          background-color: transparent\">\r\n\r\n      <b>Great Places to School in the Media</b>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 resp-container\">\r\n      <iframe class=\"resp-iframe\" width=\"460\" height=\"215\" src=\"https://www.youtube.com/embed/fYETQ3OLELQ\"\r\n        frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\r\n        allowfullscreen></iframe>\r\n    </div>\r\n    <div class=\"col-md-6 resp-container\">\r\n      <iframe width=\"460\" height=\"215\" src=\"https://www.youtube.com/embed/6aR5vUAc7Bw\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"height: 50px; background-color: transparent;\">\r\n  </div>\r\n  <div class=\"row mt-auto mb-5 d-flex justify-content-around\">\r\n    <div class=\"col-lg-8 mx-auto text-center\" style=\"\r\n      font-size: 32px;\r\n      text-align: center;\r\n      color: #F48637;\r\n      background-color: transparent\">\r\n      <b>Partners</b>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 resp-container\">\r\n      <img src=\"/assets/partners.png\" class=\"img-responsive\" width=\"100%\" alt=\"\" srcset=\"\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"height: 50px; background-color: transparent;\">\r\n  </div>\r\n  <div class=\"row mt-auto mb-5 d-flex justify-content-around contact\">\r\n    <div class=\"col-lg-8 mx-auto text-center\" style=\"font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n      font-size: 28px;\r\n      text-align: center;\r\n      color: #F48637;\r\n      background-color: transparent\">\r\n      <br>\r\n      <p>Get In Touch and we can have a chat about how GTPS will benefit your school</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center align-self-center\">\r\n    <b>Contact ANNIE</b>\r\n  </div>\r\n  <div class=\"row justify-content-center align-self-center\">\r\n    <p><i class=\"fa fa-phone\" aria-hidden=\"true\"></i>+254-703-144103</p>\r\n  </div>\r\n  <div class=\"row justify-content-center align-self-center\">\r\n    <p><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>greatplacestoschool@standardmedia.co.ke</p>\r\n  </div>\r\n\r\n  <!-- <div class=\"col-md-5\">\r\n      <p><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>greatplacestoschool@standardmedia.co.ke</p>\r\n    </div> -->\r\n  <!-- </div> -->\r\n  <footer id=\"sticky-footer\" class=\"py-4 bg-white text-dark-50 \">\r\n    <div class=\"container text-center\">\r\n      <small style=\"color:#F48637;\">Copyright &copy; GPTS</small>\r\n    </div>\r\n  </footer>\r\n"

/***/ }),

/***/ "./src/app/components/home/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/home/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modal/modal.component */ "./src/app/components/modal/modal.component.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog) {
        this.dialog = dialog;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.openDialog();
        }, 2000);
    };
    HomeComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], {
        // data: { name: this.name, animal: this.animal }
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/modal/modal.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n  background: #F48637;\r\n  color: aliceblue;\r\n}\r\n\r\n/* #left {\r\n  float: left;\r\n} */\r\n\r\np {\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n.l {\r\n  margin: 20px;\r\n}\r\n\r\n.dialog {\r\n  position: relative;\r\n  max-width: 300px;\r\n  position: relative;\r\n  /* margin: 20px auto; */\r\n  overflow: -moz-hidden-unscrollable;\r\n\r\n  /* background-color: black; */\r\n  max-height: 300px;\r\n  min-width: 200px;\r\n}\r\n\r\n.dis {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  background: #F48637;\r\n  -webkit-transform: translate(58%, -58%);\r\n          transform: translate(58%, -58%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0NBQWtDOztFQUVsQyw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLG1CQUFtQjtFQUNuQix1Q0FBK0I7VUFBL0IsK0JBQStCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgYmFja2dyb3VuZDogI0Y0ODYzNztcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4vKiAjbGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn0gKi9cclxuXHJcbnAge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmwge1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuXHJcblxyXG4uZGlhbG9nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyogbWFyZ2luOiAyMHB4IGF1dG87ICovXHJcbiAgb3ZlcmZsb3c6IC1tb3otaGlkZGVuLXVuc2Nyb2xsYWJsZTtcclxuXHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuXHJcblxyXG4uZGlzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6ICNGNDg2Mzc7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTglLCAtNTglKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h2 mat-dialog-title>Register</h2> -->\r\n<div class=\"dialog\">\r\n  <button mat-mini-fab (click)=\"close()\" class=\"dis\">\r\n    <mat-icon>close</mat-icon>\r\n  </button>\r\n  <mat-dialog-content>\r\n\r\n    <p><b>Is your school a great place to school? Would you like to nominate your school?</b></p><br>\r\n    <p>Do so by registering now or signing in if you already have an account in order to participate in the Great Places\r\n      to School\r\n      Initiative</p>\r\n\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm l\">\r\n        <button mat-raised-button class=\"btn \" (click)=\"register()\">Register</button>\r\n      </div>\r\n      <div class=\"col-sm l\">\r\n        <button mat-raised-button id=\"left\" (click)=\"login()\" class=\"btn btn-left \">Sign\r\n          In</button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </mat-dialog-actions>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");




var ModalComponent = /** @class */ (function () {
    function ModalComponent(router, dialog) {
        this.router = router;
        this.dialog = dialog;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.register = function () {
        this.dialog.closeAll();
        this.router.navigate(['register']);
    };
    ModalComponent.prototype.login = function () {
        this.dialog.closeAll();
        this.router.navigate(['login']);
    };
    ModalComponent.prototype.close = function () {
        this.dialog.closeAll();
    };
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/components/modal/modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/reset/reset.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/reset/reset.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n  background-color: #F48637;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNldC9yZXNldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc2V0L3Jlc2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjQ4NjM3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/reset/reset.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/reset/reset.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"well\">\n    <p>Enter the email adress you used to register</p>\n    <form>\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Email address</label>\n        <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" id=\"exampleInputEmail1\"\n          aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll send an email with a code to be used to reset the\n          password.</small>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-block\" (click)=\"reset()\">Reset Password</button>\n      </div>\n    </form>\n  </div>\n</div>\n<app-loader *ngIf=\"isloading\"></app-loader>\n"

/***/ }),

/***/ "./src/app/components/reset/reset.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/reset/reset.component.ts ***!
  \*****************************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ResetComponent = /** @class */ (function () {
    function ResetComponent(http, _router, notifier) {
        this.http = http;
        this._router = _router;
        this.notifier = notifier;
        this.data = { email: '' };
        this.isloading = false;
        this.url = "https://gptsbackend.eu-gb.mybluemix.net/api/password_reset/";
    }
    ResetComponent.prototype.ngOnInit = function () {
    };
    ResetComponent.prototype.reset = function () {
        var _this = this;
        this.isloading = true;
        this.data.email = this.email;
        console.log(this.data.email);
        this.http.post(this.url, this.data).subscribe(function (res) {
            console.log(res);
            _this.isloading = false;
            if (res['status'] == "OK") {
                _this.notifier.notify('success', "an email with the password reset code has been sent to your email");
                _this._router.navigate(['confirm']);
            }
        }, function (err) {
            _this.isloading = false;
            console.log(err.error.email[0]);
            _this.notifier.notify('error', err.error.email[0]);
        });
    };
    ResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__(/*! ./reset.component.html */ "./src/app/components/reset/reset.component.html"),
            styles: [__webpack_require__(/*! ./reset.component.css */ "./src/app/components/reset/reset.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./src/app/components/respondent/answer-survey/answer-survey.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/respondent/answer-survey/answer-survey.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid\">\r\n\r\n  <div class=\"moreHeader row\">\r\n    <div class=\"col-xs-6\" >\r\n      <div class=\"btn-group \">\r\n          <button type=\"button\" class=\"btn btn-white\" (click)=\"getQues()\" type=\"button\">\r\n              VIEW ALL QUESTIONS\r\n          </button>\r\n      </div> -->\r\n<!-- <button class=\"btn btn-white\" (click)=\"getRest()\" type=\"button\"><h2></h2></button> -->\r\n<!-- </div>\r\n  </div>\r\n  <hr>\r\n</div> -->\r\n<!-- <div class='survey-container contentcontainer codecontainer'>\r\n  <div id='surveyElement'></div>\r\n</div> -->\r\n<app-loader *ngIf=\"isloading\"></app-loader>\r\n<div class='survey-container contentcontainer codecontainer'>\r\n  <div id='surveyElement'></div><button *ngIf=\"!saved\" (click)='savePDF()'>Save PDF</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/respondent/answer-survey/survey.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/respondent/answer-survey/survey.component.ts ***!
  \*************************************************************************/
/*! exports provided: SurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyComponent", function() { return SurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/survey.service */ "./src/app/services/survey.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_answers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/answers.service */ "./src/app/services/answers.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! survey-angular */ "./node_modules/survey-angular/survey.angular.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(survey_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var surveyjs_widgets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! surveyjs-widgets */ "./node_modules/surveyjs-widgets/surveyjs-widgets.js");
/* harmony import */ var surveyjs_widgets__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(surveyjs_widgets__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var survey_pdf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! survey-pdf */ "./node_modules/survey-pdf/survey.pdf.js");
/* harmony import */ var survey_pdf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(survey_pdf__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var inputmask_dist_inputmask_phone_codes_phone_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! inputmask/dist/inputmask/phone-codes/phone.js */ "./node_modules/inputmask/dist/inputmask/phone-codes/phone.js");
/* harmony import */ var inputmask_dist_inputmask_phone_codes_phone_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(inputmask_dist_inputmask_phone_codes_phone_js__WEBPACK_IMPORTED_MODULE_10__);












surveyjs_widgets__WEBPACK_IMPORTED_MODULE_8__["icheck"](survey_angular__WEBPACK_IMPORTED_MODULE_7__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_8__["select2"](survey_angular__WEBPACK_IMPORTED_MODULE_7__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_8__["inputmask"](survey_angular__WEBPACK_IMPORTED_MODULE_7__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_8__["jquerybarrating"](survey_angular__WEBPACK_IMPORTED_MODULE_7__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_8__["jqueryuidatepicker"](survey_angular__WEBPACK_IMPORTED_MODULE_7__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_8__["nouislider"](survey_angular__WEBPACK_IMPORTED_MODULE_7__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_8__["select2tagbox"](survey_angular__WEBPACK_IMPORTED_MODULE_7__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_8__["signaturepad"](survey_angular__WEBPACK_IMPORTED_MODULE_7__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_8__["sortablejs"](survey_angular__WEBPACK_IMPORTED_MODULE_7__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_8__["ckeditor"](survey_angular__WEBPACK_IMPORTED_MODULE_7__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_8__["autocomplete"](survey_angular__WEBPACK_IMPORTED_MODULE_7__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_8__["bootstrapslider"](survey_angular__WEBPACK_IMPORTED_MODULE_7__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_8__["prettycheckbox"](survey_angular__WEBPACK_IMPORTED_MODULE_7__);
survey_angular__WEBPACK_IMPORTED_MODULE_7__["JsonObject"].metaData.addProperty('questionbase', 'popupdescription:text');
survey_angular__WEBPACK_IMPORTED_MODULE_7__["JsonObject"].metaData.addProperty('page', 'popupdescription:text');
var SurveyComponent = /** @class */ (function () {
    function SurveyComponent(router, notifier, surveyservice, route, authService, answerservice) {
        this.router = router;
        this.notifier = notifier;
        this.surveyservice = surveyservice;
        this.route = route;
        this.authService = authService;
        this.answerservice = answerservice;
        this.submitSurvey = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saved = false;
        this.isloading = false;
        this.question = { 'title': '', 'showProgressBar': 'top', 'pages': '' };
        this.answers = { 'school': '', 'category': '', 'answer': '' };
        // this.route.params.subscribe(params => {
        //   console.log(params.id),
        //     this.cat_id = params.id
        // });
    }
    SurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cat_id = this.answerservice.getQuestionByCategoryId();
        console.log(this.cat_id);
        var surveyModel = new survey_angular__WEBPACK_IMPORTED_MODULE_7__["Model"](this.cat_id);
        surveyModel.onAfterRenderQuestion.add(function (survey, options) {
            if (!options.question.popupdescription) {
                return;
            }
            // Add a button;
            var btn = document.createElement('button');
            btn.className = 'btn btn-info btn-xs';
            btn.innerHTML = 'More Info';
            var question = options.question;
            btn.onclick = function () {
                // showDescription(question);
                alert(options.question.popupdescription);
            };
            var header = options.htmlElement.querySelector('h5');
            var span = document.createElement('span');
            span.innerHTML = '  ';
            header.appendChild(span);
            header.appendChild(btn);
        });
        // surveyModel.onComplete.add((result) => {
        //     // this.submitSurvey.emit(result.data);
        //     // this.result = result.data;
        //     this.submitSurvey.emit(result.data);
        //   console.log(result.data)
        //   console.log(this.surveyservice.getCategoryId())
        //   this.answers['category'] = this.surveyservice.getCategoryId();
        //   this.answers['school']= this.authService.getUserId();
        //   this.answers['answer'] = result.data;
        //   this.onSurveySaved(this.answers);
        //   }
        //   );
        surveyModel.onComplete.add(function (result) {
            _this.isloading = true;
            _this.submitSurvey.emit(result.data);
            console.log(result.data);
            console.log(_this.answerservice.getCategoryId());
            _this.answers['category'] = 'https://gptsbackend.eu-gb.mybluemix.net/survey/categories/' + _this.answerservice.getCategoryId() + '/';
            _this.answers['school'] = "https://gptsbackend.eu-gb.mybluemix.net/api/users/" + localStorage.getItem('userId') + '/';
            _this.answers['answer'] = result.data;
            _this.result = result.data;
            _this.onSurveySaved(_this.answers);
        });
        survey_angular__WEBPACK_IMPORTED_MODULE_7__["SurveyNG"].render('surveyElement', { model: surveyModel });
    };
    SurveyComponent.prototype.onSurveySaved = function (survey) {
        var _this = this;
        this.saved = true;
        console.log(survey);
        this.surveyservice.saveAnswers(survey).subscribe(function (res) {
            _this.isloading = false;
            console.log(res);
            _this.notifier.notify('success', 'Your answers were saved');
            _this.router.navigate(['viewsurvey']);
        }, function (err) {
            _this.notifier.notify('error', err);
            console.log(err);
        });
    };
    SurveyComponent.prototype.savePDF = function () {
        var options = {
            fontSize: 14,
            margins: {
                left: 10,
                right: 10,
                top: 10,
                bot: 10
            }
        };
        var surveyPDF = new survey_pdf__WEBPACK_IMPORTED_MODULE_9__["Survey"](this.cat_id, options);
        console.log(this.result);
        surveyPDF.data = this.result;
        surveyPDF.save("survey PDF example");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SurveyComponent.prototype, "submitSurvey", void 0);
    SurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'survey',
            template: __webpack_require__(/*! ./answer-survey.component.html */ "./src/app/components/respondent/answer-survey/answer-survey.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierService"], _services_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_answers_service__WEBPACK_IMPORTED_MODULE_5__["AnswersService"]])
    ], SurveyComponent);
    return SurveyComponent;
}());



/***/ }),

/***/ "./src/app/components/respondent/category-summary/category-summary.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/respondent/category-summary/category-summary.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzcG9uZGVudC9jYXRlZ29yeS1zdW1tYXJ5L2NhdGVnb3J5LXN1bW1hcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/respondent/category-summary/category-summary.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/respondent/category-summary/category-summary.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row mt-4 d-flex justify-content-center\">\r\n    <div class=\"col-md-6\" style=\"\r\n        margin-top: 10px;\r\n        font-size: 32px;\r\n          text-align: center;\r\n          color: #F48637;\r\n          background-color: transparent\">\r\n      <b>SUMMARY</b>\r\n    </div>\r\n  </div>\r\n  <div class=\"row d-flex justify-content-center\">\r\n      <div class=\"col-md-10\" style=\"\r\n          font-size: 16px;\r\n          text-align: center;\r\n          color: #333;\r\n          background-color: transparent\">\r\n        <p>For your school to be considered a Great Place to School, you are required to provide general information for evaluation. This information will be kept confidential and we shall not disclose it to any unauthorized persons. \r\n            Thank you for taking the time to fill out the following online form.\r\n            We are working on how to improve the quality of learning in schools by subjecting the schools to a regular confirmation of competence as Great Places to School.</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-center\">\r\n      <div class=\"col-md-10\" style=\"\r\n          font-size: 16px;\r\n          text-align: center;\r\n          color: #333;\r\n          background-color: transparent\">\r\n        <p>The online form has 8 different categories which include:</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"bs-example mb-3\" style=\"font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n  font-size: 20px;\">\r\n    <div class=\"accordion bg-white\" id=\"accordionExample\">\r\n      <div class=\"card \">\r\n        <div class=\"card-header\" id=\"headingOne\">\r\n          <h2 class=\"mb-0\">\r\n            <button type=\"button\" class=\"btn btn-link\" style=\"\r\n                      font-size: 20px; color:#F48637;\" data-toggle=\"collapse\" data-target=\"#collapseOne\"><i\r\n                class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Safety and Security</button>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseOne\" class=\"collapse\" style=\"\r\n        font-size: 16px;\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <p>Is your school a safe and secure environment for learners where they, and their parents, are assured of their protection as they learn? Tell us about what measures you have put in place for the students.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingTwo\">\r\n          <h2 class=\"mb-0\">\r\n            <button type=\"button\" class=\"btn btn-link\" style=\"\r\n                      font-size: 20px; color:#F48637;\" data-toggle=\"collapse\" data-target=\"#collapseTwo\"><i\r\n                class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Career and Entrepreneurship Development </button>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseTwo\" class=\"collapse\" style=\"\r\n        font-size: 16px;\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <p>Does your school offer an entrepreneurial environment for students to develop their entrepreneurial ideas? Is Career and Entrepreneurship Development - Does your school offer an entrepreneurial environment for students to develop their entrepreneurial ideas? Is your school a great place for learners to develop their career aspirations in pursuit of their professional aspirations? Tell us about the entrepreneurial activities in your school and the career advice offered to students, that nurtures their dreams into professional careers.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingThree\">\r\n          <h2 class=\"mb-0\">\r\n            <button type=\"button\" class=\"btn btn-link\" style=\"\r\n                      font-size: 20px; color:#F48637;\" data-toggle=\"collapse\" data-target=\"#collapseThree\"><i\r\n                class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> STEM Education (Science, Technology, Engineering and Mathematics)</button>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseThree\" class=\"collapse\" style=\"\r\n        font-size: 16px;\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <p>Does your school ignite an interest in Science, Technology, Engineering and Mathematics? Tell us how you support STEM education, awards you have won, facilities present and ICT resources present in the school for learning purposes.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingFour\">\r\n          <h2 class=\"mb-0\">\r\n            <button type=\"button\" class=\"btn btn-link\" style=\"\r\n                      font-size: 20px; color:#F48637;\" data-toggle=\"collapse\" data-target=\"#collapseFour\"><i\r\n                class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>Governance </button>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseFour\" class=\"collapse\" style=\"\r\n        font-size: 16px;\" aria-labelledby=\"headingFour\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <p>Is your school open to listening to the needs of the learners and accommodating their views? Tell us about the system of governance in place and how this builds confidence and authority in your learners, how they speak out for what they truly believe, and how they address issues that move them.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingFive\">\r\n          <h2 class=\"mb-0\">\r\n            <button type=\"button\" class=\"btn btn-link\" style=\"\r\n                      font-size: 20px; color:#F48637;\" data-toggle=\"collapse\" data-target=\"#collapseFive\"><i\r\n                class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>Extra-curricular and Sports Activities  </button>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseFive\" class=\"collapse\" style=\"\r\n        font-size: 16px;\" aria-labelledby=\"headingFive\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <p>Is your school a sporting environment for learners to develop their physical talents in their quest for sporting glory? Tell us about the expert advice offered to students, and the expert physical activities and facilities offered by your school for developing physical abilities into skilled talent. \r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingSix\">\r\n          <h2 class=\"mb-0\">\r\n            <button type=\"button\" class=\"btn btn-link\" style=\"\r\n                      font-size: 20px; color:#F48637;\" data-toggle=\"collapse\" data-target=\"#collapseSix\"><i\r\n                class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>Academics (Other)  </button>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseSix\" class=\"collapse\" style=\"\r\n        font-size: 16px;\" aria-labelledby=\"headingSix\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <p>Is your school an enlightening place for learners to study and get a wholesome education? Tell us about the non-examinable offerings, variety of subjects on offer, cultural exchange programs, student-teacher ratio, outstanding awards, and providing an enlightening environment for learners to excel. \r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingSeven\">\r\n          <h2 class=\"mb-0\">\r\n            <button type=\"button\" class=\"btn btn-link\" style=\"\r\n                      font-size: 20px; color:#F48637;\" data-toggle=\"collapse\" data-target=\"#collapseSeven\"><i\r\n                class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>Character and Creative Talent  </button>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseSeven\" class=\"collapse\" style=\"\r\n        font-size: 16px;\" aria-labelledby=\"headingSeven\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <p>Is your school an environment that moulds learners into authentic people of honest character? Tell us about the character guidance and direction offered to learners through molding and by instruction so that they are able to express their personalities in a healthy and strong way for developing creativity and respectable character and creativity in learners.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingEight\">\r\n          <h2 class=\"mb-0\">\r\n            <button type=\"button\" class=\"btn btn-link\" style=\"\r\n                      font-size: 20px; color:#F48637;\" data-toggle=\"collapse\" data-target=\"#collapseEight\"><i\r\n                class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>Health and Personal Hygiene </button>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseEight\" class=\"collapse\" style=\"\r\n        font-size: 16px;\" aria-labelledby=\"headingEight\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <p>Is your school open to listening to the needs of the learners and accommodating their views? Tell us about the system of governance in place and how this builds confidence and authority in your learners, how they speak out for what they truly believe, and how they address issues that move them.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button class=\"btn btn-block\" (click)=\"startsurvey()\">\r\n    Start <i class=\"fa fa-play-circle\" aria-hidden=\"true\"></i></button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/respondent/category-summary/category-summary.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/respondent/category-summary/category-summary.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CategorySummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorySummaryComponent", function() { return CategorySummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CategorySummaryComponent = /** @class */ (function () {
    function CategorySummaryComponent(_router) {
        this._router = _router;
    }
    CategorySummaryComponent.prototype.ngOnInit = function () {
    };
    CategorySummaryComponent.prototype.startsurvey = function () {
        this._router.navigate(['viewsurvey']);
    };
    CategorySummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-summary',
            template: __webpack_require__(/*! ./category-summary.component.html */ "./src/app/components/respondent/category-summary/category-summary.component.html"),
            styles: [__webpack_require__(/*! ./category-summary.component.css */ "./src/app/components/respondent/category-summary/category-summary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CategorySummaryComponent);
    return CategorySummaryComponent;
}());



/***/ }),

/***/ "./src/app/components/respondent/edit-answer/edit-answer.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/respondent/edit-answer/edit-answer.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzcG9uZGVudC9lZGl0LWFuc3dlci9lZGl0LWFuc3dlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/respondent/edit-answer/edit-answer.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/respondent/edit-answer/edit-answer.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='survey-container contentcontainer codecontainer'>\r\n  <div id='surveyElement'></div>\r\n  <div id=\"surveyResult\"></div>\r\n</div>\r\n<app-loader *ngIf=\"isloading\"></app-loader>\r\n"

/***/ }),

/***/ "./src/app/components/respondent/edit-answer/edit-answer.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/respondent/edit-answer/edit-answer.component.ts ***!
  \****************************************************************************/
/*! exports provided: EditAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAnswerComponent", function() { return EditAnswerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-angular */ "./node_modules/survey-angular/survey.angular.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! surveyjs-widgets */ "./node_modules/surveyjs-widgets/surveyjs-widgets.js");
/* harmony import */ var surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_answers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/answers.service */ "./src/app/services/answers.service.ts");
/* harmony import */ var _services_survey_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/survey.service */ "./src/app/services/survey.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var inputmask_dist_inputmask_phone_codes_phone_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! inputmask/dist/inputmask/phone-codes/phone.js */ "./node_modules/inputmask/dist/inputmask/phone-codes/phone.js");
/* harmony import */ var inputmask_dist_inputmask_phone_codes_phone_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(inputmask_dist_inputmask_phone_codes_phone_js__WEBPACK_IMPORTED_MODULE_9__);










surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__["icheck"](survey_angular__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__["select2"](survey_angular__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__["inputmask"](survey_angular__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__["jquerybarrating"](survey_angular__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__["jqueryuidatepicker"](survey_angular__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__["nouislider"](survey_angular__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__["select2tagbox"](survey_angular__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__["signaturepad"](survey_angular__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__["sortablejs"](survey_angular__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__["ckeditor"](survey_angular__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__["autocomplete"](survey_angular__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__["bootstrapslider"](survey_angular__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__["prettycheckbox"](survey_angular__WEBPACK_IMPORTED_MODULE_2__);
survey_angular__WEBPACK_IMPORTED_MODULE_2__["JsonObject"].metaData.addProperty("questionbase", "popupdescription:text");
survey_angular__WEBPACK_IMPORTED_MODULE_2__["JsonObject"].metaData.addProperty("page", "popupdescription:text");
var EditAnswerComponent = /** @class */ (function () {
    function EditAnswerComponent(router, notifier, answerservice, surveyservice, authService) {
        this.router = router;
        this.notifier = notifier;
        this.answerservice = answerservice;
        this.surveyservice = surveyservice;
        this.authService = authService;
        this.submitSurvey = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isloading = false;
        this.answers = { 'school': '', 'category': '', 'answer': '' };
    }
    EditAnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.json = this.answerservice.getQuestions();
        console.log(this.json);
        this.answer = this.answerservice.getAnswers();
        var surveyModel = new survey_angular__WEBPACK_IMPORTED_MODULE_2__["Model"](this.json);
        console.log(this.answer);
        // surveyModel.currentPageNo = this.answer.currentPageNo
        surveyModel.data = this.answer;
        surveyModel.onAfterRenderQuestion.add(function (survey, options) {
            if (!options.question.popupdescription) {
                return;
            }
            // Add a button;
            var btn = document.createElement("button");
            btn.className = "btn btn-info btn-xs";
            btn.innerHTML = "More Info";
            var question = options.question;
            btn.onclick = function () {
                // showDescription(question);
                alert(options.question.popupdescription);
            };
            var header = options.htmlElement.querySelector("h5");
            var span = document.createElement("span");
            span.innerHTML = "  ";
            header.appendChild(span);
            header.appendChild(btn);
        });
        surveyModel.onComplete.add(function (result) {
            _this.isloading = true;
            _this.submitSurvey.emit(result.data);
            _this.school = parseInt(_this.authService.getUserId());
            _this.answers.category = 'https://gptsbackend.eu-gb.mybluemix.net/survey/categories/' + JSON.parse(localStorage.getItem('categoryId')) + '/';
            _this.answers.school = "https://gptsbackend.eu-gb.mybluemix.net/api/users/" + localStorage.getItem('userId') + '/';
            // this.answers.school = this.school
            // this.category = this.surveyservice.getCategoryId();
            // this.answers.category = this.category;
            _this.answers['answer'] = result.data;
            console.log(_this.answers);
            _this.onSurveyUpdate(_this.answers);
        });
        survey_angular__WEBPACK_IMPORTED_MODULE_2__["SurveyNG"].render("surveyElement", { model: surveyModel });
    };
    EditAnswerComponent.prototype.onSurveyUpdate = function (survey) {
        var _this = this;
        this.answerservice.saveAnswers(survey)
            .subscribe(function (res) {
            _this.isloading = false;
            console.log(res);
            _this.notifier.notify('success', 'Your answers were saved');
            _this.router.navigate(['viewsurvey']);
        }, function (err) {
            _this.notifier.notify('error', err);
            console.log(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditAnswerComponent.prototype, "submitSurvey", void 0);
    EditAnswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-answer',
            template: __webpack_require__(/*! ./edit-answer.component.html */ "./src/app/components/respondent/edit-answer/edit-answer.component.html"),
            styles: [__webpack_require__(/*! ./edit-answer.component.css */ "./src/app/components/respondent/edit-answer/edit-answer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], angular_notifier__WEBPACK_IMPORTED_MODULE_7__["NotifierService"], _services_answers_service__WEBPACK_IMPORTED_MODULE_4__["AnswersService"], _services_survey_service__WEBPACK_IMPORTED_MODULE_5__["SurveyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], EditAnswerComponent);
    return EditAnswerComponent;
}());



/***/ }),

/***/ "./src/app/components/respondent/view-surveys/view-surveys.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/respondent/view-surveys/view-surveys.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  margin: 20px;\r\n}\r\n\r\n.btn {\r\n  color: white;\r\n  font-weight: bold;\r\n  background-color: #D85A00;\r\n}\r\n\r\np {\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNwb25kZW50L3ZpZXctc3VydmV5cy92aWV3LXN1cnZleXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRFQUE0RTtFQUM1RSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzcG9uZGVudC92aWV3LXN1cnZleXMvdmlldy1zdXJ2ZXlzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDg1QTAwO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/respondent/view-surveys/view-surveys.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/respondent/view-surveys/view-surveys.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\r\n<div class=\"container\" *ngIf=\"!isLoading\">\r\n  <div class=\"well\">\r\n    <p>Pick the categories you want to participate in below. you can always come back and edit your answers before the\r\n      nomination period ends</p>\r\n\r\n  </div>\r\n  <div class=\"card\" *ngFor=\"let res of cats\">\r\n    <div class=\"card-body\">\r\n      <h3 class=\"card-title\">{{res.name}}</h3>\r\n      <p class=\"card-text\">{{res.description}}</p>\r\n      <button class=\"btn btn-block\" (click)=\"getQues(res.id)\">\r\n        Answer or Edit your answers <i class=\"fa fa-angle-double-right\"></i></button>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/respondent/view-surveys/view-surveys.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/respondent/view-surveys/view-surveys.component.ts ***!
  \******************************************************************************/
/*! exports provided: ViewSurveysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSurveysComponent", function() { return ViewSurveysComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/survey.service */ "./src/app/services/survey.service.ts");
/* harmony import */ var _services_answers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/answers.service */ "./src/app/services/answers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");







var ViewSurveysComponent = /** @class */ (function () {
    function ViewSurveysComponent(router, route, surveyService, answerservice, notifier) {
        this.router = router;
        this.route = route;
        this.surveyService = surveyService;
        this.answerservice = answerservice;
        this.notifier = notifier;
        this.categories = [];
        this.question = { 'title': '', 'showProgressBar': 'top', 'pages': '' };
        this.answered = false;
        this.ans = { 'school': '', 'answer': '', 'category': '' };
        this.isLoading = false;
        // question;
        this.question1 = '';
    }
    ViewSurveysComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.notifier.notify('warning', 'please remember to finish filling in your profile if you have not');
        this.surveyService.getCategory()
            .subscribe(function (res) {
            _this.categories.push(res),
                console.log(_this.categories);
            _this.cats = _this.categories[0];
            localStorage.setItem('questions', JSON.stringify(_this.cats));
        }, function (err) { return console.log(err); });
        this.answerservice.getAns().subscribe(function (res) {
            console.log(res);
            _this.userid1 = localStorage.getItem('userId');
            console.log(_this.userid1);
            _this.answers = res;
            console.log(_this.answers[0]['category']);
            _this.isLoading = false;
            // this.getCats();
        }, function (err) { return console.log(err); });
        // this.userid2 = JSON.parse(this.userid1);
        // console.log(this.userid2)
        this.route.paramMap
            .subscribe(function (params) {
            console.log(params);
        });
    };
    ViewSurveysComponent.prototype.getQues = function (id) {
        this.isLoading = true;
        localStorage.setItem('categoryId', id);
        this.localid = localStorage.getItem('categoryId');
        console.log(this.localid);
        for (var i = 0; i < this.answers.length; i++) {
            if (this.answers[i]['category'] === "http://gptsbackend.eu-gb.mybluemix.net/survey/categories/" + id + "/" && this.answers[i]['school'] === "http://gptsbackend.eu-gb.mybluemix.net/api/users/" + this.userid1 + "/") {
                this.answered = true;
                this.getAns(id);
            }
            else {
            }
        }
        for (var i = 0; i < this.cats.length; i++) {
            if (this.cats[i]['id'] === id) {
                this.question['title'] = this.cats[i]['name'];
                this.question['pages'] = this.cats[i]['questionaire'][0]['pages'];
                // this.answers = this.cats[i]['answers'][0]['answer'];
                this.surveyService.setCategoryId(id);
                this.surveyService.storeAnswers(this.answers);
                this.answerservice.changeMessage(JSON.stringify(this.question));
                // this.surveyService.saveQuestions(this.question)
                // localStorage.setItem('categoryId',id);
            }
        }
        if (this.answered === true) {
            this.router.navigate(['editanswer']);
        }
        else {
            this.router.navigate(['survey']);
        }
    };
    ViewSurveysComponent.prototype.getAns = function (id) {
        localStorage.setItem('categoryId', id);
        this.userid1 = localStorage.getItem('userId');
        // this.userid2 = JSON.parse(this.userid1);
        // console.log(this.userid2)
        for (var i = 0; i < this.answers.length; i++) {
            if (this.answers[i]['category'] === "http://gptsbackend.eu-gb.mybluemix.net/survey/categories/" + id + "/" && this.answers[i]['school'] === "http://gptsbackend.eu-gb.mybluemix.net/api/users/" + this.userid1 + "/") {
                this.ans['category'] = this.answers[i]['category'];
                this.ans['school'] = this.answers[i]['school'];
                this.ans['answer'] = this.answers[i]['answer'];
                this.ans2 = JSON.stringify(this.answers[i]);
                localStorage.setItem('answerId', this.answers[i]['id']);
                localStorage.setItem('answer', this.ans2);
            }
        }
        this.router.navigate(['survey']);
    };
    ViewSurveysComponent.prototype.openSurvey = function (id) {
        console.log(id);
    };
    ViewSurveysComponent.prototype.getCats = function () {
        // this.isLoading = true;
        this.cats = this.categories[0];
        console.log(this.cats);
        localStorage.setItem('questions', JSON.stringify(this.cats));
        this.isLoading = false;
    };
    ViewSurveysComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-surveys',
            template: __webpack_require__(/*! ./view-surveys.component.html */ "./src/app/components/respondent/view-surveys/view-surveys.component.html"),
            styles: [__webpack_require__(/*! ./view-surveys.component.css */ "./src/app/components/respondent/view-surveys/view-surveys.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"], _services_answers_service__WEBPACK_IMPORTED_MODULE_3__["AnswersService"], angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"]])
    ], ViewSurveysComponent);
    return ViewSurveysComponent;
}());

// && this.answers[i]['school'] === `http://localhost:8000/api/users/${this.userid1}/`


/***/ }),

/***/ "./src/app/components/shared/loader/loader.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/loader/loader.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\r\n  position: fixed;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(74, 74, 74, .8);\r\n  z-index: 99999;\r\n}\r\n\r\n.spinner {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1Asc0NBQXNDO0VBQ3RDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgNzQsIDc0LCAuOCk7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/shared/loader/loader.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/loader/loader.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading\" class=\"overlay\">\n  <mat-progress-spinner class=\"spinner\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\">\n  </mat-progress-spinner>\n</div>\n"

/***/ }),

/***/ "./src/app/components/shared/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/loader.service */ "./src/app/services/loader.service.ts");



var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 30;
        this.isLoading = this.loaderService.isLoading;
    }
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/components/shared/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/components/shared/loader/loader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/sidemenu/sidemenu.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/sidemenu/sidemenu.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZW1lbnUvc2lkZW1lbnUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/sidemenu/sidemenu.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/sidemenu/sidemenu.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sidemenu works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/sidemenu/sidemenu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/sidemenu/sidemenu.component.ts ***!
  \***********************************************************/
/*! exports provided: SidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function() { return SidemenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent() {
    }
    SidemenuComponent.prototype.ngOnInit = function () {
    };
    SidemenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidemenu',
            template: __webpack_require__(/*! ./sidemenu.component.html */ "./src/app/components/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu.component.css */ "./src/app/components/sidemenu/sidemenu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidemenuComponent);
    return SidemenuComponent;
}());



/***/ }),

/***/ "./src/app/components/usersPages/judge/judge.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/usersPages/judge/judge.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnNQYWdlcy9qdWRnZS9qdWRnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/usersPages/judge/judge.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/usersPages/judge/judge.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  judge works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/usersPages/judge/judge.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/usersPages/judge/judge.component.ts ***!
  \****************************************************************/
/*! exports provided: JudgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JudgeComponent", function() { return JudgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JudgeComponent = /** @class */ (function () {
    function JudgeComponent() {
    }
    JudgeComponent.prototype.ngOnInit = function () {
    };
    JudgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-judge',
            template: __webpack_require__(/*! ./judge.component.html */ "./src/app/components/usersPages/judge/judge.component.html"),
            styles: [__webpack_require__(/*! ./judge.component.css */ "./src/app/components/usersPages/judge/judge.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JudgeComponent);
    return JudgeComponent;
}());



/***/ }),

/***/ "./src/app/components/usersPages/profile/profile.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/usersPages/profile/profile.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  background: -webkit-linear-gradient(left, #3931af, #00c6ff);\r\n}\r\n\r\n.emp-profile {\r\n  padding: 3%;\r\n  margin-top: 3%;\r\n  margin-bottom: 3%;\r\n  border-radius: 0.5rem;\r\n  background: #fff;\r\n}\r\n\r\n.profile-img {\r\n  text-align: center;\r\n}\r\n\r\n.profile-img img {\r\n  width: 70%;\r\n  height: 100%;\r\n}\r\n\r\n.profile-img .file {\r\n  position: relative;\r\n  overflow: hidden;\r\n  margin-top: -20%;\r\n  width: 70%;\r\n  border: none;\r\n  border-radius: 0;\r\n  font-size: 15px;\r\n  background: #212529b8;\r\n}\r\n\r\n.profile-img .file input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  right: 0;\r\n  top: 0;\r\n}\r\n\r\n.profile-head h5 {\r\n  color: #333;\r\n}\r\n\r\n.profile-head h6 {\r\n  color: #0062cc;\r\n}\r\n\r\n.profile-edit-btn {\r\n  border: none;\r\n  border-radius: 1.5rem;\r\n  width: 70%;\r\n  padding: 2%;\r\n  font-weight: 600;\r\n  color: #6c757d;\r\n  cursor: pointer;\r\n}\r\n\r\n.proile-rating {\r\n  font-size: 12px;\r\n  color: #818182;\r\n  margin-top: 5%;\r\n}\r\n\r\n.proile-rating span {\r\n  color: #495057;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n}\r\n\r\n.profile-head .nav-tabs {\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.profile-head .nav-tabs .nav-link {\r\n  font-weight: 600;\r\n  border: none;\r\n}\r\n\r\n.profile-head .nav-tabs .nav-link.active {\r\n  border: none;\r\n  border-bottom: 2px solid #0062cc;\r\n}\r\n\r\n.profile-work {\r\n  padding: 14%;\r\n  margin-top: -15%;\r\n}\r\n\r\n.profile-work p {\r\n  font-size: 12px;\r\n  color: #818182;\r\n  font-weight: 600;\r\n  margin-top: 10%;\r\n}\r\n\r\n.profile-work a {\r\n  text-decoration: none;\r\n  color: #495057;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n}\r\n\r\n.profile-work ul {\r\n  list-style: none;\r\n}\r\n\r\n.profile-tab label {\r\n  font-weight: 600;\r\n}\r\n\r\n.profile-tab p {\r\n  font-weight: 600;\r\n  color: #0062cc;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vyc1BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsTUFBTTtBQUNSOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJzUGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMzkzMWFmLCAjMDBjNmZmKTtcclxufVxyXG5cclxuLmVtcC1wcm9maWxlIHtcclxuICBwYWRkaW5nOiAzJTtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltZyBpbWcge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWcgLmZpbGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi10b3A6IC0yMCU7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogIzIxMjUyOWI4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWcgLmZpbGUgaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLnByb2ZpbGUtaGVhZCBoNSB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5wcm9maWxlLWhlYWQgaDYge1xyXG4gIGNvbG9yOiAjMDA2MmNjO1xyXG59XHJcblxyXG4ucHJvZmlsZS1lZGl0LWJ0biB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICB3aWR0aDogNzAlO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJvaWxlLXJhdGluZyB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjODE4MTgyO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4ucHJvaWxlLXJhdGluZyBzcGFuIHtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnByb2ZpbGUtaGVhZCAubmF2LXRhYnMge1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1oZWFkIC5uYXYtdGFicyAubmF2LWxpbmsge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ucHJvZmlsZS1oZWFkIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDYyY2M7XHJcbn1cclxuXHJcbi5wcm9maWxlLXdvcmsge1xyXG4gIHBhZGRpbmc6IDE0JTtcclxuICBtYXJnaW4tdG9wOiAtMTUlO1xyXG59XHJcblxyXG4ucHJvZmlsZS13b3JrIHAge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzgxODE4MjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuLnByb2ZpbGUtd29yayBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLXdvcmsgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9maWxlLXRhYiBsYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnByb2ZpbGUtdGFiIHAge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMwMDYyY2M7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/usersPages/profile/profile.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/usersPages/profile/profile.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isloading\"></app-loader>\r\n<div class=\"row\">\r\n  <div class=\"col-md-6 offset-md-3\">\r\n    <div class=\"card\" style=\"height: 70rem;\" *ngIf=\"!isloading\">\r\n      <!-- <img class=\"card-img-top\" src=\"https://via.placeholder.com/40\" alt=\"Card image cap\"> -->\r\n      <div class=\"card-body\">\r\n        <form novalidate (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Name of The School</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\" id=\"name\"\r\n              placeholder=\"Name of the School\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">The School's Email address</label>\r\n            <input type=\"email\" required class=\"form-control\" name=\"email\" [(ngModel)]=\"user.email\"\r\n              id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Schools email adress\">\r\n\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Your Name</label>\r\n            <input type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"profile.name\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"role\">Your Role in the School</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"role\" [(ngModel)]=\"profile.role\" id=\"role\"\r\n              placeholder=\"Principle, Deputy, Owner, Director\">\r\n          </div>\r\n          <hr>\r\n          <h2>School Demographics</h2>\r\n          <hr>\r\n          <div class=\"form-group\">\r\n            <label for=\"gender\">School Gender</label>\r\n            <select class=\"form-control\" (change)=\"genderselected($event)\" name=\"school_gender\" id=\"gender\"\r\n              [(ngModel)]=\"profile.school_gender\">\r\n              <option value=\"Boys\">Boys</option>\r\n              <option value=\"Girls\">Girls</option>\r\n              <option value=\"Mixed\">Mixed</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"type\">School Type</label>\r\n            <select class=\"form-control\" name=\"school_type\" id=\"type\" [(ngModel)]=\"profile.school_type\">\r\n              <option value=\"Boys\">Boarding</option>\r\n              <option value=\"Girls\">Day</option>\r\n              <option value=\"mixed\">Both Boarding and Day</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"isboys\">\r\n            <label for=\"boyspop\">Boys Population</label>\r\n            <input type=\"number\" required class=\"form-control\" name=\"boys_pop\" [(ngModel)]=\"profile.boys_pop\"\r\n              id=\"boyspop\">\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"isgirls\">\r\n            <label for=\"girlspop\">Girls Population</label>\r\n            <input type=\"number\" required class=\"form-control\" name=\"girls_pop\" [(ngModel)]=\"profile.girls_pop\"\r\n              id=\"girlspop\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"tpop\">Teachers Population</label>\r\n            <input type=\"number\" required class=\"form-control\" name=\"teachers_pop\" [(ngModel)]=\"profile.teachers_pop\"\r\n              id=\"tpop\">\r\n          </div>\r\n          <hr>\r\n          <h2>Location of the School</h2>\r\n          <hr>\r\n          <div class=\"form-group\">\r\n            <label for=\"county\">county</label>\r\n            <select class=\"form-control\" name=\"county\" [(ngModel)]=\"profile.county\">\r\n              <option value='Baringo'>Baringo</option>\r\n              <option value='Bomet'>Bomet</option>\r\n              <option value='Bungoma'>Bungoma</option>\r\n              <option value='Busia'>Busia</option>\r\n              <option value='Elgeyo-Marakwet'>Elgeyo-Marakwet</option>\r\n              <option value='Embu'>Embu</option>\r\n              <option value='Garissa'>Garissa</option>\r\n              <option value='Homa Bay'>Homa Bay</option>\r\n              <option value='Isiolo'>Isiolo</option>\r\n              <option value='Kajiado'>Kajiado</option>\r\n              <option value='Kakamega'>Kakamega</option>\r\n              <option value='Kericho'>Kericho</option>\r\n              <option value='Kiambu'>Kiambu</option>\r\n              <option value='Kilifi'>Kilifi</option>\r\n              <option value='Kirinyaga'>Kirinyaga</option>\r\n              <option value='Kisii'>Kisii</option>\r\n              <option value='Kisumu'>Kisumu</option>\r\n              <option value='Kitui'>Kitui</option>\r\n              <option value='Kwale'>Kwale</option>\r\n              <option value='Laikipia'>Laikipia</option>\r\n              <option value='Lamu'>Lamu</option>\r\n              <option value='Machakos'>Machakos</option>\r\n              <option value='Makueni'>Makueni</option>\r\n              <option value='Mandera'>Mandera</option>\r\n              <option value='Marsabit'>Marsabit</option>\r\n              <option value='Meru'>Meru</option>\r\n              <option value='Migori'>Migori</option>\r\n              <option value='Mombasa'>Mombasa</option>\r\n              <option value='Muranga'>Murang'a</option>\r\n              <option value='Nairobi City'>Nairobi City</option>\r\n              <option value='Nakuru'>Nakuru</option>\r\n              <option value='Nandi'>Nandi</option>\r\n              <option value='Narok'>Narok</option>\r\n              <option value='Nyamira'>Nyamira</option>\r\n              <option value='Nyandarua'>Nyandarua</option>\r\n              <option value='Nyeri'>Nyeri</option>\r\n              <option value='Samburu'>Samburu</option>\r\n              <option value='Siaya'>Siaya</option>\r\n              <option value='Taita-Taveta'>Taita-Taveta</option>\r\n              <option value='Tana River'>Tana River</option>\r\n              <option value='Tharaka-Nithi'>Tharaka-Nithi</option>\r\n              <option value='Trans Nzoia'>Trans Nzoia</option>\r\n              <option value='Turkana'>Turkana</option>\r\n              <option value='Uasin Gishu'>Uasin Gishu</option>\r\n              <option value='Vihiga'>Vihiga</option>\r\n              <option value='West Pokot'>West Pokot</option>\r\n              <option value='wajir'>wajir</option>\r\n            </select>\r\n\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"subcounty\">Sub County</label>\r\n            <input type=\"text\" required class=\"form-control\" name=\"subcounty\" [(ngModel)]=\"profile.subcounty\"\r\n              id=\"county\" id=\"address\" placeholder=\"Sub County\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"address\">Constituency</label>\r\n            <input type=\"text\" required class=\"form-control\" name=\"constituency\" [(ngModel)]=\"profile.constituency\"\r\n              id=\"county\" id=\"address\" placeholder=\"Constituency of the School\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"address\">Ward</label>\r\n            <input type=\"text\" required class=\"form-control\" name=\"ward\" [(ngModel)]=\"profile.ward\" id=\"county\"\r\n              id=\"address\" placeholder=\"Ward of the school\">\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"county\">Telephone Number</label>\r\n            <input type=\"text\" required class=\"form-control\" name=\"telephone\" [(ngModel)]=\"profile.telephone\"\r\n              id=\"telephone\" placeholder=\"Schools Telephone Number\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"address\">Postal Address</label>\r\n            <input type=\"text\" required class=\"form-control\" name=\"postaladdress\" [(ngModel)]=\"profile.postaladdress\"\r\n              id=\"county\" id=\"address\" placeholder=\"Postal Address of the school\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"description\">A brief Description about the School</label>\r\n            <textarea name=\"description\" id=\"description\" class=\"form-control\" cols=\"30\" rows=\"10\"\r\n              [(ngModel)]=\"profile.description\"></textarea>\r\n          </div>\r\n          <hr>\r\n          <h2>Social Media Handles</h2>\r\n          <hr>\r\n          <div class=\"form-group\">\r\n            <label for=\"website\">School's Website</label>\r\n            <input type=\"text\" required class=\"form-control\" name=\"website\" [(ngModel)]=\"profile.website\" id=\"website\"\r\n              id=\"address\" placeholder=\"school.com\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"twitter\">Twitter</label>\r\n            <input type=\"text\" required class=\"form-control\" name=\"twitter\" [(ngModel)]=\"profile.twitter\" id=\"twitter\"\r\n              placeholder=\"Twitter Handle of the school\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"fb\">Facebook </label>\r\n            <input type=\"text\" required class=\"form-control\" name=\"facebook\" [(ngModel)]=\"profile.fb\" id=\"fb\"\r\n              placeholder=\"Facebook Account for the school\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"other\">Others</label>\r\n            <input type=\"text\" required class=\"form-control\" name=\"other\" [(ngModel)]=\"profile.other\" id=\"other\"\r\n              placeholder=\"Other Social Media Handles\">\r\n          </div>\r\n          <!-- \r\n          <div class=\"form-group\">\r\n            <label for=\"city\">city</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"profile.city\" id=\"county\" id=\"city\"\r\n              placeholder=\"Nairobi, Kisumu\">\r\n          </div> -->\r\n          <!-- <div class=\"form-group\">\r\n            <label for=\"zip\">zip</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"zip\" [(ngModel)]=\"profile.zip\" id=\"county\" id=\"zip\"\r\n              placeholder=\"Zip Code\">\r\n          </div> -->\r\n          <button type=\"submit\" class=\"btn btn-primary\">Update Profile</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/usersPages/profile/profile.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/usersPages/profile/profile.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(http, prof, authservice, notifier) {
        this.http = http;
        this.prof = prof;
        this.authservice = authservice;
        this.notifier = notifier;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
        this.profile = {
            user: "",
            dob: "",
            city: "",
            address: "",
            county: "",
            zip: "",
            total_pop: ""
        };
        this.user = { username: "", email: "" };
        this.isloading = true;
        this.isboys = false;
        this.isgirls = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notifier.notify("success", "please finish filling in your school's profile");
        this.userurl = "https://gptsbackend.eu-gb.mybluemix.net/api/users/";
        this.id = localStorage.getItem("userId");
        this.prof.getProfile(this.id).subscribe(function (profile) {
            _this.profile = profile;
            console.log(_this.profile);
            _this.http.get(_this.userurl + _this.id + "/").subscribe(function (user) {
                console.log(user);
                _this.user = user;
                _this.isloading = false;
            });
        });
    };
    ProfileComponent.prototype.genderselected = function (event) {
        var selected = event.target.value;
        console.log(selected);
        if (selected == "Boys") {
            this.isboys = true;
            this.isgirls = false;
            this.profile["girls_pop"] = 0;
        }
        else if (selected == "Girls") {
            this.isboys = false;
            this.isgirls = true;
            this.profile["boys_pop"] = 0;
        }
        else if (selected == "Mixed") {
            this.isboys = true;
            this.isgirls = true;
        }
        else {
            this.isboys = false;
            this.isgirls = false;
        }
    };
    ProfileComponent.prototype.onSubmit = function () {
        this.isloading = true;
        console.log("something was submitted");
        console.log(this.profile);
        // console.log(this.user.groups)
        delete this.user.groups;
        console.log(this.profile["boys_pop"]);
        this.profile.total_pop =
            parseInt(this.profile["boys_pop"]) + parseInt(this.profile["girls_pop"]);
        console.log(this.profile.total_pop);
        this.submit();
    };
    ProfileComponent.prototype.submit = function () {
        var _this = this;
        this.prof.updateProfile(this.profile, this.id).subscribe(function (profile) {
            _this.profile = profile;
            _this.http.patch(_this.userurl + _this.id + "/", _this.user).subscribe(function (res) {
                _this.isloading = false;
                console.log(res);
                _this.notifier.notify("success", "profile updated sucessfully");
            }, function (err) {
                _this.isloading = false;
                _this.notifier.notify("error", "something went wrong while trying to update your profile");
                console.log(err);
            });
        }, function (err) {
            _this.isloading = false;
            _this.notifier.notify("error", "something went wrong while trying to update your profile");
            console.log(err);
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/usersPages/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/usersPages/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/usersPages/scripter/scripter.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/usersPages/scripter/scripter.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnNQYWdlcy9zY3JpcHRlci9zY3JpcHRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/usersPages/scripter/scripter.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/usersPages/scripter/scripter.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  scripter works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/usersPages/scripter/scripter.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/usersPages/scripter/scripter.component.ts ***!
  \**********************************************************************/
/*! exports provided: ScripterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScripterComponent", function() { return ScripterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScripterComponent = /** @class */ (function () {
    function ScripterComponent() {
    }
    ScripterComponent.prototype.ngOnInit = function () {
    };
    ScripterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scripter',
            template: __webpack_require__(/*! ./scripter.component.html */ "./src/app/components/usersPages/scripter/scripter.component.html"),
            styles: [__webpack_require__(/*! ./scripter.component.css */ "./src/app/components/usersPages/scripter/scripter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScripterComponent);
    return ScripterComponent;
}());



/***/ }),

/***/ "./src/app/components/usersPages/verifier/verifier.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/usersPages/verifier/verifier.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnNQYWdlcy92ZXJpZmllci92ZXJpZmllci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/usersPages/verifier/verifier.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/usersPages/verifier/verifier.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  verifier works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/usersPages/verifier/verifier.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/usersPages/verifier/verifier.component.ts ***!
  \**********************************************************************/
/*! exports provided: VerifierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifierComponent", function() { return VerifierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VerifierComponent = /** @class */ (function () {
    function VerifierComponent() {
    }
    VerifierComponent.prototype.ngOnInit = function () {
    };
    VerifierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verifier',
            template: __webpack_require__(/*! ./verifier.component.html */ "./src/app/components/usersPages/verifier/verifier.component.html"),
            styles: [__webpack_require__(/*! ./verifier.component.css */ "./src/app/components/usersPages/verifier/verifier.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VerifierComponent);
    return VerifierComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn()) {
            console.log('true');
            return true;
        }
        else {
            console.log('false');
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/interceptors/loader.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/interceptors/loader.interceptor.ts ***!
  \****************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");




var LoaderInterceptor = /** @class */ (function () {
    function LoaderInterceptor(loaderService) {
        this.loaderService = loaderService;
    }
    LoaderInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.loaderService.show();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.loaderService.hide(); }));
    };
    LoaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], LoaderInterceptor);
    return LoaderInterceptor;
}());



/***/ }),

/***/ "./src/app/models/answers.ts":
/*!***********************************!*\
  !*** ./src/app/models/answers.ts ***!
  \***********************************/
/*! exports provided: Answers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answers", function() { return Answers; });
var Answers = /** @class */ (function () {
    function Answers() {
    }
    return Answers;
}());



/***/ }),

/***/ "./src/app/services/answers.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/answers.service.ts ***!
  \*********************************************/
/*! exports provided: AnswersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswersService", function() { return AnswersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AnswersService = /** @class */ (function () {
    function AnswersService(http, _router) {
        this.http = http;
        this._router = _router;
        this.answers_url = 'https://gptsbackend.eu-gb.mybluemix.net/survey/answers/';
        this.questionaire = { 'title': '', 'showProgressBar': 'top', 'pages': '' };
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('default message');
        this.currentMessage = this.messageSource.asObservable();
    }
    AnswersService.prototype.saveAnswers = function (answer) {
        this.ansId = localStorage.getItem('answerId');
        this.ansId2 = JSON.parse(this.ansId);
        this.answers = answer;
        return this.http.patch('https://gptsbackend.eu-gb.mybluemix.net/survey/answers/' + this.ansId2 + '/', this.answers);
    };
    // getQuestions() {
    //   return this.json;
    // }
    AnswersService.prototype.getAnswers = function () {
        this.ans = localStorage.getItem('answer');
        this.ans1 = JSON.parse(this.ans);
        this.ans2 = this.ans1['answer'];
        console.log(this.ans);
        return this.ans2;
    };
    AnswersService.prototype.getAns = function () {
        return this.http.get(this.answers_url);
    };
    AnswersService.prototype.changeMessage = function (message) {
        // this.messageSource.next(message)
        localStorage.setItem('question', message);
        // console.log(this.currentMessage)
    };
    AnswersService.prototype.getCategoryId = function () {
        this.catIdString = localStorage.getItem('categoryId');
        this.catId = JSON.parse(this.catIdString);
        return this.catId;
    };
    AnswersService.prototype.getQuestionByCategoryId = function () {
        this.questionString = localStorage.getItem('question');
        this.questions = JSON.parse(this.questionString);
        console.log(this.questions);
        return this.questions;
    };
    // retrieve the questions of the category the user wants to view
    AnswersService.prototype.getQuestions = function () {
        this.catIdString = localStorage.getItem('categoryId');
        this.catId = JSON.parse(this.catIdString);
        console.log(this.catId);
        this.questionString = localStorage.getItem('questions');
        this.questions = JSON.parse(this.questionString);
        console.log(this.questions);
        // JSON.parse(localStorage.getItem('categoryId'))
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].id === this.catId) {
                this.questionaire['title'] = this.questions[i]['name'];
                console.log(this.questionaire['title']);
                this.questionaire['pages'] = this.questions[i]['questionaire'][0]['pages'];
                // this.answer = this.questions[i]['answers'][0]['answer'];
                console.log(this.answer);
                return this.questionaire;
            }
        }
    };
    AnswersService.prototype.getSurvey = function () {
        this.catIdString = localStorage.getItem('categoryedit');
        this.catId = JSON.parse(this.catIdString);
        console.log(this.catId);
        this.questionString = localStorage.getItem('question');
        this.questions = JSON.parse(this.questionString);
        console.log(this.questions);
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].id == JSON.parse(localStorage.getItem('categoryedit'))) {
                this.questionaire['title'] = this.questions[i]['name'];
                this.questionaire['description'] = this.questions[i]['description'];
                console.log(this.questionaire['title']);
                this.questionaire['pages'] = this.questions[i]['questionaire'][0]['pages'];
                // this.questionaire[] = this.questions[i]['answers'][0]['answer'];
                console.log(this.questionaire);
                return this.questionaire;
            }
        }
    };
    AnswersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AnswersService);
    return AnswersService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(http, _router) {
        this.http = http;
        this._router = _router;
        this._registerUrl = 'https://gptsbackend.eu-gb.mybluemix.net/api/auth/register/';
        this._loginUrl = 'https://gptsbackend.eu-gb.mybluemix.net/api/auth/login/';
        this.user_url = "https://gptsbackend.eu-gb.mybluemix.net/api/users/";
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this._registerUrl, user);
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this._loginUrl, user);
    };
    AuthService.prototype.logoutUser = function () {
        localStorage.removeItem('token');
        localStorage.clear();
        this.role = "Respondent";
        // LoginComponent.resetRole();
        this._router.navigate(['/login']);
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.saveUserId = function (id) {
        this.user_id = id;
        localStorage.setItem('userId', this.user_id);
        console.log(this.user_id);
    };
    AuthService.prototype.getUserId = function () {
        this.uId = localStorage.getItem('userId');
        this.uId = JSON.parse(this.uId);
        return this.uId;
    };
    AuthService.prototype.getRole = function (id) {
        return this.http.get(this.user_url + id + '/');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/loader.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    LoaderService.prototype.show = function () {
        this.isLoading.next(true);
    };
    LoaderService.prototype.hide = function () {
        this.isLoading.next(false);
    };
    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/services/profile.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.profileurl = "https://gptsbackend.eu-gb.mybluemix.net/api/profile/";
    }
    ProfileService.prototype.getProfile = function (id) {
        return this.http.get(this.profileurl + id + '/');
    };
    ProfileService.prototype.updateProfile = function (profile, id) {
        console.log(profile);
        return this.http.put(this.profileurl + id + '/', profile);
    };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/services/survey.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/survey.service.ts ***!
  \********************************************/
/*! exports provided: SurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyService", function() { return SurveyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SurveyService = /** @class */ (function () {
    function SurveyService(http) {
        this.http = http;
        // Url for questionaires endpoint
        this.json_url = 'https://gptsbackend.eu-gb.mybluemix.net/survey/questionaires/';
        // Url for categories endpoint
        this.category_url = 'https://gptsbackend.eu-gb.mybluemix.net/survey/categories/';
        this.answers_url = 'https://gptsbackend.eu-gb.mybluemix.net/survey/answers/';
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
        // global variables for storing data
        this.json = {};
        this.questions = { 'title': '', 'showProgressBar': 'top', 'pages': '' };
        this.category = { "name": '', "description": '' };
        this.test = {};
        this.categories = [];
    }
    // retrieve the questions of the category the user wants to view
    SurveyService.prototype.getQuestions = function () {
        console.log(this.questions);
        return this.questions;
    };
    SurveyService.prototype.getAnswers = function () {
        return this.storedAnswers;
    };
    SurveyService.prototype.storeAnswers = function (answer) {
        this.storedAnswers = answer;
        console.log(this.storedAnswers);
    };
    // stores the question to be viewed when the user clicks on view category
    SurveyService.prototype.saveQuestions = function (question) {
        // this.questions['title'] = question['title'];
        // this.questions['pages'] = question['pages']
        this.questions = question;
        // this.test = question;
        // // console.log(question)
    };
    // retrieves the saved questionaire
    SurveyService.prototype.getSurveys = function () {
        return this.json;
    };
    // saves the pages created on a questionaire
    SurveyService.prototype.saveSurvey = function (pages) {
        this.json['pages'] = pages;
    };
    // saves the category created when the scripter creates a new category
    SurveyService.prototype.saveCategory = function (title, desc) {
        this.category['name'] = title;
        this.category['description'] = desc;
    };
    // post request for adding the category created
    SurveyService.prototype.submitCategory = function () {
        return this.http.post(this.category_url, this.category);
    };
    // post request for saving the questionaire created
    SurveyService.prototype.submitSurvey = function (id) {
        this.json['category'] = id;
        console.log(this.json);
        return this.http.post(this.json_url, this.json);
    };
    // retrieve the categoryId for the questionaire being answered
    SurveyService.prototype.getCategoryId = function () {
        return this.categoryId;
    };
    // store the categoryId for the questionaire being answered
    SurveyService.prototype.setCategoryId = function (id) {
        this.categoryId = id;
        localStorage.setItem('categoryId', this.categoryId);
    };
    // get request for retrieving all the categories
    SurveyService.prototype.getCategory = function () {
        return this.http.get(this.category_url);
    };
    // stores the answers once the user submits
    SurveyService.prototype.saveAnswers = function (answer) {
        this.answers = answer;
        return this.http.post(this.answers_url, this.answers);
    };
    // created this 2 new methods
    SurveyService.prototype.postCategory = function (category) {
        return this.http.post(this.category_url, category);
    };
    SurveyService.prototype.putCategory = function (category) {
        this.editid = localStorage.getItem('categoryedit');
        return this.http.patch(this.category_url + this.editid + '/', category);
    };
    SurveyService.prototype.postQuestionnaire = function (questions) {
        return this.http.post(this.json_url, questions);
    };
    SurveyService.prototype.putQuestionnaire = function (questions) {
        this.editid = localStorage.getItem('categoryedit');
        return this.http.patch(this.json_url + this.editid + '/', questions);
    };
    SurveyService.prototype.deleteCategory = function (id) {
        return this.http.delete(this.category_url + id + '/');
    };
    SurveyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SurveyService);
    return SurveyService;
}());



/***/ }),

/***/ "./src/app/services/tokeninterceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/tokeninterceptor.service.ts ***!
  \******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");



var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(authService) {
        this.authService = authService;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        // const authService = this.injector.get(AuthService);
        var tokenizedReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + this.authService.getToken())
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\projects\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map