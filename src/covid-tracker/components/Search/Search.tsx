import { Select } from 'antd';
import { countries } from './countries';
import { SearchProps } from './Search.props';
import ReactCountryFlag from 'react-country-flag';
import React from 'react';
import './Search.scss';

const { Option, OptGroup } = Select;

const Search = ({ onSelect }: SearchProps) => (
  <Select showSearch style={{ width: 200 }} onChange={onSelect} defaultValue="Global">
    {Object.keys(countries).map((continent) => (
      <OptGroup label={continent} key={continent}>
        {(countries as any)[continent].map((country: any) => (
          <Option key={country.name} value={country.name}>
            {country.code ? (
              <ReactCountryFlag
                style={{
                  width: '1.5em',
                  height: '1.5em',
                }}
                countryCode={country.code}
                svg
              />
            ) : null}
            {country.name}
          </Option>
        ))}
      </OptGroup>
    ))}
  </Select>
);

export default Search;
