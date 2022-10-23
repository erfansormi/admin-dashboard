import React, { useState } from 'react';
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

//css
import styles from "./textEditor.module.css"

// components
import TitlePage from '../TitlePage/TitlePage';

const content = { "entityMap": {}, "blocks": [{ "key": "637gr", "text": "Initialized from content state.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }] };

const TextEditor = () => {
    // const contentState = convertFromRaw(content);
    const [state, setState] = useState({
        contentState: convertFromRaw(content)
    })

    const onContentStateChange: Function = (contentState: any) => {
        setState({ contentState });
    };

    return (
        <>
            <TitlePage category='app' title='editor' />
            <div>
                <Editor
                    wrapperClassName="demo-wrapper"
                    editorClassName={styles.editor}
                    onContentStateChange={onContentStateChange}
                    toolbarClassName={styles.toolbar}
                />
            </div>
        </>
    )
}

export default TextEditor;