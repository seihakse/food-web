import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';
import classes from './thumbnails.module.css';
import Price from '../Price/Price';

export default function Thumbnails({ foods }) {
  if (!Array.isArray(foods) || foods.length === 0) {
    return <p style={{ textAlign: 'center', margin: '20px 0', color: '#233C67', fontWeight: 'bolder', fontSize: '1.2rem' }}>No foods available</p>;
  }

  return (
      <ul className={classes.list}>
      {foods.map((food) => (
        <li key={food.id}>
          <Link to={`/food/${food.id}`}>
            <img
              className={classes.image}
              src={`/foods/${food.imageUrl}`}
              alt={food.name}
            />
            <div className={classes.content}>
              <div className={classes.name}>{food.name}</div>
              <span
                className={`${classes.favorite} ${food.favorite ? '' : classes.not}`}
              >
                ❤
              </span>
              <div className={classes.starts}>
                <StarRating stars={food.stars} />
              </div>
              <div className={classes.product_item_footer}>
                <div className={classes.cook_time}>
                  <span>🕒</span>
                  {food.cookTime}
                </div>
              </div>
              <div className={classes.price}>
                <Price price={food.price} />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
