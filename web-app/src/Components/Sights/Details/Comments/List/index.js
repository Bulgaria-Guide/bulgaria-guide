import React, { useCallback } from 'react';
import CommentCard from '../Card';

const CommentsList = ({ comments, updateCommentsList }) => {

  const onDeleteComment = useCallback(commentId => () => {
    const newCommentsList = comments.filter(comment => comment.id !== commentId);
    updateCommentsList(newCommentsList);
  }, [comments, updateCommentsList]);

  const commentsList = comments.map(comment => (
    <CommentCard
      comment={comment}
      key={comment.id}
      onDeleteComment={onDeleteComment(comment.id)}
    />));

  return commentsList;
};

export default CommentsList;
