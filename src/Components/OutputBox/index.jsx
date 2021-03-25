import * as React from "react";
import { View, Text, Image } from "remax/wechat";
import { MCContext } from '../../pages\\index';
import comp from '../../../public/comp.svg'
import delay from '../../../public/delay.svg'
import reverb from '../../../public/reverb.svg'
import "./index.css";




const OutputBox = () => {

  const mc = React.useContext(MCContext);

  console.log(mc)

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


        <Text>释放时间 Release Time(s)</Text>
        <div class="line">-----------------{(bct * 2).toFixed(3)}</div>
        <div class="line">-----------------{bct.toFixed(3)}</div>
        <div class="line">-----------------{(bct / 2).toFixed(3)}</div>
        <div class="line">-----------------{(bct / 4).toFixed(3)}</div>
        <div class="line">-----------------{(bct / 8).toFixed(3)}</div>
        <div class="line">-----------------{(bct / 16).toFixed(3)}</div>


      </View>



      <View className={mode == 'reverb' ? 'output-box-result' : 'output-box-result-none'}>



        {/* 混响Reverb */}

        <Text>预延迟时间 Predelay(s)</Text>
        <div class="lines">
          <div class="line">房间Room------------------{(bct / 32).toFixed(3)}</div>
          <div class="line">大厅Hall------------------{(bct / 8).toFixed(3)}, {(bct / 16).toFixed(3)}</div>
          <div class="line">板式Plate------------------{(bct / 8).toFixed(3)}, {(bct / 16).toFixed(3)},{(bct / 32).toFixed(3)}</div>



          <div >混响时间 Time(s)</div>
          <div class="line">房间Room------------------{(bct * 2).toFixed(3)},{bct.toFixed(3)}</div>
          <div class="line">大厅Hall------------------{(bct * 8).toFixed(3)},{(bct * 4).toFixed(3)}</div>
          <div class="line">板式Plate------------------Any multiple of the previous value</div>
        </div>


      </View>


      {/* 延迟Delay */}


      <View className={mode == 'delay' ? 'output-box-result' : 'output-box-result-none'}>



        <Text>延迟时间 Delay Time(ms)</Text>

        <div class="line">1/2------------------{(bct * 2).toFixed(3) * 1000}</div>
        <div class="line">1/4------------------{bct.toFixed(3) * 1000}</div>
        <div class="line">1/8------------------{(bct / 2).toFixed(3) * 1000}</div>
        <div class="line">1/16------------------{(bct / 4).toFixed(3)* 1000}</div>
        <div class="line">1/32------------------{(bct / 8).toFixed(3)* 1000}</div>
        <div class="line">1/64------------------{(bct / 16).toFixed(3)* 1000}</div>


      </View>



    </View>

  )

}


export default OutputBox;