import Styles from './styles.module.scss';

export default function Button(block) {
  return (
    <button
      className={Styles.button}
      style={{ backgroundColor: block.button_color }}
    >
      <a
        className={Styles.button__link}
        href={block.path}
        style={{ color: block.button_text_color }}
      >
        {block.button_text}
      </a>
    </button>
  );
}
