import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardWrapper } from './CardWrapper';
import { CasesCard } from '../CasesCard/CasesCard';

const mockedData = {
  confirmed: 180864,
  recovered: 0,
  deaths: 7709,
  country: 'Afghanistan',
  population: 35530081,
  sq_km_area: 652090,
  life_expectancy: '45.9',
  elevation_in_meters: null,
  continent: 'Asia',
  abbreviation: 'AF',
  location: 'Southern and Central Asia',
  iso: 4,
  capital_city: 'Kabul',
  lat: '33.93911',
  long: '67.709953',
  updated: '2022-06-11 04:21:01',
};

describe('CardWrapper - loading', () => {
  beforeEach(() => {
    render(
      <CardWrapper data={mockedData} loading={true} error={false}>
        <div data-testid="cases-card"></div>
      </CardWrapper>,
    );
  });

  it('should show a spinner when loading', function () {
    expect(screen.getByTestId('spinner')).toBeDefined();
  });
});

describe('CardWrapper - on success', () => {
  beforeEach(() => {
    render(
      <CardWrapper data={mockedData} loading={false} error={false}>
        <div data-testid="cases-card"></div>
      </CardWrapper>,
    );
  });

  it('should not render a spinner', function () {
    expect(screen.queryByTestId('spinner')).toBeNull();
  });

  it('should render the children', function () {
    expect(screen.getByTestId('cases-card')).toBeDefined();
  });
});

describe('CardWrapper - on error', () => {
  beforeEach(() => {
    render(
      <CardWrapper data={null} loading={false} error={true}>
        <div data-testid="cases-card"></div>
      </CardWrapper>,
    );
  });

  it('should not render a spinner', function () {
    expect(screen.queryByTestId('spinner')).toBeNull();
  });

  it('should render an error component', function () {
    expect(screen.getByTestId('error')).toBeDefined();
  });
});

describe('CardWrapper - on empty data', () => {
  beforeEach(() => {
    render(
      <CardWrapper data={null} loading={false} error={false}>
        <div data-testid="cases-card"></div>
      </CardWrapper>,
    );
  });

  it('should not render a spinner', function () {
    expect(screen.queryByTestId('spinner')).toBeNull();
  });

  it('should render an Empty component', function () {
    expect(screen.getByTestId('empty')).toBeDefined();
  });
});
