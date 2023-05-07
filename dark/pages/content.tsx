import styled from "@emotion/styled";

// 컨텐츠 정렬
const Content = styled.div`
  position: relative;
  top: 100px;
  left: 270px;
  width: 615px;
  z-index: 1;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    left: 0px;
    top: 40px;
    z-index: 1;
    margin-bottom: 115px;
  }
`;
// 각 컨텐츠 정렬
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2px;
  border: 1px solid;
  border-radius: 15px;
`;
// 아바타 박스
const AvatarBox = styled.div`
  margin-left: 10px;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
// 아바타 아이콘
const Avatar = styled.img`
  width: 40px;
  border-radius: 50%;
  height: 40px;
`;
// 사용자 이름 정렬
const Name = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
// · · · 위치 조정
const Menu = styled.button`
  background-color: inherit;
  margin-right: 25px;
  margin-left: auto;
`;
// 본문 내용
const Main = styled.div`
  margin-left: 10px;
`;
// 좋아요, 댓글
const CommentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  margin: 10px;
`;

export default function contentFile() {
  return (
    <Content>
      <ContentBox>
        <AvatarBox>
          <Avatar src="/penguin.png" />
          <Name>
            <h3>펭귄</h3>
            <h3>인사동 ‧ 1m</h3>
          </Name>
          <Menu>
            <h3>· · ·</h3>
          </Menu>
        </AvatarBox>
        <Main>
          <img src="/mohu.png" />
          <h3>빨리 겨울이 왔으면 좋겠네요</h3>
        </Main>
        <CommentBox>
          <img style={{ margin: "5px" }} src="/icon/heart.svg" />
          <h3 style={{ margin: "5px" }}>15</h3>
          <img style={{ margin: "5px" }} src="/icon/comment.svg" />
          <h3 style={{ margin: "5px" }}>3</h3>
        </CommentBox>
      </ContentBox>
      <ContentBox>
        <AvatarBox>
          <Avatar src="/eye.png" />
          <Name>
            <h3>부릅</h3>
            <h3>인사동 ‧ 2h</h3>
          </Name>
          <Menu>
            <h3>· · ·</h3>
          </Menu>
        </AvatarBox>
        <Main>
          <img src="/pngwing.com.png" />
          <h3>달 모양아이콘이 빛나는 밤이야아~~</h3>
        </Main>
        <CommentBox>
          <img style={{ margin: "5px" }} src="/icon/heart.svg" />
          <h3 style={{ margin: "5px" }}>12</h3>
          <img style={{ margin: "5px" }} src="/icon/comment.svg" />
          <h3 style={{ margin: "5px" }}>6</h3>
        </CommentBox>
      </ContentBox>
    </Content>
  );
}
