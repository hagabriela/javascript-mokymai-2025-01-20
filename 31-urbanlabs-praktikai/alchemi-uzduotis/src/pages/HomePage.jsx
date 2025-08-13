import './HomePage.css'

import underline from './images/underline.png'
import seller1 from './images/seller1.png'
import seller2 from './images/seller2.png'
import searchVector from './images/search.svg'
import backButton from './images/back.png'
import microphoneButton from './images/microphone.png'
import logo from './images/logo.png'

const HomePage = () => {
  return (
    <>
      <nav>
        <a href="#">eshop <br />logo</a>
        <ul>
          <li><a href="#">PRODUCTS</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </nav>

      <header>
        <h1>Biggest <span>discounts <img src={underline} alt="underline" /></span> <br /> this season</h1>
        <button>View sale</button>
      </header>

      <div className='content'>
        <div className='container'>
          <h2>BEST SELLERS</h2>
          <div className='bestsellers'>
            <div className='bestseller'>
              <img src={seller1} alt="seller" />
            </div>
            <div className='bestseller'>
              <img src={seller1} alt="seller" />
            </div>
            <div className='bestseller'>
              <img src={seller1} alt="seller" />
            </div>
            <div className='bestseller'>
              <img src={seller2} alt="seller" />
            </div>
          </div>
          <button>AI powered search <img src={searchVector} alt="search" /></button>
        </div>
      </div>

      <div id='modalas' class='modal'>
        <div class='modal-content'>

          <div className='modal-upperPart'>
            <img src={backButton} alt='back' />
            <span id='closeModal' class='close'>&times;</span>
          </div>

          <div className='modal-textPart'>
            <h3>Hello, what are you looking for today?</h3>
            <div className='buttons'>
              <button>Product</button>
              <button>Information</button>
              <button>Support</button>
              <button>Brand assets</button>
              <button>Consultation</button>
              <button>Dresses for summer</button>
            </div>
          </div>

          <div className='modal-downPart'>
            <textarea name='' id=''>  </textarea>
            <img src={microphoneButton} alt='microphone' />
          </div>

          <div className='modal-logoPart'>
            <img src={logo} alt='logo' />
          </div>



        </div>
      </div>

    </>
  )
}

export default HomePage