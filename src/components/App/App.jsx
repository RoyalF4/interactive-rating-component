import RatingForm from '../RatingForm/RatingForm';
import FormSubmit from '../FormSubmit/FormSubmit';
import styles from './App.module.css';
import { useState } from 'react';

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(null);

  return (
    <main className={styles.main}>
      {!isSubmitted && (
        <div className="rating">
          <div className={styles.icon}>
            <img src="/images/icon-star.svg" alt="" />
          </div>
          <RatingForm
            setRating={setRating}
            setIsSubmitted={setIsSubmitted}
            rating={rating}
          />
        </div>
      )}
      {isSubmitted && <FormSubmit rating={rating} />}
    </main>
  );
}
