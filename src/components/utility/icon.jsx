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
} from '@fortawesome/free-solid-svg-icons';

import { faLemon, faBookmark } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faGoogle,
  faStripe,
  faShopify,
} from '@fortawesome/free-brands-svg-icons';

export default function Icon({ icon }) {
  if (icon === 'Envelope') {
    return <FontAwesomeIcon icon={faEnvelope} />;
  }
  if (icon === 'User') {
    return <FontAwesomeIcon icon={faUser} />;
  }
  if (icon === 'Bread') {
    return <FontAwesomeIcon icon={faBreadSlice} />;
  }
  if (icon === 'Mug') {
    return <FontAwesomeIcon icon={faMugSaucer} />;
  }
  if (icon === 'Egg') {
    return <FontAwesomeIcon icon={faEgg} />;
  }
  if (icon === 'Utensils') {
    return <FontAwesomeIcon icon={faUtensils} />;
  }
  if (icon === 'Carrot') {
    return <FontAwesomeIcon icon={faCarrot} />;
  }
  if (icon === 'Burger') {
    return <FontAwesomeIcon icon={faBurger} />;
  }
  if (icon === 'Fish') {
    return <FontAwesomeIcon icon={faFish} />;
  }
  if (icon === 'Seedling') {
    return <FontAwesomeIcon icon={faSeedling} />;
  }
  if (icon === 'WheatAwn') {
    return <FontAwesomeIcon icon={faWheatAwn} />;
  }
  if (icon === 'PlateWheat') {
    return <FontAwesomeIcon icon={faPlateWheat} />;
  }
  if (icon === 'PizzaSlice') {
    return <FontAwesomeIcon icon={faPizzaSlice} />;
  }
  if (icon === 'PepperHot') {
    return <FontAwesomeIcon icon={faPepperHot} />;
  }
  if (icon === 'ChampagneGlasses') {
    return <FontAwesomeIcon icon={faChampagneGlasses} />;
  }
  if (icon === 'AppleWhole') {
    return <FontAwesomeIcon icon={faAppleWhole} />;
  }
  if (icon === 'BowlRice') {
    return <FontAwesomeIcon icon={faBowlRice} />;
  }
  if (icon === 'Check') {
    return <FontAwesomeIcon icon={faCheck} />;
  }
  if (icon === 'CircleCheck') {
    return <FontAwesomeIcon icon={faCircleCheck} />;
  }
  if (icon === 'ArrowRight') {
    return <FontAwesomeIcon icon={faArrowRight} />;
  }
  if (icon === 'ArrowLeft') {
    return <FontAwesomeIcon icon={faArrowLeft} />;
  }
  if (icon === 'ArrowDown') {
    return <FontAwesomeIcon icon={faArrowDown} />;
  }
  if (icon === 'ArrowUp') {
    return <FontAwesomeIcon icon={faArrowUp} />;
  }
  if (icon === 'CaretLeft') {
    return <FontAwesomeIcon icon={faCaretLeft} />;
  }
  if (icon === 'CaretRight') {
    return <FontAwesomeIcon icon={faCaretRight} />;
  }
  if (icon === 'CaretDown') {
    return <FontAwesomeIcon icon={faCaretDown} />;
  }
  if (icon === 'CaretUp') {
    return <FontAwesomeIcon icon={faCaretUp} />;
  }
  if (icon === 'PaperPlane') {
    return <FontAwesomeIcon icon={faPaperPlane} />;
  }
  if (icon === 'CartShopping') {
    return <FontAwesomeIcon icon={faCartShopping} />;
  }
  if (icon === 'Shop') {
    return <FontAwesomeIcon icon={faShop} />;
  }
  if (icon === 'BagShopping') {
    return <FontAwesomeIcon icon={faBagShopping} />;
  }
  if (icon === 'CreditCard') {
    return <FontAwesomeIcon icon={faCreditCard} />;
  }
  if (icon === 'Store') {
    return <FontAwesomeIcon icon={faStore} />;
  }
  if (icon === 'ShopLock') {
    return <FontAwesomeIcon icon={faShopLock} />;
  }
  if (icon === 'Car') {
    return <FontAwesomeIcon icon={faCar} />;
  }
  if (icon === 'CircleHalfStroke') {
    return <FontAwesomeIcon icon={faCircleHalfStroke} />;
  }
  if (icon === 'LocationDot') {
    return <FontAwesomeIcon icon={faLocationDot} />;
  }
  if (icon === 'LocationPin') {
    return <FontAwesomeIcon icon={faLocationPin} />;
  }
  if (icon === 'LocationCrosshairs') {
    return <FontAwesomeIcon icon={faLocationCrosshairs} />;
  }
  if (icon === 'Gift') {
    return <FontAwesomeIcon icon={faGift} />;
  }
  if (icon === 'House') {
    return <FontAwesomeIcon icon={faHouse} />;
  }
  if (icon === 'MagnifyingGlass') {
    return <FontAwesomeIcon icon={faMagnifyingGlass} />;
  }
  if (icon === 'Image') {
    return <FontAwesomeIcon icon={faImage} />;
  }
  if (icon === 'Phone') {
    return <FontAwesomeIcon icon={faPhone} />;
  }
  if (icon === 'Bars') {
    return <FontAwesomeIcon icon={faBars} />;
  }
  if (icon === 'Heart') {
    return <FontAwesomeIcon icon={faHeart} />;
  }
  if (icon === 'Xmark') {
    return <FontAwesomeIcon icon={faXmark} />;
  }
  if (icon === 'Comment') {
    return <FontAwesomeIcon icon={faComment} />;
  }
  if (icon === 'TruckFast') {
    return <FontAwesomeIcon icon={faTruckFast} />;
  }
  if (icon === 'FaceSmile') {
    return <FontAwesomeIcon icon={faFaceSmile} />;
  }
  if (icon === 'Bell') {
    return <FontAwesomeIcon icon={faBell} />;
  }
  if (icon === 'CalendarDays') {
    return <FontAwesomeIcon icon={faCalendarDays} />;
  }
  if (icon === 'CircleInfo') {
    return <FontAwesomeIcon icon={faCircleInfo} />;
  }
  if (icon === 'Fire') {
    return <FontAwesomeIcon icon={faFire} />;
  }
  if (icon === 'Hand') {
    return <FontAwesomeIcon icon={faHand} />;
  }
  if (icon === 'Lemon') {
    return <FontAwesomeIcon icon={faLemon} />;
  }
  if (icon === 'Bookmark') {
    return <FontAwesomeIcon icon={faBookmark} />;
  }
  if (icon === 'Facebook') {
    return <FontAwesomeIcon icon={faFacebook} />;
  }
  if (icon === 'Instagram') {
    return <FontAwesomeIcon icon={faInstagram} />;
  }
  if (icon === 'Youtube') {
    return <FontAwesomeIcon icon={faYoutube} />;
  }
  if (icon === 'Google') {
    return <FontAwesomeIcon icon={faGoogle} />;
  }
  if (icon === 'Stripe') {
    return <FontAwesomeIcon icon={faStripe} />;
  }
  if (icon === 'Shopify') {
    return <FontAwesomeIcon icon={faShopify} />;
  }
}
