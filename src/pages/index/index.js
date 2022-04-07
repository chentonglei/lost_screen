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
import { usePageEvent } from 'remax/macro'
import send from './加号.png'
import address from './位置.png'
import comment from './评论.png'
import school from '../login/school'
export default () => {
  const [isModalVisible, setIsModalVisible] = useState('失物')
  const data = [
    {
      Lost_time: '2022-2-1',
      Lost_status: '未找到',
      Lost_where: '北区操场',
      Lost_content: 'airpods耳机',
      Lost_img:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      Lost_people_id: '3181911220',
      Lost_people_name: '陈彤磊',
      Lost_people_phone: '18859144927',
      Lost_send_time: '2022-2-2 15:30',
      Re_school_name: '福建工程学院',
    },
    {
      Lost_time: '2022-2-1',
      Lost_status: '已找到',
      Lost_where: '北区操场',
      Lost_content: 'airpods耳机充电仓一个',
      Lost_img:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      Lost_people_id: '3181911220',
      Lost_people_name: '陈彤磊',
      Lost_people_phone: '18859144927',
      Lost_send_time: '2022-2-2 15:30',
      Re_school_name: '福建工程学院',
    },
  ]
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
          <View onClick={() => school()}>全部学校</View>
        </View>
      </View>
      <View className="content">
        {data.map((item, index) => (
          <View
            className="content_one"
            onClick={() => details(item)}
            key={index}
          >
            <View className="content_one_top">
              <View className="content_one_name">
                {item.Lost_people_name}
                <View
                  className={
                    item.Lost_status === '未找到'
                      ? 'status_nofind'
                      : 'status_find'
                  }
                >
                  {item.Lost_status}
                </View>
              </View>
              <View className="content_one_mid">
                <View className="content_one_time">{item.Lost_send_time}</View>
                <View className="content_one_school">
                  {item.Re_school_name}
                </View>
              </View>
            </View>
            <View className="content_one_bottom">
              <View className="content_bottom_title">{`失物时间：${item.Lost_time}`}</View>
              <View className="content_bottom_title">{`失物地点：${item.Lost_where}`}</View>
              <View className="content_bottom_title">
                {`失物图片：`}
                <Text style={'text-decoration:underline;color:#1296db'}>
                  查看图片
                </Text>
              </View>
              <View className="content_bottom_title">{`失物内容：${item.Lost_content}`}</View>
            </View>
            <View className="comment">
              <Image src={comment} mode="widthFix" className="bottom_img" />
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}
