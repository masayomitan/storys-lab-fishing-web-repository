// src/pages/UserProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
import UserProfileComponent from '../components/UserProfileComponent';

function fetchUserProfile(userId) {
  // 実際のAPIのエンドポイントに変更してください。
  return axios.get(`https://api.example.com/users/${userId}`).then(res => res.data);
}

function UserProfile() {
  const { userId } = useParams();
  const { data: userProfile, isLoading, isError } = useQuery(['userProfile', userId], () => fetchUserProfile(userId));

  if (isLoading) return "Loading...";
  if (isError) return "An error occurred.";

  return (
    <Container maxWidth="lg">
      <UserProfileComponent user={userProfile} />
    </Container>
  );
}

export default UserProfile;
