import React from 'react';

const FileList = ({ fileList, openFile }) => {
    // 定义函数, 获取文件目录信息
    const getDirectory = (path) => {
        const parts = path.split('/');
        
        return parts.slice(0, -1).join('/');
    };

    // 假设当前目录为根目录
    const currentDirectory = '';

    return (
        <ul className="space-y-2">
            {/* 遍历文件列表，渲染每个文件的标题 */}
            {fileList.map((file) => {
                const fileDirectory = getDirectory(file.path);
                let itemClassName = 'text-blue-600 hover:underline';

                if (fileDirectory === currentDirectory) {
                    // 同目录文件形式
                    itemClassName += ' same-directory';
                } else if (fileDirectory.startsWith(currentDirectory)) {
                    // 子目录文件样式
                    itemClassName += ' sub-directory';
                }

                return (
                    <li key={file.id}>
                        <button
                            className={itemClassName}
                            onClick={() => openFile(file)}
                        >
                            {file.title}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default FileList;    


















