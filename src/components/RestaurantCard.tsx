import React, { PropsWithChildren } from "react";
import { css } from "emotion";
import { Button } from "./Button";
import { RestaurantStarRating } from "./RestaurantStarRating";
import { Link } from "react-router-dom";
import DotIcon from "./icons/DotIcon";

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
      `}>
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
          color: #757575;
        `}>
        <span>
          {restaurant.categories[0].title} {restaurant.price}
        </span>
        <span
          className={css`
            text-transform: uppercase;
            display: flex;
            align-items: center;
          `}>
          <DotIcon
            className={css`
              height: 10px;
            `}
            filled={restaurant.hours[0].is_open_now}></DotIcon>
          <span
            className={css`
              margin-left: 0.5em;
            `}>
            {restaurant.hours[0].is_open_now ? "open now" : "closed"}
          </span>
        </span>
      </div>
      <Link to={`/restaurants/${restaurant.id}`}>
        <Button>Learn More</Button>
      </Link>
    </div>
  );
}
