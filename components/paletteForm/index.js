import { useForm } from "react-hook-form"
import Swatch from "../swatch";

import styles from "./styles.module.css"

const PaletteForm = () => {
	const onSubmit = (values) => console.log(values);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "New Palette",
		}
	});

	const formValues = watch();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.inputRow}>
				<label htmlFor="name" className={styles.input}>Name</label>
				<input className={styles.input} {...register("name", { required: true })} />
			</div>
			{[1, 2, 3, 4, 5].map((colorNum) => (
				<div key={colorNum}>
					<div>Color {colorNum}</div>
					<div className={styles.inputRow}>
						{["red", "green", "blue"].map((color) => {
							const colorKey = `color${colorNum}`;
							const fieldName = `${colorKey}.${color}`;
							
							return (
								<div key={fieldName}>
									<label htmlFor={fieldName} className={styles.label}>{color}</label>
									<input
										type="number"
										{...register(fieldName, { min: 0, max: 255 })}
										className={styles.input}
										aria-invalid={(errors[colorKey] && errors[colorKey][color]) ? "true" : "false"}
									/>
								</div>
							)
						})}
						<Swatch red={formValues[`color${colorNum}`]?.red} green={formValues[`color${colorNum}`]?.green} blue={formValues[`color${colorNum}`]?.blue} />
					</div>
				</div>
			))}
			<input type="submit" />
		</form>
		)
};

export default PaletteForm;