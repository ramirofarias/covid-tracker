import { Empty, Spin } from 'antd';
import React from 'react';
import './CardWrapper.scss';

export const CardWrapper = ({ data, loading, children }: any) => {
  if (loading) {
    return <Spin size="large" />;
  }
  return (
    <div className="card-wrapper">
      {data ? React.cloneElement(children, { data: data }) : <Empty />}
    </div>
  );
};
