'use client';
import { RatingProps } from './Rating.props';
import s from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState, KeyboardEvent } from 'react';
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
            [s.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGElement>) =>
            isEditable && handleSpace(i + 1, e)
          }
        />
      );
    });
    setRatingArray(updateArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (isEditable || !setRaiting) {
      return;
    }
    setRaiting(i);
  };

  // const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
  //   if (e.code != 'Space' || setRaiting) {
  //     return;
  //   }
  //   setRaiting(i);
  // };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
