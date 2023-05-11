import React, {FC} from "react";
import styled from "styled-components";

const StyledError = styled.div`
  margin: 0;
  text-align: center;
  color: #850413;
  font-size: 12px;
`;

type PropsType = {
    error: string
}

export const Error: FC<PropsType> = ({error}) => {
    return <StyledError>{error}</StyledError>
}