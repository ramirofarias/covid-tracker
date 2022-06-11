import { Empty, Spin, Tabs } from 'antd';
import React, { useState } from 'react';
import { useFetch } from './api/useFetch';
import Search from './components/Search/Search';
import { CasesCard } from './components/CasesCard/CasesCard';
import { VaccinesCard } from './components/VaccinesCard/VaccinesCard';
import { HistoryCard } from './components/HistoryCard/HistoryCard';

const { TabPane } = Tabs;

function CardWrapper({ data, loading, children }: any) {
  if (loading) {
    return <Spin size="large" />;
  }
  return <>{data ? React.cloneElement(children, { data: data }) : <Empty />}</>;
}

export const CovidTracker = () => {
  const [selectedCountry, setSelectedCountry] = useState('Global');
  const [selectedHistoryStatus, setSelectedHistoryStatus] = useState('Confirmed');
  const [cases, loadingCases, errorCases] = useFetch('cases');
  const [vaccines, loadingVaccines, errorVaccines] = useFetch('vaccines');
  const [history, loadingHistory, errorHistory] = useFetch(
    'history',
    {
      status: selectedHistoryStatus,
      country: selectedCountry,
    },
    [selectedCountry, selectedHistoryStatus],
  );
  const handleSelect = (country: string) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <h1>Covid Case Tracker</h1>
      <Search onSelect={handleSelect} />
      <div className="tabs-container">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Cases" key="1">
            <CardWrapper data={cases?.[selectedCountry]?.All} loading={loadingCases}>
              <CasesCard />
            </CardWrapper>
          </TabPane>
          <TabPane tab="Vaccines" key="2">
            <CardWrapper
              data={vaccines?.[selectedCountry]?.All}
              loading={loadingVaccines}
            >
              <VaccinesCard />
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
                  <HistoryCard label="Total cases" color="#1890ff" />
                </CardWrapper>
              </TabPane>
              <TabPane tab="Total deaths" key="Deaths">
                <CardWrapper data={history?.All} loading={loadingHistory}>
                  <HistoryCard label="Total deaths" color="#ffa39e" />
                </CardWrapper>
              </TabPane>
            </Tabs>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};
