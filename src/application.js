import React, { Component } from "react";
import ReactDOM from 'react-dom';

import PhotoEditorSDK from "./photoeditorsdk";

class App extends Component {
  render() {
    return <PhotoEditorSDK />;
  }
}

window.onload = function () {
  const container = document.querySelector('.js-app')
  ReactDOM.render(<App />, container)
}
