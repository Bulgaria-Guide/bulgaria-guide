import React, { useMemo, useCallback } from 'react';
import CommentCard from '../Card';
import View from 'Components/UI/View';

const CommentsList = ({ comments, updateCommentsList }) => {

  const onDeleteComment = useCallback(commentId => () => {
    const newCommentsList = comments.filter(comment => comment.id !== commentId);
    updateCommentsList(newCommentsList);
  }, [comments, updateCommentsList]);

  const commentsList = useMemo(
    () => comments.map(comment => (
      <CommentCard
        comment={comment}
        key={comment.id}
        onDeleteComment={onDeleteComment(comment.id)}
      />)
    ), [comments, onDeleteComment]);

  return (
    <View>
      {commentsList}
    </View>
  );
};

export default CommentsList;
