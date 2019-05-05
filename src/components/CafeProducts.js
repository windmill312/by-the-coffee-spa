import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Box from './common/Box';

const Meta = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 2rem;
`;

const Description = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.2rem;
`;

const CafeProducts = ({ className, name, description, history, cafeUid }) => (
  <div className={className} role="link">
    <Box onClick={() => history.push(`/cafes/${cafeUid}`)}>
      <Meta>
        <Title>{name}</Title>
      </Meta>
      <Description>{description}</Description>
    </Box>
  </div>
);

const StyledCafeProducts = styled(CafeProducts)`
  ${Box} {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    cursor: pointer;
    padding: 20px 28px;

    ${Description} {
      margin-top: 16px;
    }

    transition: all 0.1s ease-in-out;

    &:hover {
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 450px) {
    ${Meta} {
      flex-direction: column;
    }

    ${Title} {
      font-size: 1.25rem;
      margin-bottom: 10px;
    }
  }
`;

export default withRouter(StyledCafeProducts);
