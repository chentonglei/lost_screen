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
  reLaunch,
} from 'remax/one'
import { useQuery, usePageInstance } from 'remax'
import { AppContext } from '../../../app'
import ip from '../../ip'
export default () => {
  const [img, setImg] = useState('')
  const global = useContext(AppContext) //全局变量
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
      e.target.value.Sch_documents = img
      e.target.value.Sch_applicant_id = global.appData.Re_id
      e.target.value.Sch_applicant_name = global.appData.Re_name
      console.log(e.target.value)
      wx.request({
        url: `${ip}/school/add`,
        data: e.target.value,
        method: 'POST',
        success(res) {
          if (res.data.result === 'true') {
            wx.showToast({
              title: '申请成功',
              icon: 'success',
              duration: 2000,
            })
            setTimeout(function () {
              reLaunch({
                url: '/pages/login/index',
              })
            }, 2000)
          } else {
            wx.showToast({
              title: '申请失败',
              icon: 'success',
              duration: 2000,
            })
          }
        },
      })
    }
  }
  const sendImg = () => {
    /*  wx.chooseMedia({
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
    }) */
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      camera: 'back',
      success: function (res) {
        console.log(res)
        var tempImagePath = res.tempFiles
        var imgType = tempImagePath[0].tempFilePath
        var fsm = wx.getFileSystemManager()
        var base64img =
          'data:image/' +
          imgType +
          ';base64,' +
          fsm.readFileSync(tempImagePath[0].tempFilePath, 'base64')
        console.log(base64img)
        setImg(base64img)
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
