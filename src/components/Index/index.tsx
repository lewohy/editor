import React, { useState } from 'react';
import MonacoEditor, { EditorDidMount } from 'react-monaco-editor';
import './style.scss';

import StatusBar from '../StatusBar';
import StatusBarButton from '../StatusBar/StatusBarButton';

export default function Index(props: Readonly<{}>) {
    const [editor, setEditor] = React.useState(null);

    const onChangeLanguageClicked = () => {

    };

    const editorDidMount: EditorDidMount = (editor, monaco) => {
        // window.editor = editor;
        // window.monaco = monaco;

        setEditor(editor);
    };


    return (
        <div
            className="index">
            <div
                className="monaco-wrapper">
                <MonacoEditor
                    theme="vs-dark"
                    language="javascript"
                    
                    options={{
                        automaticLayout: true,
                        suggest: {
                            showStatusBar: true
                        }
                    }}
                    editorDidMount={editorDidMount}
                    />
            </div>

            <StatusBar>
                <StatusBarButton
                    text="Language"
                    click={onChangeLanguageClicked}
                    />
            </StatusBar>
        </div>
    );
};
