import React, { useEffect, useState } from 'react'
import classes from './foodPage.module.css';
import { useParams } from 'react-router-dom';
import { getById } from '../../services/foodService';

export default function FoodPage() {
    const [ food, setFood ] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getById(id).then(setFood);
    }, [id]);
  return ( 
    <><>
          {food && (
              <div className={classes.container}>
                  <img
                      className={classes.image}
                      src={`/foods/${food.imageUrl}`}
                      alt={food.name} />
              </div>
          )}

      </><div>FoodPage</div></>
  )
}
