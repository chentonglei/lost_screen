import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  Input,
  Button,
  Form,
  switchTab,
  navigateTo,
} from 'remax/one'
import { useQuery, usePageInstance } from 'remax'
import { usePageEvent } from 'remax/macro'
import send from './加号.png'
import address from './位置.png'
import school from '../login/school'
export default () => {
  const [isModalVisible, setIsModalVisible] = useState('失物')
  const changeButton = (title) => {
    setIsModalVisible(title)
  }
  const release = () => {
    navigateTo({
      url: `/pages/index/release/index`,
    })
  }
  const school = () => {
    navigateTo({
      url: `/pages/index/school/index`,
    })
  }
  return (
    <View className="app">
      <View className="top">
        <Image
          src={send}
          mode="widthFix"
          className="bottom_left_img"
          onClick={() => release()}
        />
        <View className="top_title">失物招领</View>
      </View>
      <View className="mid">
        <View className="mid_left">
          <View
            className={isModalVisible === '失物' ? 'mid_one_on' : 'mid_one_off'}
            onClick={() => changeButton('失物')}
          >
            失物
          </View>
          <View
            className={isModalVisible === '招领' ? 'mid_one_on' : 'mid_one_off'}
            onClick={() => changeButton('招领')}
          >
            招领
          </View>
        </View>
        <View className="mid_right">
          <Image src={address} mode="widthFix" className="address_img" />
          <View onClick={() => school()}>全部学校</View>
        </View>
      </View>
      <View className="end">暂无数据....</View>
    </View>
  )
}
