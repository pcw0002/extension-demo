This extension demonstrates how the updateTab listener behaves in chrome and see the differences between SPA navigation and native browser navigation.

## Running this project

- Pull master
- Npm install
- Npm run watch (for dev) / npm run start

## Loading the app as a chrome extension
- Navigate to chrome://extensions
- Make sure Developer mode is toggled on
- Click `Load unpacked`
- Navigate to the /build directory and select it

## Testing different URLs/etc
- Open up scriptCheckerService.js and content-script.js
- Change the placeholder injection URL and inputId (the ID of a form field on the webpage, currently when the script is injected it prints some text in the input field)
- Go to chrome://extensions and reload the extension
- Navigate to or reload the injection URL and see the log's that are printed to the console.
- Feel free to add more logs to get more information
