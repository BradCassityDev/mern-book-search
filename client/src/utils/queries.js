import gql from 'graphql-tag';

export const QUERY_ME = gql`
  query thoughts($username: String) {
    me {
         _id
         username
         email
         bookCount
         savedBooks {
           bookId
           title
           authors
           description
           image
           link
         }
       }
   }
`;