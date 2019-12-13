import React from 'react';
import Text from 'Components/UI/Text';
import useAccount from 'hooks/useAccount';
import FloatingButton from 'Components/UI/Button/Floating';
import APIClient from 'ApiClient';

const CommentCard = ({ comment, onDeleteComment }) => {
  const { isAdmin, authToken } = useAccount();

  const deleteComment = event => {
    APIClient.deleteComment(comment.id, authToken)
      .then(onDeleteComment)
      .catch(console.err);
    event.preventDefault();
  };

  return (
    <div className="col s12 m7">
      <div className="card horizontal">
        <div className="card-stacked">
          {isAdmin &&
            <FloatingButton
              to="#"
              onClick={deleteComment}
              label="X"
              style={{
                'top': 0,
                'right': 0
              }}
            />
          }
          <div className="card-action grey lighten-1" style={{
            'paddingTop': 0,
            'paddingBottom': 0
          }}>
            <Text className="header">{comment.authorName}</Text>
          </div>
          <div className="card-content grey lighten-4" >
            <Text>{comment.content}</Text>
          </div>
        </div>
      </div>
    </div >
  );
};
export default CommentCard;
