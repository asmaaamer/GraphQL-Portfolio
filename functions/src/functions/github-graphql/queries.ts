export const PinnedReposQuery = `
  query PinnedRepos {
  viewer {
    pinnedItems(first: 3) {
      edges {
        node {
          ... on Repository {
            name
            description
            pushedAt
            url
            homepageUrl
          }
        }
      }
    }
  }
}
`
