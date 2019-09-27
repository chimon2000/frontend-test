import { gql } from "apollo-boost";

export const query = gql`
  query search(
    $categories: String!
    $location: String!
    $limit: Int!
    $openNow: Boolean!
  ) {
    search(
      categories: $categories
      location: $location
      limit: $limit
      open_now: $openNow
    ) {
      total
      business {
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
        reviews {
          text
          rating
          url
        }
      }
    }
  }
`;
