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
export default () => {
  const [img, setImg] = useState('')
  const data = [
    {
      Intr_question: '如何发布失物招领?',
      Intr_answer: '在主页面点击右上角的发布按钮',
    },
    {
      Intr_question: '如何修改个人信息?',
      Intr_answer: '在个人页直接修改输入框即可',
    },
    {
      Intr_question: '如何归还/拿丢失的物品?',
      Intr_answer:
        '在失物招领处点击我捡到了/我丢失的就可以看见对方的电话并自行联系',
    },
  ]

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
  return (
    <View className="app">
      <View className="top">
        <View className="top_title">帮助与反馈</View>
      </View>
      <View className="bottom">
        {data.map((item, index) => (
          <View key={index} className="bottom_one">
            <View className="bottom_name">{item.Intr_question}</View>
            <View className="bottom_answer">{`答：${item.Intr_answer}`}</View>
          </View>
        ))}
        <View className="ps">如有其它不懂的可以联系管理员QQ:382023278</View>
      </View>
    </View>
  )
}
