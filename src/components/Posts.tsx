import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions'

function Posts(props: any) {
    const [index, setIndex] = useState(99);

    useEffect(() => {
        props.fetchPosts();
    }, []);

    useEffect(() => {
        props.posts.unshift(props.newPost);
        setIndex((prevIndex) => prevIndex + 1);
    }, [props.newPost]);

    let postItems = props.posts.map((item: any) => {
        return (
            <div key={item.id}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
            </div>
        )
    });

    return (
        <div>
            <h1>Posts - {index}</h1>
            {postItems}
        </div>
    )
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object,
}

const mapStateToProps = (state: any) => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);