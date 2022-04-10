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
import { picker } from 'remax/wechat'
import { useQuery, usePageInstance } from 'remax'
import { usePageEvent } from 'remax/macro'
import ip from '../../ip'
export default () => {
  const [data, setData] = useState([])
  usePageEvent('onLoad', () => {
    wx.request({
      url: `${ip}/school/UserShow`,
      method: 'POST',
      success(res) {
        if (res.data.data) {
          setData(res.data.data)
        }
      },
    })
  })
  return (
    <View className="app">
      <View className="top">
        <View className="top_title">学校列表</View>
      </View>
      <View className="input_style">
        <Input className="input_search" placeholder="搜索"></Input>
      </View>
      <View className="mid">
        <View className="mid_top">请选择学校</View>
        <View className="mid_content">
          {data.map((item, index) => (
            <View
              key={index}
              className="mid_content_one"
              onClick={() => MidButton(item)}
            >
              {item.Sch_name}
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}
