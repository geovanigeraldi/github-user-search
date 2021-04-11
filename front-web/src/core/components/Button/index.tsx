import './styles.css';

type Props = {
  text: string;
}

const Button = ({ text } : Props) => (
  <button
    className="button"
  >
    {text}
  </button>
);

export default Button;