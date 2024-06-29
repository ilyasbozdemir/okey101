// components/Packages.js
import { Box, Skeleton, Stack } from "@chakra-ui/react";

const Packages = () => {
  return (
    <Stack spacing={3} mt="3">
      {Array.from(Array(3).keys()).map((id) => (
        <Box
          key={id}
          cursor="pointer"
          borderWidth="1px"
          shadow="md"
          bg="#fbfdff"
          position="relative"
          rounded="md"
          borderRadius="5px"
        >
          {id === 0 ? (
            <Skeleton height="15rem" borderRadius="5px 5px 0 0" width="100%" />
          ) : (
            ""
          )}
          <Stack isInline justifyContent="space-between" mt={2} p={5}>
            <Box width="100%">
              <Stack isInline align="center" marginBottom="5px">
                <Box>
                  <Skeleton
                    size="sm"
                    width="2em"
                    height="2em"
                    borderRadius="50%"
                  />
                </Box>
                <Skeleton height="14px" width="20%" />
              </Stack>
              <Box pl="2.5em">
                <Skeleton height="16px" width="100%" />
                <Stack spacing={2} mt={1} isInline alignItems="center">
                  <Skeleton height="14px" width="80%" />
                </Stack>
                <Stack
                  justifyContent="space-between"
                  isInline
                  alignItems="center"
                  mt={4}
                >
                  <Stack spacing={2} width="50%">
                    <Skeleton height="12px" width="40%" rounded="full" my={1} />
                    <Skeleton height="12px" width="40%" rounded="full" my={1} />
                  </Stack>
                  <Skeleton height="12px" width="20%" rounded="full" my={1} />
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};



export default function Loading() {
  return (
    <>
      <Packages />
    </>
  );
}
