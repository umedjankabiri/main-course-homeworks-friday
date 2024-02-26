import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
   return (
      <Slider
         sx={{ // стили для слайдера // пишет студент
            color: "#01CB22",
            '& .MuiSlider-rail': {
               backgroundColor: "#8B8B8B",
            },
            '& .MuiSlider-rail::before': {
               backgroundColor: '#8B8B8B',
            },
            width: 300
         }}
         {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
      />
   )
}

export default SuperRange
