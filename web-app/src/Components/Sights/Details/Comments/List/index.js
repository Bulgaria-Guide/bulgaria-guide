import React from 'react';
import CommentCard from '../Card';
import View from '../../../../UI/View';

const comments = [
    {
      'id': '1',
      'content': 'test-content',
      'authorName': 'name1'
    }, {
      'id': '2',
      'content': 'test-content',
      'authorName': 'name1'
    }, {
      'id': '3',
      'content': 'test-content',
      'authorName': 'name1'
    }
  ];

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
