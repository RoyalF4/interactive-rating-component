import PropTypes from 'prop-types';
import styles from './RadioInput.module.css';

RadioInput.propTypes = {
  value: PropTypes.number,
  setRating: PropTypes.func,
  setError: PropTypes.func,
};

export default function RadioInput({ value, setRating, setError }) {
  function handleChange(e) {
    setRating(e.target.value);
    setError(false);
  }

  return (
    <>
      <input
        type="radio"
        value={value}
        id={value}
        name="rating"
        className="sr-only"
        onChange={handleChange}
      />
      <label htmlFor={value} className={styles.label}>
        {value}
      </label>
    </>
  );
}
