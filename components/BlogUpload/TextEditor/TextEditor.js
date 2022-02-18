import React, { Component } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html'
import { Container } from '@mui/material'

export default class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    })
  }
  render() {
    const { editorState } = this.state
    const blogData = (e) => {
      console.log(e)
    }
    return (
      <Container>
        <div>
          <h2 className="mb-2 text-xl text-white">
            Write your documentation or blog below 🌝
          </h2>
          <div
            className="rounded-lg border px-2"
            style={{
              minHeight: '400px',
              backgroundColor: '#f7f4ec',
            }}
          >
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={this.onEditorStateChange}
            />
          </div>
          {/* <button
            className="bg-gray-400"
            onClick={() =>
              this.props.blogData(
                draftToHtml(convertToRaw(editorState?.getCurrentContent()))
              )
            }
          >
            Send Data
          </button> */}
          <button
            className="bg-gray-400"
            onClick={() =>
              blogData(
                draftToHtml(convertToRaw(editorState?.getCurrentContent()))
              )
            }
          >
            Send Data
          </button>
          <div
            className="text-white"
            dangerouslySetInnerHTML={{
              __html: `${draftToHtml(
                convertToRaw(editorState?.getCurrentContent())
              )}`,
            }}
          ></div>
        </div>
      </Container>
    )
  }
}
