import React from 'react'
import './center.css'
import Home1 from './../../assets/Home1.png'
import Home2 from './../../assets/Home2.png'
import Home3 from './../../assets/Home3.png'
import Home4 from './../../assets/Home4.png'
import Home5 from './../../assets/Home5.png'
import Home6 from './../../assets/Home6.png'
import Frame from './../../assets/Frame.png'
import Rectangle from './../../assets/Rectangle.png'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


function Center() {
  return (
    <div className='center-container'>
        <h1 className='our'>Bizning eng trend xususiyatlarimiz</h1>
        <p className='it-is'>O'quvchini o'qilishi mumkin bo'lgan narsa chalg'itishi uzoq vaqtdan beri tasdiqlangan haqiqatdir</p>
        <p className='it-iss'>uning tartibini ko'rib chiqayotganda sahifaning mazmuni. Foydalanish nuqtasi</p>
        <div className="cards">
            <div className="card">
                <img className='Home' src={Home1} alt="" />
                <img className='rectangle' src={Rectangle} alt="" />
                <FavoriteBorderOutlinedIcon className='icon' />
                <h2 className='dollar'>$250000</h2>
                <h2 className='luxury'>Andijondagi</h2>
                <h2 className='california'>hashamatli kvartira</h2>
                <img className='frames' src={Frame} alt="" />
                <div className="icon-text">
                  <FmdGoodOutlinedIcon />
                  <p>Andijon shahar, Bogishamol, O'zbekiston</p>
                </div>
            </div>
            <div className="card">
                <img className='Home' src={Home2} alt="" />
                <img className='rectangle' src={Rectangle} alt="" />
                <FavoriteBorderOutlinedIcon className='icon' />
                <h2 className='dollar'>$175000</h2>
                <h2 className='luxury'>Andijondagi</h2>
                <h2 className='california'>hashamatli kvartira</h2>
                <img className='frames' src={Frame} alt="" />
                <div className="icon-text">
                  <FmdGoodOutlinedIcon />
                  <p>Andijon shahar, Bogishamol, O'zbekiston</p>
                </div>
            </div>
            <div className="card">
                <img className='Home' src={Home3} alt="" />
                <img className='rectangle' src={Rectangle} alt="" />
                <FavoriteBorderOutlinedIcon className='icon' />
                <h2 className='dollar'>$300000</h2>
                <h2 className='luxury'>Andijondagi</h2>
                <h2 className='california'>hashamatli kvartira</h2>
                <img className='frames' src={Frame} alt="" />
                <div className="icon-text">
                  <FmdGoodOutlinedIcon />
                  <p>Andijon shahar, Bogishamol, O'zbekiston</p>
                </div>
            </div>
            <div className="card">
                <img className='Home' src={Home4} alt="" />
                <img className='rectangle' src={Rectangle} alt="" />
                <FavoriteBorderOutlinedIcon className='icon' />
                <h2 className='dollar'>$140000</h2>
                <h2 className='luxury'>Andijondagi</h2>
                <h2 className='california'>hashamatli kvartira</h2>
                <img className='frames' src={Frame} alt="" />
                <div className="icon-text">
                  <FmdGoodOutlinedIcon />
                  <p>Andijon shahar, Bogishamol, O'zbekiston</p>
                </div>
            </div>
            <div className="card">
                <img className='Home' src={Home5} alt="" />
                <img className='rectangle' src={Rectangle} alt="" />
                <FavoriteBorderOutlinedIcon className='icon' />
                <h2 className='dollar'>$500000</h2>
                <h2 className='luxury'>Andijondagi</h2>
                <h2 className='california'>hashamatli kvartira</h2>
                <img className='frames' src={Frame} alt="" />
                <div className="icon-text">
                  <FmdGoodOutlinedIcon />
                  <p>Andijon shahar, Bogishamol, O'zbekiston</p>
                </div>
            </div>
            <div className="card">
                <img className='Home' src={Home6} alt="" />
                <img className='rectangle' src={Rectangle} alt="" />
                <FavoriteBorderOutlinedIcon className='icon' />
                <h2 className='dollar'>$275000</h2>
                <h2 className='luxury'>Andijondagi</h2>
                <h2 className='california'>hashamatli kvartira</h2>
                <img className='frames' src={Frame} alt="" />
                <div className="icon-text">
                  <FmdGoodOutlinedIcon />
                  <p>Andijon shahar, Bogishamol, O'zbekiston</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Center