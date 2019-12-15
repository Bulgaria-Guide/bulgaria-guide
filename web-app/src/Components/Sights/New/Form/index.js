import React, { useState, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import useAccount from 'hooks/useAccount';
import TextField from 'Components/UI/Field/Text';
import APIClient from 'ApiClient';
import './styles.css';
import NumberField from 'Components/UI/Field/Number';

const SightForm = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [hasFormError, setHasFormError] = useState(false);
  const { authToken } = useAccount();

  const handleSubmit = useCallback(event => {
    event.preventDefault();
    console.log(event.target);
    const data = new FormData(event.target);
    const price = parseFloat(data.get('price'));
    data.set('price', price);
    const longitude = parseFloat(data.get('longitude'));
    data.set('longitude', longitude);
    const latitude = parseFloat(data.get('latitude'));
    data.set('latitude', latitude);

    APIClient.createSight(data, authToken)
      .then(() => setShouldRedirect(true))
      .catch(() => setHasFormError(true));

  }, [authToken]);

  return (
    <div className="wrapper">
      <div className="row">
        <form
          className="col s12"
          onSubmit={handleSubmit}>
          <div className="row">
            <TextField fieldName="name" label="Име" cols={6} />
            <div className="input-field col s6">
              <select
                defaultValue=""
                name="category"
                className="browser-default">
                <option value="" disabled>Изберете категория:</option>
                <option value="historical">Исторически</option>
                <option value="culture">Културни</option>
                <option value="sports">Спортни</option>
                <option value="rest">Отдих</option>
              </select>
            </div>
            <TextField fieldName="address" label="Адрес" cols={10} />
            <NumberField fieldName="longitude" label="Longitude" cols={1} />
            <NumberField fieldName="latitude" label="Latitude" cols={1} />
            <NumberField fieldName="workingTimeFrom" label="Работно време от:" cols={3} />
            <NumberField fieldName="workingTimeTo" label="Работно време до:" cols={3} />
            <NumberField fieldName="price" label="Цена:" cols={3} />
            <div className="input-field col s3">
              <span>Качи снимка: </span>
              <input type="file" name="picture" />
            </div>
            <div class="input-field col s12">
              <textarea id="textarea1" class="materialize-textarea"></textarea>
              <label
                className="active"
                htmlFor="textarea1"
                style={{
                  'backgroundColor': 'transparent',
                  'paddingLeft': 0
                }}>Описание</label>
            </div>
            {
              hasFormError &&
              <p style={{ 'color': 'red' }}>
                Моля попълнете коректно всички полета
              </p>
            }
            <div className="input-field col s12">
              <input
                className="waves-effect waves-light btn-large"
                style={{
                  'zIndex': 0,
                  'flex': 1
                }}
                id="button"
                type="submit"
                value="ДОБАВИ"
              />
            </div>
          </div>
        </form>
        {shouldRedirect && <Redirect to="/home" />}
      </div>
    </div>
  );
};

export default SightForm;
