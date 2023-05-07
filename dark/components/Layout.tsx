import { Box, useBreakpointValue } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import Aside from "./Aside";
import Navigation from "./Navigation";
import Screen from "./Screen";

export default function Layout({ children }: any) {
  const mobile = useBreakpointValue({ base: false, md: true });
  return (
    <>
      {mobile ? (
        <>
          <Header />
          <Aside />
          <>
            <Navigation />
            <Screen />
            <Box paddingTop="100">{children}</Box>
          </>
        </>
      ) : (
        <>
          <Header />
          <>
            <Navigation />
            <Screen />
            <Box paddingTop="100">{children}</Box>
          </>
          <Footer />
        </>
      )}
    </>
  );
}
