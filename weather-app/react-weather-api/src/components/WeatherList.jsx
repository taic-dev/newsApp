import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';


export const WeatherList = [
    { 
        num: 0, 
        name: "晴天",
        icon: <WbSunnyIcon />
    },
    { 
        num: 1, 
        name: "晴れ",
        icon: <WbSunnyIcon />
    },
    { 
        num: 2, 
        name: "おおむね晴れ",
        icon: <WbSunnyIcon />
    },
    { 
        num: 3, 
        name: "曇り",
        icon: <CloudIcon />
    },
    { 
        num: 61,
        name: "小雨",
        icon: <UmbrellaIcon />

    },
    {
        num: 62,
        name: "雨",
        icon: <BeachAccessIcon />
    },
    { 
        num: 63,
        name: "大雨",
        icon: <BeachAccessIcon />
    },
]
    
