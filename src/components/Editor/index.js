import React, { Component } from 'react';
import { Label, Input } from 'reactstrap';
import marked from 'marked';

class Editor extends Component {
    constructor() {
        super();

        this.state = {
            text: ""
        }
    }

    componentDidMount() {
        const localText = localStorage.getItem('text');
        if (localText) {
            this.setState({ text: localText })
        }
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
        localStorage.setItem('text', e.target.value);
    }

    render() {
        const { text } = this.state;
        return (
            <div className="container">
                <div id="editor">
                    <Label for="editor" style={{ fontWeight: "bold" }}>Editor</Label>
                    <Input
                        type="textarea"
                        name="text"
                        id="edit"
                        value={text}
                        onChange={this.handleChange}
                        style={{ height: 200 }}
                    />
                </div>
                <div id="preview">
                    <Label for="preview" style={{ fontWeight: "bold" }}>Preview</Label>
                    <div dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
                </div>
            </div>
        )
    }
}

export default Editor;