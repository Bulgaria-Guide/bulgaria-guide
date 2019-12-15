import React, { useState, useEffect, useCallback } from 'react';
import CommentsList from './List';
import FloatingButton from 'Components/UI/Button/Floating';
import NewCommentField from './New';
import View from 'Components/UI/View';
import Text from 'Components/UI/Text';
import useAccount from 'hooks/useAccount';
import APIClient from 'ApiClient';

const Comments = ({ sightId }) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comments, setComments] = useState([]);
  const { isLoggedIn } = useAccount();

  const label = showCommentForm ? '-' : '+';
  const color = showCommentForm ? 'red' : 'teal lighten-2';

  useEffect(() => {
    if (sightId) {
      const fetchComments = () => APIClient.getSightComments(sightId)
        .then(res => setComments(res))
        .catch(err => console.error(err));
      fetchComments();
    }
  }, [sightId]
  );

  const onAddComment = useCallback(newComment => {
    const newComments = comments;
    newComments.push(newComment);
    setComments(newComments);
    setShowCommentForm(false);
  }, [comments]);

  const commentsData = comments.length > 0
    ? <CommentsList comments={comments} updateCommentsList={setComments} />
    : <Text>Няма коментари за тази забележителност</Text>;

  return (
    <View>
      <h3>Коментари</h3>
      {isLoggedIn && <FloatingButton
        label={label}
        color={color}
        style={{ 'position': 'relative' }}
        onClick={() => setShowCommentForm(!showCommentForm)}
      />
      }
      {showCommentForm && <NewCommentField sightId={sightId} onAddComment={onAddComment} />}
      {commentsData}
    </View>
  );
};

export default Comments;
