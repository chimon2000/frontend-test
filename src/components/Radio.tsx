import React from "react";
import { css, cx } from "emotion";
import { CheckIcon } from "./icons/CheckIcon";
import { OvalIcon } from "./icons/OvalIcon";
import { displayFlexCls, alignItemsCenterCls } from "../styles/util";

export function Radio({ value, selected, onChange, onClick }: RadioProps) {
  return (
    <span className={cx(displayFlexCls, alignItemsCenterCls)}>
      <input
        className={css`
          display: none;
        `}
        type="radio"
        value={value}
        onChange={onChange}
        onClick={onClick}
        checked={value === selected}></input>
      {selected === value ? <CheckIcon></CheckIcon> : <OvalIcon></OvalIcon>}
      <span
        className={css`
          margin-right: 0.5em;
        `}></span>
    </span>
  );
}

export default Radio;

type RadioProps = {
  value: string | number;
  selected: string;
  onChange;
  onClick?;
};
