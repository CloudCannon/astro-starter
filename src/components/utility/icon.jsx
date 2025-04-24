import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faUser,
  faBreadSlice,
  faMugSaucer,
  faEgg,
  faUtensils,
  faCarrot,
  faBurger,
  faFish,
  faSeedling,
  faWheatAwn,
  faPlateWheat,
  faPizzaSlice,
  faPepperHot,
  faChampagneGlasses,
  faAppleWhole,
  faBowlRice,
  faCheck,
  faCircleCheck,
  faArrowRight,
  faArrowLeft,
  faArrowDown,
  faArrowUp,
  faCaretLeft,
  faCaretRight,
  faCaretDown,
  faCaretUp,
  faPaperPlane,
  faCartShopping,
  faShop,
  faBagShopping,
  faCreditCard,
  faStore,
  faShopLock,
  faCar,
  faCircleHalfStroke,
  faLocationDot,
  faLocationPin,
  faLocationCrosshairs,
  faGift,
  faHouse,
  faMagnifyingGlass,
  faImage,
  faPhone,
  faBars,
  faHeart,
  faXmark,
  faComment,
  faTruckFast,
  faFaceSmile,
  faBell,
  faCalendarDays,
  faCircleInfo,
  faFire,
  faHand,
  faPause,
  faPlay,
  faClock,
  faBook
} from '@fortawesome/free-solid-svg-icons';

import { faLemon, faBookmark } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faGoogle,
  faStripe,
  faShopify,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

