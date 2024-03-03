// src/components/PostDetailComponent.js
import React from 'react';
import { Typography, Paper, Divider } from '@mui/material';

function PostDetail({ post }) {
    return (
        <Paper style={{ padding: '2rem' }}>
            <Typography variant="h5">{post.title}</Typography>
            <Divider style={{ margin: '1rem 0' }} />
            <Typography>{post.content}</Typography>
        </Paper>
    );
}

export default PostDetail;
