import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Box from '../common/Box';
import Meta from '../common/Meta';
import Description from '../common/Description';
import { getCafe } from '../../api/cafes';
import Loader from '../common/Loader';
import Fallback from '../common/Fallback';

const Title = styled.div`
  font-weight: 700;
  font-size: 2rem;
`;

const Cafe = ({
  className,
  match: {
    params: { id },
  },
}) => {
  const [cafe, setCafe] = useState({ isLoading: true, data: [] });

  console.log(id);
  useEffect(() => {
    getCafe({ cafeUid: id }).then(res => setCafe({ isLoading: false, ...res }));
  }, []);

  return (
    <Fallback isLoading={cafe.isLoading} Component={Loader}>
      <div className={className} role="link">
        <Box>
          <Meta>
            <Title>{cafe.name}</Title>
          </Meta>
        </Box>
      </div>
    </Fallback>
  );
};

const StyledCafe = styled(Cafe)`
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

export default withRouter(StyledCafe);
