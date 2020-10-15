// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import { ChakraProvider } from "@chakra-ui/core";
import { Provider } from "urql";
import { graphQLClient } from "../connector/graphql";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider value={graphQLClient}>
            <ChakraProvider resetCSS>
                <Component {...pageProps} />
            </ChakraProvider>
        </Provider>
    );
};

export default MyApp;
