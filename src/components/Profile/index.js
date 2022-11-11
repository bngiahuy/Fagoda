import React from 'react'
import './Profile.css'
import { RightTab } from '../../components/Home/RightTab';
import { LeftTab } from '../../components/Home/LeftTab';
import CoverKhachHang from 'assets/Profile/AnhBiaKhachHang.jpg'
import avatar from 'assets/Profile/avatar.jpg'
export default function Profile() {
  return (
    <div className='profile'>
      <LeftTab />
      {/* <div className='content'>
        <div>
          <img className='cover-img' src={CoverKhachHang}></img>
          <span >
            <p id='name-user'>Huy Bùi</p>
            </span>

        </div>
          <div idName='avatar-circle'>
          <img className='avatar' src={avatar}></img>
          </div>

          
      </div> */}

    <div id="profile-upper">
        <div id="profile-banner-image">
          <img src="https://imagizer.imageshack.com/img921/9628/VIaL8H.jpg" alt="Banner image"></img>
        </div>
        <div id="profile-d">
          <div id="profile-pic">
            <img src="https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg"></img>
          </div>
          <div id="u-name">Himalaya Singh</div>
          <div class="tb" id="m-btns">
            <div class="td">
              <div class="m-btn"><i class="material-icons">format_list_bulleted</i><span>Activity log</span></div>
            </div>
            <div class="td">
              <div class="m-btn"><i class="material-icons">lock</i><span>Privacy</span></div>
            </div>
          </div>
          <div id="edit-profile"><i class="material-icons">camera_alt</i></div>
        </div>
        <div id="black-grd"></div>
      </div>
      <RightTab />
    </div>
  )
}
