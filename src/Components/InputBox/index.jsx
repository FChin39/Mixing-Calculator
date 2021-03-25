import * as React from "react";
import { View, Input, Button } from "remax/wechat";
import { MCContext } from '../../pages\\index';
import "./index.css";


const InputBox = () => {


    const [bpm, setNumber] = React.useState('');
    const mc = React.useContext(MCContext);


    const run = () => {

        if (bpm <= 0 || bpm == '') {
            mc.setStatus({ mode: mc.status.mode, exception: true, bct: 0 })
            setNumber('')
            return
        }

        mc.setStatus({ mode: mc.status.mode, bct: 60 / bpm, exception: false })

        // For debugger
        // console.log('bct:' + mc.status.bct)
        // console.log('mode:' + mc.status.mode)
        // console.log('exception:' + mc.status.exception)

    }


    const reset = () => {
        setNumber('')
        mc.setStatus({ mode: mc.status.mode, bct: 0, exception: false })

    }

    return (
        <View className='input-box'>

            <Input
                className={mc.status.exception == true ? "input-bpm-box-exception" : "input-bpm-box"}
                onInput={e => setNumber(e.detail.value)}
                value={bpm}
                type="number"
                placeholder="BPM"
                maxlength="3"
            />
            <Button className='calculator-button' onClick={run}>计算calc.</Button>
            <Button className='reset-button' onClick={reset}>重置reset</Button>
        </View>
    )



}




export default InputBox;