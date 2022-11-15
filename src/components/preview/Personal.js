import './Personal.css';
import email from '../../assets/email.svg';
import phone from '../../assets/phone.svg';
import website from '../../assets/website.svg';
import linkedin from '../../assets/linkedin.svg';

export default function Personal() {
  return (
    <div className="personal">
      <div className="info">
        <div className="name">
          <h1>First Last</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className="contact">
          <div className="contact-item">
            <p>0123456778</p>
            <img src={phone} alt="email" />
          </div>
          <div className="contact-item">
            <p>abc@gmail.com</p>
            <img src={email} alt="email" />
          </div>
          <div className="contact-item">
            <p>abcdsig.dev</p>
            <img src={website} alt="website" />
          </div>
          <div className="contact-item">
            <p>linkedin.com/in/dgfsd</p>
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
      </div>
      <div className="summary">
        <p>
          Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
          incidunt quaerat nobis similique deserunt velit dolores sequi veniam cum accusamus totam
          possimus natus excepturi id pariatur unde, illo earum sapiente!
        </p>
      </div>
    </div>
  );
}
