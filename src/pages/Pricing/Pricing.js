import React from 'react';
import Nav from '../../components/Nav/Nav';
import PricingCard from '../../components/PricingCard/PricingCard';

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
          <PricingCard
            cardColor="#00151e"
            buttonText="Sign Up"
            planName="Free"
            planPricing="$0"
            planDetails="forever"
            onClick={() => {
              console.log('Sign Up');
            }}
            featureList={[
              'Unlimited public Pebls',
              '500MB Storage',
              '1 classroom (10 students)'
            ]}
            backdropColor="rgba(0, 21, 30, 0.1)"
          />
          <PricingCard
            cardColor="#980076"
            buttonText="Sign Up"
            planName="Teacher"
            planPricing="$12/mo"
            planDetails={(
              <div>
                <div className="">
                  Billed at $144/year
                  <br />
                  (you’re saving $84 with an annual plan )
                </div>
                <div style={{
                  marginTop: '8px',
                  color: '#d8d8d8'
                }}
                >
                  switch to monthly billing
                </div>
              </div>
            )}
            onClick={() => {
              console.log('Sign Up');
            }}
            featureList={[
              'Everything in Free',
              'Unlimited students',
              'Unlimited classrooms',
              'Asset hosting with 5GB storage',
            ]}
            backdropColor="rgba(152, 0, 118, 0.2)"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Pricing;
