import React from 'react';

const FileList = ({ fileList, openFile }) => {
    return (
        <ul className="space-y-2">
            {/* 遍历文件列表，渲染每个文件的标题 */}
            {fileList.map((file) => (
                <li key={file.id}>
                    <button
                        className="text-blue-600 hover:underline"
                        onClick={() => openFile(file)}
                    >
                        {file.title}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default FileList;    