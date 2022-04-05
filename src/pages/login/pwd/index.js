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
        <View className="top_title">登录</View>
      </View>
      <Form onSubmit={formSubmit} onReset={formReset}>
        <View className="bottom">
          <View className="bottom_one">
            <View className="bottom_name">账号：</View>
            <Input name="Re_id" className="bottom_right"></Input>
          </View>
          <View className="bottom_one">
            <View className="bottom_name">密码：</View>
            <Input
              name="Re_password"
              className="bottom_right"
              password="true"
            ></Input>
          </View>
          <Button className="submit" type="submit">
            登录
          </Button>
        </View>
      </Form>
      <View className="ps" onClick={() => register()}>
        我没有账号
      </View>
    </View>
  )
}
