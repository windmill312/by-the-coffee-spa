import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { getCafes } from '../../api/cafes';
import CafesList from './CafesList';
import Fallback from '../common/Fallback';
import Loader from '../common/Loader';
import TitleContainer from '../TitleContainer';
import Title from '../Title';

const Cafes = ({ className }) => {
  const [cafes, setCafes] = useState({ isLoading: true, data: [] });

  useEffect(() => {
    getCafes().then(data => setCafes({ isLoading: false, data }));
  }, []);

  return (
    <div className={className}>
      <TitleContainer>
        <Title>Список кофеен</Title>
      </TitleContainer>
      <Fallback isLoading={cafes.isLoading} Component={Loader}>
        <CafesList cafes={cafes.data} />
      </Fallback>
    </div>
  );
};

const StyledCafes = styled(Cafes)`
  ${Title} {
    margin-bottom: 20px;
  }
`;

export default withRouter(StyledCafes);
