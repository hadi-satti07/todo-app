import React, { useContext } from 'react'
import classes from './Header.module.css'
import { ContextAPI } from '../../utils/ContextAPI'
import DescriptionIcon from '@mui/icons-material/Description';
import SunnyIcon from '@mui/icons-material/Sunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { theme,toogleTheme, user } = useContext(ContextAPI);
const Navigate = useNavigate();

    const handleLogout = async ()=>{
        try{
          await signOut(auth);
          Navigate('/')
        }catch(err){
            err.meassage
        }
    }
    return (
        <div className={[classes.header,theme==='light'?classes.headerlight:classes.headerdark].join(' ')}>
            <div className={classes.headerleft}>
                <DescriptionIcon sx={{ fontSize: 34 }} />
                <span>TO-DO List</span>
            </div>

            <div className={classes.headerright}>
                <div className={classes.btntheme} onClick={()=>toogleTheme('light')}>
                    <SunnyIcon />
                </div>
                <div className={classes.btntheme} onClick={()=>toogleTheme('dark')}>
                    <DarkModeIcon />
                </div>
                 
                 {
                    user && <div onClick={handleLogout} className={classes.logout}>
                    <LogoutIcon sx={{ fontSize: 34 }} />
                </div>
                 }
            </div>
        </div>
    )
}

export default Header