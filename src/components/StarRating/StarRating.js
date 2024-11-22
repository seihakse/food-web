import React from 'react';
import classes from './starRating.module.css';

export default function StarRating({ stars, size }) {
  const styles = {
    width: size + 'px',
    height: size + 'px',
    marginRight: size / 6 + 'px',
  };

  function Star({ number }) {
    const halfNumber = number - 0.5;

    // Dynamically determine the star's style
    const starStyle =
      stars >= number
        ? classes.filled // Fully filled star
        : stars >= halfNumber
        ? classes.halfFilled // Half-filled star
        : classes.empty; // Empty star

    return (
      <span className={`${classes.star} ${starStyle}`} style={styles}>
        ★
      </span>
    );
  }

  return (
    <div className={classes.starRating}>
      {[1, 2, 3, 4, 5].map((number) => (
        <Star key={number} number={number} />
      ))}
    </div>
  );
}

StarRating.defaultProps = {
  size: 18,
};
