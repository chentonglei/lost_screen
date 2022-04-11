import React, { useState, useEffect, useContext } from 'react'
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
import { usePageEvent } from 'remax/macro'
import send from './加号.png'
import address from './位置.png'
import comment from './评论.png'
import school from '../login/school'
import ip from '../ip'
import { AppContext } from '../../app'
export default () => {
  const [isModalVisible, setIsModalVisible] = useState('失物')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const global = useContext(AppContext) //全局变量
  useEffect(() => {
    wx.showLoading({
      title: '加载中...',
      success() {
        setLoading(true)
      },
    })
    const fetchData = async () => {
      if (isModalVisible === '失物')
        await wx.request({
          url: `${ip}/lost/UserShow`,
          method: 'POST',
          success(res) {
            if (res.data.data) {
              setData(res.data.data)
            }
          },
        })
      if (isModalVisible === '招领')
        await wx.request({
          url: `${ip}/recruit/UserShow`,
          method: 'POST',
          success(res) {
            if (res.data.data) {
              setData(res.data.data)
            }
          },
        })
    }
    fetchData()
    setTimeout(function () {
      wx.hideLoading({
        success() {
          setLoading(false)
        },
      })
    }, 1000)
  }, [isModalVisible])
  const changeButton = (title) => {
    setIsModalVisible(title)
  }
  const release = () => {
    navigateTo({
      url: `/pages/index/release/index`,
    })
  }
  const school = () => {
    navigateTo({
      url: `/pages/index/school/index`,
    })
  }
  const details = (item) => {
    item.isModalVisible = isModalVisible
    let str = JSON.stringify(item)
    navigateTo({
      url: '/pages/index/details/index?jsonStr=' + str,
    })
  }
  return (
    <View className="app">
      <View className="top">
        <Image
          src={send}
          mode="widthFix"
          className="bottom_left_img"
          onClick={() => release()}
        />
        <View className="top_title">失物招领</View>
      </View>
      <View className="mid">
        <View className="mid_left">
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
        <View className="mid_right">
          <Image src={address} mode="widthFix" className="address_img" />
          <View onClick={() => school()}>{global.school}</View>
        </View>
      </View>
      {loading === true ? (
        <View></View>
      ) : (
        <View className="content">
          {data.map((item, index) => (
            <View
              className="content_one"
              onClick={() => details(item)}
              key={index}
            >
              <View className="content_one_top">
                <View className="content_one_name">
                  {isModalVisible === '失物'
                    ? item.Lost_people_name
                    : item.Rec_people_name}
                  {isModalVisible === '失物' ? (
                    <View
                      className={
                        item.Lost_status === '未找到'
                          ? 'status_nofind'
                          : 'status_find'
                      }
                    >
                      {item.Lost_status}
                    </View>
                  ) : (
                    <View
                      className={
                        item.Rec_status === '未归还'
                          ? 'status_nofind'
                          : 'status_find'
                      }
                    >
                      {item.Rec_status}
                    </View>
                  )}
                </View>
                <View className="content_one_mid">
                  <View className="content_one_time">
                    {isModalVisible === '失物'
                      ? item.Lost_send_time
                      : item.Rec_send_time}
                  </View>
                  <View className="content_one_school">{item.Sch_name}</View>
                </View>
              </View>
              <View className="content_one_bottom">
                <View className="content_bottom_title">{`${
                  isModalVisible === '失物' ? '失物时间' : '拾物时间'
                }：${
                  isModalVisible === '失物' ? item.Lost_time : item.Rec_time
                }`}</View>
                <View className="content_bottom_title">{`${
                  isModalVisible === '失物' ? '失物地点' : '拾物地点'
                }：${
                  isModalVisible === '失物' ? item.Lost_where : item.Rec_where
                }`}</View>
                <View className="content_bottom_title">
                  {`${isModalVisible === '失物' ? '失物图片' : '拾物图片'}：`}
                  <Text style={'text-decoration:underline;color:#1296db'}>
                    查看图片
                  </Text>
                </View>
                <View className="content_bottom_title">{`${
                  isModalVisible === '失物' ? '失物内容' : '拾物内容'
                }：${
                  isModalVisible === '失物'
                    ? item.Lost_content
                    : item.Rec_content
                }`}</View>
              </View>
              <View className="comment">
                <Image src={comment} mode="widthFix" className="bottom_img" />
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  )
}
