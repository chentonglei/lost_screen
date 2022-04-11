import React, { useState, useContext } from 'react'
import {
  View,
  Text,
  Image,
  Input,
  Button,
  Form,
  switchTab,
  navigateTo,
  reLaunch,
} from 'remax/one'
import { useQuery, usePageInstance } from 'remax'
import index_people from './index_people.png'
import lost_return from './return.png'
import lost from './lost.png'
import recruit from './recruit.png'
import comment from './comment.png'
import cancel from './cancel.png'
import school from './school.png'
import exit_img from './exit.png'
import help from './help.png'
import people from './people.png'
import right_point from './right_point.png'
import ip from '../ip'
import { usePageEvent } from 'remax/macro'
import { AppContext } from '../../app'
const body = [
  { name: '失物', img: lost },
  { name: '招领', img: recruit },
  { name: '评论', img: comment },
  { name: '归还', img: lost_return },
  { name: '取消', img: cancel },
]
const bottom = [
  { name: '个人中心', img: people },
  { name: '学校入住', img: school },
  { name: '帮助与反馈', img: help },
]
export default () => {
  const global = useContext(AppContext) //全局变量
  const MidButton = (item) => {
    navigateTo({
      url: `/pages/login/release/index?title=${item.name}`,
    })
  }
  const MidButtonAll = () => {
    navigateTo({
      url: `/pages/login/release/index?title=失物`,
    })
  }
  const BottomButton = (item) => {
    if (item.name === '学校入住') {
      if (global.appData) {
        navigateTo({
          url: `/pages/login/school/index`,
        })
      } else {
        wx.showToast({
          title: '请先登录',
          icon: 'error',
          duration: 2000,
        })
      }
    }
    if (item.name === '帮助与反馈') {
      navigateTo({
        url: `/pages/login/help/index`,
      })
    }
    if (item.name === '个人中心') {
      if (global.appData) {
        navigateTo({
          url: `/pages/login/setting/index`,
        })
      } else {
        wx.showToast({
          title: '请先登录',
          icon: 'error',
          duration: 2000,
        })
      }
    }
  }
  const login = () => {
    navigateTo({
      url: `/pages/login/pwd/index`,
    })
  }
  const exit = () => {
    global.setAppData()
    reLaunch({
      url: '/pages/login/index',
    })
  }
  return (
    <View className="app">
      <View className="top">
        {global.appData ? (
          <View className="top_left">
            <View className="top_title">{global.appData.Re_name}</View>
            {global.appData.Re_school_name ? (
              <View className="top_school">
                {global.appData.Re_school_name}
              </View>
            ) : (
              <View className="top_certification">点击去认证~</View>
            )}
          </View>
        ) : (
          <View className="top_left">
            <View className="top_title">探索未知~</View>
            <Button className="top_button" onClick={() => login()}>
              登录/注册
            </Button>
          </View>
        )}
        <View className="people">
          <Image src={index_people} mode="widthFix" className="people_img" />
        </View>
      </View>
      <View className="mid">
        <View className="mid_top">
          <View className="mid_top_left">我的发布</View>
          <View className="mid_top_right" onClick={() => MidButtonAll()}>
            查看全部
          </View>
        </View>
        <View className="mid_bottom">
          {body.map((item, index) => (
            <View
              key={index}
              className="mid_bottom_one"
              onClick={() => MidButton(item)}
            >
              <View>
                <Image src={item.img} mode="widthFix" className="mid_img" />
              </View>
              <View className="mid_name">{item.name}</View>
            </View>
          ))}
        </View>
      </View>
      <View className="bottom">
        {bottom.map((item, index) => (
          <View
            key={index}
            className="bottom_one"
            onClick={() => BottomButton(item)}
          >
            <View className="bottom_left">
              <Image
                src={item.img}
                mode="widthFix"
                className="bottom_left_img"
              />
              <View className="bottom_name">{item.name}</View>
            </View>
            <View>
              <Image
                src={right_point}
                mode="widthFix"
                className="bottom_right_img"
              />
            </View>
          </View>
        ))}
      </View>
      {global.appData ? (
        <View key={'exit'} className="bottom_one" onClick={() => exit()}>
          <View className="bottom_left">
            <Image src={exit_img} mode="widthFix" className="bottom_left_img" />
            <View className="exit_name">退出登录</View>
          </View>
        </View>
      ) : (
        ''
      )}
    </View>
  )
}
