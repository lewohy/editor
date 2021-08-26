import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import './style.scss';

export default function Index(props: Readonly<{}>) {
    return (
        <div
            className="index">
            <MonacoEditor
                theme="vs-dark"
                language="javascript"
                
                options={{
                    automaticLayout: true,
                    suggest: {
                        showStatusBar: true
                    }
                }}
                
                />

        </div>
    );
};
