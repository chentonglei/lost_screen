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
  redirectTo,
} from 'remax/one'
import { useQuery, usePageInstance } from 'remax'
import { usePageEvent } from 'remax/macro'
import { AppContext } from '../../../app'
import ip from '../../ip'
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
  const [body, setBody] = useState({})
  const [data, setData] = useState([])
  const [buttonfocus, setButtonfocus] = useState('说点什么吧..')
  const [be, setBe] = useState({ Com_be_name: '', Com_be_id: '' })
  const [telephone, setTelephone] = useState('')
  const [loading, setLoading] = useState(true)
  usePageEvent('onLoad', (options) => {
    wx.showLoading({
      title: '加载中...',
      success() {
        setLoading(true)
      },
    })
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
              setBe({
                Com_be_name: res.data.data.Lost_people_name,
                Com_be_id: res.data.data.Lost_people_id,
              })
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
              console.log(res.data.data)
              res.data.data.isModalVisible = '招领'
              setBody(res.data.data)
              setBe({
                Com_be_name: res.data.data.Rec_people_name,
                Com_be_id: res.data.data.Rec_people_id,
              })
              tel = res.data.data.Rec_people_phone.slice(0, 3)
              setTelephone(tel + '********')
            }
          },
        })
      }
    }
    const fetchData2 = async () => {
      await wx.request({
        url: `${ip}/comment/usershow`,
        data: object.item,
        method: 'POST',
        success(res) {
          if (res.data.data) {
            setData(res.data.data)
          }
        },
      })
    }
    fetchData()
    fetchData2()
    setTimeout(function () {
      wx.hideLoading({
        success() {
          setLoading(false)
        },
      })
    }, 1000)
  })
  const onbutton = (item) => {
    if (item.Com_do_id !== global.appData.Re_id) {
      setBe({ Com_be_id: item.Com_do_id, Com_be_name: item.Com_do_name })
      setButtonfocus(`回复${item.Com_do_name}`)
    }
  }
  const deletecomment = (item) => {
    if (
      global.appData.Re_id === item.Com_do_id ||
      global.appData.Re_id === item.Com_be_id ||
      global.appData.Re_id ===
        (body.isModalVisible === '失物'
          ? body.Lost_people_id
          : body.Rec_people_id)
    ) {
      wx.showActionSheet({
        itemList: ['删除'],
        success: function (res) {
          wx.request({
            url: `${ip}/comment/delete`,
            data: { array: [item.Com_id] },
            method: 'POST',
            success(res) {
              if ((res.data.result = 'true')) {
                wx.showToast({
                  title: '删除成功',
                  icon: 'success',
                  duration: 2000,
                })
                setTimeout(function () {
                  delete body.Rec_img ? body.Rec_img : body.Lost_img
                  let str = JSON.stringify({ item: body })
                  redirectTo({
                    url: '/pages/index/details/index?jsonStr=' + str, //传base64报错
                  })
                }, 2000)
              }
            },
          })
        },
        fail: function (res) {
          console.log(res.errMsg)
        },
      })
    }
  }
  const iget = () => {
    //我捡到的 失物
    wx.showModal({
      content: '是否确认捡到',
      success: function (res) {
        if (res.confirm) {
          if (body.isModalVisible === '失物') {
            wx.request({
              url: `${ip}/lost/get`,
              data: {
                Return_message_id: body.Lost_id,
                Return_people_id: global.appData.Re_id,
                Return_people_name: global.appData.Re_name,
                Return_people_phone: global.appData.Re_telephone,
              },
              method: 'POST',
              success(res) {
                console.log('success')
                if (res.data.result === 'true') {
                  wx.showToast({
                    title: '成功',
                    icon: 'success',
                    duration: 2000,
                  })
                  setTimeout(function () {
                    delete body.Lost_img
                    let str = JSON.stringify({ item: body })
                    redirectTo({
                      url: '/pages/index/details/index?jsonStr=' + str, //传base64报错
                    })
                  }, 2000)
                } else {
                  wx.showToast({
                    title: '失败',
                    icon: 'error',
                    duration: 2000,
                  })
                }
              },
            })
          }
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      },
    })
  }
  const youget = () => {
    //我遗失的 招领
    wx.showModal({
      content: '是否确认是你的',
      success: function (res) {
        if (res.confirm) {
          if (body.isModalVisible === '招领') {
            wx.request({
              url: `${ip}/recruit/get`,
              data: {
                Return_message_id: body.Rec_id,
                Return_people_id: global.appData.Re_id,
                Return_people_name: global.appData.Re_name,
                Return_people_phone: global.appData.Re_telephone,
              },
              method: 'POST',
              success(res) {
                console.log('success')
                if (res.data.result === 'true') {
                  wx.showToast({
                    title: '成功',
                    icon: 'success',
                    duration: 2000,
                  })
                  setTimeout(function () {
                    delete body.Rec_img
                    let str = JSON.stringify({ item: body })
                    redirectTo({
                      url: '/pages/index/details/index?jsonStr=' + str, //传base64报错
                    })
                  }, 2000)
                } else {
                  wx.showToast({
                    title: '失败',
                    icon: 'error',
                    duration: 2000,
                  })
                }
              },
            })
          }
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      },
    })
  }
  const deleteLost = () => {
    wx.showModal({
      content: '是否确认删除',
      success: function (res) {
        if (res.confirm) {
          if (body.isModalVisible === '失物') {
            wx.request({
              url: `${ip}/lost/delete`,
              data: { array: [body.Lost_id] },
              method: 'POST',
              success(res) {
                if (res.data.result === 'true') {
                  wx.showToast({
                    title: '删除成功',
                    icon: 'success',
                    duration: 2000,
                    success() {
                      switchTab({
                        url: '/pages/index/index',
                      })
                    },
                  })
                } else {
                  wx.showToast({
                    title: '删除失败',
                    icon: 'error',
                    duration: 2000,
                  })
                }
              },
            })
          } else {
            wx.request({
              url: `${ip}/recruit/delete`,
              data: { array: [body.Rec_id] },
              method: 'POST',
              success(res) {
                if (res.data.result === 'true') {
                  wx.showToast({
                    title: '删除成功',
                    icon: 'success',
                    duration: 2000,
                    success() {
                      switchTab({
                        url: '/pages/index/index',
                      })
                    },
                  })
                  setTimeout(function () {
                    redirectTo({
                      url: '/pages/index/index',
                    })
                  }, 2000)
                } else {
                  wx.showToast({
                    title: '删除失败',
                    icon: 'error',
                    duration: 2000,
                  })
                }
              },
            })
          }
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      },
    })
  }
  const sendComment = (item) => {
    console.log(be)
    if (item.target.value.Com_do_message !== '') {
      wx.request({
        url: `${ip}/comment/add`,
        data: {
          ...be,
          Com_do_message: item.target.value.Com_do_message,
          Com_do_name: global.appData.Re_name,
          Com_do_id: global.appData.Re_id,
          Com_type: body.isModalVisible,
          Com_type_id: body.Lost_id ? body.Lost_id : body.Rec_id,
        },
        method: 'POST',
        success(res) {
          if (res.data.result === 'true') {
            wx.showToast({
              title: '评论成功',
              icon: 'success',
              duration: 2000,
            })
            setTimeout(function () {
              delete body.Rec_img ? body.Rec_img : body.Lost_img
              let str = JSON.stringify({ item: body })
              redirectTo({
                url: '/pages/index/details/index?jsonStr=' + str, //传base64报错
              })
            }, 2000)
          } else {
            wx.showToast({
              title: '评论失败',
              icon: 'error',
              duration: 2000,
            })
          }
        },
      })
    } else {
      wx.showToast({
        title: '请输入内容',
        icon: 'error',
        duration: 2000,
      })
    }
  }
  const telflag = () => {
    if (body.isModalVisible === '失物') {
      if (body.Lost_people_id === global.appData.Re_id)
        return body.Lost_people_phone
      if (body.Lost_status === '已找到') return body.Lost_people_phone
      return telephone
    } else {
      if (body.Rec_people_id === global.appData.Re_id)
        return body.Rec_people_phone
      if (body.Rec_status === '已归还') return body.Rec_people_phone
      return telephone
    }
    /*  ${
      body.isModalVisible === '失物'
        ? body.Lost_status === '未找到'
          ? telephone
          : body.Lost_people_phone
        : body.Rec_status === '未归还'
        ? telephone
        : body.Rec_people_phone
    } */
  }
  const showRec = () => {
    wx.request({
      url: `${ip}/return/show`,
      data: {
        Return_id: body.Return_id,
      },
      method: 'POST',
      success(res) {
        console.log(res)
        wx.showModal({
          title:
            body.isModalVisible === '失物'
              ? '他捡到了你遗失的物品'
              : '这个物品是他遗失的',
          content: `${res.data.Return_people_name}  ${res.data.Return_people_phone}`,
        })
      },
    })
  }
  const nother = () => {
    wx.showModal({
      content: '是否确认他误点',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: `${ip}/return/delete`,
            data: {
              Return_id: body.Return_id,
              isModalVisible: body.isModalVisible,
              id: body.isModalVisible === '失物' ? body.Lost_id : body.Rec_id,
            },
            method: 'POST',
            success(res) {
              console.log(res)
              if (res.data.result === 'true') {
                wx.showToast({
                  title: '操作成功',
                  icon: 'success',
                  duration: 2000,
                })
                if (body.isModalVisible === '招领') {
                  setTimeout(function () {
                    delete body.Rec_img
                    let str = JSON.stringify({ item: body })
                    redirectTo({
                      url: '/pages/index/details/index?jsonStr=' + str, //传base64报错
                    })
                  }, 2000)
                } else {
                  setTimeout(function () {
                    delete body.Lost_img
                    let str = JSON.stringify({ item: body })
                    redirectTo({
                      url: '/pages/index/details/index?jsonStr=' + str, //传base64报错
                    })
                  }, 2000)
                }
              } else {
                wx.showToast({
                  title: '操作失败',
                  icon: 'error',
                  duration: 2000,
                })
              }
            },
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      },
    })
  }
  return (
    <View className="app">
      <View className="top">
        <View className="top_title">详情</View>
      </View>
      {loading === true ? (
        <View className="allcontent"></View>
      ) : (
        <View className="content">
          <View className="content_one">
            <View className="content_one_top">
              <View className="content_one_name">
                {`${
                  body.isModalVisible === '失物'
                    ? body.Lost_people_name
                    : body.Rec_people_name
                } ${telflag()}`}
                {body.isModalVisible === '失物' ? (
                  <View className={color[body.Lost_status]}>
                    {body.Lost_status}
                  </View>
                ) : (
                  <View className={color[body.Rec_status]}>
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
              <View className="content_bottom_title">{`${
                body.isModalVisible === '失物' ? '失物时间：' : '拾物时间：'
              } ${
                body.isModalVisible === '失物' ? body.Lost_time : body.Rec_time
              }`}</View>
              <View className="content_bottom_title">{`${
                body.isModalVisible === '失物' ? '失物地点：' : '拾物地点：'
              } ${
                body.isModalVisible === '失物'
                  ? body.Lost_where
                  : body.Rec_where
              }`}</View>
              <View className="content_bottom_title">{`${
                body.isModalVisible === '失物' ? '失物内容：' : '拾物内容：'
              } ${
                body.isModalVisible === '失物'
                  ? body.Lost_content
                  : body.Rec_content
              }`}</View>
              <View className="content_bottom_title">
                {body.isModalVisible === '失物' ? '失物图片：' : '拾物图片：'}
                {body.isModalVisible === '失物'
                  ? body.Lost_img
                    ? ''
                    : '无'
                  : body.Rec_img
                  ? ''
                  : '无'}
              </View>
              {body.isModalVisible === '失物' ? (
                body.Lost_img ? (
                  <View className="bottom_img_div">
                    <Image
                      src={body.Lost_img}
                      mode="widthFix"
                      className="bottom_img"
                    />
                  </View>
                ) : (
                  ''
                )
              ) : body.Rec_img ? (
                <View className="bottom_img_div">
                  <Image
                    src={body.Rec_img}
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
                <Button className="submit" onClick={() => deleteLost()}>
                  删除
                </Button>
              </View>
            )}
            {body.Lost_status === '未找到' &&
              global.appData.Re_id !== body.Lost_people_id && (
                <View className="bottom_button">
                  <Button className="submit" onClick={() => iget()}>
                    我捡到了
                  </Button>
                </View>
              )}
            {body.Rec_status === '未归还' &&
              global.appData.Re_id !== body.Rec_people_id && (
                <View className="bottom_button">
                  <Button className="submit" onClick={() => youget()}>
                    我遗失的
                  </Button>
                </View>
              )}
            {body.Lost_status === '已找到' &&
              global.appData.Re_id === body.Lost_people_id && (
                <View className="bottom_button">
                  <Button className="submit" onClick={() => showRec()}>
                    查看拾取人
                  </Button>
                </View>
              )}
            {body.Rec_status === '已归还' &&
              global.appData.Re_id === body.Rec_people_id && (
                <View className="bottom_button">
                  <Button className="submit" onClick={() => showRec()}>
                    查看失物人
                  </Button>
                </View>
              )}
            {body.Lost_status === '已找到' &&
              global.appData.Re_id === body.Lost_people_id && (
                <View className="bottom_button">
                  <Button className="submit" onClick={() => nother()}>
                    不是他捡到的
                  </Button>
                </View>
              )}
            {body.Rec_status === '已归还' &&
              global.appData.Re_id === body.Rec_people_id && (
                <View className="bottom_button">
                  <Button className="submit" onClick={() => nother()}>
                    不是他遗失的
                  </Button>
                </View>
              )}
            {body.Rec_status === '已归还' &&
              global.appData.Re_id !== body.Rec_people_id && (
                <View className="bottom_button">
                  <Button className="submit" onClick={() => nother()}>
                    不是我丢的
                  </Button>
                </View>
              )}
            {body.Lost_status === '已找到' &&
              global.appData.Re_id !== body.Lost_people_id && (
                <View className="bottom_button">
                  <Button className="submit" onClick={() => nother()}>
                    不是我捡的
                  </Button>
                </View>
              )}
          </View>
        </View>
      )}
      <View className="comment_details">
        {data.length === 0 ? (
          <View className="placeholder">快写下你的评论吧~</View>
        ) : (
          data.map((item, index) => (
            <View className="comment_one" key={index}>
              <View className="comment_one_top">
                <View className="comment_top_left">
                  {item.Com_do_name}{' '}
                  {item.Com_be_name ? `=> ${item.Com_be_name}` : ''}
                </View>
                <View className="comment_top_right">{item.Com_do_time}</View>
              </View>
              <View
                className="comment_one_content"
                onClick={() => onbutton(item)}
                onLongTap={() => deletecomment(item)}
              >
                {item.Com_do_message}
              </View>
            </View>
          ))
        )}
      </View>
      <View className="comment">
        <Form onSubmit={sendComment}>
          <Input
            className="comment_input"
            placeholder={buttonfocus}
            name="Com_do_message"
            focus={buttonfocus !== '说点什么吧..' ? true : false}
          ></Input>
          <View className="comment_send">
            <Button className="send_button" type="submit">
              发送
            </Button>
          </View>
        </Form>
      </View>
    </View>
  )
}
