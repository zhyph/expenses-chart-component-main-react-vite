import './Header.scss';

type Props = {};

const Header: React.FC = ({}) => {
  return (
    <div className="header">
      <div className="info-container">
        <p className="balance-text">My balance</p>
        <p className="balance-num">$921.48</p>
      </div>
      <div className="ball-container">
        <div className="hollow ball"></div>
        <div className="full ball"></div>
      </div>
    </div>
  );
};

export default Header;
