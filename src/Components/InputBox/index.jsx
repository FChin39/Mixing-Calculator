import * as React from "react";
import { View, Text,Image} from "remax/wechat";
import "./index.css";




const InputBox = () => {

    return (

        <View className='input-box'>
            <input type="number" placeholder="BPM" className="input-bpm-box"/>
            <button className='calculator-button' id="js-calc">计算calc.</button>
            <button className='reset-button'>重置reset</button> 
        </View>

    )

}


export default InputBox;