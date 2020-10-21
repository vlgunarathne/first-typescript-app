import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost} from '../actions/postActions'

function PostForm(props:any) {
    const [values, setValues] = useState({
        title: '',
        body: ''
    });

    const handleChange = (event:any) => {
        setValues({
            ...values,
            [event.target.name] : event.target.value
        });
    }

    const handleSubmit = (event:any) => {
        event.preventDefault();
        let post = {
            title: values.title,
            body: values.body
        } 
        props.createPost(post);
    }

    return (
        <div>
            <h1>Post Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label><br />
                    <input name="title" onChange={handleChange} type="text" value={values.title} />
                </div>
                <div>
                    <label>Body: </label><br />
                    <textarea name="body" onChange={handleChange} value={values.body} />
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);