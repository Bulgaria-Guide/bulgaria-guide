import React from 'react';

const SightForm = () => (
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div className="input-field col s12">
          <textarea
            id="textarea1"
            className="materialize-textarea" />
          <label
            className="active"
            style={{
              'backgroundColor': 'transparent',
              'paddingLeft': 0
            }}
            htmlFor="textarea1">Име
          </label>
        </div>
        <div className="input-field col s12">
          <textarea
            id="textarea1"
            className="materialize-textarea" />
          <label
            className="active"
            style={{
              'backgroundColor': 'transparent',
              'paddingLeft': 0
            }}
            htmlFor="textarea1">Адрес
          </label>
        </div>
        <div className="input-field col s12">
          <textarea
            id="textarea1"
            className="materialize-textarea" />
          <label
            className="active"
            style={{
              'backgroundColor': 'transparent',
              'paddingLeft': 0
            }}
            htmlFor="textarea1">Работно време от:
          </label>
        </div>
        <div className="input-field col s12">
          <textarea
            id="textarea1"
            className="materialize-textarea" />
          <label
            className="active"
            style={{
              'backgroundColor': 'transparent',
              'paddingLeft': 0
            }}
            htmlFor="textarea1">Работно време до:
          </label>
        </div>
        <div className="input-field col s12">
          <textarea
            id="textarea1"
            className="materialize-textarea" />
          <label
            className="active"
            style={{
              'backgroundColor': 'transparent',
              'paddingLeft': 0
            }}
            htmlFor="textarea1">Цена
          </label>
        </div>
        <div className="input-field col s12">
          <textarea
            id="textarea1"
            className="materialize-textarea" />
          <label
            className="active"
            style={{
              'backgroundColor': 'transparent',
              'font-size': '55px;',
              'paddingLeft': 0
            }}
            htmlFor="textarea1">Описание
          </label>
        </div>
      </div>
      <div class="btn">
        <span>Снимка </span>
        <input type="file" />
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text" />
      </div>
      <label>Изберете категория</label>
      <select class="browser-default">
        <option value="" disabled selected>Изберете категория:</option>
        <option value="all">Всички</option>
        <option value="historical">Исторически</option>
        <option value="culture">Културни</option>
        <option value="sports">Спортни</option>
        <option value="rest">Отдих</option>
      </select>
    </form>
  </div>
);
export default SightForm;
