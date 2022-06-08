import { useEffect, useLayoutEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import baseUrl from '../../utils/baseUrl';

export default function Form({ setOptions }) {
  const [resourceType, setResourceType] = useState('all');
  const [department, setDepartment] = useState('ct');
  const [semester, setSemester] = useState('s1');
  const [selectedSubject, setSelectedSubject] = useState('');

  const [allSubjectsJSON, setAllSubjectsJSON] = useState({});

  const [subjects, setSubjects] = useState([]);

  const handleResourceType = (e) => {
    setResourceType(e.target.value);
  };

  const handleDepartment = (e) => {
    setDepartment(e.target.value);
    setSelectedSubject('');
  };

  const handleSemester = (e) => {
    setSemester(e.target.value);
    setSelectedSubject('');
    setSubjects(allSubjectsJSON[e.target.value]);
  };

  const handleSubject = (e) => {
    setSelectedSubject(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSubject === '') return alert('Please select a subject');
    setOptions({
      type: resourceType,
      department,
      semester,
      subject: selectedSubject,
    });
  };

  useLayoutEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const type = queryParams.get('type');
    const dept = queryParams.get('dept');
    const sem = queryParams.get('sem');

    setResourceType(type || 'all');
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/subjects/${department}.json`)
      .then((res) => res.json())
      .then((data) => {
        setAllSubjectsJSON(data);
        setSubjects(data[semester]);
      })
      .catch((e) => console.error(e));
  }, [department]);

  return (
    <MyForm onSubmit={handleSubmit}>
      <FormRow>
        <FieldLabel>Resource Type</FieldLabel>
        <ControlsGroup>
          <ResourceRadioLabel checked={resourceType === 'all'}>
            <ResourceRadio
              type="radio"
              name="resource"
              value="all"
              onClick={handleResourceType}
            />
            All
          </ResourceRadioLabel>
          <ResourceRadioLabel checked={resourceType === 'notes'}>
            <ResourceRadio
              type="radio"
              name="resource"
              value="notes"
              onClick={handleResourceType}
            />
            Notes
          </ResourceRadioLabel>
          <ResourceRadioLabel checked={resourceType === 'lab-manual'}>
            <ResourceRadio
              type="radio"
              name="resource"
              value="lab-manual"
              onClick={handleResourceType}
            />
            Lab Manual
          </ResourceRadioLabel>
          <ResourceRadioLabel checked={resourceType === 'questions'}>
            <ResourceRadio
              type="radio"
              name="resource"
              value="questions"
              onClick={handleResourceType}
            />
            Question Papers
          </ResourceRadioLabel>
        </ControlsGroup>
      </FormRow>

      <FormRow>
        <FieldLabel>Department</FieldLabel>
        <ControlsGroup>
          <ComboBox onChange={handleDepartment} value={department}>
            <option value="ct">Computer Engineering</option>
            <option value="me">Mechanical Engineering</option>
            <option value="ec">Electronics &amp; Communication Engg.</option>
          </ComboBox>
        </ControlsGroup>
      </FormRow>

      <FormRow>
        <FieldLabel>Semester</FieldLabel>
        <ControlsGroup style={{ flexWrap: 'wrap' }}>
          <SemesterRadioLabel checked={semester === 's1'}>
            <SemesterRadio type="radio" value="s1" onClick={handleSemester} />
            S1
          </SemesterRadioLabel>
          <SemesterRadioLabel checked={semester === 's2'}>
            <SemesterRadio type="radio" value="s2" onClick={handleSemester} />
            S2
          </SemesterRadioLabel>
          <SemesterRadioLabel checked={semester === 's3'}>
            <SemesterRadio type="radio" value="s3" onClick={handleSemester} />
            S3
          </SemesterRadioLabel>
          <SemesterRadioLabel checked={semester === 's4'}>
            <SemesterRadio type="radio" value="s4" onClick={handleSemester} />
            S4
          </SemesterRadioLabel>
          <SemesterRadioLabel checked={semester === 's5'}>
            <SemesterRadio type="radio" value="s5" onClick={handleSemester} />
            S5
          </SemesterRadioLabel>
          <SemesterRadioLabel checked={semester === 's6'}>
            <SemesterRadio type="radio" value="s6" onClick={handleSemester} />
            S6
          </SemesterRadioLabel>
        </ControlsGroup>
      </FormRow>

      <FormRow>
        <FieldLabel>Subject</FieldLabel>
        <ControlsGroup>
          <ComboBox value={selectedSubject} onChange={handleSubject}>
            <option value=""> - Select Subject -</option>
            {subjects?.map((subject, i) => (
              <option key={i} value={subject.value}>
                {subject.name}
              </option>
            ))}
          </ComboBox>
        </ControlsGroup>
      </FormRow>

      <FormRow>
        <SubmitButton type="submit">Submit</SubmitButton>
      </FormRow>
    </MyForm>
  );
}

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FieldLabel = styled.label`
  flex: 1;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  font-size: 18px;
`;

const ControlsGroup = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ResourceRadio = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const ResourceRadioLabel = styled.label`
  color: var(--clr-blue-400);
  border: 2px solid var(--clr-blue-400);
  padding: 0.2rem 0.75rem;
  border-radius: 5px;
  flex-shrink: 0;
  transition: all 0.3s ease-in-out;

  &:focus-within,
  &:hover {
    border-color: var(--clr-blue-500);
    box-shadow: 0 0 5px var(--clr-blue-400);
  }

  ${(props) =>
    props.checked &&
    css`
      color: #fff;
      background-color: var(--clr-blue-400);
    `}
`;

const ComboBox = styled.select`
  padding: 0.4rem;
  border: 2px solid var(--clr-blue-400);
  border-radius: 5px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 14px;
  color: var(--clr-blue-400);
  background: #fff;
  width: 100%;
  max-width: 250px;

  &:focus,
  &:hover {
    outline: none;
    border-color: var(--clr-blue-500);
    box-shadow: 0 0 5px var(--clr-blue-400);
  }

  @media (max-width: 650px) {
    max-width: unset;
  }
`;

const SemesterRadioLabel = styled(ResourceRadioLabel)`
  padding: 0.2rem 1rem;
  border-radius: 25px;
  font-weight: 600;
`;

const SemesterRadio = styled(ResourceRadio)``;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background: var(--clr-blue-500);
  color: #fff;
  font-family: 'Red Hat Display', sans-serif;
  border: none;
  border-radius: 25px;
  max-width: 150px;
`;
