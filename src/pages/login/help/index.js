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
import ip from '../../ip'
export default () => {
  const [data, setData] = useState([])
  usePageEvent('onLoad', () => {
    wx.request({
      url: `${ip}/introduction/UserShow`,
      method: 'POST',
      success(res) {
        if (res.data.success === true) {
          setData(res.data.data)
        }
      },
    })
  })
  return (
    <View className="app">
      <View className="top">
        <View className="top_title">帮助与反馈</View>
      </View>
      <View className="bottom">
        {data.map((item, index) => (
          <View key={index} className="bottom_one">
            <View className="bottom_name">{item.Intr_question}</View>
            <View className="bottom_answer">
              &nbsp;&nbsp;{`答：${item.Intr_answer}`}
            </View>
          </View>
        ))}
        <View className="ps">如有其它不懂的可以联系管理员QQ:382023278</View>
      </View>
    </View>
  )
}
