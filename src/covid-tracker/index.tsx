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
    error: casesError,
  } = useQuery('cases', getCases);

  const {
    data: vaccines,
    isLoading: loadingVaccines,
    error: vaccinesError,
  } = useQuery('vaccines', getVaccines);

  const {
    data: history,
    isLoading: loadingHistory,
    error: historyError,
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
            <CardWrapper data={cases?.[selectedCountry]?.All} loading={loadingCases}>
              <CountryInfo>
                <CasesCard />
              </CountryInfo>
            </CardWrapper>
          </TabPane>
          <TabPane tab="Vaccines" key="2">
            <CardWrapper
              data={vaccines?.[selectedCountry]?.All}
              loading={loadingVaccines}
            >
              <CountryInfo>
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
                <CardWrapper data={history?.All} loading={loadingHistory}>
                  <CountryInfo>
                    <HistoryCard label="Total cases" color={[24, 144, 255]} />
                  </CountryInfo>
                </CardWrapper>
              </TabPane>
              <TabPane tab="Total deaths" key="Deaths">
                <CardWrapper data={history?.All} loading={loadingHistory}>
                  <CountryInfo>
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
