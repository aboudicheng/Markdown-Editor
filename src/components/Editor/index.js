import React, { Component } from 'react';
import { Label, Input, Button, Alert } from 'reactstrap';
import marked from 'marked';

class Editor extends Component {
    constructor() {
        super();

        this.state = {
            text: "",
            alert: false,
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

    handleCopy = () => {
        //Make sure the text is not empty
        if (this.state.text !== "") {
            //Select all texts from textarea
            document.getElementById('edit').select();

            //Copy those texts
            document.execCommand('copy');

            //Deselect texts
            window.getSelection().removeAllRanges()

            this.setState({ alert: true });
        }
    }

    handleClose = () => {
        this.setState({ alert: false });
    }

    render() {
        const { text, alert } = this.state;
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

                {alert && <Alert color="info" toggle={this.handleClose}>
                    Copied Successfully!
                </Alert>}
                <Button color="info" onClick={this.handleCopy}>Copy to clipboard</Button>

                <div id="preview">
                    <Label for="preview" style={{ fontWeight: "bold" }}>Preview</Label>
                    <div dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
                </div>
            </div>
        )
    }
}

export default Editor;