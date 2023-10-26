import Styles from './styles.module.scss';

export default function Button(block) {
  return <img class={Styles['bg-img']} src={block.background_image} alt="" />;
}
