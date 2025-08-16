import './HomePage.css'

import underline from './images/underline.png'
import seller1 from './images/seller1.png'
import seller2 from './images/seller2.png'
import searchVector from './images/search.svg'
import backButton from './images/back.svg'
import closeButton from './images/close.svg'
import microphoneButton from './images/microphone.png'
import logo from './images/logo.png'
import logoMobile from './images/logoMob.svg'

import { useState, useRef } from 'react'

const HomePage = () => {
  const [text, setText] = useState('');
  // const textareaRef = useRef(null);
  const editableRef = useRef(null)
  const wrapperRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // const handleChange = (event) => {
  //   setText(event.target.value);

  //   const ta = textareaRef.current;
  //   if (ta) {
  //     ta.style.height = 'auto';
  //     ta.style.height = Math.min(ta.scrollHeight, 200) + 'px';
  //   }
  // };

  const handleInput = (event) => {
    const el = editableRef.current
    const wrapper = wrapperRef.current

    if (!el || !wrapper) return;
    
    setText(el.innerText)

    const style = window.getComputedStyle(el);
    const maxHeight = parseInt(style.maxHeight, 10);
    
    el.style.height = 'auto'
    const newHeight = Math.min(el.scrollHeight, maxHeight);
    el.style.height = `${newHeight}px`;
    
    if (el.scrollHeight > maxHeight) {
    wrapper.classList.add('hasOverflow');
    } else {
    wrapper.classList.remove('hasOverflow');
    }
  }

  const handleModalClick = (event) => {
    if (event.target.id === "modal") {
      closeModal();
    }
  };

  const toggleMenu = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <div className='fullscreen'>

      <nav>
        <div className='container'>
          <a href="#">eshop <br />logo</a>

          <div className='burger' onClick={toggleMenu}>
            <span className='firstBurger'></span>
            <span className='secondBurger'></span>
            <span className='thirdBurger'></span>
          </div>

          <ul className={navIsOpen ? "nav-links open" : "nav-links"}>
            <li><a href="#">PRODUCTS</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </nav>

      <header>
        <div className='container'>
          <h1>Biggest <span>discounts <img src={underline} alt="underline" /></span> <br /> this season</h1>
          <button>View sale</button>
        </div>
      </header>

      <div className='content'>
        <div className='container'>
          <h2>BEST SELLERS</h2>
          <div className='bestsellers'>
            <div className='bestseller'>
              <img src={seller1} alt='seller' />
            </div>
            <div className='bestseller'>
              <img src={seller1} alt='seller' />
            </div>
            <div className='bestseller'>
              <img src={seller1} alt='seller' />
            </div>
            <div className='bestseller'>
              <img src={seller2} alt='seller' />
            </div>
          </div>
          <button onClick={openModal}>AI powered search <img src={searchVector} alt="search" /></button>
        </div>
      </div>

      {isOpen && (

        <div id='modal' class='modal' onClick={handleModalClick}>
          <div class='modal-content'>

            <div className='modal-upperPart'>
              <img src={backButton} alt='back' className='imgDefault' />
              <img src={logoMobile} alt='whitelogo' className='imgMobile' />
              <img onClick={closeModal} src={closeButton} alt='close' className='imgClose' />
            </div>

            <div className='modal-textPart'>
              <h3>Hello, what are you looking for today?</h3>
              <div className='buttons'>
                <div className='firstRow-buttons'>
                  <button>Product</button>
                  <button>Information</button>
                  <button>Support</button>
                  <button>Brand assets</button>
                </div>
                <div className='secondRow-buttons'>
                  <button>Consultation</button>
                  <button>Dresses for summer</button>
                </div>
              </div>
            </div>

            {/* <div className='modal-downPart'>
            <div className='textarea-wrapper'>
              <textarea name='' id='' ref={textareaRef} value={text} onChange={handleChange} placeholder='Ask anything... '/>  
              <img src={microphoneButton} alt='microphone' />
            </div>
          </div> */}

            <div className='modal-downPart'>
              <div ref={wrapperRef} className='textarea-wrapper' >
                <div
                  className={`editable ${text ? '' : 'placeholder'}`}
                  contentEditable
                  ref={editableRef}
                  onInput={handleInput}
                  data-placeholder='Ask anything...'
                ></div>
                <img src={microphoneButton} alt='microphone' />
              </div>
            </div>

            <div className='modal-logoPart'>
              <img src={logo} alt='logo' />
            </div>



          </div>
        </div>

      )}

    </div>
  )
}

export default HomePage