import React from "react";
import { Button } from "./Button";
import { css } from "emotion";

export function Hero({ title, description }: HeroProps) {
  return (
    <div>
      <h1
        className={css`
          line-height: 64px;
          font-weight: 300;
        `}
      >
        {title}
      </h1>
      <p
        className={css`
          color: #666;

          @media (min-width: 768px) {
            max-width: 50%;
          }
        `}
      >
        {description}
      </p>
    </div>
  );
}

type HeroProps = {
  title: string;
  description: string;
};
