import React from "react";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router";
import { query } from "./graphql";
import { css } from "emotion";
import ReactMapGL, { Marker } from "react-map-gl";

import { Hero } from "../../components/Hero";
import { Comment } from "../../components/Comment";
import { RestaurantStarRating } from "../../components/RestaurantStarRating";
import MarkerIcon from "../../components/icons/MarkerIcon";
import DotIcon from "../../components/icons/DotIcon";

function Restaurant() {
  let { id } = useParams();
  const { loading, data, error, refetch } = useQuery(query, {
    variables: { id }
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const { business } = data;

  return (
    <Main>
      <Summary className="summary">
        <Hero description="" title={business.name}></Hero>
        <RestaurantStarRating rating={business.rating}></RestaurantStarRating>
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            color: #666666;
            font-size: 22px;
            line-height: 32px;
          `}>
          <span>
            {business.categories[0].title} • {business.price}
          </span>
          <span
            className={css`
              display: flex;
              align-items: center;
            `}>
            <DotIcon
              className={css`
                height: 1em;
              `}
              filled={business.hours[0].is_open_now}></DotIcon>
            <span
              className={css`
                margin-left: 0.5em;
              `}>
              {business.hours[0].is_open_now ? "Open Now" : "Closed"}
            </span>
          </span>
        </div>
      </Summary>
      <Detail className="detail">
        <div
          className={css`
            display: flex;
          `}>
          <ReactMapGL
            width={400}
            height={200}
            latitude={business.coordinates.latitude}
            longitude={business.coordinates.longitude}
            zoom={11}
            mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
            onViewportChange={viewport => {
              const { width, height, latitude, longitude, zoom } = viewport;
              // Optionally call `setState` and use the state to update the map.
            }}>
            <Marker
              latitude={business.coordinates.latitude}
              longitude={business.coordinates.longitude}
              offsetTop={-40}>
              <MarkerIcon></MarkerIcon>
              {/* <div
                className={css`
                  background-color: white;
                  border-radius: 4px;
                  max-width: 8rem;
                `}>
                <p>{business.name}</p>
              </div> */}
            </Marker>
          </ReactMapGL>
          {business.photos.map(photo => (
            <img
              key={photo}
              className={css`
                height: 200px;
                margin-left: 20px;
              `}
              src={photo}
            />
          ))}
        </div>
      </Detail>
      <CommentSummary className="comments">
        <div
          className={css`
            font-size: 22px;
            line-height: 32px;
            letter-spacing: 0.916667px;
            color: #666666;
          `}>
          {business.review_count} Reviews
        </div>
        {business.reviews.map(review => (
          <Comment review={review}></Comment>
        ))}
      </CommentSummary>
    </Main>
  );
}

export default Restaurant;

const Main = styled("div")`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    "summary"
    "detail"
    "comments";

  .summary {
    grid-area: summary;
  }
  .detail {
    grid-area: detail;
  }
  .comments {
    grid-area: comments;
  }
`;

const Summary = styled("div")`
  padding: 2em 40px;
`;
const Detail = styled("div")`
  padding: 2em;
  border-top: solid #e6e6e6 1px;
  border-bottom: solid #e6e6e6 1px;
`;
const CommentSummary = styled("div")`
  margin: 20px 40px;
  .comment-item {
    border-bottom: solid #e6e6e6 1px;
    padding-bottom: 2em;
  }
`;
