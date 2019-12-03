import React from 'react';

const NewCommentField = () => (
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label
            className="active"
            style={{
              'background-color': 'transparent',
              'paddingLeft': 10
            }}
            for="textarea1">Напишете вашият коментар
          </label>
          <a className="waves-effect waves-light btn" style={{ 'zIndex': 0 }} id="button">
            Постави
          </a>
        </div>
      </div>
    </form>
  </div >
);
export default NewCommentField;
