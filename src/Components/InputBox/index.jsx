import * as React from "react";
import { View, Text, Image,Input,Button} from "remax/wechat";
import "./index.css";




const InputBox = () => {

  const [bpm, setNumber] = React.useState('');
    
    const run = () => {

            let bct = 60/bpm
            console.log(bct)   
    }


    const reset = () => {
        setNumber('')
    }

    return (
        <View className='input-box'>

            <Input 
            className="input-bpm-box" 
            onInput={e=>setNumber(e.detail.value)} 
            value={bpm} 
            type="number" 
            placeholder="BPM" 
            maxlength="3"
            />
            <Button className='calculator-button' id="calc-run" onClick={run}>计算calc.</Button>
            <Button className='reset-button' id="calc-reset" onClick={reset}>重置reset</Button>
        </View>
    )



}




export default InputBox;