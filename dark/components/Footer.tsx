import { useRouter } from "next/router";
import styled from "@emotion/styled";

// Footer
const Footer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 3;
`;
// Footer버튼
const FooterBtn = styled.img`
  width: 30px;
  height: 30px;
  margin: 20px;
  background-color: inherit;
`;

export default function FooterFile() {
  const router = useRouter();

  if (router.pathname === "/" || router.pathname === "/signup") {
    return null;
  }

  return (
    <Footer>
      <FooterBtn src="/icon/home.svg" />
      <FooterBtn src="/icon/search.svg" />
      <FooterBtn src="/icon/map.svg" />
      <FooterBtn src="/icon/chat.svg" />
      <FooterBtn src="/icon/profile.svg" />
    </Footer>
  );
}
