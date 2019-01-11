import React, { Component } from 'react';
import Nav from '../Nav/Nav';

class Terms extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="privacy__container">
          <div className="section">
            <h1>Terms of Use</h1>
            <p>
              <em>
            Last Updated 9/29/2018
              </em>
            </p>
            <p>
            Thank you for visiting and using our site.
            By using our site, you agree to abide by these terms of use, which may be updated from time to time by us. Please review carefully. If you do not agree to these terms, you should not use or access our site.
            </p>

            <h2 className="subheading">
            Intended Use of Site
            </h2>
            <p>
            This site is to be used to learn more about coding, create coding lessons and tutorials, share your work, and view the work of others. The site may not be used for any unlawful purposes or for any non-personal, commercial use.
            </p>

            <h2 className="subheading">
            Our Site Tools and Content
            </h2>
            <p>
            Unless otherwise noted, the tools and our content on the site, including our software, text, images, illustrations, designs, photographs, video and other materials, is owned or licensed by Peblio. You may use these tools and content for your personal, non-commercial use only. No right, title or interest in any of our tools or content is transferred to you as a result of accessing or using them. All intellectual property rights in the site tools and our content, including copyright, patent, trademark and trade dress rights, are expressly reserved by Peblio.
            </p>
            <h2 className="subheading">
            User Content and Input
            </h2>
            <p>
            Any content you upload to or manipulate on our site, or post to our site, is yours. You represent and warrant to us that you have the rights in that content and that it does not infringe the rights of anyone, or contain any computer viruses or other harmful files. You agree that we can make such content visible to, share and repost to any other users of the site, and by submitting it to our site, you grant us a perpetual, royalty-free, worldwide, sublicensable, transferable and irrevocable, license to use it any manner in connection with our site and our business. You also agree that any comments, questions, suggestions, ideas, concepts and feedback you send us will be treated as non-confidential and non-proprietary.
            </p>

            <h2 className="subheading">
            Personal Information
            </h2>
            <p>
          Your submission of personal information to us is governed by our privacy policy, which can be seen on our
              {' '}
              <a href="/privacy-policy">
              Privacy Policy
                <span>&zwj;</span>
              </a>
            </p>
            <h2 className="subheading">
            Links to Other Web Sites and Services
            </h2>
            <p>
            Our site may contain links to other websites that we do not own or control. We have no responsibility for these sites nor does linking to them constitute an affiliation, recommendation or endorsement. Your use of other websites is subject to the other website providers’ privacy policy. We encourage you to be review the privacy policies for each website you visit.
            </p>
            <h2 className="subheading">
            Site Security
            </h2>
            <p>
            You are prohibited from violating or attempting to violate the security of this site, or attempting to use the site to gain unauthorized access to any other computer system. Such violations may result in civil or criminal liability. We may involve, and cooperate with, law enforcement authorities in prosecuting anyone who is involved in such violations.
            </p>
            <h2 className="subheading">
            Copyright Complaints
            </h2>
            <p>
            If you believe that your work has been copied on this site without your permission, in a way that constitutes copyright infringement, please send us a notice at the email address below that includes (i) an identification of the copyrighted work/s that you claim has been infringed, (ii) identification of the material on our site that you claim is infringing (or to be the subject of infringing activity) and that is to be removed or access to which is to be disabled, and (iii) information that allows us to locate the material, including the URL of the link shown on our site where such material may be found. Also, be sure to provide your user ID (if you have one), mailing address, telephone number, and email address. Finally, you should include the following statements in your notice: “I hereby state that I have a good faith belief that the disputed use of the copyrighted material or reference or link to such material is not authorized by the copyright owner, its agent, or the law (e.g., as a fair use). The information in this notice is accurate and, under penalty of perjury, that I am the owner, or authorized to act on behalf of the owner, of the copyright or of an exclusive right under the copyright that is allegedly infringed."
            </p>
            <p>
            We will review and process all claims of copyright infringement that we have been notified about, and remove any content that violates of copyright law.
            </p>
            <h2 className="subheading">
            Disclaimer and Limitation of Liability
            </h2>
            <p>
            This site, and the tools, software and content found on this site, are provided "as is" without warranties of any kind, either express or implied, including without limitation, warranties of title, implied warranties of merchantability, fitness for a particular purpose or non-infringement of intellectual property. You agree that your use of this site is at your own risk, and we are not liable for any damages of any kind related to your use of this site.
            </p>

            <h2 className="subheading">
            Indemnity
            </h2>
            <p>
            You agree to defend, indemnify and hold Peblio, its directors, officers, employees, agents and affiliates harmless from any and all claims, liabilities, damages, costs and expenses, including reasonable attorneys' fees, in any way arising from, related to, or in connection with your use of this site, your content, or your violation of these terms.
            </p>
            <h2 className="subheading">
            Legal Action
            </h2>
            <p>
            In the event of any claim, action or dispute arising out of or related to any transaction conducted on this site, or the breach, enforcement, interpretation, or validity of these terms, we agree first to communicate by in writing to the contact address used in connection with this site, and describe the facts and circumstances, and allow the recipient at least thirty days to respond or settle the dispute prior to taking any other form of action, including legal action.
            </p>
            <h2 className="subheading">
            Choice of Law
            </h2>
            <p>
            These terms shall be construed in accordance with the laws of the State of New York, without regard to any conflict of law provisions. Any dispute arising under these terms shall be resolved exclusively by the New York state or federal courts located in New York county. No modification or waiver of these terms shall be enforceable unless in writing signed by us. These terms are severable, and if any one is deemed unenforceable, all other terms shall remain in full force and effect.
            </p>
            <p>
            These terms constitute the entire agreement between us relating to your use of the site.
            </p>
            <h2 className="subheading">
            Contacting Us
            </h2>
            <p>
            If you have any questions about these Terms of Use, or your experience with this site, or want to notify us of anything, please contact us at:
            </p>
            <p>
              <strong>Peblio</strong>
              {`216 W 99th st #5
              New York, NY 1
              tel: (508) 622-5957`}
              <strong>&zwj;</strong>
              <a href="mailto:info@peblio.com">
            info@peblio.co

              </a>
            </p>
            <p>
            Thank you for being a valued partner of Peblio. If there is anything we can do to improve your experience, please contact us using the information above.
            </p>
          </div>
        </div>
      </div>
    );
  }
}


export default Terms;
