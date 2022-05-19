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
  navigateBack,
  reLaunch,
} from 'remax/one'
import { picker } from 'remax/wechat'
import { useQuery, usePageInstance } from 'remax'
import { usePageEvent } from 'remax/macro'
import ip from '../../ip'
import { AppContext } from '../../../app'
export default () => {
  const global = useContext(AppContext) //全局变量
  const [data, setData] = useState([])
  usePageEvent('onLoad', () => {
    wx.request({
      url: `${ip}/school/UserShow`,
      method: 'POST',
      success(res) {
        if (res.data.data) {
          let school_one = { Sch_name: '全部学校' }
          let allschool = [school_one, ...res.data.data]
          setData(allschool)
        }
      },
    })
  })
  const MidButton = (item) => {
    global.setSchool(item.Sch_name)
    reLaunch({
      url: '/pages/index/index',
    })
  }
  const search = (e) => {
    wx.request({
      url: `${ip}/school/search`,
      data: { search: e.target.value },
      method: 'POST',
      success(res) {
        if (e.target.value === '') {
          let school_one = { Sch_name: '全部学校' }
          let allschool = [school_one, ...res.data.data]
          setData(allschool)
        } else setData(res.data.data)
      },
    })
  }
  return (
    <View className="app">
      <View className="top">
        <View className="top_title">学校列表</View>
      </View>
      <View className="input_style">
        <Input
          className="input_search"
          placeholder="搜索"
          onInput={search}
        ></Input>
      </View>
      <View className="mid">
        <View className="mid_top">请选择学校</View>
        <View className="mid_content">
          {data.map((item, index) => (
            <View
              key={index}
              className="mid_content_one"
              onClick={() => MidButton(item)}
            >
              {item.Sch_name}
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}
