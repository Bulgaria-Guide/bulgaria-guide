import React from 'react';
import CommentCard from '../Card';
import View from 'Components/UI/View';
import constants from 'resources/constants';
// import APIClient from 'ApiClient';

const { comments } = constants;

const CommentsList = () => {
  // const comments = APIClient.getSightComments(sightId);

  const commentsList = comments.map(
    comment => <CommentCard comment={comment} key={comment.id} />
  );

  return (
    <View>
      {commentsList}
    </View>
  );
};

export default CommentsList;
