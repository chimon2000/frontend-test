import React, { PropsWithChildren } from "react";
import { StarIcon } from "./icons/StarIcon";

type RestaurantStarRatingProps = PropsWithChildren<{
  rating?: number;
}>;

export function RestaurantStarRating({
  rating = 0
}: RestaurantStarRatingProps) {
  const roundedRating = Math.floor(rating);

  const stars = Array(5)
    .fill(null)
    .map((_, idx) => {
      const starRating = idx + 1;
      const isPartialRating = rating != roundedRating;
      const fill =
        roundedRating >= starRating
          ? "whole"
          : roundedRating < starRating && isPartialRating
          ? "half"
          : "empty";

      return <StarIcon fill={fill}></StarIcon>;
    });

  return <div>{stars}</div>;
}
