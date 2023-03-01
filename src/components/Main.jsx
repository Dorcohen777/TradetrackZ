import ani from '../images/ani.gif';
import Mainone from './Mainone';
import Maintwo from './Maintwo';

import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <div className="main-container">
        <div className="main-text-container">
          <h1 className="main-title">TradeTrackz: Your Personal Trading Performance Tracker.</h1>
          <h2 className="second-title">Maximize Your Profits, Minimize Your Risks with TradeTrackz</h2>
          <div className="main-btn-container">
            <Link to="/register" className="main-btn main-btn-one">Create New Account</Link>
            <Link to="/dashboard" className='main-btn main-btn-two'>Start Demo</Link>
          </div>
        </div>

        <div className="main-image-container">
          <img className='main-image' src={ani} />
        </div>

      </div>
      <div>
        <hr className='main-hr' />
      </div>

      <div>
        <Mainone />
      </div>

      

      <div>
        <Maintwo />
      </div>
    </div>
  );
}

export default Main;

