import './styles.scss';

type Props = {
    value: string;
}
const Description = ({value}:Props) => (
    <div className="description-info">
        {value}
    </div>
)


export default Description;