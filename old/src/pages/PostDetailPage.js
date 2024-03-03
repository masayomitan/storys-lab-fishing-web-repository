// src/pages/PostDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
import PostDetailComponent from '../components/PostDetailComponent';

function fetchPostDetail(postId) {
  // 実際のAPIのエンドポイントに変更してください。
  return axios.get(`https://api.example.com/posts/${postId}`).then(res => res.data);
}

function PostDetail() {
  const { postId } = useParams();
  const { data: postDetail, isLoading, isError } = useQuery(['postDetail', postId], () => fetchPostDetail(postId));

  if (isLoading) return "Loading...";
  if (isError) return "An error occurred.";

  return (
    <Container maxWidth="lg">
      <PostDetailComponent post={postDetail} />
    </Container>
  );
}

export default PostDetail;
