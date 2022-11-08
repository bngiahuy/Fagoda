import React from 'react';
import './index.css'
import { RightTab } from '../../components/Home/RightTab';
import { LeftTab } from '../../components/Home/LeftTab';
import { CenterTab } from '../../components/Home/CenterTab';

const Home = () => {

  return (
    <div className='home'>
      <LeftTab />
      <CenterTab />
      <RightTab />
    </div>
  );
}

export default Home;