import React, {FC} from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px;
  cursor: pointer;
  outline: none;
  border-radius: 6px;
  border: none;
  width: 100%;

  &:disabled {
    cursor: auto;
  }
`;

type PropsType = {
    onClick: () => void
    disabled: boolean
    title: string
}

export const Button: FC<PropsType> = ({disabled, onClick, title}) => {
    return <StyledButton onClick={onClick} disabled={disabled}>{title}</StyledButton>
}