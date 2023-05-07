import { Box, Button, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Draggable from "react-draggable";
import styled from "@emotion/styled";

const Category = styled.div`
  position: fixed;
  top: 100px;
  left: 270px;
  z-index: 3;
  display: flex;
  flex-direction: row;
  width: 615px;
  border: 1px solid;
  border-radius: 15px;
  padding: 15px;

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: 15px;
    z-index: 3;
    border: none;
    width: 100%;
    padding: 10px;
    justify-content: space-between;
  }
`;

export default function NavigationFile() {
  const router = useRouter();

  if (router.pathname === "/" || router.pathname === "/signup") {
    return null;
  }

  const [activeButton, setActiveButton] = useState("button1");

  const handleClick = (button: string) => {
    setActiveButton(button);
  };
  const mobile = useBreakpointValue({ base: false, md: true });
  return (
    <>
      <Category>
        <Draggable axis="x" bounds={{ left: 0, top: 0, right: 0, bottom: 0 }}>
          <Box>
            {[
              "일상",
              "동네소식",
              "중고거래",
              "동네 맛집",
              "알바",
              "같이해요",
              "운동",
            ].map((text, index) => (
              <Button
                key={`button${index + 1}`}
                onClick={() => handleClick(`button${index + 1}`)}
                backgroundColor={
                  activeButton === `button${index + 1}` ? "#319795" : "inherit"
                }
                borderRadius="10px"
                border="none"
              >
                {text}
              </Button>
            ))}
          </Box>
        </Draggable>
      </Category>
    </>
  );
}
