import React, { Component } from 'react';
import pic from './home.png';
import iphone from './iphonex-TA.png';
import peach from './peach_white.png';
import filter from './filter.png';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="parallax">
        <div className="parallax__group _1">
          <div className="parallax__layer parallax__layer--base">
            <div className="title1">
              {/* <img src={pic} /> */}
              <img src={peach} className="peach"/>
              <div className="quoteDiv">
                <span className="name" id="logo">Peach</span>
                <div className="quoteEng">" Don’t Judge A Book By Its <span style={{ color: "#cc444b", fontWeight: "bold" }}>Cover</span> " <br /></div>
                <div className="quoteThai">การรักใครสักคน เรารักเขาจากข้างในไม่ใช่แค่ที่ภายนอก</div>
                <div className="line"></div>
                <div className="form">
                  <div className="label">Enter Phone Number to pre-register the app</div>
                  <div className="radioGender">
                    <label class="radio man">
                      <input type="radio" name="gender" />
                      Male
                    </label>
                    <label class="radio female">
                      <input type="radio" name="gender" />
                      Female
                    </label>
                  </div>
                  <div className="inputDiv">
                    <input placeholder="Your Phone Number"></input>
                    <button>Join</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="parallax__group _2">
          {/* <div className="parallax__layer parallax__layer--back">
            <div className="title">
            </div>
          </div> */}

          <div className="parallax__layer parallax__layer--base">
            <div className="title">
              <div className="img-feature left">
                {/* <div className="circle">
                </div> */}
                <img className="feature-pic" src={filter} />
              </div>
              <div style={{ position: 'relative' }}>
                <div className="feature-container">
                  <div className="feature-header">
                    Filter
                </div>
                  <div className="feature-description">
                    คุณและคนที่มีความสนใจตรงกับคุณจะได้เจอกัน ได้พูดคุยกันผ่าน 1 on 1 chat โดยที่ไม่ต้องเปิดเผยตัวตน
                </div>
                </div>
              </div>
              {/* <div className="feature-container">
              <div className="feature-item">
                ความชอบที่ตรงกัน <br/>
                คุณและคนที่มีความสนใจตรงกับคุณ จะได้เจอกัน ได้พูดคุยกันผ่าน 1 on 1 chat โดยที่ไม่ต้องเปิดเผยตัวตน
              </div>
              <div className="feature-item">
                รู้จักกันมากขึ้น 
                
              </div>
              <div className="feature-item">
                เปิดเผยว่าคุณคือใคร
              </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="parallax__group _3">
          <div className="parallax__layer parallax__layer--base">
            <div className="title right">
              <div style={{ position: 'relative' }}>
                <div className="feature-container-right">
                  <div className="feature-header">
                    Filter
                </div>
                  <div className="feature-description">
                    คุณและคนที่มีความสนใจตรงกับคุณจะได้เจอกัน ได้พูดคุยกันผ่าน 1 on 1 chat โดยที่ไม่ต้องเปิดเผยตัวตน
                </div>
                </div>
              </div>
              <div className="img-feature left">
                {/* <div className="circle">
                </div> */}
                <img className="feature-pic" src={filter} />
              </div>
            </div>
          </div>
        </div>

        <div className="parallax__group _4">
          <div className="parallax__layer parallax__layer--base">
            <div className="title">
              <div className="img-feature">
                {/* <div className="circle">
                </div> */}
                <img className="feature-pic" src={filter} />
              </div>
              <div style={{ position: 'relative' }}>
                <div className="feature-container">
                  <div className="feature-header">
                    Filter
                </div>
                  <div className="feature-description">
                    คุณและคนที่มีความสนใจตรงกับคุณจะได้เจอกัน ได้พูดคุยกันผ่าน 1 on 1 chat โดยที่ไม่ต้องเปิดเผยตัวตน
                </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
