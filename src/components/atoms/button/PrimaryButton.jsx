import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButon = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
