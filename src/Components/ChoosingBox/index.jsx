import * as React from "react";
import {View, Text} from "remax/wechat";
import "./index.css";



const InputBox = () => {
 
	return (

        <View className='choosing-box'>
            
            <button className="button">压缩comp.</button>
            <button className="button">混响reverb</button>
            <button className="button">延迟delay</button>

        </View>

	)

}


export default InputBox;