import { gql } from "apollo-boost";

export const query = gql`
  query search(
    $categories: String!
    $price: String!
    $location: String
    $openNow: Boolean
    $limit: Int
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
