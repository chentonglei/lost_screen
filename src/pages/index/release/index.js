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
import { picker } from 'remax/wechat'
import { usePageEvent } from 'remax/macro'
export default () => {
  const [img, setImg] = useState('')
  const [isModalVisible, setIsModalVisible] = useState('失物')
  const [todaydate, setTodaydate] = useState()
  usePageEvent('onLoad', () => {
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
    setTodaydate(currentdate)
  })
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
  const changeButton = (title) => {
    setIsModalVisible(title)
  }
  const bindDateChange = (e) => {
    setTodaydate(e.detail.value)
  }
  const getNowFormatDate = () => {
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
        <View className="top_title">发布</View>
      </View>
      <View className="mid">
        <View
          className={isModalVisible === '失物' ? 'mid_one_on' : 'mid_one_off'}
          onClick={() => changeButton('失物')}
        >
          失物
        </View>
        <View
          className={isModalVisible === '招领' ? 'mid_one_on' : 'mid_one_off'}
          onClick={() => changeButton('招领')}
        >
          招领
        </View>
      </View>
      <Form onSubmit={formSubmit} onReset={formReset}>
        {isModalVisible === '失物' ? (
          <View className="bottom">
            <View className="bottom_one">
              <View className="bottom_name">失物地点：</View>
              <Input name="Lost_where" className="bottom_right"></Input>
            </View>
            <View className="bottom_one">
              <View className="bottom_name">失物内容：</View>
              <Input name="Lost_content" className="bottom_right"></Input>
            </View>
            <View className="bottom_one">
              <View className="bottom_name">失物日期：</View>
              <picker
                mode="date"
                start="1990-01-01"
                end={getNowFormatDate()}
                fields="day"
                className="bottom_right"
                bindchange={bindDateChange}
              >
                <View class="picker">{todaydate}</View>
              </picker>
            </View>
            <Button className="send" onClick={() => sendImg()}>
              失物图片上传
            </Button>
            <Image src={img} mode="widthFix" className="img" />
          </View>
        ) : (
          <View className="bottom">
            <View className="bottom_one">
              <View className="bottom_name">拾物地点：</View>
              <Input name="Rec_where" className="bottom_right"></Input>
            </View>
            <View className="bottom_one">
              <View className="bottom_name">拾物内容：</View>
              <Input name="Rec_content" className="bottom_right"></Input>
            </View>
            <View className="bottom_one">
              <View className="bottom_name">拾物日期：</View>
              <picker
                mode="date"
                start="1990-01-01"
                end={getNowFormatDate()}
                fields="day"
                className="bottom_right"
                bindchange={bindDateChange}
              >
                <View class="picker">{todaydate}</View>
              </picker>
            </View>
            <Button className="send" onClick={() => sendImg()}>
              拾物图片上传
            </Button>
            <Image src={img} mode="widthFix" className="img" />
          </View>
        )}
        <Button className="submit" type="submit">
          发布
        </Button>
      </Form>
    </View>
  )
}
