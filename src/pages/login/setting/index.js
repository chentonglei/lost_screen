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
} from 'remax/one'
import { clearStorage, picker } from 'remax/wechat'
import { useQuery, usePageInstance } from 'remax'
import { AppContext } from '../../../app'
import ip from '../../ip'
export default () => {
  const global = useContext(AppContext) //全局变量
  const [index, setIndex] = useState(0)
  const [sex, setSex] = useState(global.appData.Re_sex)
  const [age, setAge] = useState(global.appData.Re_age)
  const array = ['男', '女']
  /*   const data = {
    Re_id: '123',
    Re_name: '陈彤磊',
    Re_email: '382023278@qq.com',
    Re_sex: '男',
    Re_age: '1999-11-20',
    Re_telephone: '18859144927',
    Re_school_name: '福建工程学院',
  } */
  const formReset = (e) => {
    console.log('form发生了reset事件，携带数据为：', e.target)
  }
  const formSubmit = (e) => {
    e.target.value.Re_power = 'user'
    e.target.value.Re_sex = sex
    e.target.value.Re_age = age
    wx.request({
      url: `${ip}/register/update`,
      data: e.target.value,
      method: 'POST',
      success(res) {
        if (res.data.result === 'true') {
          wx.showToast({
            title: '修改成功',
            icon: 'success',
            duration: 2000,
          })
          wx.request({
            url: `${ip}/register/userInfo`,
            data: {
              Re_id: global.appData.Re_id,
              Re_power: 'user',
            },
            method: 'POST',
            success(res) {
              if (res.data.result === 'true') {
                global.setAppData(res.data.user)
              }
            },
          })
        }
      },
    })
  }
  const bindPickerChange = (e) => {
    console.log(e)
    if (e.detail.value === '0') {
      setSex('男')
    } else {
      setSex('女')
    }
  }
  const bindDateChange = (e) => {
    setAge(e.detail.value)
  }
  const getNowFormatDate = () => {
    //获得当前时间 为生日的末时间
    var date = new Date()
    var seperator1 = '-'
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var strDate = date.getDate()
    if (month >= 1 && month <= 9) {
      month = '0' + month
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate
    return currentdate
  }
  const changepwd = () => {
    navigateTo({
      url: `/pages/login/revise/index`,
    })
  }
  return (
    <View className="app">
      <View className="top">
        <View className="top_title">个人中心</View>
      </View>
      <Form onSubmit={formSubmit} onReset={formReset}>
        <View className="bottom">
          <View className="bottom_one">
            <View className="bottom_name">账号：</View>
            <Input
              name="Re_id"
              className="bottom_right_disable"
              disabled
              value={global.appData.Re_id}
            ></Input>
          </View>
          <View className="bottom_one">
            <View className="bottom_name">姓名：</View>
            <Input
              name="Re_name"
              className="bottom_right_disable"
              disabled
              value={global.appData.Re_name}
            ></Input>
          </View>
          <View className="bottom_one">
            <View className="bottom_name">邮箱：</View>
            <Input
              name="Re_email"
              value={global.appData.Re_email}
              className="bottom_right"
            ></Input>
          </View>
          <View className="bottom_one">
            <View className="bottom_name">性别：</View>
            <picker
              mode="selector"
              range={array}
              bindchange={bindPickerChange}
              className="bottom_right"
            >
              <View class="picker">{sex}</View>
            </picker>
          </View>
          <View className="bottom_one">
            <View className="bottom_name">电话：</View>
            <Input
              name="Re_telephone"
              value={global.appData.Re_telephone}
              className="bottom_right"
            ></Input>
          </View>
          <View className="bottom_one">
            <View className="bottom_name">生日</View>
            <picker
              mode="date"
              value={age}
              start="1990-01-01"
              end={getNowFormatDate()}
              fields="day"
              className="bottom_right"
              bindchange={bindDateChange}
            >
              <View class="picker">{age}</View>
            </picker>
          </View>
          <View className="bottom_one">
            <View className="bottom_name">学校：</View>
            <Input
              name="Re_school_name"
              className="bottom_right_disable"
              disabled
              value={global.appData.Re_school_name}
            ></Input>
          </View>
          <Button className="submit" type="submit">
            修改
          </Button>
        </View>
      </Form>
      <View className="ps">如需修改学校、姓名请联系管理员QQ:382023278</View>
      <View className="register" onClick={() => changepwd()}>
        密码修改
      </View>
    </View>
  )
}
