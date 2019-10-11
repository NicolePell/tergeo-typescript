import React from 'react';
import styled from 'styled-components';
import { BodyLarge, H3 } from '../Typography';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  border-radius: 5px;
  box-shadow: -1px 2px 3px 0 #7f7f7f;
  margin: 10px;
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: #7f7f7f;
  opacity: 0.3;
  flex: 0 1 auto;
`;

const TaskContainer = styled.div`
  flex: 3 1 auto;
  margin-left: 20px;
`;

const PointsContainer = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
`;

export const Description = styled(BodyLarge)``;

const GroupName = styled(H3)`
  color: #5b939c;
`;

const Points = styled.label``;

export const Checkbox = styled.input``;

const Item = ({
  description,
  completed,
}: {
  description: string;
  completed: boolean;
}) => {
  return (
    <Container>
      <Avatar />
      <TaskContainer>
        <Description>{description.toUpperCase()}</Description>
        <GroupName>Hufflepuff</GroupName>
      </TaskContainer>
      <PointsContainer>
        <Points>10 points</Points>
        <Checkbox type="checkbox" checked={completed} />
      </PointsContainer>
    </Container>
  );
};

export default Item;
