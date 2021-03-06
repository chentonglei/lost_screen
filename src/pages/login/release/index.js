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
import ip from '../../ip'
import { AppContext } from '../../../app'
import comment from './评论.png'
const color = {
  未找到: 'status_nofind',
  已找到: 'status_find',
  未归还: 'status_nofind',
  已归还: 'status_find',
  审核中: 'status_shenhe',
  审核拒绝: 'status_refuse',
}
export default () => {
  const global = useContext(AppContext) //全局变量
  const [isModalVisible, setIsModalVisible] = useState('失物')
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const one_request = () => {
    wx.showLoading({
      title: '加载中...',
      success() {
        setLoading(true)
      },
    })
    const fetchData = async () => {
      if (isModalVisible === '失物')
        await wx.request({
          url: `${ip}/lost/OneShow`,
          data: { Lost_people_id: global.appData.Re_id },
          method: 'POST',
          success(res) {
            if (res.data.data) {
              setData(res.data.data)
            }
          },
        })
      if (isModalVisible === '招领')
        await wx.request({
          url: `${ip}/recruit/OneShow`,
          data: { Rec_people_id: global.appData.Re_id },
          method: 'POST',
          success(res) {
            if (res.data.data) {
              setData(res.data.data)
            }
          },
        })
      if (isModalVisible === '归还')
        await wx.request({
          url: `${ip}/return/OneShow`,
          data: { Return_people_id: global.appData.Re_id },
          method: 'POST',
          success(res) {
            console.log(res.data.data)
            if (res.data.data) {
              setData(res.data.data)
            }
          },
        })
      if (isModalVisible === '评论')
        await wx.request({
          url: `${ip}/Comment/OneShow`,
          data: { Re_id: global.appData.Re_id },
          method: 'POST',
          success(res) {
            console.log(res.data.data)
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
  }
  usePageEvent('onLoad', (options) => {
    console.log(options.title)
    setIsModalVisible(options.title)
  })
  usePageEvent('onPullDownRefresh', () => {
    // 可以返回一个 promise，控制何时停止下来刷新行为
    return new Promise((resolve) => {
      setTimeout(() => {
        one_request()
        wx.stopPullDownRefresh()
      }, 1000)
    })
  })
  useEffect(() => {
    one_request()
  }, [isModalVisible])
  const changeButton = (title) => {
    setLoading(true)
    setIsModalVisible(title)
  }
  const details = (item) => {
    if (global.appData) {
      if (isModalVisible === '失物' || isModalVisible === '招领')
        item.isModalVisible = isModalVisible
      if (isModalVisible === '失物') delete item.Lost_img
      else delete item.Rec_img
      let str = JSON.stringify({ item })
      navigateTo({
        url: '/pages/index/details/index?jsonStr=' + str, //传base64报错
      })
    } else {
      wx.showToast({
        title: '请先登录',
        icon: 'error',
        duration: 2000,
      })
    }
  }
  const intodetail = (item) => {
    var body = {}
    body.isModalVisible = item.Com_type
    if (item.Com_type === '失物') body.Lost_id = item.Com_type_id
    else body.Rec_id = item.Com_type_id
    let str = JSON.stringify({ item: body })
    navigateTo({
      url: '/pages/index/details/index?jsonStr=' + str, //传base64报错
    })
  }
  const content = () => {
    if (isModalVisible === '失物' || isModalVisible === '招领') {
      return (
        <View className="content">
          {data.length === 0 ? (
            <View className="nothing">暂无数据</View>
          ) : (
            data.map((item, index) => (
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
                      <View className={color[item.Lost_status]}>
                        {item.Lost_status}
                      </View>
                    ) : (
                      <View className={color[item.Rec_status]}>
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
            ))
          )}
        </View>
      )
    }
    if (isModalVisible === '归还') {
      return (
        <View className="content">
          {data.length === 0 ? (
            <View className="nothing">暂无数据</View>
          ) : (
            data.map((item, index) => (
              <View
                className="content_one"
                onClick={() => details(item)}
                key={index}
              >
                <View className="content_one_top">
                  <View className="content_one_name">
                    {item.isModalVisible === '失物'
                      ? item.Lost_people_name
                      : item.Rec_people_name}
                    {item.isModalVisible === '失物' ? (
                      <View className={color[item.Lost_status]}>
                        {item.Lost_status}
                      </View>
                    ) : (
                      <View className={color[item.Rec_status]}>
                        {item.Rec_status}
                      </View>
                    )}
                  </View>
                  <View className="content_one_mid">
                    <View className="content_one_time">
                      {item.isModalVisible === '失物'
                        ? item.Lost_send_time
                        : item.Rec_send_time}
                    </View>
                    <View className="content_one_school">{item.Sch_name}</View>
                  </View>
                </View>
                <View className="content_one_bottom">
                  <View className="content_bottom_title">{`${
                    item.isModalVisible === '失物' ? '失物时间' : '拾物时间'
                  }：${
                    item.isModalVisible === '失物'
                      ? item.Lost_time
                      : item.Rec_time
                  }`}</View>
                  <View className="content_bottom_title">{`${
                    item.isModalVisible === '失物' ? '失物地点' : '拾物地点'
                  }：${
                    item.isModalVisible === '失物'
                      ? item.Lost_where
                      : item.Rec_where
                  }`}</View>
                  <View className="content_bottom_title">
                    {`${
                      item.isModalVisible === '失物' ? '失物图片' : '拾物图片'
                    }：`}
                    <Text style={'text-decoration:underline;color:#1296db'}>
                      查看图片
                    </Text>
                  </View>
                  <View className="content_bottom_title">{`${
                    item.isModalVisible === '失物' ? '失物内容' : '拾物内容'
                  }：${
                    item.isModalVisible === '失物'
                      ? item.Lost_content
                      : item.Rec_content
                  }`}</View>
                </View>
                <View className="comment">
                  <Image src={comment} mode="widthFix" className="bottom_img" />
                </View>
              </View>
            ))
          )}
        </View>
      )
    }
    if (isModalVisible === '评论') {
      return (
        <View className="comment_details">
          {data.length === 0 ? (
            <View className="placeholder">快写下你的评论吧~</View>
          ) : (
            data.map((item, index) => (
              <View
                className="comment_one"
                key={index}
                onClick={() => intodetail(item)}
              >
                <View className="comment_one_top">
                  <View className="comment_top_left">
                    {item.Com_do_name}{' '}
                    {item.Com_be_name ? `=> ${item.Com_be_name}` : ''}
                  </View>
                  <View className="comment_top_right">{item.Com_do_time}</View>
                </View>
                <View className="comment_one_content">
                  {item.Com_do_message}
                </View>
              </View>
            ))
          )}
        </View>
      )
    }
  }
  return (
    <View className="app">
      <View className="top">
        <View className="top_title">我的发布</View>
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
        <View
          className={isModalVisible === '评论' ? 'mid_one_on' : 'mid_one_off'}
          onClick={() => changeButton('评论')}
        >
          评论
        </View>
        <View
          className={isModalVisible === '归还' ? 'mid_one_on' : 'mid_one_off'}
          onClick={() => changeButton('归还')}
        >
          归还
        </View>
      </View>
      {loading === true ? <View /> : content()}
    </View>
  )
}
