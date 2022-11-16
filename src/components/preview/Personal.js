import './Personal.css';
import emailIcon from '../../assets/email.svg';
import phoneIcon from '../../assets/phone.svg';
import websiteIcon from '../../assets/website.svg';
import linkedinIcon from '../../assets/linkedin.svg';

export default function Personal(props) {
  return (
    <div className="personal">
      <div className="info">
        <div className="name">
          <h1>
            {props.cvData.personalData.fullName ? props.cvData.personalData.fullName : 'Name'}
          </h1>
          <h2>{props.cvData.personalData.title ? props.cvData.personalData.title : 'Headline'}</h2>
        </div>
        <div className="contact">
          <div className="contact-item">
            <p>
              {props.cvData.personalData.phone ? props.cvData.personalData.phone : 'Phone number'}
            </p>
            <img src={phoneIcon} alt="email" />
          </div>
          <div className="contact-item">
            <p>
              {props.cvData.personalData.email ? props.cvData.personalData.email : 'Email address'}
            </p>
            <img src={emailIcon} alt="email" />
          </div>
          <div className="contact-item">
            <p>{props.cvData.personalData.website}</p>
            {props.cvData.personalData.website && <img src={websiteIcon} alt="website" />}
          </div>
          <div className="contact-item">
            <p>{props.cvData.personalData.linkedIn}</p>
            {props.cvData.personalData.linkedIn && <img src={linkedinIcon} alt="linkedin" />}
          </div>
        </div>
      </div>
      <div className="summary">
        <p>{props.cvData.personalData.summary}</p>
      </div>
    </div>
  );
}
