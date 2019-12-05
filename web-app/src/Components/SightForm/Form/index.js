import React from 'react';

const SightForm = () => (
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate" />
          <label for="last_name">Име</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate" />
          <label for="last_name">Адрес</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate" />
          <label for="last_name">Работно време от: </label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate" />
          <label for="last_name">Работно време до: </label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate" />
          <label for="last_name">Цена</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate" />
          <label for="last_name">Описание</label>
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
