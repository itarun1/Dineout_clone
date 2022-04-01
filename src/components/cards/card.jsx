import React from 'react';
import './main.css'
import Ten from '../images/ten_percent.png';
import Fifteen from '../images/fifteen_percent.png';
import Twenty from '../images/twenty_percent.png';
import Thirty from '../images/thirty_percent.png';
import Artboard from '../images/artboard.jpg';
import Badmash from '../images/badmash.jpg';
import Kitchen from '../images/kitchen.jpg';
import Club from '../images/club.jpg';
import Lounge from '../images/lounge.jpg';

export default function Card() {
    return (
        <div className="App">
        <div class="innerbox">
          <div class="text_heading">
            <h2 class="offer_heading">Best Offers</h2>
          </div>
          
          <img src={Ten}  alt="" class="image_css"></img>
          <img src={Fifteen} alt="" class="image_css"></img>
          <img src={Twenty} alt="" class="image_css"></img>
          <img src={Thirty} alt="" class="image_css"></img>
        </div>
    
        <div class="container">
          <div class="image_container1">
            <img src={Artboard} height={450} width={600} alt=""></img>
          </div>
          <div class="image_container2">
            <div class="cards">
              <div class="cards_components1">   
                <div class="card_image">
                  <img src={Badmash} height={150} width={280} alt=''></img>
                </div>
                <div class="card_border"> </div>
                <div class="card_content">
                  <div class="text">
                    <h4>Badmaash</h4>
                  {/* <p>Vittal Mallya Road, Central Beangal</p> */}
                  </div>
                </div>
              </div>
             
              <div class="cards_components2">
              <div class="card_image">
                  <img src={Kitchen} height={150} width={280} alt=''></img>
                </div>
                <div class="card_border"> </div>
                <div class="card_content">
                  <div class="text">
                    <h4>JW Kitchen</h4>
                  {/* <p>Vittal Mallya Road, Central Beangal</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="cards">
              <div class="cards_components1">
              <div class="card_image">
                  <img src={Club} height={150} width={280} alt=''></img>
                </div>
                <div class="card_border"> </div>
                <div class="card_content">
                  <div class="text">
                    <h4>The Biere Club</h4>
                  {/* <p>Vittal Mallya Road, Central Beangal</p> */}
                  </div>
                </div>
              </div>
              <div class="cards_components2">
              <div class="card_image">
                  <img src={Lounge} height={150} width={280} alt=''></img>
                </div>
                <div class="card_border"> </div>
                <div class="card_content">
                  <div class="text">
                    <h4>No Limmits Lounge</h4>
                  {/* <p>Vittal Mallya Road, Central Beangal</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    );
}