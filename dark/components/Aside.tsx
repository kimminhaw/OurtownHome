import { useRouter } from "next/router";
import { Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
// Aside
const Aside = styled.div`
  display: flex;
  flex-direction: column;
  top: 100px;
  left: 50px;
  position: fixed;
  width: 200px;
  height: 200px;
  padding: 10px;
  z-index: 3;
  align-items: center;
`;
// nav버튼
const AsideBtn = styled.button`
  display: flex;
  justify-content: left;
  background-color: inherit;
  width: 170px;
  margin-bottom: 15px;
`;
// 글쓰기
const WriteBtn = styled.button`
  text-align: center;
  background-color: #319795;
  border-radius: 15px;
  color: white;
  width: 170px;
  padding: 5px;
`;

export default function AsideFile() {
  const router = useRouter();

  if (router.pathname === "/" || router.pathname === "/signup") {
    return null;
  }
  return (
    <>
      <Aside>
        <AsideBtn>
          <Image src="/icon/home.svg" marginRight="10px" /> 홈
        </AsideBtn>
        <AsideBtn>
          <Image src="/icon/map.svg" marginRight="10px" /> 내 근처
        </AsideBtn>
        <AsideBtn>
          <Image src="/icon/chat.svg" marginRight="10px" /> 채팅
        </AsideBtn>
        <WriteBtn>+ 글쓰기</WriteBtn>
      </Aside>
    </>
  );
}
