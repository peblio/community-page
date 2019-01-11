import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Nav from '../Nav/Nav';


class Privacy extends Component {
  render() {
    return (
      <div className="contact__container">
        <div className="section">
          <h1>Privacy Policy </h1>
          <p>
            <em>
            Last Updated 9/29/2018
            </em>
            <p>
              This Privacy Policy applies to all the Peblio-branded websites and online applications created by Peblio Inc, and describes how we collect, use, store, and share information about the users of Peblio.
            </p>
            <h2 className="subheading">
              Privacy Laws
            </h2>
            <p>
              Peblio makes every effort to ensure compliance with applicable privacy laws, including the Family Education Rights and Privacy Act (FERPA), Children’s Online Privacy Protection Act (COPPA), and the General Data Protection Regulation (GDPR).
            </p>
            <h2 className="subheading">
              Children's Privacy
            </h2>
            <p>
              Peblio will never knowingly collect personally identifying information from children under 13, without prior verifiable parent or teacher consent. In partnership with our schools, we strive to protect student’s personal information, as required by the Family Educational Rights and Privacy Act (FERPA), and to protect the personal information of students under 13 consistent with the Children’s Online Privacy Protection Act (COPPA). Any requests to review, modify, correct, or delete the personal information of a student accessing the Peblio Resources can be made at any time by emailing
              {' '}
              <a href="mailto:info@peblio.com">info@peblio.co</a>
.
            </p>

            <h2 className="subheading">
              Infomation We Collect
            </h2>
            <h3>
              Profile information
            </h3>
            <p>
              When you create an account with Peblio, we collect personal information from you in order to authenticate login information. This personal information you provide us with may include
              <ul>
                <li>username</li>
                <li>email address</li>
                <li>self-designated role</li>
                <li>authentication information from third-party integrated services such as Google, Office 365, or similar single sign-on providers </li>
              </ul>
              <p>
                We collect email addresses for all users that create an account with us in order to uniquely identify them in our system. However, we make every effort to limit our communications to those users who identify themselves as teachers or guardians and never to email students directly.
              </p>
              <p>
                You can interact with some parts of the Peblio site without creating an account or providing any personal information, and we will collect personal information from you only if you voluntarily provide it to us in connection with a registration, subscription, purchase or other use of the site.
              </p>
            </p>

            <h2 className="subheading">
              Usage and Device Information
            </h2>
            <p>
              To provide you with a high-quality experience, certain data and non-personal identification information is automatically collected when you interacts with Peblio Resources. This information includes things like location information, information about your browser or device, access times, pages viewed, and the referring link through which you accessed the Peblio Resources.
            </p>

            <h2 className="subheading">
              Web Browser Cookies and Site Analytics
            </h2>
            <p>
              Our site uses "cookies" and similar technologies to enhance your experience. Cookies may be placed on your hard drive for record-keeping purposes, and to track information about how you are using our site. You can set your web browser to refuse cookies, or to alert you when cookies are being sent. If you do so, some parts of our site may not function properly for you. We also work with some third-party services, such as Google Analytics, to collect and analyze information on site usage. These providers may use cookies and other technologies to collect information about your use of our site.
            </p>

            <h2 className="subheading">
            H ow We Use Your Information
            </h2>
            <p>
              We use your personal and non-personal information only for educational purposes, to provide you with the Peblio Resources you use, and for the following:
              <ul>
                <li>To respond to your comments, questions, and requests as well as to provide customer service</li>
                <li>To personalize and enhance your experience with our site</li>
                <li>To help us improve our site design, products, and services</li>
                <li>To analyze site trends, usage, and statistics</li>
              </ul>
            </p>
            <h2 className="subheading">
              How We Protect Your Information
            </h2>
            <p>
              We use industry-standard Secure Sockets Layer (SSL) encryption software to help protect your information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
              All user data is hosted by Heroku, a Salesforce company; Compose, an IBM company; and Amazon Web Services. Heroku, Compose, and Amazon Web Services use SSL encryption software. These third parties are well-known, established providers, who are bound to practice adequate security measures and to use your information solely as it pertains to the provision of their services.
            </p>

            <h2 className="subheading">
              How We May Share Your Information
            </h2>
            <p>
              We may share your personal and other information in the following ways:
            </p>
            <p>
              With our third-party service providers who require access to such information to carry out work on our behalf such as web hosting, email delivery, credit card processing, and other services.
              If needed to protect the rights, property, and safety of us or any third partyIf needed to respond to the request of law enforcement in cases where we believe disclosure is required and/or in accordance with applicable law, regulation, or legal process
              We may also share aggregated or de-identified information, which cannot reasonably be used to personally identify you
            </p>
            <h2 className="subheading">
              Your Rights to Your Information
            </h2>
              You can update your customer account information, manage the way that we use and do not use your information, or request the deletion of your information at any time by contacting us at
            <a href="mailto:info@peblio.com">
              info@peblio.co
            </a>
                You can review your personal data we have collected at any time by contacting us at
            {' '}
            <a href="mailto:info@peblio.com">info@peblio.co</a>
.
            <h2 className="subheading">
              Third Party Websites
            </h2>
            <p>
              There may be advertising or other content on our site that link to the sites and services of others. We do not control these sites and services, and are not responsible for them. Those sites’ terms of use and privacy policies will be applicable to your interaction with those sites and services.
            </p>

            <h2 className="subheading">
              Changes to this Privacy Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. When we do, we revise the “updated” date at the top of this page and notify subscribers of the privacy policy update via email. If you are not a subscriber, we encourage you to review our Privacy Policy on regular basis to note any changes made to this policy.
            </p>
            <p>

                If you have any questions about this privacy policy, we encourage you to contact us at
              {' '}
              <a href="mailto:info@peblio.com">info@peblio.co</a>
            </p>
          </p>
        </div>
      </div>
    );
  }
}

Privacy.propTypes = {

};

function mapStateToProps(state) {
  return {

  };
}
const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(null, null)(Privacy);
