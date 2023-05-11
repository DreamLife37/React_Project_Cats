import React, {FC} from "react";
import styled from "styled-components";

type StyledProps = {
    display: string;
}

const StyledSkeleton = styled.div<StyledProps>`
  display: ${props => props.display};
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
  height: 100%;
  width: 100%;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

type PropsType = {
    display: string
    isLoading: boolean
}

export const SkeletonImage: FC<PropsType> = ({display}) => {
    return <StyledSkeleton display={display}/>
}