import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { getAllCafes } from '../../api/cafes';
import CafesList from './CafesList';
import Title from '../common/Title';
import TitleContainer from '../common/TitleContainer';
import Loader from '../common/Loader';
import Fallback from '../common/Fallback';
import SearchBar from '../common/SearchBar';
import StyledContent from '../common/Content';
import StyledContainer from '../common/Container';
import SubTitle from '../common/SubTitle';

const filterPredicate = filterValue => items => {
  const isNameAlike = items.name.toLowerCase().startsWith(filterValue.toLowerCase());

  return isNameAlike;
};

const Cafes = ({ className }) => {
  const [cafes, setCafes] = useState({ isLoading: true, data: [], isError: false });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getAllCafes()
      .then(res => setCafes({ isLoading: false, data: res.items, isError: false }))
      .catch(err => {
        console.log(`Get error while getting all cafes: ${err}`);
        setCafes({ isLoading: false, data: [], isError: true });
      });
  }, []);

  return (
    <div className={className}>
      <StyledContainer>
        <StyledContent>
          <TitleContainer>
            <Title>Список кофеен</Title>
          </TitleContainer>
          <SearchBar onChange={setFilter} value={filter} />
          <Fallback isLoading={cafes.isLoading} Component={Loader}>
            {cafes.isError ? (
              <SubTitle>Упс, произошла какая-то ошибка! Попробуйте снова познее...</SubTitle>
            ) : (
              <CafesList cafes={cafes.data.filter(filterPredicate(filter))} />
            )}
          </Fallback>
        </StyledContent>
      </StyledContainer>
    </div>
  );
};

const StyledCafes = styled(Cafes)`
  ${Title} {
    margin: 16px 0 10px 0;
    padding: 0;
    font-weight: 800;
    font-size: 2rem;
    color: #333333;
    @media (max-width: 450px) {
      font-size: 1.25rem;
    }
  }
  ${SearchBar} {
    display: flex;
  }

  ${SubTitle} {
    color: #ee6b21;
  }
`;

export default withRouter(StyledCafes);
