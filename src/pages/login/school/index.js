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
    var str = '请输入'
    if (!e.target.value.Sch_id) {
      str += '学校代码'
      str += '、'
    }
    if (!e.target.value.Sch_name) {
      str += '学校名'
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
