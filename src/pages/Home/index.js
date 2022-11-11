import React from 'react';
import './index.css'
import { RightTab } from '../../components/Home/RightTab';
import { LeftTab } from '../../components/Home/LeftTab';
import { CenterTab } from '../../components/Home/CenterTab';

const Home = ({ auth }) => {

  return (
    <div className='home'>
      {auth && <LeftTab />}
      <CenterTab />
      <RightTab auth={auth} />
    </div>
  );
}

export default Home;