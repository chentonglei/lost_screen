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
export default () => {
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
    if (object.isModalVisible === '失物')
      tel = object.Lost_people_phone.slice(0, 3)
    else tel = object.Rec_people_phone.slice(0, 3)
    setTelephone(tel + '********')
    setBody(object)
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
          <View className="bottom_button">
            <Button className="submit">我捡到了</Button>
          </View>
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
