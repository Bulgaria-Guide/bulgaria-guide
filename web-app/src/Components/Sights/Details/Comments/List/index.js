import React, { useMemo } from 'react';
import CommentCard from '../Card';
import View from 'Components/UI/View';

const CommentsList = ({ comments }) => {

  const commentsList = useMemo(
    () => comments.map(comment => <CommentCard comment={comment} key={comment.id} />),
    [comments]);

  return (
    <View>
      {commentsList}
    </View>
  );
};

export default CommentsList;
