import { useRouter } from "next/router";
import { useColorMode, useBreakpointValue, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";

// 헤더 전체
const HeaderPc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 30px;
  top: 5px;
  width: 90%;
  max-width: 1150px;
  z-index: 3;
  margin: 20px;
`;
const HeaderMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 15px;
  width: 100%;
  z-index: 3;
`;
// 지역선택 버튼
const Areaselect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const AreaselectBtn = styled.button`
  height: 30px;
  border-radius: 15px;
  width: 70px;
  background-color: #319795;
  color: white;
  margin-left: 20px;
`;
// 검색
const Input = styled.input`
  width: 50%;
  border: 1px solid;
  border-radius: 10px;
  height: 30px;
`;
// 프로필,알림
const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Lightmode = styled.button`
  font-size: 20px;
  background-color: inherit;
  margin-right: 15px;
`;
export default function HeaderFile() {
  const router = useRouter();

  if (router.pathname === "/" || router.pathname === "/signup") {
    return null;
  }

  const { toggleColorMode } = useColorMode();

  const mobile = useBreakpointValue({ base: false, md: true });

  return (
    <>
      {mobile ? (
        <HeaderPc>
          <Areaselect>
            <Image src="/ourtown.svg" alt="logo" w="50px" />
            <AreaselectBtn>안산 ∨</AreaselectBtn>
          </Areaselect>
          <Input placeholder="축제를 검색해보세요" />
          <Avatar>
            <Lightmode onClick={toggleColorMode}>🌙</Lightmode>
            <Image src="/penguin.png" width="40px" borderRadius="50%" />
          </Avatar>
        </HeaderPc>
      ) : (
        <HeaderMobile>
          <AreaselectBtn>안산 ∨</AreaselectBtn>
          <Lightmode onClick={toggleColorMode}>🌙</Lightmode>
        </HeaderMobile>
      )}
    </>
  );
}
