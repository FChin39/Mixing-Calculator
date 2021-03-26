import * as React from 'react';
import { View, Text, Image, CoverView } from 'remax/wechat';
import InputBox from '../../Components/InputBox';
import OutputBox from '../../Components/OutputBox';
import ChoosingBox from '../../Components/ChoosingBox';
import Logo_yinlvwu from '../../../public/banner_mobile.svg'
import './index.css';



export const MCContext = React.createContext({});


export default () => {


  const [status, setStatus] = React.useState(
    { bct: 0, mode: 'compress', exception: false },
  );



  return (

    <MCContext.Provider
      value={{
        status,
        setStatus,
      }}
    >
      <View>
        <Image className='logo-image' src={Logo_yinlvwu} />
        <OutputBox />
        <ChoosingBox />
        <InputBox />
        <View className='font' />
      </View>
    </MCContext.Provider>
  );





};
