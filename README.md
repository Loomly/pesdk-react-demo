<p align="center">
  <img src="http://static.photoeditorsdk.com/logo.png" />
</p>

# PhotoEditor SDK integration example for ReactJS

This repository contains an example for integrating PhotoEditor SDK into a ReactJS application.
PhotoEditor SDK provides a ReactUI which exposes a React Component that can be easily used inside
any ReactJS application.

## Note

[PhotoEditor SDK](https://www.photoeditorsdk.com/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=React-Demo)
is a product of img.ly GmbH. In order to use PhotoEditor SDK inside one of your products, please
[request a license](https://account.photoeditorsdk.com/pricing/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=React-Demo).

## Installation

Clone the repository, inside the cloned repository run:

`npm install`

Afterwards, run `npm start` to compile the application and run a web server. Go to
`http://localhost:8080/` to see the example in action.

## Listening for Events

You can use the editor instance in order to register callbacks for events.

```javascript
componentDidMount () {
  this.editor.on(UIEvent.EDITOR_READY, () => {
    console.log("Ready!")
  })

  this.editor.on(UIEvent.EXPORT, img => {
    console.log("Exported!")
  })
}
```

Please refer to our [guides](https://docs.photoeditorsdk.com/guides/html5/v4/concepts/events) for examples and a list of all available events.

## Accessing the SDK functions

Using the editor instance mentioned above, you now have access to the UI, Editor and SDK and all of their functions:

```javascript
componentDidMount () {
  this.editor.on(PhotoEditorUI.Events.EDITOR_READY, () => {
    var sdk = this.editor.getSDK()
  })
}
```

## License

Please see [LICENSE](https://github.com/imgly/pesdk-html5-rails/blob/master/LICENSE.md) for licensing details.

## Authors and Contributors

Made 2013-2019 by img.ly

## Support or Contact

Use our [service desk](http://support.photoeditorsdk.com) for bug reports or support requests. To request a commercial license, please use the [license request form](https://account.photoeditorsdk.com/pricing/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=React-Demo) on our website.
