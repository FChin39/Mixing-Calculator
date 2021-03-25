import * as React from "react";
import { View, Text, Image } from "remax/wechat";
import { MCContext } from '../../pages\\index';
import "./index.css";
import comp from '../../../public/comp.svg'
import delay from '../../../public/delay.svg'
import reverb from '../../../public/reverb.svg'



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

        <div>释放时间</div>
        <div class="line">1-----------------{bct * 2}</div>
        <div class="line">2-----------------{bct}</div>
        <div class="line">3-----------------{bct / 2}</div>
        <div class="line">4-----------------{bct / 4}</div>
        <div class="line">5-----------------{bct / 8}</div>
        <div class="line">6-----------------{bct / 16}</div>


      </View>



      <View className={mode == 'reverb' ? 'output-box-result' : 'output-box-result-none'}>



        {/* 混响Reverb */}

          <div>预延迟时间</div>
          <div class="lines">
            <div class="line">房间Room------------------{bct * (2 ^ (-5))}</div>
            <div class="line">大厅Hall------------------{bct * (2 ^ (-3))}, {bct * (2 ^ (-4))}</div>
            <div class="line">板式Plate------------------what you like</div>



          <div >混响时间</div>
            <div class="line">房间Room------------------{bct * 2}, {bct * 4}</div>
            <div class="line">大厅Hall------------------{bct * 16}</div>
            <div class="line">板式Plate------------------what you like</div>
          </div>


      </View>


      {/* 延迟Delay */}


      <View className={mode == 'delay' ? 'output-box-result' : 'output-box-result-none'}>



          <div>延迟时间</div>

            <div class="line">1/2------------------{bct * 2}</div>
            <div class="line">1/4------------------{bct}</div>
            <div class="line">1/8------------------{bct / 2}</div>
            <div class="line">1/16------------------{bct / 4}</div>
            <div class="line">1/32------------------{bct / 8}</div>
            <div class="line">1/64------------------{bct / 16}</div>


      </View>



    </View>

  )

}


export default OutputBox;