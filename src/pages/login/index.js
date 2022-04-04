import * as React from 'react'
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
  const formReset = (e) => {
    console.log('form发生了reset事件，携带数据为：', e.target)
  }
  const formSubmit = (e) => {
    console.log('form发生了submit事件，携带数据为：', e.target)
    const id = e.target.value.id
    const pwd = e.target.value.psw
    if (id === 'admin' && pwd === '123') {
      console.log('登录成功')
      wx.showModal({
        title: '提示',
        content: '登录成功',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        },
      })
      navigateTo({
        url: '/pages/index/index',
      })
    } else {
      console.log('登录失败')
      setPwd('')
      formReset(e)
      /* console.log(password);
      setPassword(''); */
      wx.showModal({
        /* title: '提示', */
        content: '登录失败',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        },
      })
      console.log('form发生了submit事件，携带数据为：', e.target)
    }
  }
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
      navigateTo({
        url: `/pages/login/school/index`,
      })
    }
    if (item.name === '帮助与反馈') {
      navigateTo({
        url: `/pages/login/help/index`,
      })
    }
    if (item.name === '个人中心') {
      navigateTo({
        url: `/pages/login/setting/index`,
      })
    }
  }
  const login = () => {
    wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://example.com/onLogin',
            data: {
              code: res.code,
            },
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      },
    })
  }
  const exit = () => {}
  return (
    <View className="app">
      <View className="top">
        <View className="top_left">
          <View className="top_title">探索未知~</View>
          <Button className="top_button" onClick={() => login()}>
            登录/注册
          </Button>
        </View>
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
      <View key={'exit'} className="bottom_one" onClick={() => exit()}>
        <View className="bottom_left">
          <Image src={exit_img} mode="widthFix" className="bottom_left_img" />
          <View className="exit_name">退出登录</View>
        </View>
      </View>
    </View>
  )
}
