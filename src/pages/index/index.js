import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import InputBox from '../../Components/InputBox';
import OutputBox from '../../Components/OutputBox';
import ChoosingBox from '../../Components/ChoosingBox';
import Logo_yinlvwu from '../../../public/banner_mobile.svg'
import  './index.css';






//Todo: Complete the connection between each component/2021/3/24


export default () => {



  return (

    <View>

      <Image className='logo-image' src={Logo_yinlvwu} />
      <Text>--------------------OutputBox-----------------</Text>
      <OutputBox/>
      <Text>------------------ChoosingBox---------------</Text>
      <ChoosingBox/>
      <Text>---------------InputBox-----------------</Text>
      <InputBox/>
      <Text>-------------------------------------</Text>


    </View>

  );

};
