import React from 'react';
import Text from '../../../../UI/Text';

const CommentCard = props => (
    <div className="col s12 m7">
      <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-action grey lighten-1" style={{ 'paddingTop': 0,
'paddingBottom': 0 }}>
            <Text className="header">{props.comment.authorName}</Text>
          </div>
          <div className="card-content grey lighten-4" >
            <Text>{props.comment.content}</Text>
          </div>
        </div>
      </div>
    </div>
);

export default CommentCard;
