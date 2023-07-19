# ChromeExtension

This repository contains code examples to create Chrome Extensions.

#STRUCTURE

A Chrome Extension requires a folder containing at least 2 files:
- a json file
- a javascript file

The manifest.json file activates the javascript.

```json
{
    "manifest_version": 3,
    "name": "Name of the Chrome Extension",
    "action": {},
    "version": "1.0",
    "description": "Description of the Chrome Extension",
    "background": {
        "service_worker": "service-worker.js"
    },
    "permissions": ["activeTab", "scripting", "storage"],
    "icons": {
        "16": "assets/img/icon.png",
        "32": "assets/img/icon.png",
        "48": "assets/img/icon.png",
        "128": "assets/img/icon.png"
    }
}
```


#IMPLEMENTATION

On Google Chrome click on the top right icon with the three dots > click on "Extensions" > "Manage Extensions".
Click on "Load Unpack" and select the corresponding folder.
You can now select your Extension from the Chrome toolbar.
If changes have been done to the Extension source, make sure to update the Extension in the Extension Manager page.

#EXAMPLES

1. An Extension that changes the background colour of a webpage when clicked on.
2. An Extension that activates a popup which allows text and image replacement on a website.
3. An Extension that creates a custom landing page whenever a new tab is opened.





