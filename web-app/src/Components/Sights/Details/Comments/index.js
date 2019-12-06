import React, { useState } from 'react';
import CommentsList from './List';
import FloatingButton from 'Components/UI/Button/Floating';
import NewCommentField from './New';
import View from 'Components/UI/View';
import useAccount from 'hooks/useAccount';

const Comments = ({ sightId }) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const { isLoggedIn } = useAccount();

  const label = showCommentForm ? '-' : '+';
  const color = showCommentForm ? 'red' : 'teal lighten-2';

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
      {showCommentForm && <NewCommentField sightId={sightId} />}
      <CommentsList sightId={sightId} />
    </View>
  );
};

export default Comments;
