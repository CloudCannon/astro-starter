import Styles from './styles.module.scss';
import Button from '../global/button/button.jsx';

export default function Hero(block) {
  return (
    <div className={Styles.hero}>
      <img className={Styles['hero__svg-img']} src={block.bg_image} alt="" />
      <div className={Styles['hero__wrapper']}>
        <h1>{block.heading}</h1>
        <p>{block.text}</p>
        <Button {...block.button} />
      </div>
    </div>
  );
}
