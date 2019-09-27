import React from "react";
import { css } from "emotion";
import { RestaurantStarRating } from "./RestaurantStarRating";
import dayjs from "dayjs";

export function Comment({ review }) {
  return (
    <div
      className={`comment-item ${css`
        display: flex;
        margin: 2em 0;
      `}`}>
      <div
        className={css`
          display: flex;
        `}>
        <img height="80" width="80" src={review.user.image_url}></img>
        <div
          className={css`
            margin: 0 2em;
          `}>
          <div
            className={css`
              font-size: 22px;
              line-height: 24px;
              letter-spacing: 0.916667px;
              min-width: 7.5em;
            `}>
            {review.user.name}
          </div>
          <p
            className={css`
              font-size: 16px;
              line-height: 24px;
              color: #666666;
            `}>
            {dayjs(review.time_created).format("MM/DD/YY")}
          </p>
        </div>
      </div>
      <div>
        <RestaurantStarRating rating={review.rating}></RestaurantStarRating>
        <p
          className={css`
            font-size: 20px;
            line-height: 28px;
            letter-spacing: 1px;
          `}>
          {review.text}
        </p>
      </div>
    </div>
  );
}
