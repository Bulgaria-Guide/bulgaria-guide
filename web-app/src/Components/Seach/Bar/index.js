import React from 'react';
import './styles.css';

const categoryDropdown = (
  <select defaultValue="" className="browser-default">
    <option value="" disabled>Изберете категория:</option>
    <option value="all">Всички</option>
    <option value="historical">Исторически</option>
    <option value="culture">Културни</option>
    <option value="sports">Спортни</option>
    <option value="rest">Отдих</option>
  </select>
);

const ratingDropdown = (
  <select defaultValue="" className="browser-default">
    <option value="" disabled>Филитрирайте по рейтинг:</option>
    <option value="1">С по-висока оценка от 1</option>
    <option value="2">С по-висока оценка от 2</option>
    <option value="3">С по-висока оценка от 3</option>
    <option value="4">С по-висока оценка от 4</option>
    <option value="5">С по-висока оценка от 5</option>
    <option value="6">С по-висока оценка от 6</option>
    <option value="7">С по-висока оценка от 7</option>
    <option value="8">С по-висока оценка от 8</option>
    <option value="9">С по-висока оценка от 9</option>
  </select>
);

const sortDropdown = (
  <select defaultValue="" className="browser-default">
    <option value="" disabled>Изберете начин на сортиране:</option>
    <option value="rating">По рейтинг</option>
    <option value="alphabetical" selected>По азбучен ред</option>
  </select>
);

const openedOly = (
  <div className="switch">
    <label>
      Покажи само отворени
      <input type="checkbox" />
      <span className="lever"></span>
    </label>
  </div>
);

const SearchBar = () => (
  <div className="search-bar">
    <form action="#">
      <div className="row">
        <div className="col s12">
          <h4>Намери туристически обекти</h4>
        </div>
        <div className="input-field col s4">{categoryDropdown}</div>
        <div className="input-field col s4">{ratingDropdown}</div>
        <div className="input-field col s4">{sortDropdown}</div>
        <div className="input-field col s3">{openedOly}</div>
        <div className="input-field col s9">
          <a className="waves-effect waves-light btn-large" style={{zIndex: 0}} id="button">
            ТЪРСИ
          </a>
        </div>
      </div>
    </form>
  </div>
);

export default SearchBar;
