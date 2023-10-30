import Styles from './styles.module.scss';

export default function Button(block) {
  return <img className={Styles['bg-img']} src={block.background_image} alt="" />;
}
