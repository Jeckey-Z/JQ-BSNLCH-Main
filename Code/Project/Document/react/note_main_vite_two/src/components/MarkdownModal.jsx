import React, { Children } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const MarkdownModal = ({ selectedFile, closeFile, scrollPosition }) => {
    return (
        <>
            {/**遮罩层 */}
            <div
                className="fixed inset-0 bg-black/50 z-40"
                onClick={closeFile}
            />

            {/**模态窗口主体 */}
            <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl ">
                <div className="bg-white p-8 rounded-md shadow-md relative max-h-[80vh] overflow-y-auto">
                    <button
                        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
                        onClick={closeFile}
                    >
                        X
                    </button>

                    <ReactMarkdown
                        remarkPlugins={[remarkGfm, remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                        components={{
                            // 自定义数学公式渲染
                            math: ({ children }) => (
                                <span className="katex-math">{children}</span>
                            ),
                            inlineMath: ({ children }) => (
                                <span className="katex-inline">{children}</span>
                            )
                        }}
                    >
                        {selectedFile.content}
                    </ReactMarkdown>
                </div>
            </div>
        </>

        // <div className="fixed z-50" style={{
        //     top: `calc(50vh + ${scrollPosition.y}px)`,
        //     left: `calc(50vw + ${scrollPosition.x}px)`,
        //     transform: 'translate(-50%, -50%)'
        // }}>
        //     <div className="bg-white p-8 rounded-md shadow-md relative z-10 max-h-[80vh] overflow-y-auto">
        //         {/* 关闭模态窗口的按钮 */}
        //         <button
        //             className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        //             onClick={closeFile}
        //         >
        //             <i className="fa-solid fa-xmark"></i>
        //         </button>
        //         {/* 渲染 Markdown 内容 */}
        //         <ReactMarkdown remarkPlugins={[remarkGfm]}>
        //             {selectedFile.content}
        //         </ReactMarkdown>
        //     </div>
        // </div>
    );
};

export default MarkdownModal;    