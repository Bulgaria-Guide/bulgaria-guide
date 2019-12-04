import React from 'react';
import './styles.css';

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
      <fieldset class="rating">
        <h1>Рейтинг</h1>
        <input type="radio" id="star5" name="rating" value="5" /><label class="full"
          for="star5" title="Awesome - 5 stars"></label>
        <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half"
          for="star4half" title="Pretty good - 4.5 stars"></label>
        <input type="radio" id="star4" name="rating" value="4" /><label class="full"
          for="star4" title="Pretty good - 4 stars"></label>
        <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half"
          for="star3half" title="Meh - 3.5 stars"></label>
        <input type="radio" id="star3" name="rating" value="3" /><label class="full"
          for="star3" title="Meh - 3 stars"></label>
        <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half"
          for="star2half" title="Kinda bad - 2.5 stars"></label>
        <input type="radio" id="star2" name="rating" value="2" /><label class="full"
          for="star2" title="Kinda bad - 2 stars"></label>
        <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half"
          for="star1half" title="Meh - 1.5 stars"></label>
        <input type="radio" id="star1" name="rating" value="1" /><label class="full"
          for="star1" title="Sucks big time - 1 star"></label>
        <input type="radio" id="starhalf" name="rating" value="half" /><label class="half"
          for="starhalf" title="Sucks big time - 0.5 stars"></label>
      </fieldset>
      <div class="btn">
        <span>Снимка </span>
        <input type="file" />
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text" />
      </div>

    </form>
  </div>
);
export default SightForm;
