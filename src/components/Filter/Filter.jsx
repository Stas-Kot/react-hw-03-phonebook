import { FilterTitle } from './Filter.styled';

export default function Filter({ value, onChange }) {
  return (
    <label>
      <FilterTitle>Find contacts by name</FilterTitle>
      <input value={value} onChange={onChange} type="text"></input>
    </label>
  );
}
