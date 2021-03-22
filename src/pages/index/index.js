import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import InputBox from '../../Components/InputBox';
import OutputBox from '../../Components/OutputBox';
import ChoosingBox from '../../Components/ChoosingBox';
import Logo_yinlvwu from '../../../public/banner_mobile.svg'
import  './index.css';


export default () => {


  return (

    <View>

      <Image className='logo-image' src={Logo_yinlvwu} />

      <InputBox/>
      <Text>---------------</Text>
      <ChoosingBox/>
      <Text>--------------</Text>
      <OutputBox/>
    </View>

  );

};
