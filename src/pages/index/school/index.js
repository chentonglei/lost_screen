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
export default () => {
  const data = [
    '全部学校',
    '福州大学',
    '福建工程学院',
    '闽江学院',
    '福建师范大学',
    '江夏学院',
  ]
  const formReset = (e) => {
    console.log('form发生了reset事件，携带数据为：', e.target)
  }
  const formSubmit = (e) => {
    var str = '请输入'
    if (!e.target.value.Re_id) {
      str += '账号'
      str += '、'
    }
    if (!e.target.value.Re_password) {
      str += '密码'
      str += '、'
    }
    const editedText = str.slice(0, str.length - 1) + '！'
    console.log(editedText)
    if (str !== '请输入') {
      wx.showToast({
        title: editedText,
        icon: 'none',
        duration: 2000,
      })
    } else {
      wx.showToast({
        title: '上传成功',
        icon: 'success',
        duration: 2000,
      })
    }
  }
  const register = () => {
    navigateTo({
      url: `/pages/login/register/index`,
    })
  }
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
              {item}
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}
