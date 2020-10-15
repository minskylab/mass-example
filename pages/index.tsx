import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    Button,
    CloseButton,
    Flex,
    ListItem,
    Spinner,
    UnorderedList,
} from "@chakra-ui/core";
import { NextPage } from "next";
import React from "react";
import { withGraphQLSS } from "../connector/graphql";
import { useCountryInformationQuery } from "../generated/graphql";

const IndexPage: NextPage = () => {
    const [{ data, fetching, error }] = useCountryInformationQuery();

    return (
        <Box width="100%" p={[5, 6, 7]}>
            <Flex flexDirection={["column", "row"]}>
                <Box>
                    <Button>ABC</Button>
                </Box>
                <Box>
                    <Button bg={"green.400"}>DEF</Button>
                </Box>
            </Flex>

            <Box>
                <Flex my={3}>
                    <Box>{fetching && <Spinner />}</Box>
                </Flex>
                <Flex>
                    {data && (
                        <UnorderedList>
                            {data?.Country?.map((country) => (
                                <ListItem key={country._id}>{country.name}</ListItem>
                            ))}
                        </UnorderedList>
                    )}
                    {error && (
                        <Alert status="error">
                            <AlertIcon />
                            <AlertTitle mr={2}>GraphQL Error!</AlertTitle>
                            <AlertDescription>{error.message}</AlertDescription>
                            <CloseButton position="absolute" right="8px" top="8px" />
                        </Alert>
                    )}
                </Flex>
            </Box>
        </Box>
    );
};

// This line is necessary to the correct working of "withUrqlClient".
IndexPage.getInitialProps = async ({}) => {
    return;
};

export default withGraphQLSS(IndexPage);
