import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { createWidget } from '@jinto.j/integrated-widget-package'; 
import { createWidget as createWidgetIframe } from '@jinto.j/widget-package-iframe';
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="container">
    
    <h1>Hello Test Project!</h1>
    <div id="widget-container"></div>
    <div id="another-widget-container"></div>
    <button id="loginBtn">Open Login</button>
    <button id="infoBtn">Show Info</button>
    <button id="iframeLoginBtn">Open Iframe Login</button>
    <button id="iframeInfoBtn">Show Iframe Info</button>
`

const widget = createWidget('#widget-container');
const iframeWidget = createWidgetIframe('#another-widget-container');

const handleLoginComplete = (userDetails) => {
  console.log('Logged in:', userDetails);
};

document.querySelector('#loginBtn').addEventListener('click', () => {
  widget.openLogin({ onLoginComplete: handleLoginComplete });
});

document.querySelector('#infoBtn').addEventListener('click', () => {
  widget.showInfo();
});

document.querySelector('#iframeLoginBtn').addEventListener('click', () => {
  iframeWidget.openLogin({ onLoginComplete: handleLoginComplete });
});

document.querySelector('#iframeInfoBtn').addEventListener('click', () => {
  iframeWidget.showInfo();
});