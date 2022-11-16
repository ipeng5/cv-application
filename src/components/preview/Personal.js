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
          <h1>{props.personalData.fullName}</h1>
          <h2>{props.personalData.title}</h2>
        </div>
        <div className="contact">
          <div className="contact-item">
            <p>{props.personalData.phone}</p>
            <img src={phoneIcon} alt="email" />
          </div>
          <div className="contact-item">
            <p>abc@gmail.com {props.personalData.email}</p>
            <img src={emailIcon} alt="email" />
          </div>
          <div className="contact-item">
            <p>abcdsig.dev {props.personalData.website}</p>
            <img src={websiteIcon} alt="website" />
          </div>
          <div className="contact-item">
            <p>linkedin.com/in/dgfsd {props.personalData.linkedIn}</p>
            <img src={linkedinIcon} alt="linkedin" />
          </div>
        </div>
      </div>
      <div className="summary">
        <p>
          Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
          incidunt quaerat nobis similique deserunt velit dolores sequi veniam cum accusamus totam
          possimus natus excepturi id pariatur unde, illo earum sapiente!
          {props.personalData.summary}
        </p>
      </div>
    </div>
  );
}
