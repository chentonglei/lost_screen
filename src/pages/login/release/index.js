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
export default () => {
  const [isModalVisible, setIsModalVisible] = useState('失物')
  usePageEvent('onLoad', (options) => {
    console.log(options.title)
    setIsModalVisible(options.title)
  })
  const changeButton = (title) => {
    setIsModalVisible(title)
  }
  return (
    <View className="app">
      <View className="top">
        <View className="top_title">我的发布</View>
      </View>
      <View className="mid">
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
        <View
          className={isModalVisible === '评论' ? 'mid_one_on' : 'mid_one_off'}
          onClick={() => changeButton('评论')}
        >
          评论
        </View>
        <View
          className={isModalVisible === '归还' ? 'mid_one_on' : 'mid_one_off'}
          onClick={() => changeButton('归还')}
        >
          归还
        </View>
        <View
          className={isModalVisible === '取消' ? 'mid_one_on' : 'mid_one_off'}
          onClick={() => changeButton('取消')}
        >
          取消
        </View>
      </View>
      <View className="end">暂无数据....</View>
    </View>
  )
}
