import { useDispatch, useSelector } from 'react-redux';
import { selectContactsFilter } from '../../redux/filter/selector';
import { setContactFilter } from 'redux/filter/slice';
import { Container, Section, Label } from '../App.styled';
import { FilterInput, FilterBlock } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  return (
    <Container>
      <Section>
        <FilterBlock>
          <Label htmlFor="filter">Find contacts by name</Label>
          <FilterInput
            type="text"
            name="filter"
            id="filter"
            value={filter}
            onInput={e => dispatch(setContactFilter(e.currentTarget.value))}
          />
        </FilterBlock>
      </Section>
    </Container>
  );
}
