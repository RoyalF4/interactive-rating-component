import styles from './FormSubmit.module.css';
import PropTypes from 'prop-types';

FormSubmit.propTypes = {
  rating: PropTypes.string,
};

export default function FormSubmit({ rating }) {
  return (
    <div className={styles.thanks}>
      <img src="/images/illustration-thank-you.svg" alt="" />
      <span className={styles.report}>You selected {rating} out of 5</span>
      <h2>Thank you!</h2>
      <p className={styles.subtext}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&apos;t hesitate to get in touch!
      </p>
    </div>
  );
}
