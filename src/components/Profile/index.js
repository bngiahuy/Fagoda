import React from 'react'
import './Profile.css'
import { RightTab } from '../../components/Home/RightTab';
import { LeftTab } from '../../components/Home/LeftTab';
export default function Profile() {
  return (
    <div className='profile'>
      <LeftTab />
      
      <RightTab />
    </div>
  )
}
