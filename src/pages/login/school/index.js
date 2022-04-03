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
  const sendImg = () => {
    /*  wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片/
        setImg(res.tempFilePaths)
      },
    }) */
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      camera: 'back',
      success(res) {
        console.log(res)
        setImg(res.tempFiles[0].tempFilePath)
        console.log(res.tempFiles.tempFilePath)
        console.log(res.tempFiles.size)
      },
    })
  }
  return (
    <View className="app">
      <View className="top">
        <View className="top_title">学校入住</View>
      </View>
      <Form onSubmit={formSubmit} onReset={formReset}>
        <View className="bottom">
          <View className="bottom_one">
            <View className="bottom_name">学校代码：</View>
            <Input name="Sch_id" className="bottom_right"></Input>
          </View>
          <View className="bottom_one">
            <View className="bottom_name">学校名：</View>
            <Input name="Sch_name" className="bottom_right"></Input>
          </View>
          <Button className="send" onClick={() => sendImg()}>
            上传
          </Button>
          <Image src={img} mode="widthFix" className="img" />
          <Button className="submit" type="submit">
            提交
          </Button>
        </View>
      </Form>
      <View className="ps">
        请确保正确的学校名和学校代码，提交成功后请耐心等待如需加急联系管理员QQ:382023278
      </View>
    </View>
  )
}
