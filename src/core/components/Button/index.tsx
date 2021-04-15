import './styles.scss';

type Props = {
    text: string;
}

const Button = ({ text }: Props) => (
    <div>
        <button className="btn-container">
            <h5>{text}</h5>
        </button>
    </div>
)

export default Button;
