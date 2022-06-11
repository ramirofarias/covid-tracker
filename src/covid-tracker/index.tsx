import { Tabs } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useFetch } from './api/useFetch';
import Search from './components/Search/Search';
import { CasesCard } from './components/CasesCard/CasesCard';
import { VaccinesCard } from './components/VaccinesCard/VaccinesCard';
import { HistoryCard } from './components/HistoryCard/HistoryCard';

const { TabPane } = Tabs;

export const CovidTracker = () => {
  const [selectedCountry, setSelectedCountry] = useState('Argentina');
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

  const NO_DATA = 'no data';
  const handleSelect = (country: string) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <h1>Covid Case Tracker</h1>
      <Search onSelect={handleSelect} />
      <div className="tabs-container">
        <Tabs
          defaultActiveKey="1"
          centered
          onChange={(e) => {
            console.log(e);
          }}
        >
          <TabPane tab="Cases" key="1">
            {cases?.[selectedCountry] ? (
              <CasesCard data={cases[selectedCountry]?.All} />
            ) : (
              NO_DATA
            )}
          </TabPane>
          <TabPane tab="Vaccines" key="2">
            {vaccines?.[selectedCountry] ? (
              <VaccinesCard data={vaccines[selectedCountry].All} />
            ) : (
              NO_DATA
            )}
          </TabPane>
          <TabPane tab="Historical data" key="3">
            <Tabs
              centered
              type="card"
              defaultActiveKey="Confirmed"
              onChange={(e) => setSelectedHistoryStatus(e)}
            >
              <TabPane tab="Total cases" key="Confirmed">
                {history && <HistoryCard history={history.All} label="Total cases" />}
              </TabPane>
              <TabPane tab="Total deaths" key="Deaths">
                {history && <HistoryCard history={history.All} label="Total deaths" />}
              </TabPane>
            </Tabs>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};
