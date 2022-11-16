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
            {props.cvData.personalData.fullName ? props.cvData.personalData.fullName : 'first last'}
          </h1>
          <h2>{props.cvData.personalData.title ? props.cvData.personalData.title : 'Headline'}</h2>
        </div>
        <div className="contact">
          <div className="contact-item">
            <p>
              {props.cvData.personalData.phone ? props.cvData.personalData.phone : '0123456789'}
            </p>
            <img src={phoneIcon} alt="email" />
          </div>
          <div className="contact-item">
            <p>
              {props.cvData.personalData.email ? props.cvData.personalData.email : 'abc@abc.com'}
            </p>
            <img src={emailIcon} alt="email" />
          </div>
          <div className="contact-item">
            <p>
              {props.cvData.personalData.website
                ? props.cvData.personalData.website
                : 'abcdefg.com'}
            </p>
            <img src={websiteIcon} alt="website" />
          </div>
          <div className="contact-item">
            <p>
              {props.cvData.personalData.linkedIn
                ? props.cvData.personalData.linkedIn
                : 'linkedin.com/in/abcdefg'}
            </p>
            <img src={linkedinIcon} alt="linkedin" />
          </div>
        </div>
      </div>
      <div className="summary">
        <p>
          {props.cvData.personalData.summary
            ? props.cvData.personalData.summary
            : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus incidunt quaerat nobis similique deserunt velit dolores sequi veniam cum accusamus totam possimus natus excepturi id pariatur unde, illo earum sapiente!'}
        </p>
      </div>
    </div>
  );
}
