import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import backgroundImage from "/images/girl-magical-reading-book-girly-sparkles-5k-6016x4016-911.jpg";
import FileList from './components/FileList';
import MarkdownModal from './components/MarkdownModal';


const App = () => {
  const [fileList, setFileList] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const scrollPositionRef = useRef({ x: 0, y: 0 });
  const parentRef = useRef(null); // 用于引用父元素

  const openFile = (file) => {
    scrollPositionRef.current = {
      x: window.scrollX,
      y: window.scrollY
    };
    setSelectedFile(file);
  };

  const closeFile = () => {
    setSelectedFile(null);
  };

  useEffect(() => {
    const fetchMarkdownFiles = async () => {
      // 使用通配符匹配 public 目录下的任意层级的 Markdown 文件
      const folders = import.meta.glob('/**/*.md', { eager: false });
      const files = [];
      for (const path in folders) {
        try {
          const response = await fetch(path);
          const content = await response.text();
          const fileName = path.split('/').pop().replace('.md', '');
          files.push({
            id: crypto.randomUUID(),
            title: fileName,
            content,
            path // 添加文件路径信息
          });
        } catch (error) {
          console.error('Error fetching Markdown file:', error);
        }
      }
      setFileList(files);
    };

    fetchMarkdownFiles();
  }, []);

  useEffect(() => {
    const parentElement = parentRef.current;
    if (parentElement) {
      // 当父元素属性变化时，更新 CSS 变量
      const parentStyles = window.getComputedStyle(parentElement);
      parentElement.style.setProperty('--parent-bg-color', parentStyles.backgroundColor);
      parentElement.style.setProperty('--parent-opacity', parentStyles.opacity);
    }
  }, []);

  return (
    <div ref={parentRef} className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '100vh', overflowX: 'hidden', overflowY: 'auto' }}>
      <div className="parallax-layer absolute inset-0 bg-black opacity-20 transform -translateZ(1px) scale(2)"></div>
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-20 p-4 z-10 rounded-md w-3/4">
        <ul className="flex justify-center space-x-4">
          <li><a href="App.jsx" className="text-white hover:text-blue-300">首页</a></li>
          <li><a href="#" className="text-white hover:text-blue-300">关于</a></li>
          <li><a href="#" className="text-white hover:text-blue-300">文章</a></li>
        </ul>
      </nav>
      
      {/**内容容器 */}
      <div className="content-container mx-auto w-3/4 bg-white bg-opacity-80 p-8 rounded-md shadow-md relative top-1/2 transform mt-20" style={{
        position: 'relative',
        zIndex: 2
      }}>
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Home_Main</h1>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Main_Start</h2>
        <FileList fileList={fileList} openFile={openFile} />
      </div>
      {selectedFile && <MarkdownModal selectedFile={selectedFile} closeFile={closeFile} scrollPosition={scrollPositionRef.current} />}
    </div>
  );
};

export default App;