import Link from "next/link";
import {
  Box,
  Image,
  Divider,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
// Pc화면
const LocationPc = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// Pc화면 Logo+Text 묶음
const LogoAndTextBox = styled.div`
  margin-right: 50px;
`;
// Pc화면 전체 묶음
const PcScreenBox = styled.div`
  display: flex;
  flex-direction: row;
`;
// 모바일화면
const LocationMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// Text 정렬
const TextBox = styled.div`
  width: 250px;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
// 로그인박스 묶음
const SignBox = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// 이메일,비밀번호 입력
const Input = styled.input`
  width: 320px;
  background-color: #e5e5e5;
  margin-bottom: 10px;
  border-radius: 15px;
  padding: 10px;
`;
// 로그인 버튼
const LoginBtn = styled.button`
  background-color: #319795;
  color: #fff;
  width: 320px;
  margin-bottom: 10px;
  border-radius: 15px;
  padding: 10px;
`;
//구글 로그인 버튼
const GoogleBtn = styled.button`
  background-color: #e5e5e5;
  width: 320px;
  margin-bottom: 10px;
  border-radius: 15px;
  padding: 10px;
`;

export default function SignIn(): JSX.Element {
  const mobile = useBreakpointValue({ base: false, md: true });
  // PC버전이 TRUE, 모바일버전이 FALSE
  return (
    <Box>
      {mobile ? (
        <>
          <LocationPc>
            <PcScreenBox>
              <LogoAndTextBox>
                <Image src="/ourtown.svg" alt="logo" w="250px" />
                <TextBox>
                  동네이야기부터 중고거래까지 가까운 이웃과 함께해요
                </TextBox>
              </LogoAndTextBox>
              <SignBox>
                <Input placeholder="이메일" />
                <Input placeholder="비밀번호" />
                <Link href="/content">
                  <LoginBtn>로그인</LoginBtn>
                </Link>
                <Divider width="320px" marginBottom="10px" />
                <GoogleBtn>Continue with Google</GoogleBtn>
                <Flex>
                  <h3 style={{ marginRight: "10px" }}>새로 오셨나요?</h3>
                  <Link
                    href="/signup"
                    style={{ textDecoration: "none", color: "#319795" }}
                  >
                    <h3>회원가입</h3>
                  </Link>
                </Flex>
              </SignBox>
            </PcScreenBox>
          </LocationPc>
        </>
      ) : (
        <LocationMobile>
          <Image src="/ourtown.svg" alt="logo" w="250px" />
          <TextBox>동네이야기부터 중고거래까지 가까운 이웃과 함께해요</TextBox>
          <Input placeholder="이메일" />
          <Input placeholder="비밀번호" />
          <Link href="/content">
            <LoginBtn>로그인</LoginBtn>
          </Link>
          <Divider width="320px" marginBottom="10px" />
          <GoogleBtn>Continue with Google</GoogleBtn>
          <Flex>
            <h3 style={{ marginRight: "10px" }}>새로 오셨나요?</h3>
            <Link
              href="/signup"
              style={{ textDecoration: "none", color: "#319795" }}
            >
              <h3>회원가입</h3>
            </Link>
          </Flex>
        </LocationMobile>
      )}
    </Box>
  );
}
