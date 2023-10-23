import styles from './styles.module.css';

const Swatch = (props) => {
	const { red, green, blue} = props;

	return <div className={styles.swatch} style={{ backgroundColor: `rgba(${red || "000"}, ${green || "000"}, ${blue || "000"})` }} />
}

export default Swatch;