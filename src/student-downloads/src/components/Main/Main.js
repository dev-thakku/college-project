import { useState } from 'react';
import styled from 'styled-components';
import Banner from '../Banner/Banner';
import Form from '../Form/Form';
import Results from '../Results/Results';

export default function Main() {
  const initialState = {
    type: '',
    department: '',
    semester: '',
    subject: '',
  };
  const [options, setOptions] = useState(initialState);

  return (
    <>
      <Banner />
      <MainWrapper>
        <Form setOptions={setOptions} />
        {options.subject && <Results options={options} />}
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.div`
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 400px) {
    padding: 2rem 1rem;
  }
`;
