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
    if (!e.target.value.old_password) {
      str += '旧密码'
      str += '、'
    }
    if (!e.target.value.Re_password) {
      str += '新密码'
      str += '、'
    }
    if (!e.target.value.Re_new_password) {
      str += '确认密码'
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
      if (e.target.value.Re_new_password !== e.target.value.Re_password) {
        wx.showToast({
          title: '两次密码不一致',
          icon: 'error',
          duration: 2000,
        })
      }
    }
  }
  return (
    <View className="app">
      <View className="top">
        <View className="top_title">密码修改</View>
      </View>
      <Form onSubmit={formSubmit} onReset={formReset}>
        <View className="bottom">
          <View className="bottom_one">
            <View className="bottom_name">账号：</View>
            <Input name="Re_id" className="bottom_right" value="123456"></Input>
          </View>
          <View className="bottom_one">
            <View className="bottom_name">旧密码：</View>
            <Input
              name="old_password"
              className="bottom_right"
              password="true"
            ></Input>
          </View>
          <View className="bottom_one">
            <View className="bottom_name">新密码：</View>
            <Input
              name="Re_password"
              className="bottom_right"
              password="true"
            ></Input>
          </View>
          <View className="bottom_one">
            <View className="bottom_name">确认密码：</View>
            <Input
              name="Re_new_password"
              className="bottom_right"
              password="true"
            ></Input>
          </View>
          <Button className="submit" type="submit">
            注册
          </Button>
        </View>
      </Form>
    </View>
  )
}