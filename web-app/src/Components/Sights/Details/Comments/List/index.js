import React from 'react';
import CommentCard from '../Card';
import View from 'Components/UI/View';
import constants from 'resources/constants';
// import APIClient from 'ApiClient';

const { comments } = constants;

// eslint-disable-next-line no-unused-vars
const CommentsList = ({ sightId }) => {
  // const [comments, setComment] = useState([]);

  // useEffect(() => {
  //   APIClient.getSightComments(sightId)
  //     .then(data => {
  //       console.log(data);
  //       setComment(data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       return null;
  //     });
  // }, [setSights]);

  const commentsList = comments.map(
    comment => <CommentCard comment={comment} key={comment.id} />
  );

  return (
    <View>
      {commentsList}
    </View>
  );
};

export default CommentsList;
