import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

ReactDom.render((
  <div>
    <h1>rc-tabs 组件 例子</h1>
    <ul>
      <li>
        <a href="./demo1.html">基础应用</a>
      </li>
      <li>
        <a href="./demo2.html">样式重写</a>
      </li>
    </ul>
  </div>
), document.getElementById('j-app'));
