import { gql } from "apollo-boost";

export const query = gql`
  query search(
    $categories: String!
    $location: String!
    $limit: Int!
    $openNow: Boolean!
    $price: String!
  ) {
    search(
      categories: $categories
      location: $location
      limit: $limit
      open_now: $openNow
      price: $price
    ) {
      total
      business {
        id
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
      }
    }
  }
`;
