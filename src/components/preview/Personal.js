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
          <h1>{props.personalData.fullName ? props.personalData.fullName : 'first last'}</h1>
          <h2>{props.personalData.title ? props.personalData.title : 'Headline'}</h2>
        </div>
        <div className="contact">
          <div className="contact-item">
            <p>{props.personalData.phone ? props.personalData.phone : '0123456789'}</p>
            <img src={phoneIcon} alt="email" />
          </div>
          <div className="contact-item">
            <p>{props.personalData.email ? props.personalData.email : 'abc@abc.com'}</p>
            <img src={emailIcon} alt="email" />
          </div>
          <div className="contact-item">
            <p>{props.personalData.website ? props.personalData.website : 'abcdefg.com'}</p>
            <img src={websiteIcon} alt="website" />
          </div>
          <div className="contact-item">
            <p>
              {props.personalData.linkedIn
                ? props.personalData.linkedIn
                : 'linkedin.com/in/abcdefg'}
            </p>
            <img src={linkedinIcon} alt="linkedin" />
          </div>
        </div>
      </div>
      <div className="summary">
        <p>
          {props.personalData.summary
            ? props.personalData.summary
            : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus incidunt quaerat nobis similique deserunt velit dolores sequi veniam cum accusamus totam possimus natus excepturi id pariatur unde, illo earum sapiente!'}
        </p>
      </div>
    </div>
  );
}
