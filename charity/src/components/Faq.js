import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [isOpenTab1, setIsOpenTab1] = useState(false);
  const [isOpenTab2, setIsOpenTab2] = useState(false);
  const [isOpenTab3, setIsOpenTab3] = useState(false);
  const [isOpenTab4, setIsOpenTab4] = useState(false);
  const [isOpenTab5, setIsOpenTab5] = useState(false);

  const toggleTab1 = () => {
    setIsOpenTab1(!isOpenTab1);
  };

  const toggleTab2 = () => {
    setIsOpenTab2(!isOpenTab2);
  };

  const toggleTab3 = () => {
    setIsOpenTab3(!isOpenTab3);
  };

  const toggleTab4 = () => {
    setIsOpenTab4(!isOpenTab4);
  };

  const toggleTab5 = () => {
    setIsOpenTab5(!isOpenTab5);
  };

  return (
    <section className="Faq">
      <div className="FaqText">
        <h3>Need Help?</h3>
        <h1>The Answers to All Your Questions</h1>
        <div></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
      </div>

      <div className="FaqTabs">
        <div className='FaqTab'>
          <button className={`FaqHead ${isOpenTab1 ? 'active' : ''}`} onClick={toggleTab1}>
            <h1>How much do I need to volunteer</h1>
            <div className={`icon ${isOpenTab1 ? 'active' : ''}`}>{isOpenTab1 ? '-' : '+'}</div>
          </button>
          {isOpenTab1 && (
            <div className="FaqContent">
              <p>
                Neque laoreet suspendisse interdum consectetur libero. Lacinia quis vel eros donec ac odio tempor. Massa tempor nec feugiat nisl
                pretium fusce id velit. Vestibulum lorem sed risus ultricies tristique nulla. Sit amet cursus sit amet dictum sit amet.
              </p>
            </div>
          )}
        </div>
        <div className='FaqTab'>
          <button className={`FaqHead ${isOpenTab2 ? 'active' : ''}`} onClick={toggleTab2}>
            <h1>How Will My Donation Be Used?</h1>
            <div className={`icon ${isOpenTab2 ? 'active' : ''}`}>{isOpenTab2 ? '-' : '+'}</div>
          </button>
          {isOpenTab2 && (
            <div className="FaqContent">
              <p>
                Neque laoreet suspendisse interdum consectetur libero. Lacinia quis vel eros donec ac odio tempor. Massa tempor nec feugiat nisl
                pretium fusce id velit. Vestibulum lorem sed risus ultricies tristique nulla. Sit amet cursus sit amet dictum sit amet.
              </p>
            </div>
          )}
        </div>
        <div className='FaqTab'>
          <button className={`FaqHead ${isOpenTab3 ? 'active' : ''}`} onClick={toggleTab3}>
            <h1>How Can I Apply for a Job with You?</h1>
            <div className={`icon ${isOpenTab3 ? 'active' : ''}`}>{isOpenTab3 ? '-' : '+'}</div>
          </button>
          {isOpenTab3 && (
            <div className="FaqContent">
              <p>
                Neque laoreet suspendisse interdum consectetur libero. Lacinia quis vel eros donec ac odio tempor. Massa tempor nec feugiat nisl
                pretium fusce id velit. Vestibulum lorem sed risus ultricies tristique nulla. Sit amet cursus sit amet dictum sit amet.
              </p>
            </div>
          )}
        </div>
        <div className='FaqTab'>
          <button className={`FaqHead ${isOpenTab4 ? 'active' : ''}`} onClick={toggleTab4}>
            <h1>How Can I Participate?</h1>
            <div className={`icon ${isOpenTab4 ? 'active' : ''}`}>{isOpenTab4 ? '-' : '+'}</div>
          </button>
          {isOpenTab4 && (
            <div className="FaqContent">
              <p>
                Neque laoreet suspendisse interdum consectetur libero. Lacinia quis vel eros donec ac odio tempor. Massa tempor nec feugiat nisl
                pretium fusce id velit. Vestibulum lorem sed risus ultricies tristique nulla. Sit amet cursus sit ametdictum sit amet.
              </p>
            </div>
          )}
        </div>
        <div className='FaqTab'>
          <button className={`FaqHead ${isOpenTab5 ? 'active' : ''}`} onClick={toggleTab5}>
            <h1>We Help Non-Profits Become More Effective</h1>
            <div className={`icon ${isOpenTab5 ? 'active' : ''}`}>{isOpenTab5 ? '-' : '+'}</div>
          </button>
          {isOpenTab5 && (
            <div className="FaqContent">
              <p>
                Neque laoreet suspendisse interdum consectetur libero. Lacinia quis vel eros donec ac odio tempor. Massa tempor nec feugiat nisl
                pretium fusce id velit. Vestibulum lorem sed risus ultricies tristique nulla. Sit amet cursus sit ametdictum sit amet.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;