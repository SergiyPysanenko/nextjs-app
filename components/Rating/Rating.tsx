import { RatingProps } from "./Rating.props";
import s from "./Rating.module.css";
import cn from "classnames";
import { JSXElementConstructor, useState } from "react";
import {AiOutlineStar} from 'react-icons/ai'

export const Rating = ({
  isEditable = "false",
  rating,
  setRaiting,
  className,
  ...props
}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    newArray(5).fill(<></>);
    
    const constructArray = (currentRating: number) => {
      const updateArray = ratingArray.map((r: JSX.Element, i: number) =>)
      return (
        < AiOutlineStar />
      )
       
  );

  return <div {...props}></div>;
};
