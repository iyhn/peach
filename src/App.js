import React, { Component } from 'react';
import leaf from './leaf.png';
import filter from './habit.jpg';
import talking from './talking-with-back.jpg';
import mask from './mask.png';
import cave from './date.png';
import cave1 from './date copy.png';
import bg from './bg.jpg';
import hand from './hand.jpeg';
import peach from './peach.png';
import coffee from './coffee.png';
import a from './a.jpeg';
import './App.css';
import smoothscroll from 'smoothscroll-polyfill';
import FacebookLogin from 'react-facebook-login';
import firebase from './firebase';

smoothscroll.polyfill();
const db = firebase.firestore();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSection: 0,
      running: false,
      firstTouch: null,
    }
  }

  animation = window.innerWidth < 414 ?
    ['translateY(-13.5%) rotateZ(45deg)', 'translateY(-18%) rotateZ(90deg)', 'translateY(-9.5%) rotateZ(120deg)', 'translateX(-60%) rotateZ(180deg)', 'translateX(22%) rotateZ(180deg)', 'translateX(48%) rotateZ(180deg)'] :
    ['translateX(0%) rotateZ(-60deg)', 'translateX(2.2%) rotateZ(-90deg)', 'translateX(16%) rotateZ(-120deg)', 'translateX(-33%) rotateZ(-120deg)', 'translateX(-37%) rotateZ(-90deg)', 'translateX(-65%) rotateZ(-90deg)']

  navHandler = (v) => {
    this.setState({ currentSection: v }, () => {
      this.switchPage()
    })
  }

  switchPage = () => {
    // console.log(document.getElementById(`section-${this.state.currentSection}`).querySelector('.feature-header').className)
    // document.getElementById(`section-${this.state.currentSection}`).querySelector('.feature-header').className +=' animate';
    if (this.state.currentSection == 0) {
      document.querySelector('.homePic').style.transform = 'translateY(-50%) rotateZ(-2deg)';
    } else {
      document.querySelector('.homePic').style.transform = 'translateY(-60%) rotateZ(-2deg)';
    }
    Array.from(document.getElementsByName('nav')).forEach((item, i) => {
      if (i == this.state.currentSection) {
        item.className += ' active'
      } else {
        item.classList.remove('active')
      }
    })
    document.getElementById('inner-background').style.transform = this.animation[this.state.currentSection];
    document.getElementById('parallax').scrollTo({
      top: document.getElementById(`section-${this.state.currentSection}`).offsetTop,
      left: 0,
      behavior: 'smooth'
    })
    setTimeout(() => {
      this.setState({ running: false })
    }, 500);
  }

  componentWillMount() {
    this.setState({ registered: window.location.href.indexOf("code") > -1 ? true : false })
  }

  componentDidMount() {
    // document.getElementById('s').removeEventListener('click',);
    let firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ? true : false;
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    let width = window.innerWidth;
    this.setState({ mobile: width <= 414 ? true : false });

    document.getElementById('parallax').addEventListener('mousewheel', (e) => {
      e.preventDefault();
      if (e.deltaY >= 50 && !this.state.running && this.state.currentSection != 5) {
        this.setState({ currentSection: (this.state.currentSection + 1) % 6, running: true }, () => {
          console.log('down')
          this.switchPage();
        })
      } else if (e.deltaY <= -50 && !this.state.running && this.state.currentSection != 0) {
        this.setState({ currentSection: (this.state.currentSection - 1) % 6, running: true }, () => {
          console.log('up')
          this.switchPage();
        })
      }
    })

    document.getElementById('parallax').addEventListener('wheel', (e) => {
      e.preventDefault();
      // console.log(e)
      let a = firefox ? 3 : 30
      if (e.deltaY >= a && !this.state.running && this.state.currentSection != 5) {
        this.setState({ currentSection: (this.state.currentSection + 1) % 6, running: true }, () => {
          console.log('down wheel')
          // document.getElementById(`section-${this.state.currentSection}`).querySelector('.feature-header').className +=' animate';
          if (this.state.currentSection == 0) {
            document.querySelector('.homePic').style.transform = 'translateY(-50%) rotateZ(-2deg)';
          } else {
            document.querySelector('.homePic').style.transform = 'translateY(-62%) rotateZ(-2deg)';
          }
          Array.from(document.getElementsByName('nav')).forEach((item, i) => {
            if (i == this.state.currentSection) {
              item.className += ' active'
            } else {
              item.classList.remove('active')
            }
          })
          document.getElementById('inner-background').style.transform = this.animation[this.state.currentSection];
          document.getElementById('parallax').scrollTo({
            top: document.getElementById(`section-${this.state.currentSection}`).offsetTop,
            left: 0,
            behavior: 'smooth'
          })
          setTimeout(() => {
            this.setState({ running: false }, () => console.log('available'))
          }, 750);
        })
      } else if (e.deltaY <= -a && !this.state.running && this.state.currentSection != 0) {
        this.setState({ currentSection: (this.state.currentSection - 1) % 6, running: true }, () => {
          console.log('up')
          // document.getElementById(`section-${this.state.currentSection}`).querySelector('.feature-header').className +=' animate';
          if (this.state.currentSection == 0) {
            document.querySelector('.homePic').style.transform = 'translateY(-50%) rotateZ(-2deg)';
          } else {
            document.querySelector('.homePic').style.transform = 'translateY(-62%) rotateZ(-2deg)';
          }
          Array.from(document.getElementsByName('nav')).forEach((item, i) => {
            if (i == this.state.currentSection) {
              item.className += ' active'
            } else {
              item.classList.remove('active')
            }
          })
          document.getElementById('inner-background').style.transform = this.animation[this.state.currentSection];
          document.getElementById('parallax').scrollTo({
            top: document.getElementById(`section-${this.state.currentSection}`).offsetTop,
            left: 0,
            behavior: 'smooth'
          })
          setTimeout(() => {
            this.setState({ running: false })
          }, 750);
        })
      } else if (this.state.running && firefox) {
        document.getElementById('parallax').scrollTo({
          top: document.getElementById(`section-${this.state.currentSection}`).offsetTop,
          left: 0,
          behavior: 'smooth'
        })
      }
    })

    document.getElementById('parallax').addEventListener('touchmove', (e) => {
      e.preventDefault();
    })

    document.getElementById('parallax').addEventListener('touchend', (e) => {
      if (this.state.firstTouch - e.changedTouches[0].clientY >= 100 && !this.state.running && this.state.currentSection != 5) {
        this.setState({ currentSection: (this.state.currentSection + 1) % 6, running: true }, () => {
          console.log('down touch')
          this.switchPage();
          // document.getElementById('parallax').scrollTo(0,1000)
        })
      } else if (this.state.firstTouch - e.changedTouches[0].clientY <= -75 && !this.state.running && this.state.currentSection != 0) {
        this.setState({ currentSection: (this.state.currentSection - 1) % 6, running: true }, () => {
          console.log('up')
          this.switchPage();
        })
      }


    })
    document.getElementById('parallax').addEventListener('touchstart', (e) => {
      this.setState({ firstTouch: e.touches[0].clientY })
      // console.log('touch: '+ e.touches[0].clientY)
    })
  }

  responseFacebook = (response) => {
    db.collection('registerUsers').where('facebookID', '==', response.id)
      .get().then(query => {
        if (query.empty) {
          console.log('empty')
          db.collection('registerUsers').add({
            name: response.name,
            email: response.email,
            facebookID: response.id
          }).then(() => console.log('added')).catch((err) => console.log(err))
        } else {
          console.log('not empty')
        }
      })
  }

  render() {
    return (
      <div className='main'>
        {/* <img src={bg} className="background" /> */}

        <div className="background" id="background" >
          <div className="inner-background" id="inner-background" ></div>
        </div>
        {/* <div className="nav" id='nav'>
            <div className="innerNav">
              <div className="navItem spacen active" name="nav" onClick={() => this.navHandler(0)}></div>
              <div className="navItem spacen" name="nav" onClick={() => this.navHandler(1)}></div>
              <div className="navItem spacen" name="nav" onClick={() => this.navHandler(2)}></div>
              <div className="navItem spacen" name="nav" onClick={() => this.navHandler(3)}></div>
              <div className="navItem" name="nav" onClick={() => this.navHandler(4)}></div>
            </div>
          </div> */}
        <div id="parallax" className="parallax">
          
          <div className="parallax__group _1" id="section-0">
            <div className="parallax__layer parallax__layer--back">
              <div className="homePic"><img src={hand} /><div className="quote">"Hold me tight and never let me go."</div></div>
            </div>
            <div className="parallax__layer parallax__layer--base">
              <div className="title1">
                <div style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: 'rgba(0,0,0,0)' }}>

                  <div className="quoteDiv">
                    {/* {
                    this.state.mobile ? null :
                      <div className="name" id="logo">
                        <img src={leaf} className="leaf" />
                        Peach
                    </div>
                  } */}
                    {

                      <div className="quoteEng animate"><span style={{ fontSize: '2em' }}>Don’t</span><br />Judge A Book<br />By Its <span style={{ color: "#cc444b", fontWeight: "bold" }}>Cover</span><br /></div>
                    }
                    <div className="quoteThai animate">การรักใครสักคน เรารักเขาจากข้างในไม่ใช่แค่ที่ภายนอก</div>
                    {/* {

                    this.state.mobile ?
                      this.state.registered ? <div className="registered">Already pre-register !<FacebookLogin
                        appId="413473399159977"
                        autoLoad={this.state.registered}
                        fields="name,email,picture"
                        cssClass="facebookLogin none"
                        icon="fa-facebook"
                        callback={this.responseFacebook} /></div> : <FacebookLogin
                          appId="413473399159977"
                          autoLoad={this.state.registered}
                          fields="name,email,picture"
                          cssClass="facebookLogin"
                          icon="fa-facebook"
                          callback={this.responseFacebook} /> :
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
                  } */}
                  </div>
                </div>
                {/* <img src={pic} /> */}
                {/* <img src={cave} className="peach" />
                <img src={cave1} className="peachr" /> */}


              </div>
            </div>
          </div>

          <div className="parallax__group _about" id="section-1">
            {/* <div className="parallax__layer parallax__layer--deep">
              <div className="block">

              </div>
            </div> */}

            <div className="parallax__layer parallax__layer--back">
              <div className="qwe peach-about">
                {/* <div className="circle">
                </div> */}
                {/* <img className="feature-pic coffee" src={coffee} /> */}
                {/* <div className="frame-pic">

                </div> */}
                <img className="feature-pic" src={peach} />
              </div>

            </div>

            <div className="parallax__layer parallax__layer--base">
              <div className="title">
                <div className="kkk">
                  <div className="feature-container">
                    <div className="feature-header">
                      <span>Why Peach</span>
                    </div>
                    <div className="feature-description">
                      Peach เป็นผู้ช่วยที่จะทำให้คุณได้เริ่มต้นสร้างความสัมพันธ์กับคนที่มี ความชอบ ความสนใจตรงกับคุณ และได้เรียนรู้นิสัยใจคอกันผ่าน private chat  โดยที่ความสัมพันธ์ครั้งนี้จะไม่ได้เริ่มต้นจากหน้าตา
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="parallax__group _2" id="section-2">
            {/* <div className="parallax__layer parallax__layer--deep">
              <div className="block">

              </div>
            </div> */}

            <div className="parallax__layer parallax__layer--back">
              {/* <div className="circle">
                </div> */}
              <div className="homePic"><img className="feature-pic ssss" src={filter} /></div>

            </div>

            <div className="parallax__layer parallax__layer--base">
              <div className="title">
                <div className="kkk">
                  <div className="feature-container">
                    <div className="feature-header peach-color">
                      <span style={{ color: '#F69072' }}>Filter</span>
                    </div>
                    <div className="feature-description">
                      คุณและคนที่มีความสนใจตรงกับคุณจะได้เจอกัน ได้พูดคุยกันผ่าน 1 on 1 chat โดยที่ไม่ต้องเปิดเผยตัวตน
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="parallax__group _3" id="section-3">
            {/* <div className="parallax__layer parallax__layer--deep">
              <div className="block-2">

              </div>
            </div> */}
            <div className="parallax__layer parallax__layer--back">
              <div className="homePic"><img className="feature-pic" src={talking} /></div>
            </div>
            <div className="parallax__layer parallax__layer--base">
              <div className="title">
                <div className="kkk-left">
                  <div className="feature-container-right">
                    <div className="feature-header">
                      <span style={{ color: '#cc444b' }}>Know<br />each other </span>
                    </div>
                    <div className="feature-description">
                      คุณจะได้ทำความรู้จักกับคนตรงหน้าภายใน 7 วัน โดยสามารถหยุดความสัมพันธ์ครั้งนี้ได้ทุกเมื่อ
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="parallax__group _4" id="section-4">
            {/* <div className="parallax__layer parallax__layer--deep">
              <div className="block">

              </div>
            </div> */}
            <div className="parallax__layer parallax__layer--back">
              <div className="qwe-3">
                {/* <div className="circle">
                </div> */}
                <img className="feature-pic" src={mask} />
              </div>
            </div>

            <div className="parallax__layer parallax__layer--base">
              <div className="title">

                <div className="kkk">
                  <div className="feature-container">
                    <div className="feature-header">
                      <span style={{ color: '#588b8b' }}>Uncover</span>
                    </div>
                    <div className="feature-description">
                      หลังจาก 7 วัน ถ้าคุณและคนตรงหน้าไม่ หยุดความสัมพันธ์ ทั้งคู่จะสามารถตกลงกันเพื่อเปิดเผยตัวตนกันและกันได้
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="parallax__group _5" id="section-5">
            <div className="parallax__layer parallax__layer--base">
              <div className="title">
                <div className="feature-container">
                  <div className="feature-header">
                    <span style={{ color: '#FFF' }}>Be the part of us</span>
                  </div>
                  {this.state.registered ? <div className="registered">Already pre-register !<FacebookLogin
                    appId="413473399159977"
                    autoLoad={this.state.registered}
                    fields="name,email,picture"
                    cssClass="facebookLogin none"
                    icon="fa-facebook"
                    callback={this.responseFacebook} /></div> : <FacebookLogin
                      appId="413473399159977"
                      autoLoad={this.state.registered}
                      fields="name,email,picture"
                      cssClass="facebookLogin"
                      icon="fa-facebook"
                      callback={this.responseFacebook} />}
                  <div className="social-container">
                    <i className="fa fa-facebook-square social space" />
                    <i className="fa fa-instagram social" />
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
