import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { RestaurantGrid } from "../../components/RestaurantGrid";
import { RestaurantCard } from "../../components/RestaurantCard";
import { css } from "emotion";
import styled from "@emotion/styled";
import { Hero } from "../../components/Hero";
import { query } from "./graphql";
import { MenuButton } from "../../components/MenuButton";
import { Radio } from "../../components/Radio";

export function Home() {
  const { loading, data, error, refetch } = useQuery(query, {
    variables: {
      categories: "restaurants",
      location: "charlotte",
      limit: 5,
      openNow: true
    }
  });
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedOpenNow, setSelectedOpenNow] = useState("");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  function handlePriceMenuChange(e) {
    setSelectedPrice(e.target.value);
  }
  function handleSelectedCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }
  function handleOpenNowChange(e) {
    console.log(selectedOpenNow);
    console.log(e.target.value);
    setSelectedOpenNow(selectedOpenNow ? "" : e.target.value);
  }

  const {
    search: { business }
  } = data;

  function renderPriceMenuButton() {
    return (
      <MenuButton>
        <MenuButton.Button>Price</MenuButton.Button>
        {prices.map(price => (
          <MenuButton.Item>
            <Label>
              <Radio
                value={price.value}
                selected={selectedPrice}
                onChange={handlePriceMenuChange}
              ></Radio>
              {price.name}
            </Label>
          </MenuButton.Item>
        ))}
      </MenuButton>
    );
  }

  function renderCategoryMenuButton() {
    return (
      <MenuButton>
        <MenuButton.Button>Category</MenuButton.Button>
        {categories.map(category => (
          <MenuButton.Item>
            <Label>
              <Radio
                value={category.value}
                selected={selectedCategory}
                onChange={handleSelectedCategoryChange}
              ></Radio>
              {category.name}
            </Label>
          </MenuButton.Item>
        ))}
      </MenuButton>
    );
  }

  function renderOpenNowButton() {
    console.log(selectedOpenNow);
    return (
      <Label
        className={css`
          border-bottom: solid 1px #c8c8c8;
          padding: 8px;
        `}
      >
        <Radio
          value={"open_now"}
          selected={selectedOpenNow}
          onChange={() => {}}
          onClick={handleOpenNowChange}
        ></Radio>
        Open Now
      </Label>
    );
  }

  return (
    <Main>
      <Header className="header">
        <Hero
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris
					magna, gravida non felis aliquet, sollicitudin dapibus est. Mauris
					suscipit, massa sed ultrices ultrices, ante."
          title="Restaurants"
        ></Hero>
      </Header>
      <Toolbar className="toolbar">
        <span className={spacerCls}>Filter By:</span>
        <span className={spacerCls}>{renderOpenNowButton()}</span>
        <span className={spacerCls}>{renderPriceMenuButton()}</span>
        {renderCategoryMenuButton()}
      </Toolbar>
      <Content className="content">
        <div>
          <h2
            className={css`
              margin-bottom: 20px;
              color: 333333;
              line-height: 40px;
              font-weight: 300;
            `}
          >
            All Restaurants
          </h2>
          <RestaurantGrid>
            {business.map((row, idx) => (
              <RestaurantCard
                key={"card" + idx}
                restaurant={row}
              ></RestaurantCard>
            ))}
          </RestaurantGrid>
        </div>
      </Content>
    </Main>
  );
}

const Header = styled("div")`
  padding: 20px 40px;
`;

const Toolbar = styled("div")`
  border-top: solid #e6e6e6 1px;
  border-bottom: solid #e6e6e6 1px;
  padding: 20px 40px;
  margin: 20px 0;
  display: flex;
  align-items: center;
`;

const Content = styled("article")`
  margin: 20px 40px;
`;

const Main = styled("div")`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    "header"
    "toolbar"
    "content"
    "footer";

  .header {
    grid-area: header;
  }
  .toolbar {
    grid-area: toolbar;
  }
  .content {
    grid-area: content;
  }
`;

const Label = styled("label")`
  display: inline-flex;
  cursor: pointer;
`;

const spacerCls = css`
  margin-right: 2em;
`;

const prices = [
  { value: "all", name: "All" },
  { value: "$", name: "$" },
  { value: "$$", name: "$$" },
  { value: "$$$", name: "$$$" },
  { value: "$$$$", name: "$$$$" }
];

const categories = [
  { value: "all", name: "All" },
  { value: "italian", name: "Italian" },
  { value: "seafood", name: "Seafood" },
  { value: "steakhouses", name: "Steakhouses" },
  { value: "japanese", name: "Japanese" },
  { value: "american", name: "American" },
  { value: "mexican", name: "Mexican" },
  { value: "thai", name: "Thai" }
];
