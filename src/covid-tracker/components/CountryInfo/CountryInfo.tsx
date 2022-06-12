import React from 'react';
import './CountryInfo.scss';
import ReactCountryFlag from 'react-country-flag';
import { formatNumber } from '../../utils/formatNumber';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

export const CountryInfo = ({ data, children }: any) => {
  return (
    <div className="country-card">
      <div className="country-card__title">
        <ReactCountryFlag
          style={{
            width: '2em',
            height: '2em',
          }}
          countryCode={data.abbreviation}
          svg
        />
        <h2>{data.country || 'Global'}</h2>
      </div>

      <div className="country-card__map">
        <MapContainer
          center={[Number(data.lat) || 0, Number(data.lat) || 0]}
          zoom={data.lat ? 4 : 1}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data.lat && data.long && (
            <Marker position={[Number(data.lat), Number(data.long)]}></Marker>
          )}
        </MapContainer>
      </div>
      <div className="country-card__content">
        {data.capital_city ? (
          <div className="country-card__content__item">
            <h3>Capital:</h3>
            <p>{data.capital_city}</p>
          </div>
        ) : null}

        <div className="country-card__content__item">
          <h3>Population:</h3>
          <p>{formatNumber(data.population)}</p>
        </div>
        {data.life_expectancy ? (
          <div className="country-card__content__item">
            <h3>Life expectancy:</h3>
            <p>{data.life_expectancy}</p>
          </div>
        ) : null}
      </div>
      {React.cloneElement(children, { data: data })}
    </div>
  );
};
