'use client';

import { RatingProps } from './Rating.props';
import s from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { GoStarFill } from 'react-icons/go';

export const Rating = ({
  isEditable = false,
  rating,
  setRaiting,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>),
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <GoStarFill
          size="25"
          color="#cacaca"
          className={cn(s.star, {
            [s.filled]: i < currentRating,
          })}
        />
      );
    });
    setRatingArray(updateArray);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
