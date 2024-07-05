# Customized Elements Polyfill

## Overview
Customized Elements Polyfill is a JavaScript library designed to provide support for Customized built-in elements in browsers that do not natively support them, primarily focusing on Safari. This polyfill ensures compatibility by extending the capabilities of browsers through a Universal Module Definition (UMD), allowing seamless integration into various environments.

## Installation
You can install the library via npm:
```bash
npm install customized-elements-polyfill
```

Alternatively, include it directly in your project:
```html
<script src="path/to/customized-elements-polyfill.js"></script>
```

## Usage
There's no need to manually invoke the polyfill for customized elements already in the DOM, as it's automatically called upon script execution.
To apply the polyfill to new elements, the library exports a single function named `runCustomizedElementsPolyfill` under the UMD format. Upon loading, it also defines a global variable `customizedElementsPolyfill` which encapsulates the polyfill functionality.

Example:
```javascript
// In your JavaScript file or script tag
customizedElementsPolyfill.run();
```

Or using import:
```javascript
// In your source codebase
import { runCustomizedElementsPolyfill } from 'customized-elements-polyfill'
runCustomizedElementsPolyfill();
```

## Compatibility
Customized Elements Polyfill is compatible with modern browsers and specifically targets environments lacking native support for Customized built-in elements, such as older versions of Safari.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests on our [GitHub repository](https://github.com/tadevel/customized-elements-polyfill).

## License
This project is licensed under the ISC License - see the [LICENSE](LICENSE.md) file for details.
