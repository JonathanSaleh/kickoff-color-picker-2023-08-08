import styles from './styles.module.css';

const Layout = ({ children }) => (
	<div className={styles.layout}>
		{children}
	</div>
);

export default Layout;