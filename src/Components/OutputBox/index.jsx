import * as React from "react";
import {View, Text,Image} from "remax/wechat";
import  "./index.css";
import comp from '../../../public/comp.svg'



const OutputBox = () => {

  const [state] = React.useState('');

 
	return (

        <View className='output-box'>


                <View className='output-box-title'>
                <Image className='output-box-title-img' src={comp}></Image>
                <Text class="output-box-title-text">压缩Compress</Text>
                </View>
                
                <Text>               
                </Text>

                <View className='output-box-result'>


                  <div class="card-content d-flex-center">
                    <div style="width: 40px;" class="card-content-title">释放时间</div>
                    <div class="lines">
                      <div class="line">1</div>
                      <div class="line">2</div>
                      <div class="line">3</div>
                      <div class="line">4</div>
                      <div class="line">5</div>
                      <div class="line">6</div>
                    </div>
                    <div class="btn-values" id="js-compress-values">
                      <div class="btn-value">20</div>
                      <div class="btn-value">20</div>
                      <div class="btn-value">20</div>
                      <div class="btn-value">{state.bct}</div>
                      <div class="btn-value">20</div>
                      <div class="btn-value">20</div>
                    </div>
                  </div>

                </View>




        </View>

	)

}


export default OutputBox;