import * as React from 'react';
import { View, Text, Image,Input, Button,Form ,switchTab,navigateTo} from 'remax/one';
import { useQuery,usePageInstance  } from 'remax';

export default () => {
   /* const [id, setId] = useState(); */
  const [pwd, setPwd] = React.useState('');
  console.log(wx.env);
  const formReset = (e) => {
    console.log('form发生了reset事件，携带数据为：', e.target);
  }
  const formSubmit = (e) => {
    console.log('form发生了submit事件，携带数据为：', e.target);
    const id=e.target.value.id;
    const pwd=e.target.value.psw;
    if(id==="admin"&&pwd==="123")
    {
      console.log("登录成功");
       wx.showModal({
        title: '提示',
        content: '登录成功',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      });
      navigateTo({
        url: '/pages/index/index',
      });
    }
    else
    {
      console.log("登录失败");
      setPwd('');
      formReset(e);
      /* console.log(password);
      setPassword(''); */
      wx.showModal({
        /* title: '提示', */
        content: '登录失败',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定');
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
      console.log('form发生了submit事件，携带数据为：', e.target);
    }
  }
 
  const change = (e) => {
    console.log('回调 form发生了reset事件，携带数据为：', e.target.value);
    setPwd(e.target.value);
  }
  
  return (
    <View className='app'>
      <Form onSubmit={formSubmit} onReset={formReset}>
       <View className='id'>
        账号:
        <Input className='idinput' name='id'></Input>
        </View>
        <View className='id'>
        密码:
        <Input className='idinput' name='psw' onInput={change} value={pwd}></Input>
        </View>
        <View className="anniu">
        <Button className="anniuleft" type="submit" >
        登录
        </Button>
        <Button className="anniuright" type="reset" id='buttonreset'>
         重置
         </Button>
      </View>
      </Form>
  </View>
  );
};
