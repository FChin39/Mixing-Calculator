import * as React from "react";
import { View, Text } from "remax/wechat";
import "./index.css";
import { MCContext } from '../../pages\\index';



// import { MCContext } from '@/app';




const InputBox = () => {

    const mc = React.useContext(MCContext);
    const handleComp = () => {

        mc.setStatus({ bct: mc.status.bct, mode: 'compress' })

    }

    const handleReverb = () => {

        mc.setStatus({ bct: mc.status.bct, mode: 'reverb' })

    }


    const handleDelay = () => {

        mc.setStatus({ bct: mc.status.bct, mode: 'delay' })

    }

    return (

        <View className='choosing-box'>

            <button
                className={mc.status.mode == 'compress' ? "buttonActive" : "button"}
                onClick={handleComp}
            >压缩comp.
            </button>

            <button
                className={mc.status.mode == 'reverb' ? "buttonActive" : "button"}
                onClick={handleReverb}>
                混响reverb
                 </button>

            <button
                className={mc.status.mode == 'delay' ? "buttonActive" : "button"}
                onClick={handleDelay}>
                延迟delay
                 </button>

        </View>

    )

}


export default InputBox;