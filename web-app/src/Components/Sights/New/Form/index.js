import React, { useState, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import useAccount from 'hooks/useAccount';
import TextField from 'Components/UI/Field/Text';
import APIClient from 'ApiClient';

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
    <div className="row">
      <form
        className="col s12"
        onSubmit={handleSubmit}>
        <div className="row">
          <TextField fieldName="name" label="Име" />
          <label>Изберете категория</label>
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
          <TextField fieldName="address" label="Адрес" />
          <TextField fieldName="longitude" label="Longitude" />
          <TextField fieldName="latitude" label="Latitude" />
          <TextField fieldName="workingTimeFrom" label="Работно време от:" />
          <TextField fieldName="workingTimeTo" label="Работно време до:" />
          <TextField fieldName="price" label="Цена:" />
          <TextField fieldName="description" label="Описание:" />
          <div>
            <span>Снимка: </span>
            <input type="file" name="picture" />
          </div>
          {hasFormError && <p style={{ 'color': 'red' }}>Моля попълнете коректно всички полета</p>}
          <div className="input-field col s9">
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
  );
};

export default SightForm;
