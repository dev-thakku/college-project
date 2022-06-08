import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import baseUrl from '../../utils/baseUrl';
import filterResults from '../../utils/filterResults';
import Loader from '../Loader/Loader';
import ResultCard from './ResultCard';

export default function Results({ options }) {
  const [resData, setResData] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setResults([]);
    fetch(`${baseUrl}/resources/${options.department}/${options.semester}.json`)
      .then((res) => res.json())
      .then((data) => {
        setResData(data);
        setResults(filterResults(data, options));
        setLoading(false);
      });
  }, [options.department, options.semester]);

  useEffect(() => {
    setResults(filterResults(resData, options));
  }, [options.subject, options.type]);

  return (
    <ResultsWrapper>
      <h2>Results</h2>
      <Feed loading={(loading || results.length === 0).toString()}>
        {loading && <Loader />}
        {results.length === 0 && !loading && <h3>No resources found</h3>}
        {results?.map((result, key) => (
          <ResultCard key={key} {...result} />
        ))}
      </Feed>
    </ResultsWrapper>
  );
}

const ResultsWrapper = styled.div`
  margin-top: 2rem;

  & > h2 {
    position: relative;
    color: #35495e;
    font-size: 24px;
    width: fit-content;

    &::after {
      content: '';
      width: 75%;
      height: 3px;
      background: var(--clr-orange-500);
      position: absolute;
      bottom: -1px;
      left: 0;
    }
  }
`;

const Feed = styled.div`
  display: grid;
  align-items: start;
  justify-items: center;
  grid-gap: 3rem 3rem;
  grid-template-columns: repeat(auto-fill, minmax(28%, 1fr));
  margin-top: 2rem;
  min-height: 200px;

  @media screen and (max-width: 830px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  ${(props) =>
    props.loading === 'true' &&
    css`
      display: grid;
      grid-template-columns: 1fr;
      place-items: center;
    `}
`;
