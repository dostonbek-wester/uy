import React from 'react'
import Flora from './../../assets/Flora.png'
import './header.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaidIcon from '@mui/icons-material/Paid';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Frame from './../../assets/Frame.png'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import Kvart1 from './../../Images/Kvart1.png'
import Kvart2 from './../../Images/Kvart2.png'

function Header() {
    return (
        <div className='header-container'>
            <div className="head">
                <div className="navbar">
                    <img src={Flora} alt="" />
                    <div className="smole-bx">
                        <p>Home</p>
                        <p>About</p>
                        <p>Service</p>
                        <p>New Property</p>
                        <p>Contact</p>
                    </div>
                    <button>Login</button>
                </div>
                <div className="one">
                    <h1>Joyni kashf qiling
                        yashashni yaxshi ko'rasiz</h1>
                    <p>Bizning uylarda o'zingizni qulay his eting</p>
                </div>
                <div className="loc-btn">
                    <div className="manzil">
                        <button><LocationOnIcon style={{ color: 'blue' }} /></button>
                        <div>
                            <h4>Manzil</h4>
                            <p>Andijon shaxri</p>
                        </div>
                    </div>
                    <div className="manzil">
                        <button><PaidIcon style={{ color: 'blue' }} /></button>
                        <div>
                            <h4>Narxlar</h4>
                            <p>$1000 - $10000 </p>
                        </div>
                    </div>
                    <div className="manzil">
                        <button><HomeIcon style={{ color: 'blue' }} /></button>
                        <div>
                            <h4>Mulk turi</h4>
                            <p>Kvartira</p>
                        </div>
                    </div>
                    <button className='search'><SearchIcon style={{ color: 'white', fontSize: '35px' }} /></button>
                </div>
                <div className="two">
                    <div>
                        <h4>2000+</h4>
                        <p>Tayyor Mulk</p>
                    </div>
                    <div>
                        <h4>500+</h4>
                        <p>Baxtli mijoz</p>
                    </div>

                </div>
            </div>

            <div className="works">
                <div className="qanday">
                    <h1>U qanday ishlaydi</h1>
                    <p>Undan foydalanish sizni ingliz tilini o'rganayotgandek ko'rsatishi mumkin
                        uzoq vaqt davomida; anchadan beri. Mana qiyinchilik</p>
                </div>
                <div className="three">
                    <div className="select">
                        <HomeOutlinedIcon style={{ color: 'rgb(40, 119, 246)', fontSize: '50px' }} />
                        <h1>Kvartirani qidirish</h1>
                        <p>Bizning saytimizda o'zingizga qulay bo'lgan kvartirani topishingiz mumkin </p>
                    </div>
                    <div className="select">
                        <HomeOutlinedIcon style={{ color: 'rgb(40, 119, 246)', fontSize: '50px' }} />
                        <h1>Kvartirani qidirish</h1>
                        <p>Bizning saytimizda o'zingizga qulay bo'lgan kvartirani topishingiz mumkin </p>
                    </div>
                    <div className="select">
                        <HomeOutlinedIcon style={{ color: 'rgb(40, 119, 246)', fontSize: '50px' }} />
                        <h1>Kvartirani qidirish</h1>
                        <p>Bizning saytimizda o'zingizga qulay bo'lgan kvartirani topishingiz mumkin </p>
                    </div>
                </div>
            </div>
            <div className="fork">
                <div className="qanday1">
                    <h1>Biz sizga topishga yordam beramiz
                        Dream Home</h1>
                    <p>O'quvchini sahifaning o'qilishi mumkin bo'lgan mazmuni chalg'itishi uzoq vaqtdan beri tasdiqlangan haqiqatdir
                        uning tartibini ko'rib chiqayotganda. Lorem Ipsum-dan foydalanishning mohiyati shundaki, u harflarning ko'proq yoki kamroq normal taqsimlanishiga ega</p>
                </div>
                <div className="homes">
                    <div className="home1">
                        <div className="narx">
                            <p>$2000/oy</p>
                            <h3>Kvartira 2500 sqft</h3>
                            <img src={Frame} alt="" />
                            <h5><FmdGoodOutlinedIcon />1901 Thornridge Cir. Shilo,
                                Gavayi 81063</h5>
                        </div>
                        <img className='kvart' src={Kvart1} alt="" />
                    </div>
                    <div className="home2">
                        <img className='kvart2' src={Kvart2} alt="" />
                        <div className="narx2">
                            <p>$2000/oy</p>
                            <h3>Kvartira 2500 sqft</h3>
                            <img src={Frame} alt="" />
                            <h5><FmdGoodOutlinedIcon />1901 Thornridge Cir. Shilo,
                                Gavayi 81063</h5>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header