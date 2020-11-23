import React from 'react';
import './Container.scss';

interface Props {
  readonly children?: React.ReactNode;
}

const Container: React.FunctionComponent<Props> = (props: Props) => {
  const {
    children
  } = props;

  return (
    <div className="container">
      {children}
    </div>
  );
};

export default React.memo(Container);