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
  navigateBack,
  reLaunch,
} from 'remax/one'
import { picker } from 'remax/wechat'
import { useQuery, usePageInstance } from 'remax'
import ip from '../../ip'
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
    if (!e.target.value.Re_name) {
      str += '姓名'
      str += '、'
    }
    if (!e.target.value.Re_telephone) {
      str += '电话'
      str += '、'
    }
    if (!e.target.value.Re_password) {
      str += '密码'
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
      } else {
        wx.request({
          url: `${ip}/register/UserAdd`,
          data: e.target.value,
          method: 'POST',
          success(res) {
            if (res.data.result === 'true') {
              wx.showToast({
                title: '注册成功',
                icon: 'success',
                duration: 2000,
                success() {
                  reLaunch({
                    url: '/pages/login/pwd/index',
                  })
                },
              })
            } else {
              wx.showToast({
                title: '账号重复',
                icon: 'error',
                duration: 2000,
              })
            }
          },
        })
      }
    }
  }
  return (
    <View className="app">
      <View className="top">
        <View className="top_title">注册</View>
      </View>
      <Form onSubmit={formSubmit} onReset={formReset}>
        <View className="bottom">
          <View className="bottom_one">
            <View className="bottom_name">账号：</View>
            <Input name="Re_id" className="bottom_right"></Input>
          </View>
          <View className="bottom_one">
            <View className="bottom_name">姓名：</View>
            <Input name="Re_name" className="bottom_right"></Input>
          </View>
          <View className="bottom_one">
            <View className="bottom_name">电话：</View>
            <Input name="Re_telephone" className="bottom_right"></Input>
          </View>
          <View className="bottom_one">
            <View className="bottom_name">密码：</View>
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
