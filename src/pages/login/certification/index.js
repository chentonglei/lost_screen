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
  const formSubmit = (e) => {
    var str = '请输入'
    if (!e.target.value.Re_school_id) {
      str += '学校代码'
      str += '、'
    }
    if (!img) {
      str += '学生证信息'
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
      e.target.value.Re_img = img
      e.target.value.Re_id = global.appData.Re_id
      console.log(e.target.value)
      wx.request({
        url: `${ip}/register/UserCertification`,
        data: e.target.value,
        method: 'POST',
        success(res) {
          console.log(res)
          if (res.data.result === 'true') {
            wx.showToast({
              title: '申请成功',
              icon: 'success',
              duration: 2000,
            })
            global.appData.Re_status = '审核中'
            setTimeout(function () {
              reLaunch({
                url: '/pages/login/index',
              })
            }, 2000)
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'error',
              duration: 2000,
            })
          }
        },
      })
    }
  }
  const sendImg = () => {
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
        <View className="top_title">认证中心</View>
      </View>
      {global.appData.Re_status === '审核中' ? (
        <View className="ps">
          已提交认证，请耐心等待如需加急联系管理员QQ:382023278
        </View>
      ) : (
        <View>
          <Form onSubmit={formSubmit}>
            <View className="bottom">
              <View className="bottom_one">
                <View className="bottom_name">学校代码：</View>
                <Input name="Re_school_id" className="bottom_right"></Input>
              </View>
              <Button className="send" onClick={() => sendImg()}>
                上传学生/教师/职工证信息
              </Button>
              <Image src={img} mode="widthFix" className="img" />
              <Button className="submit" type="submit">
                提交
              </Button>
            </View>
          </Form>
          <View className="ps">
            请通过百度确保正确学校代码，提交成功后请耐心等待如需加急联系管理员QQ:382023278
          </View>
        </View>
      )}
    </View>
  )
}
