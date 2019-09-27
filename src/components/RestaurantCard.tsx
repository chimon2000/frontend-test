import React, { PropsWithChildren } from "react";
import { css, cx } from "emotion";
import { Button } from "./Button";
import { RestaurantStarRating } from "./RestaurantStarRating";
import { Link } from "react-router-dom";
import DotIcon from "./icons/DotIcon";
import {
  displayFlexCls,
  alignItemsCenterCls,
  transformUppercaseCls
} from "../styles/util";

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
          className={cx(
            transformUppercaseCls,
            displayFlexCls,
            alignItemsCenterCls
          )}>
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
      <Link
        to={`/restaurants/${restaurant.id}`}
        className={cx(displayFlexCls, linkCls)}>
        <Button
          className={css`
            flex: 1;
          `}>
          Learn More
        </Button>
      </Link>
    </div>
  );
}

const linkCls = css`
  text-decoration: none;
`;
