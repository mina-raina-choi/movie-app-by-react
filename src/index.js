import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// ReactDOM은 리액트를 웹사이트에 출력하는 걸 도와주는 모델
// React는 UI 라이브러리

// 만약 리액트를 모바일 앱에 올려놓고싶다? 그럴때는 reactNative