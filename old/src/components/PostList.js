// src/components/PostList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

function PostList({ posts }) {
    return (
        <List>
            {posts.map((post) => (
                <ListItem key={post.id} button component={Link} to={`/post/${post.id}`}>
                    <ListItemText primary={post.title} />
                </ListItem>
            ))}
        </List>
    );
}

export default PostList;
