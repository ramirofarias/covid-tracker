import { Alert, Empty, Spin } from 'antd';
import React from 'react';
import './CardWrapper.scss';
import { CardWrapperProps } from './CardWrapper.props';

export const CardWrapper = ({ data, loading, error, children }: CardWrapperProps) => {
  if (loading) {
    return <Spin data-testid="spinner" size="large" />;
  }

  if (error) {
    return (
      <Alert
        message="Error"
        description="An error occurred while fetching the data."
        type="error"
        showIcon
        data-testid="error"
      />
    );
  }
  return (
    <div className="card-wrapper">
      {data ? (
        React.cloneElement(children, { data: data })
      ) : (
        <Empty data-testid="empty" />
      )}
    </div>
  );
};
