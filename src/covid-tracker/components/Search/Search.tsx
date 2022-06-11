import { Select } from 'antd';
import { countries } from './countries';
import { SearchProps } from './Search.props';

const { Option, OptGroup } = Select;

const Search = ({ onSelect }: SearchProps) => (
  <Select showSearch style={{ width: 200 }} onChange={onSelect} defaultValue="Global">
    {Object.keys(countries).map((continent) => (
      <OptGroup label={continent} key={continent}>
        {(countries as any)[continent].map((country: any) => (
          <Option key={country.name} value={country.name}>
            {country.name}
          </Option>
        ))}
      </OptGroup>
    ))}
  </Select>
);

export default Search;
