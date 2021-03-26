import * as React from "react";
import { View, Text, Image } from "remax/wechat";
import { MCContext } from '../../pages\\index';
import comp from '../../../public/comp.svg'
import delay from '../../../public/delay.svg'
import reverb from '../../../public/reverb.svg'
import "./index.css";




const OutputBox = () => {

  const mc = React.useContext(MCContext);

  //for debugger
  // console.log(mc)

  let bct = mc.status.bct
  let mode = mc.status.mode



  return (


    <View className='output-box'>

      <View className='output-box-title'>

        <Image className={mode == 'compress' ? 'output-box-title-img' : 'output-box-title-img-none'} src={comp}></Image>

        <Image className={mode == 'reverb' ? 'output-box-title-img' : 'output-box-title-img-none'} src={reverb}></Image>

        <Image className={mode == 'delay' ? 'output-box-title-img' : 'output-box-title-img-none'} src={delay}></Image>

      </View>



      {/* 压缩Compress */}
      <View className={mode == 'compress' ? 'output-box-result' : 'output-box-result-none'}>


        <Text className='lineTitle'>释放时间 Release Time(s)</Text>
        <Text className="line">----------------------------{(bct * 2).toFixed(3)}</Text>
        <Text className="line">----------------------------{bct.toFixed(3)}</Text>
        <Text className="line">----------------------------{(bct / 2).toFixed(3)}</Text>
        <Text className="line">----------------------------{(bct / 4).toFixed(3)}</Text>
        <Text className="line">----------------------------{(bct / 8).toFixed(3)}</Text>
        <Text className="line">----------------------------{(bct / 16).toFixed(3)}</Text>
        <Text className="des">(大于800, 小于50的释放时间需谨慎选择)</Text>



      </View>



      <View className={mode == 'reverb' ? 'output-box-result' : 'output-box-result-none'}>


        {/* 混响Reverb */}

        <Text className='lineTitle'>预延迟时间 Predelay(s)</Text>
          <Text className="line2">房间Room------------------{(bct / 32).toFixed(3)}</Text>
          <Text className="line2">大厅Hall----------------{(bct / 8).toFixed(3)}, {(bct / 16).toFixed(3)}</Text>
          <Text className="line2">板式Plate----------{(bct / 8).toFixed(3)}, {(bct / 16).toFixed(3)}, {(bct / 32).toFixed(3)}</Text>



          <Text className='lineTitle2'>混响时间 Time(s)</Text>
          <Text className="line2">房间Room----------------{(bct * 2).toFixed(3)}, {bct.toFixed(3)}</Text>
          <Text className="line2">大厅Hall------------------{(bct * 8).toFixed(3)}, {(bct * 4).toFixed(3)}</Text>
          <Text className="line2">板式Plate----------上方数值任意整数倍</Text>


      </View>


      {/* 延迟Delay */}


      <View className={mode == 'delay' ? 'output-box-result' : 'output-box-result-none'}>



        <Text className='lineTitle'>延迟时间 Delay Time(ms)</Text>

        <Text className="line3">1/2---------------------{(bct * 2).toFixed(3) * 1000}</Text>
        <Text className="line3">1/4---------------------{bct.toFixed(3) * 1000}</Text>
        <Text className="line3">1/8---------------------{(bct / 2).toFixed(3) * 1000}</Text>
        <Text className="line3">1/16--------------------{(bct / 4).toFixed(3)* 1000}</Text>
        <Text className="line3">1/32--------------------{(bct / 8).toFixed(3)* 1000}</Text>
        <Text className="line3">1/64--------------------{(bct / 16).toFixed(3)* 1000}</Text>


      </View>



    </View>

  )

}


export default OutputBox;