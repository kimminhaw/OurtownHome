import { useBreakpointValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const ScreenPc = styled.div`
  width: 100%;
  height: 170px;
  position: fixed;
  top: 0px;
  z-index: 2;
  background-color: white;
`;
const Screenmobile = styled.div`
  width: 100%;
  height: 120px;
  position: fixed;
  top: 0px;
  z-index: 2;
  background-color: white;
`;

export default function wall() {
  const router = useRouter();

  if (router.pathname === "/" || router.pathname === "/signup") {
    return null;
  }
  const mobile = useBreakpointValue({ base: false, md: true });
  return <>{mobile ? <ScreenPc /> : <Screenmobile />}</>;
}
