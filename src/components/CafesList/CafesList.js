import React from 'react';
import styled from 'styled-components';
import Cafe from './Cafe';

const Cafes = ({ className, cafes }) => (
  <div className={className}>
    {cafes.map(cafe => (
      <Cafe {...cafe} key={cafe.cafeUid} />
    ))}
  </div>
);

const StyledCafes = styled(Cafes)`
  margin-top: 20px;
`;

export default StyledCafes;
