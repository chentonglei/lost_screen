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
} from 'remax/one'
import { useQuery, usePageInstance } from 'remax'
import { usePageEvent } from 'remax/macro'
import { AppContext } from '../../../app'
import ip from '../../ip'
export default () => {
  const global = useContext(AppContext) //全局变量
  const [body, setBody] = useState({})
  const [buttonfocus, setButtonfocus] = useState('说点什么吧..')
  const [telephone, setTelephone] = useState('')
  const data = [
    {
      Comment_do_message: '体育馆有人偷东西的大家注意点',
      Com_do_name: '陈彤磊',
      Com_do_id: '3181911220',
      Com_do_time: '2022-2-3 22:00',
      Com_be_name: '',
      Com_be_id: '',
    },
    {
      Comment_do_message: '不会吧不会吧',
      Com_do_name: '何思宏',
      Com_do_id: '3181911224',
      Com_do_time: '2022-2-3 22:11',
      Com_be_name: '陈彤磊',
      Com_be_id: '3181911220',
    },
  ]
  usePageEvent('onLoad', (options) => {
    let object = JSON.parse(options.jsonStr)
    var tel
    const fetchData = async () => {
      if (object.item.isModalVisible === '失物') {
        await wx.request({
          url: `${ip}/lost/info`,
          data: { Lost_id: object.item.Lost_id },
          method: 'POST',
          success(res) {
            if (res.data.data) {
              res.data.data.isModalVisible = '失物'
              console.log(res.data.data)
              setBody(res.data.data)
              tel = res.data.data.Lost_people_phone.slice(0, 3)
              setTelephone(tel + '********')
            }
          },
        })
      } else {
        await wx.request({
          url: `${ip}/recruit/info`,
          data: { Rec_id: object.item.Rec_id },
          method: 'POST',
          success(res) {
            if (res.data.data) {
              res.data.data.isModalVisible = '招领'
              setBody(res.data.data)
              tel = res.data.data.Rec_people_phone.slice(0, 3)
              setTelephone(tel + '********')
            }
          },
        })
      }
    }
    fetchData()
  })
  const onbutton = (item) => {
    setButtonfocus(`回复${item.Com_do_name}`)
  }
  const deletecomment = (item) => {
    wx.showActionSheet({
      itemList: ['删除'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      },
    })
  }
  return (
    <View className="app">
      <View className="top">
        <View className="top_title">详情</View>
      </View>

      <View className="content">
        <View className="content_one">
          <View className="content_one_top">
            <View className="content_one_name">
              {`${
                body.isModalVisible === '失物'
                  ? body.Lost_people_name
                  : body.Rec_people_name
              }  ${telephone}`}
              {body.isModalVisible === '失物' ? (
                <View
                  className={
                    body.Lost_status === '未找到'
                      ? 'status_nofind'
                      : 'status_find'
                  }
                >
                  {body.Lost_status}
                </View>
              ) : (
                <View
                  className={
                    body.Rec_status === '未归还'
                      ? 'status_nofind'
                      : 'status_find'
                  }
                >
                  {body.Rec_status}
                </View>
              )}
            </View>
            <View className="content_one_mid">
              <View className="content_one_time">
                {body.isModalVisible === '失物'
                  ? body.Lost_send_time
                  : body.Rec_send_time}
              </View>
              <View className="content_one_school">
                {body.isModalVisible === '失物'
                  ? body.Lost_school_name
                  : body.Rec_school_name}
              </View>
            </View>
          </View>
          <View className="content_one_bottom">
            <View className="content_bottom_title">{`失物时间：${
              body.isModalVisible === '失物' ? body.Lost_time : body.Rec_time
            }`}</View>
            <View className="content_bottom_title">{`失物地点：${
              body.isModalVisible === '失物' ? body.Lost_where : body.Rec_where
            }`}</View>
            <View className="content_bottom_title">{`失物内容：${
              body.isModalVisible === '失物'
                ? body.Lost_content
                : body.Rec_content
            }`}</View>
            <View className="content_bottom_title">{`失物图片：${
              body.Lost_img ? '' : '无'
            }`}</View>
            {body.Lost_img ? (
              <View className="bottom_img_div">
                <Image
                  src={body.Lost_img}
                  mode="widthFix"
                  className="bottom_img"
                />
              </View>
            ) : (
              ''
            )}
          </View>
          {global.appData.Re_id ===
            (body.Lost_people_id
              ? body.Lost_people_id
              : body.Rec_people_id) && (
            <View className="bottom_button">
              <Button className="submit">删除</Button>
            </View>
          )}
          {body.Lost_status === '未找到' &&
            global.appData.Re_id !== body.Lost_people_id && (
              <View className="bottom_button">
                <Button className="submit">我捡到了</Button>
              </View>
            )}
          {body.Rec_status === '未归还' &&
            global.appData.Re_id !== body.Rec_people_id && (
              <View className="bottom_button">
                <Button className="submit">我遗失的</Button>
              </View>
            )}
        </View>
      </View>
      <View className="comment_details">
        {/* <View className="placeholder">快写下你的评论吧~</View> */}
        {data.map((item, index) => (
          <View className="comment_one">
            <View className="comment_one_top">
              <View className="comment_top_left">
                {`${item.Com_do_name} => ${
                  item.Com_be_name ? item.Com_be_name : '楼主'
                }`}{' '}
              </View>
              <View className="comment_top_right">{item.Com_do_time}</View>
            </View>
            <View
              className="comment_one_content"
              onClick={() => onbutton(item)}
              onLongTap={() => deletecomment(item)}
            >
              {item.Comment_do_message}
            </View>
          </View>
        ))}
      </View>
      <View className="comment">
        <Input
          className="comment_input"
          placeholder={buttonfocus}
          focus={buttonfocus !== '说点什么吧..' ? true : false}
        ></Input>
        <View className="comment_send">
          <Button className="send_button">发送</Button>
        </View>
      </View>
    </View>
  )
}
