import { RatingProps } from './Rating.props';
import s from './Rating.module.css';
import cn from 'classnames';
import { useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';

export const Rating = ({
  isEditable = false,
  rating,
  setRaiting,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>),
  );

  const constructArray = (currentRating: number) => {
    const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
      return <AiOutlineStar className={cn(s.star)} />;
    });
  };

  return <div {...props}></div>;
};
