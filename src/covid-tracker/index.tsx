import { Tabs } from 'antd';
import React, { useState } from 'react';
import Search from './components/Search/Search';
import { CasesCard } from './components/CasesCard/CasesCard';
import { VaccinesCard } from './components/VaccinesCard/VaccinesCard';
import { HistoryCard } from './components/HistoryCard/HistoryCard';
import { useQuery } from 'react-query';
import { getCases } from './api/services/cases';
import { getVaccines } from './api/services/vaccines';
import { getHistory } from './api/services/history';
import { CountryInfo } from './components/CountryInfo/CountryInfo';
import { CardWrapper } from './components/CardWrapper/CardWrapper';

const { TabPane } = Tabs;

export const CovidTracker = () => {
  const [selectedCountry, setSelectedCountry] = useState('Global');
  const [selectedHistoryStatus, setSelectedHistoryStatus] = useState('Confirmed');

  const {
    data: cases,
    isLoading: loadingCases,
    isError: casesError,
  } = useQuery('cases', getCases);
  const {
    data: vaccines,
    isLoading: loadingVaccines,
    isError: vaccinesError,
  } = useQuery('vaccines', getVaccines);
  const {
    data: history,
    isLoading: loadingHistory,
    isError: historyError,
  } = useQuery(['history', selectedCountry, selectedHistoryStatus], () =>
    getHistory({
      status: selectedHistoryStatus,
      country: selectedCountry,
    }),
  );

  const handleSelect = (country: string) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <h1>COVID-19 Tracker</h1>
      <Search onSelect={handleSelect} />
      <div className="tabs-container">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Cases" key="1">
            <CardWrapper
              loading={loadingCases}
              error={casesError}
              data={cases?.[selectedCountry]?.All}
            >
              <CountryInfo
                coordinates={{
                  lat: cases?.[selectedCountry]?.lat,
                  long: cases?.[selectedCountry]?.long,
                }}
              >
                <CasesCard />
              </CountryInfo>
            </CardWrapper>
          </TabPane>
          <TabPane tab="Vaccines" key="2">
            <CardWrapper
              data={vaccines?.[selectedCountry]?.All}
              loading={loadingVaccines}
              error={vaccinesError}
            >
              <CountryInfo
                coordinates={{
                  lat: cases?.[selectedCountry]?.lat,
                  long: cases?.[selectedCountry]?.long,
                }}
              >
                <VaccinesCard />
              </CountryInfo>
            </CardWrapper>
          </TabPane>
          <TabPane tab="Historical data" key="3">
            <Tabs
              centered
              type="card"
              defaultActiveKey="Confirmed"
              onChange={(e) => setSelectedHistoryStatus(e)}
            >
              <TabPane tab="Total cases" key="Confirmed">
                <CardWrapper
                  data={history?.All}
                  loading={loadingHistory}
                  error={historyError}
                >
                  <CountryInfo
                    coordinates={{
                      lat: cases?.[selectedCountry]?.lat,
                      long: cases?.[selectedCountry]?.long,
                    }}
                  >
                    <HistoryCard label="Total cases" color={[24, 144, 255]} />
                  </CountryInfo>
                </CardWrapper>
              </TabPane>
              <TabPane tab="Total deaths" key="Deaths">
                <CardWrapper
                  data={history?.All}
                  loading={loadingHistory}
                  error={historyError}
                >
                  <CountryInfo
                    coordinates={{
                      lat: cases?.[selectedCountry]?.lat,
                      long: cases?.[selectedCountry]?.long,
                    }}
                  >
                    <HistoryCard label="Total deaths" color={[245, 34, 45]} />
                  </CountryInfo>
                </CardWrapper>
              </TabPane>
            </Tabs>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};
