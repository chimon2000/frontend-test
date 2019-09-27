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
import { Button } from "../../components/Button";

export function Home() {
  const [selectedCategories, setSelectedCategories] = useState(["all"]);
  const [selectedPrices, setSelectedPrices] = useState(["all"]);
  const [selectedOpenNow, setSelectedOpenNow] = useState();

  const { loading, data, error, refetch } = useQuery(query, {
    variables: {
      categories: selectedCategories
        .map(category => (category === "all" ? "restaurants" : category))
        .join(","),
      location: "charlotte",
      limit: 15,
      openNow: !!selectedOpenNow,
      price: selectedPrices
        .map((price, index) =>
          price === "all" ? "1,2,3,4" : (index + 1).toString()
        )
        .join(",")
    }
  });

  if (error) return <div>{error.message}</div>;

  function handlePriceMenuChange(e) {
    const updatedPrices =
      e.target.value === "all"
        ? ["all"]
        : selectedPrices
            .filter(price => price !== "all")
            .concat(e.target.value);

    setSelectedPrices(updatedPrices);
  }
  function handleSelectedCategoryChange(e) {
    const updatedCategories =
      e.target.value === "all"
        ? ["all"]
        : selectedCategories
            .filter(category => category !== "all")
            .concat(e.target.value);

    setSelectedCategories(updatedCategories);
  }

  function handleOpenNowChange(e) {
    setSelectedOpenNow(selectedOpenNow ? undefined : e.target.value);
  }

  function handleClearAllClicked() {
    setSelectedOpenNow(undefined);
    setSelectedCategories(["all"]);
    setSelectedPrices(["all"]);
  }

  const {
    search: { business }
  } = data || { search: {} };

  function renderPriceMenuButton() {
    return (
      <MenuButton>
        <MenuButton.Button>Price</MenuButton.Button>
        {prices.map(price => (
          <MenuButton.Item key={`${price.name}`}>
            <Label>
              <Radio
                value={price.value}
                selected={mapSelected(selectedPrices, price.value)}
                onChange={handlePriceMenuChange}></Radio>
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
          <MenuButton.Item key={`${category.name}`}>
            <Label>
              <Radio
                value={category.value}
                selected={mapSelected(selectedCategories, category.value)}
                onChange={handleSelectedCategoryChange}></Radio>
              {category.name}
            </Label>
          </MenuButton.Item>
        ))}
      </MenuButton>
    );
  }

  function renderOpenNowButton() {
    return (
      <Label
        className={css`
          border-bottom: solid 1px #c8c8c8;
          padding: 8px;
          color: #002b56;
        `}>
        <Radio
          value={"open_now"}
          selected={selectedOpenNow}
          onChange={() => {}}
          onClick={handleOpenNowChange}></Radio>
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
          title="Restaurants"></Hero>
      </Header>
      <Toolbar className="toolbar">
        <span>
          <span className={spacerCls}>Filter By:</span>
          <span className={spacerCls}>{renderOpenNowButton()}</span>
          <span className={spacerCls}>{renderPriceMenuButton()}</span>
          {renderCategoryMenuButton()}
        </span>

        <Button variant="secondary" onClick={handleClearAllClicked}>
          Clear All
        </Button>
      </Toolbar>
      <Content className="content">
        <div>
          <h2
            className={css`
              margin-bottom: 20px;
              color: 333333;
              line-height: 40px;
              font-weight: 300;
            `}>
            All Restaurants
          </h2>

          {!loading && (
            <RestaurantGrid>
              {business.map((row, idx) => (
                <RestaurantCard
                  key={"card" + idx}
                  restaurant={row}></RestaurantCard>
              ))}
            </RestaurantGrid>
          )}
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
  justify-content: space-between;
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

const mapSelected = (selectedItems, currentValue) =>
  selectedItems.find(selected => selected === currentValue);
