import ReactLoading from "react-loading";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingPage = () => {
  return (
    <StyledContainer>
      <ReactLoading type={"spin"} height={50} width={50} color="#3f51b5" />
    </StyledContainer>
  );
};
