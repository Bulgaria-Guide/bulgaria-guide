import React from 'react';
import CommentCard from '../Card';
import View from '../../../../UI/View';
import constants from '../../../.././../constants';

const comments = constants.comments

const CommentsList = () => {
  const commentsList = comments.map(
    comment => <CommentCard comment={comment} key={comment.id}/>
  );

  return (
    <View>
      <h3>Коментари</h3>
      {commentsList}
    </View>
  );
};

export default CommentsList;
