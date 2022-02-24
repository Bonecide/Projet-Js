import React, { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../img/logo.svg'
import Search from "./search";


export default function Header(){
 const [value,setValue] = useState('none')
 const [visible,setVisible] = useState('inline')
const toggle = (values) => {
    if (values === 'none' ) {
        setValue('inline-flex')
        setVisible('none')
    }
    else {
        setValue('none')
        setVisible('inline')
    }
}
   
    return(
 <div style={{background:'transparent'}}>
     <div className="Head" style={{display: 'flex',marginTop:'20px', width:'100%',boxShadow: '0px 5px 20px rgba(157, 157, 157, 0.25)'}}>
     <nav className="NavBar" style={{cursor:'pointer'}}>
    <div>
         <img style={{ width:'179px', height:'80px',marginLeft:'84px'}} src={logo} alt="лого" />
         <Search value={value} />
         
    </div>
    <div style={{position:'absolute',right:'475px',top:'50px'}}>
        <b style={{display: visible}}>Каталог товаров</b>
        <b style={{marginLeft:'66px', display: visible}}>Блог</b>
        <b style={{marginLeft:'66px', display: visible}}>Контакты</b> 
        <div className="icon-container" style={{right:-400,top:0, position:'absolute', display:'flex'}}>
            <span onClick={()=> toggle(value) } style={{cursor:'pointer'}}>
            <SearchIcon/>
            </span>
            <span style={{marginLeft:'40px',display:'block'}}>
            <ShoppingCartIcon/>
            </span>
            <span style={{marginLeft:'40px'}}>
            <AccountCircleIcon/>
            </span>
    </div>
    </div>
     </nav>
     </div>
     
 </div>
    )
}