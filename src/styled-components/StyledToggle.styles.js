import styled from "styled-components";
const StyledToggleWrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #666;
  display: flex;
  background-image: linear-gradient(to bottom, #808080, #dcdcdc);
  cursor: pointer;
`;

const StyledNotch = styled.div`
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  margin-top: 1px;
  background: white;
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${(props) => (props.$isActive ? "26px" : "1px")});
`;

const StyledToggle = ({ isActive, onToggle }) => {
  return (
    <StyledToggleWrapper onClick={onToggle}>
      <StyledNotch $isActive={isActive} />
    </StyledToggleWrapper>
  );
};

export default StyledToggle;
