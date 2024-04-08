import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Icon({ icon }) {
  if (icon === 'envelope') {
    return <FontAwesomeIcon icon={faEnvelope} />;
  }
  if (icon === 'user') {
    return <FontAwesomeIcon icon={faUser} />;
  }
}