export default function Icon({ icon }) {
  switch (icon) {
    case 'Clock':
      return <FontAwesomeIcon icon={faClock} />;
    case 'Book':
      return <FontAwesomeIcon icon={faBook} />;
    case 'Pause':
      return <FontAwesomeIcon icon={faPause} />;
    case 'Play':
      return <FontAwesomeIcon icon={faPlay} />;
    case 'Envelope':
      return <FontAwesomeIcon icon={faEnvelope} />;
    case 'User':
      return <FontAwesomeIcon icon={faUser} />;
    case 'Bread':
      return <FontAwesomeIcon icon={faBreadSlice} />;
    case 'Mug':
      return <FontAwesomeIcon icon={faMugSaucer} />;
    case 'Egg':
      return <FontAwesomeIcon icon={faEgg} />;
    case 'Utensils':
      return <FontAwesomeIcon icon={faUtensils} />;
    case 'Carrot':
      return <FontAwesomeIcon icon={faCarrot} />;
    case 'Burger':
      return <FontAwesomeIcon icon={faBurger} />;
    case 'Fish':
      return <FontAwesomeIcon icon={faFish} />;
    case 'Seedling':
      return <FontAwesomeIcon icon={faSeedling} />;
    case 'WheatAwn':
      return <FontAwesomeIcon icon={faWheatAwn} />;
    case 'PlateWheat':
      return <FontAwesomeIcon icon={faPlateWheat} />;
    case 'PizzaSlice':
      return <FontAwesomeIcon icon={faPizzaSlice} />;
    case 'PepperHot':
      return <FontAwesomeIcon icon={faPepperHot} />;
    case 'ChampagneGlasses':
      return <FontAwesomeIcon icon={faChampagneGlasses} />;
    case 'AppleWhole':
      return <FontAwesomeIcon icon={faAppleWhole} />;
    case 'BowlRice':
      return <FontAwesomeIcon icon={faBowlRice} />;
    case 'Check':
      return <FontAwesomeIcon icon={faCheck} />;
    case 'CircleCheck':
      return <FontAwesomeIcon icon={faCircleCheck} />;
    case 'ArrowRight':
      return <FontAwesomeIcon icon={faArrowRight} />;
    case 'ArrowLeft':
      return <FontAwesomeIcon icon={faArrowLeft} />;
    case 'ArrowDown':
      return <FontAwesomeIcon icon={faArrowDown} />;
    case 'ArrowUp':
      return <FontAwesomeIcon icon={faArrowUp} />;
    case 'CaretLeft':
      return <FontAwesomeIcon icon={faCaretLeft} />;
    case 'CaretRight':
      return <FontAwesomeIcon icon={faCaretRight} />;
    case 'CaretDown':
      return <FontAwesomeIcon icon={faCaretDown} />;
    case 'CaretUp':
      return <FontAwesomeIcon icon={faCaretUp} />;
    case 'PaperPlane':
      return <FontAwesomeIcon icon={faPaperPlane} />;
    case 'CartShopping':
      return <FontAwesomeIcon icon={faCartShopping} />;
    case 'Shop':
      return <FontAwesomeIcon icon={faShop} />;
    case 'BagShopping':
      return <FontAwesomeIcon icon={faBagShopping} />;
    case 'CreditCard':
      return <FontAwesomeIcon icon={faCreditCard} />;
    case 'Store':
      return <FontAwesomeIcon icon={faStore} />;
    case 'ShopLock':
      return <FontAwesomeIcon icon={faShopLock} />;
    case 'Car':
      return <FontAwesomeIcon icon={faCar} />;
    case 'CircleHalfStroke':
      return <FontAwesomeIcon icon={faCircleHalfStroke} />;
    case 'LocationDot':
      return <FontAwesomeIcon icon={faLocationDot} />;
    case 'LocationPin':
      return <FontAwesomeIcon icon={faLocationPin} />;
    case 'LocationCrosshairs':
      return <FontAwesomeIcon icon={faLocationCrosshairs} />;
    case 'Gift':
      return <FontAwesomeIcon icon={faGift} />;
    case 'House':
      return <FontAwesomeIcon icon={faHouse} />;
    case 'MagnifyingGlass':
      return <FontAwesomeIcon icon={faMagnifyingGlass} />;
    case 'Image':
      return <FontAwesomeIcon icon={faImage} />;
    case 'Phone':
      return <FontAwesomeIcon icon={faPhone} />;
    case 'Bars':
      return <FontAwesomeIcon icon={faBars} />;
    case 'Heart':
      return <FontAwesomeIcon icon={faHeart} />;
    case 'Xmark':
      return <FontAwesomeIcon icon={faXmark} />;
    case 'Comment':
      return <FontAwesomeIcon icon={faComment} />;
    case 'TruckFast':
      return <FontAwesomeIcon icon={faTruckFast} />;
    case 'FaceSmile':
      return <FontAwesomeIcon icon={faFaceSmile} />;
    case 'Bell':
      return <FontAwesomeIcon icon={faBell} />;
    case 'CalendarDays':
      return <FontAwesomeIcon icon={faCalendarDays} />;
    case 'CircleInfo':
      return <FontAwesomeIcon icon={faCircleInfo} />;
    case 'Fire':
      return <FontAwesomeIcon icon={faFire} />;
    case 'Hand':
      return <FontAwesomeIcon icon={faHand} />;
    case 'Lemon':
      return <FontAwesomeIcon icon={faLemon} />;
    case 'Bookmark':
      return <FontAwesomeIcon icon={faBookmark} />;
    case 'Facebook':
      return <FontAwesomeIcon icon={faFacebook} />;
    case 'Instagram':
      return <FontAwesomeIcon icon={faInstagram} />;
    case 'Youtube':
      return <FontAwesomeIcon icon={faYoutube} />;
    case 'Google':
      return <FontAwesomeIcon icon={faGoogle} />;
    case 'Stripe':
      return <FontAwesomeIcon icon={faStripe} />;
    case 'Shopify':
      return <FontAwesomeIcon icon={faShopify} />;
    case 'GitHub':
      return <FontAwesomeIcon icon={faGithub} />;
    case 'CloudCannon':
      return (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 87.000000 59.000000">
          <g
            transform="translate(0.000000,59.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
            stroke="none">
            <path
              d="M183 575 c-34 -14 -63 -59 -63 -97 0 -16 -12 -30 -39 -45 -107 -61
                  -101 -221 10 -279 22 -11 29 -21 29 -45 0 -22 10 -41 34 -65 28 -28 41 -34 78
                  -34 24 0 53 6 63 14 16 12 23 12 39 0 25 -17 56 -1 56 29 -1 16 -15 30 -53 52
                  -74 43 -112 108 -112 189 0 84 32 139 108 189 42 29 57 44 57 62 0 28 -34 43
                  -55 25 -12 -10 -22 -9 -49 4 -41 19 -61 20 -103 1z"
            />
            <path
              d="M582 575 c-25 -11 -38 -12 -57 -3 -19 8 -28 8 -40 -2 -25 -21 -18
                  -49 18 -68 51 -27 111 -94 125 -139 34 -115 -10 -212 -127 -275 -34 -19 -41
                  -48 -16 -68 12 -10 21 -10 40 -2 19 9 31 8 52 -3 35 -19 55 -19 98 -1 36 15
                  65 59 65 98 0 16 11 29 37 43 47 25 83 86 83 140 0 54 -36 115 -83 140 -26 14
                  -37 27 -37 43 0 39 -29 83 -65 98 -42 17 -51 17 -93 -1z"
            />
            <path d="M368 404 c-80 -43 -76 -179 6 -218 73 -35 149 -4 175 71 13 35 13 46 0 79 -27 72 -114 105 -181 68z" />
          </g>
        </svg>
      );
  }
}
