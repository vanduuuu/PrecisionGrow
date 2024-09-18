// Accordion.js
import React, { useState } from 'react';
import './Faq.css'; // Import custom CSS for styling
import faqimg from '../../Assets/abt.webp';

const AccordionItem = ({ title, content, isOpenInitially }) => {
  const [isOpen, setIsOpen] = useState(isOpenInitially);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleOpen}>
        <h2>{title}</h2>
        <i className={`icon ${isOpen ? 'fas fa-minus' : 'fas fa-plus'}`} aria-hidden="true"></i>
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const items = [
    { title: 'Accordion Item #1', content: 'This is the first item’s content.', isOpenInitially: true },
    { title: 'Accordion Item #2', content: 'This is the second item’s content.', isOpenInitially: false },
    { title: 'Accordion Item #3', content: 'This is the third item’s content.', isOpenInitially: false },
  ];

  return (
 <div className='faqouter'>
       <section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div>
              <img src={faqimg} alt="faqimg" className='w-100'/>
            </div>
          </div>
          <div className='col-lg-6'>
            <h1 className='faqh1'>Frequently
            Asked Questions</h1>
            <div className="accordion">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  isOpenInitially={item.isOpenInitially}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
 </div>
  );
};

export default Faq;
