// src/pages/Posts.js
import React from 'react';
import { Container } from '@mui/material';
import PostList from '../components/PostList';
import { useQuery } from 'react-query';
import axios from 'axios';

function fetchPosts() {
  // 実際のAPIのエンドポイントに変更してください。
  return axios.get("https://api.example.com/posts").then(res => res.data);
}

function Posts() {
  const { data: posts, isLoading, isError } = useQuery('posts', fetchPosts);

  if (isLoading) return "Loading...";
  if (isError) return "An error occurred.";

  return (
    <Container maxWidth="lg">
      <PostList posts={posts} />
    </Container>
  );
}

export default Posts;
