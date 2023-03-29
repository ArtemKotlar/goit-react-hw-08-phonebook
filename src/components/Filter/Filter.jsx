import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts/filterSlice';
import { getFilter } from '../../redux/contacts/selectors';
import { Wraper, Title, Input } from './Filter.styled';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Wraper>
      <label htmlFor="filter">
        <Title>Find contacts by name</Title>
        <Input
          type="text"
          name="filter"
          id="filter"
          value={value}
          onChange={e => {
            dispatch(changeFilter(e.target.value));
          }}
        />
      </label>
    </Wraper>
  );
};

export default Filter;
