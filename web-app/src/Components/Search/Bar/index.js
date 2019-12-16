import React, { useMemo, useCallback } from 'react';
import './styles.css';
import useField from 'hooks/useField';

const SearchBar = ({ onSubmit }) => {
  const categoryField = useField('');
  const ratingField = useField('');
  const sortMethodField = useField('');
  // const [openedOnlyField, setOpenedOnlyField] = useState(false);

  const categoryDropdown = useMemo(() => (
    <select
      value={categoryField.content}
      onChange={categoryField.handleChange}
      className="browser-default"
    >
      <option disabled>Изберете категория:</option>
      <option value="">Всички</option>
      <option value="historical">Исторически</option>
      <option value="culture">Културни</option>
      <option value="sports">Спортни</option>
      <option value="rest">Отдих</option>
    </select>
  ), [categoryField.content, categoryField.handleChange]);

  const ratingDropdown = useMemo(() => (
    <select
      value={ratingField.content}
      onChange={ratingField.handleChange}
      className="browser-default"
    >
      <option value="" disabled>Филитрирайте по рейтинг:</option>
      <option value="1">С по-висока оценка от 1</option>
      <option value="2">С по-висока оценка от 2</option>
      <option value="3">С по-висока оценка от 3</option>
      <option value="4">С по-висока оценка от 4</option>
    </select>
  ), [ratingField.content, ratingField.handleChange]);

  const sortDropdown = useMemo(() => (
    <select
      value={sortMethodField.content}
      onChange={sortMethodField.handleChange}
      className="browser-default"
    >
      <option value="" disabled>Изберете начин на сортиране:</option>
      <option value="rating">По рейтинг</option>
      <option value="name">По азбучен ред</option>
    </select>
  ), [sortMethodField.content, sortMethodField.handleChange]);

  // const openedOnly = useMemo(() => (
  //   <div className="switch">
  //     <label>
  //       Покажи само отворени
  //       <input
  //         type="checkbox"
  //         value={openedOnlyField}
  //         onChange={() => setOpenedOnlyField(!openedOnlyField)}
  //       />
  //       <span className="lever"></span>
  //     </label>
  //   </div>
  // ), [openedOnlyField]);

  const handleSubmit = useCallback(event => {
    const data = {
      'category': categoryField.content,
      'minRating': ratingField.content,
      'sortMethod': sortMethodField.content
      // 'isWorking': openedOnlyField
    };
    if (onSubmit) {
      onSubmit(data);
    }
    event.preventDefault();
  }, [
    categoryField.content,
    onSubmit,
    ratingField.content,
    sortMethodField.content
  ]);

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col s12">
            <h4 align="center" >Намери туристически обекти</h4>
          </div>
          <div className="input-field col s4">{categoryDropdown}</div>
          <div className="input-field col s4">{ratingDropdown}</div>
          <div className="input-field col s4">{sortDropdown}</div>
          {/* <div className="input-field col s3">{openedOnly}</div> */}
          <div className="input-field col s12">
            <input
              className="waves-effect waves-light btn-large"
              style={{ 'zIndex': 0 }}
              id="button"
              type="submit"
              value="ТЪРСИ"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
