import { Manager, Reference, Popper } from "react-popper";
import React, { PropsWithChildren, useState } from "react";
import { css } from "emotion";
import styled from "@emotion/styled";
import CaretDownIcon from "./icons/CaretDownIcon";
import CaretUpIcon from "./icons/CaretUpIcon";

export const MenuButton = ({ children }: PropsWithChildren<{}>) => {
  const [hideMenu, setHideMenu] = useState(true);
  const childrenArray = React.Children.toArray(children);
  const button = childrenArray.find(
    (child: any) => child.type === MenuButton.Button
  );
  const items = childrenArray.filter(
    (child: any) => child.type === MenuButton.Item
  );

  function handleButtonClick() {
    setHideMenu(!hideMenu);
  }

  return (
    <Manager>
      <Reference>
        {({ ref }) => (
          <div
            ref={ref}
            onClick={handleButtonClick}
            className={css`
              display: inline-block;
              border-bottom: solid 1px #c8c8c8;
            `}
          >
            {button}
            {hideMenu ? (
              <CaretDownIcon></CaretDownIcon>
            ) : (
              <CaretUpIcon></CaretUpIcon>
            )}
          </div>
        )}
      </Reference>
      <Popper placement="bottom-start">
        {({ ref, style, placement, arrowProps }) => (
          <div
            ref={ref}
            style={style}
            data-placement={placement}
            className={css`
              display: ${hideMenu && "none"};
              min-width: 9em;
              background: #ffffff;
              border: 1px solid #c8c8c8;
              box-sizing: border-box;
              box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.1),
                inset 0px -1px 0px #c8c8c8;
            `}
          >
            {items}
            <div ref={arrowProps.ref} style={arrowProps.style} />
          </div>
        )}
      </Popper>
    </Manager>
  );
};

MenuButton.Button = styled("button")`
  color: #002b56;
  text-align: left;
  min-width: 8.5em;
  padding: 8px;
  outline: none;
  border: none;
  background-color: white;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  display: inline-block;
`;

MenuButton.Item = styled("li")`
  list-style: none;
  padding: 15px 15px 0 15px;
  &:last-of-type {
    padding-bottom: 15px;
  }
`;
