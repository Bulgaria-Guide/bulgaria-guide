import React from 'react';
import Text from 'Components/UI/Text';
import useRole from 'hooks/useRole';
import FloatingButton from 'Components/UI/Button/Floating';

const CommentCard = props => {
  const { isAdmin } = useRole();

  const deleteComment = () => {
    // APIClient.deleteComment(props.comment.id);
  };

  return (
    <div className="col s12 m7">
      <div className="card horizontal">
        <div className="card-stacked">
          {isAdmin &&
            <FloatingButton
              to="/home"
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
            <Text className="header">{props.comment.authorName}</Text>
          </div>
          <div className="card-content grey lighten-4" >
            <Text>{props.comment.content}</Text>
          </div>
        </div>
      </div>
    </div >
  );
};
export default CommentCard;
