import React, { Component } from 'react';

class FileUpload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            studyMaterialId: null,
        };
    }

    componentDidMount() {
        this.setState({
            studyMaterialId: this.props.studyMaterialId,
        });
    }

    fileChangedHandler = (event) => {
        event.preventDefault();

        this.file = event.target.files[0]
        const fileName = this.file.name;
        const val = fileName.split(".")
        var imgId = val[0];
        var suffix = null;
        const extn = val[1];

        if (imgId.includes("_")) {
            const namesplit = imgId.split("_");
            imgId = namesplit[0];
            suffix = namesplit[1];
        }

        let formData = new FormData();
        formData.append("file", event.target.files[0]);
        formData.append("studyMaterialId", this.state.studyMaterialId);
        formData.append("imgId", imgId);
        formData.append("extn", extn);
        if (suffix) {
            formData.append("suffix", suffix);
        }

        fetch('http://localhost:8080/study/public/uploadPic', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
            .then(
                (result) => {
                    console.log('File successfully uploaded!');
                    alert("file uploaded succesfully");
                    this.props.reloadDetail();
                },
                (error) => {
                    console.log('error occurred!');
                    alert("Error uploading")
                });
    }

    render() {
        return (
            <div>
                <h4>Upload Finished Image</h4>
                <p><input type="file" onChange={this.fileChangedHandler} /></p>
            </div>
        );
    }
}
export default FileUpload;
