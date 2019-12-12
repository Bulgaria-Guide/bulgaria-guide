import React, { useCallback } from 'react';
import APIClient from 'ApiClient';
import useField from 'hooks/useField';
import useAccount from 'hooks/useAccount';

const NewCommentField = ({ sightId }) => {
  const { content, handleChange } = useField();
  const { authToken } = useAccount();

  const handleSubmit = useCallback(event => {
    console.log(content);
    APIClient.addSightComment(sightId, content, authToken);
    event.preventDefault();
  }, [authToken, content, sightId]);

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              value={content}
              onChange={handleChange}
              id="textarea1"
              className="materialize-textarea" />
            <label
              className="active"
              style={{
                'backgroundColor': 'transparent',
                'paddingLeft': 10
              }}
              htmlFor="textarea1">Напишете вашият коментар
            </label>
            <input
              className="waves-effect waves-light btn"
              style={{ 'zIndex': 0 }}
              type="submit"
              value="Постави" />
          </div>
        </div>
      </form>
    </div >
  );
};
export default NewCommentField;
