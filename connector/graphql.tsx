import { withUrqlClient } from "next-urql";
import { createClient } from "urql";

const GRAPHQL_ENDPOINT = "https://countries-274616.ew.r.appspot.com";

export const graphQLClient = createClient({ url: GRAPHQL_ENDPOINT });

export const withGraphQLSS = withUrqlClient(() => ({ url: GRAPHQL_ENDPOINT }));
