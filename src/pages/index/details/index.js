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
  const [telephone, setTelephone] = useState('')
  usePageEvent('onLoad', (options) => {
    let object = JSON.parse(options.jsonStr)
    let tel = object.Lost_people_phone.slice(0, 3)
    setTelephone(tel + '********')
    setBody(object)
  })
  return (
    <View className="app">
      <View className="top">
        <View className="top_title">详情</View>
      </View>
      <View className="content">
        <View className="content_one">
          <View className="content_one_top">
            <View className="content_one_name">
              {`${body.Lost_people_name}  ${telephone}`}
              <View
                className={
                  body.Lost_status === '未找到'
                    ? 'status_nofind'
                    : 'status_find'
                }
              >
                {body.Lost_status}
              </View>
            </View>
            <View className="content_one_mid">
              <View className="content_one_time">{body.Lost_send_time}</View>
              <View className="content_one_school">{body.Re_school_name}</View>
            </View>
          </View>
          <View className="content_one_bottom">
            <View className="content_bottom_title">{`失物时间：${body.Lost_time}`}</View>
            <View className="content_bottom_title">{`失物地点：${body.Lost_where}`}</View>
            <View className="content_bottom_title">{`失物内容：${body.Lost_content}`}</View>
            <View className="content_bottom_title">{`失物图片：`}</View>
            <View className="bottom_img_div">
              <Image
                src={body.Lost_img}
                mode="widthFix"
                className="bottom_img"
              />
            </View>
          </View>
          <View className="bottom_button">
            <Button className="submit">我捡到了</Button>
          </View>
        </View>
      </View>
    </View>
  )
}
