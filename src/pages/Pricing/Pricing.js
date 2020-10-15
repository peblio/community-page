import React from 'react';
import Nav from '../../components/Nav/Nav';

import DesignElements from '../../assets/pricing-design-elements.svg';

import './pricing.scss';

const Pricing = () => (
  <div>
    <Nav />
    <div className="pricing-spacer" />
    <div className="pricing">
      <h1>Choose a Plan</h1>
      <div className="pricing__container">
        <DesignElements className="pricing__design-element" />
        <div className="pricing__container__cards-section">
          <div className="pricing__container__cards-section__card">
            <div className="pricing__container__cards-section__card__plan">
              <div className="pricing__container__cards-section__card__plan__name">
                Free
              </div>
              <div className="pricing__container__cards-section__card__plan__price">
                $0
              </div>
              <div className="pricing__container__cards-section__card__plan__details">
                forever
              </div>
            </div>
            <div className="pricing__container__cards-section__card__body">
              <div className="pricing__container__cards-section__card__body__access">
                Unlimited public Pebls
              </div>
              <div className="pricing__container__cards-section__card__body__access">
                500MB Storage
              </div>
              <div className="pricing__container__cards-section__card__body__access">
                1 classroom (10 students)
              </div>
            </div>
            <div className="pricing__container__cards-section__card__button-area">
              <button>
                Sign Up
              </button>
            </div>
          </div>
          <div className="pricing__container__cards-section__card">
            <div className="pricing__container__cards-section__card__plan" style={{ background: '#980076' }}>
              <div className="pricing__container__cards-section__card__plan__name">
                Annual Teacher
              </div>
              <div className="pricing__container__cards-section__card__plan__price">
                $12/mo
              </div>
              <div className="pricing__container__cards-section__card__plan__details">
                Billed at $144/year
                <br />
                (you’re saving $84 with an annual plan ) 
                <div style={{ color: '#D8D8D8', marginTop: '14px' }}>
                  switch to annual billing
                </div>
              </div>
            </div>
            <div className="pricing__container__cards-section__card__body">
              <div className="pricing__container__cards-section__card__body__access">
                Everything in Free
              </div>
              <div className="pricing__container__cards-section__card__body__access">
                Unlimited students
              </div>
              <div className="pricing__container__cards-section__card__body__access">
                Unlimited classroom
              </div>
              <div className="pricing__container__cards-section__card__body__access">
                Asset hosting with 5 GB  storage
              </div>
            </div>
            <div className="pricing__container__cards-section__card__button-area">
              <button style={{ background: '#980076' }}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Pricing;
