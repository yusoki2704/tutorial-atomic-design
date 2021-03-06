import styled from "styled-components";
import { SecondaryButon } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";

//import { useContext } from "react";
//import { UserContext } from "../../providers/UserProviders";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  //  const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };
  return (
    <SContainer>
      <h2>Topページです</h2>
      <SecondaryButon onClick={onClickAdmin}>管理者ユーザー</SecondaryButon>
      <br />
      <br />
      <SecondaryButon onClick={onClickGeneral}>一般ユーザー</SecondaryButon>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
