import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import styles from './index.css';
import tu1 from './money.png';
import tu2 from './tu.png';

const question=['一','夫','当','光','万','夫','莫','开'];
const answer=['一','夫','当','关'];
const flag=3;
export default () => {
  const [p,setP]=React.useState(3);
  const [active,setActive]=React.useState();
  const Change = (e) =>{
    setActive(e);
  }
  return (
    <View className={styles.app}>
      <View className='top'>
        <View className='toptext'>
        答题页面
        </View>
      </View>
      <View className={styles.title}>
        <View className={styles.flex1}>
          <Image src={tu1} mode="widthFix" className="imageleft"/>
          <View>
          13.14
          </View>
        </View>
        <View className={styles.flex2}>
          第520关
        </View>
        <View className={styles.flex3}>
        <Image src={tu2} mode="widthFix" className="imageleft"/>
        <View>
          9999
          </View>
        </View>
      </View>
      <View className="question">
        {
          question.map((item,index)=>
            <View key={index} className="word">
              {index===p ? '?':item}
            </View>
          )
        }
      </View>
      <View className="anniu">
        <View className="anniuleft">
        求助好友
        </View>
        <View className="anniuright">
         获得金币
         </View>
      </View>
      <View className="answer">
      {
          answer.map((item,index)=>
            <View key={index} className="word">
              <View onClick={()=>Change(index)} className={index===active ? 'active':''}>{item}</View>
            </View>
          )
        }
      </View>
    </View>
  );
};
