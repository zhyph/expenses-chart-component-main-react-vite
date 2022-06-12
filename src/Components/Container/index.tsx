import React from 'react';
import './Container.scss';

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <main className="container">
      <div className="control-width">{children}</div>
    </main>
  );
};

export default Container;
