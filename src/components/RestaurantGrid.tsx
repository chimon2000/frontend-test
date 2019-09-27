import React, { PropsWithChildren } from "react";
import { css } from "emotion";

type RestaurantGridProps = PropsWithChildren<{}>;

export function RestaurantGrid({ children }: RestaurantGridProps) {
  return (
    <div
      className={css`
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 20px;
      `}
    >
      {children}
    </div>
  );
}
