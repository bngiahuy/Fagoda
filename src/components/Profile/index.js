import React from 'react'
import './Profile.css'
import { RightTab } from '../../components/Home/RightTab';
import { LeftTab } from '../../components/Home/LeftTab';
import CoverKhachHang from 'assets/Profile/AnhBiaKhachHang.jpg'
export default function Profile() {
  return (
    <div className='profile'>
      <LeftTab />
      <div className='content'>
        
          <img className='cover-img' src={CoverKhachHang}></img>
        
      </div>
      <RightTab />
    </div>
  )
}
