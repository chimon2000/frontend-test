import React, { PropsWithChildren } from "react";
import { css } from "emotion";
import { Button } from "./Button";
import { RestaurantStarRating } from "./RestaurantStarRating";
type RestaurantCardProps = PropsWithChildren<{
  restaurant: Restaurant;
}>;

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;

        > :not(:last-child) {
          margin-bottom: 10px;
        }
      `}
    >
      <img
        className={css`
          height: 200px;
        `}
        src={restaurant.photos[0]}
      />
      <div>{restaurant.name}</div>
      <RestaurantStarRating rating={restaurant.rating}></RestaurantStarRating>
      <div
        className={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <span>
          {restaurant.categories[0].title} {restaurant.price}
        </span>
        <span
          className={css`
            text-transform: uppercase;
          `}
        >
          {restaurant.hours[0].is_open_now ? "open now" : "closed"}
        </span>
      </div>
      <Button>Learn More</Button>
    </div>
  );
}
