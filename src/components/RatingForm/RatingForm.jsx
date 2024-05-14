import styles from './RatingForm.module.css';
import RadioInput from '../RadioInput/RadioInput';
import PropTypes from 'prop-types';
import { useState } from 'react';

RatingForm.propTypes = {
  setRating: PropTypes.func,
  setIsSubmitted: PropTypes.func,
  rating: PropTypes.string,
};

export default function RatingForm({ setRating, setIsSubmitted, rating }) {
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (rating) {
      setIsSubmitted(true);
    } else {
      setError(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className={styles.title}>How did we do?</h2>
      <p className={styles.subtext}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <fieldset className={styles.fieldset}>
        <legend className="sr-only">Rating</legend>
        <RadioInput value={1} setRating={setRating} setError={setError} />
        <RadioInput value={2} setRating={setRating} setError={setError} />
        <RadioInput value={3} setRating={setRating} setError={setError} />
        <RadioInput value={4} setRating={setRating} setError={setError} />
        <RadioInput value={5} setRating={setRating} setError={setError} />
      </fieldset>
      <button className={styles.button}>Submit</button>
      {error && <span className={styles.error}>Please select a rating</span>}
    </form>
  );
}
