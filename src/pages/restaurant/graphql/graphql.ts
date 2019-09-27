import { gql } from "apollo-boost";

export const query = gql`
  query business($id: String!) {
    business(id: $id) {
      name
      rating
      price
      photos
      hours {
        is_open_now
      }
      categories {
        alias
        title
      }
      coordinates {
        latitude
        longitude
      }
      review_count
      location {
        address1
        city
        state
        postal_code
      }
      reviews {
        user {
          name
          image_url
        }
        text
        rating
        url
        time_created
      }
    }
  }
`;
