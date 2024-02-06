import React from 'react'
import './footer.css'
import Andijon from './../../assets/Andijon.png'
import Quruvchi from './../../assets/Quruvchi.jpeg'
import Quruvchi2 from './../../assets/Quruvchi2.jpeg'
import Quruvchi3 from './../../assets/Quruvchi3.jpeg'
import Quruvchi4 from './../../assets/Quruvchi4.jfif'
import Star from './../../assets/Star.png'
import Facebook from './../../assets/Facebook.png'
import Twitter from './../../assets/Twitter.png'
import In from './../../assets/In.png'
import Flora from './../../assets/Flora.png'

function Footer() {
  return (
    <div className='footer-container'>

      <h1 className='customers'>Mijozlarimiz nima deyishadi</h1>
      <p className='it-isa'>O'quvchini o'qilishi mumkin bo'lgan narsa chalg'itishi uzoq vaqtdan beri tasdiqlangan haqiqatdir</p>
      <p className='it-issa'>uning tartibini ko'rib chiqayotganda sahifaning mazmuni.</p>

      <div className="footer-wrapper">
        <div className="tepa">
         <div className="tepa-img">
          <img className='quruvchi-png' src={Quruvchi} alt="" />
         </div>
         <div className="lorem-div">
          <img className='star-img' src={Star} alt="" />
             <p className='lorem'>Biz qurayotgan uylar zamonaviy, shinam, pishig' uylar. 4 so'tix 4 xona dan iborat. Mevali daraxtlar bor.</p>
             <p className='long'>Xommom, Hojatxona hammasi joyida. Gaz, suv + issiq suv, svet dan muammo yo'q + WI-FI ham bor</p>
             <p className='at-its'>Bizning uylarni tanlang va o'zingizni America da yashayotgandek his qiling.</p>
             <div className="people-imgs-texts">
              <div className="texts">
               <h2 className='kety'>Abdulaziz Yuldashev</h2>
               <p className='united'>Andijon, O'zbekiston</p>
              </div>
              <div className="people-imgs">
               <img className='people-img' src={Quruvchi2} alt="" />
               <img className='people-img' src={Quruvchi3} alt="" />
               <img className='people-img' src={Quruvchi4} alt="" />
             </div>
              </div>
         </div>
        </div>
      </div>

      <div className="footer-pas">
        <div className="pas">
          <div className="flora">
            <img className='andijon-img' src={Flora} alt="" />
            <p className='pas-lorem'>O'zbekiston Respublikasi, Andijon shaxar</p>
            <p className='pas-elit'>Andijon City Bogishamol dagi</p>
            <p className='pas-felis'>zamonaviy uylarimiz</p>
          </div>
          <div className="pas-service">
            <h3 className='service'>Xizmat</h3>
            <p>To'lov & Soliq</p>
            <p>Xususiyatlari</p>
            <p>Bronni Ko'rish</p>
            <p>qo'llab-quvvatlash</p>
          </div>
          <div className="pas-about">
            <h3 className='about'>Haqida</h3>
            <p>Biz haqimizda</p>
            <p>Yangiliklar</p>
            <p>Narxlash</p>
            <p>Yangi Mulk</p>
          </div>
          <div className="pas-location">
            <h3 className='location'>Bizning joylashuvimiz</h3>
            <p>Andijon shahar, O'zbekiston</p>
            <div className="icons">
              <img src={Facebook} alt="" />
              <img src={Twitter} alt="" />
              <img src={In} alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="hr-pas">
        <div className="eng-pas">
          <p>Mualliflik huquqi <span>2024 Andijon</span>. Barcha Huquqlar Himoyalangan</p>
          <div className="terms">
            <p>Shartlar & Sharoitlar</p>
            <p>Maxfiylik Siyosati</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer