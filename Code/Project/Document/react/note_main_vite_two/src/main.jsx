import React from 'react';
import ReactDOM from 'react-dom/client';
// 导入主应用组件
import App from './App';
// 导入全局 CSS 文件
import './index.css';
// 导入 Markdown 渲染的 CSS 样式文件
import './markdown.css';

// 创建根节点
const root = ReactDOM.createRoot(document.getElementById('root'));
// 渲染主应用组件到根节点
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);    