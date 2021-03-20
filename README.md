# 🎼Mixing-Calculator
A music mixing calculator in the form of wechat-mini-program.

## Frame
- [React](https://github.com/facebook/react)
- [Remax](https://github.com/remaxjs/remax)

## Computational formula
### Basical calculation time(BCT)
The value of BCT plays a fundenmental part in the Mixing-Calculator.
BCT = 60/BPM(Beat Per Minute), i.e., the maintaining time of a beat in the music you are mixing. 
The unit of the BCT here is **second**.

### Compress
- Realese Time = BCT*(2^n) (n = 1,0,-1,-2,-3,-4)

### Reverb
- Predelay(预延迟)= BCT*(2^n)
  - Room: n = -5
  - Hall: n = -3,-4
  - Plate: n = what you like

- Reverb Time= BCT*(2^n)
  - Room: n = 1,2
  - Hall: n = 4
  - Plate: n = what you like

### Delay
Delay Time= BCT*(2^n)
| Meter | n    |
| ----- | ---- |
| 1/2   | 1    |
| 1/4   | 0    |
| 1/8   | -1   |
| 1/16  | -2   |
| 1/32  | -3   |
| 1/64  | -4   |

## To be updated...🤔
