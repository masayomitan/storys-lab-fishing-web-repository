// src/pages/CreatePost.js
import React, { useState } from 'react';
import { Container, Button } from '@mui/material';
import { useMutation } from 'react-query';
import axios from 'axios';
import PostFormComponent from '../components/PostFormComponent';

function createPost(postData) {
  // 実際のAPIのエンドポイントに変更してください。
  return axios.post('https://api.example.com/posts', postData).then(res => res.data);
}

function CreatePost() {
  const [postData, setPostData] = useState({ title: '', content: '' });
  
  const mutation = useMutation(createPost, {
    onSuccess: () => {
      // 投稿成功時の処理 (例: ページのリダイレクト等)
    },
  });

  const handleSubmit = () => {
    mutation.mutate(postData);
  };

  return (
    <Container maxWidth="lg">
      <PostFormComponent postData={postData} setPostData={setPostData} />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
}

export default CreatePost;
