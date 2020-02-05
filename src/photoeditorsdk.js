import React, { Component } from "react";

import { UIEvent, PhotoEditorSDKUI } from "photoeditorsdk";

class PhotoEditorSDK extends Component {
  constructor(props) {
    super(props)

    /** If this config is changed the it will always override the control gui settings */
    this.config = {
      image:
        "https://static.photoeditorsdk.com/libraries/unsplash/raw/PZAxzN5DPkc.jpg",
      engine: {
        license: ""
      },
      assetBaseUrl: "https://imgly.github.io/pesdk-html5/assets",
      library: {
        enableUpload: true,
        enableWebcam: true,
      }
    };
    this.loadingLocalImage = true;
    this.editor = null;    
  }

  componentDidMount() {
    this.init();
  }

  exportfn = () => {
    this.editor.export(false).then(image => {
      console.log(image);
    });
  };

  init() {
    /** Example of loading alocal image  */
    if (this.loadingLocalImage) {
      const image = new Image();
      image.onload = () => {
        this.config.image = image;
        this.initEditor();
      };
      image.src = "./example.jpg";
    } else {
      this.initEditor();
    }
  }

  initEditor() {
    this.editor = new PhotoEditorSDKUI({
      ...this.config,
      container: document.getElementById("container")
    });
    this.editor.on(UIEvent.EDITOR_READY, () => {
      // console.log('Editor is ready')
    });
    this.editor.on(UIEvent.EXPORT, imageSrc => {
      // console.log('exported', imageSrc)
    });
  }

  render() {
    return <div id="container" className="container" />;
  }
}

export default PhotoEditorSDK
