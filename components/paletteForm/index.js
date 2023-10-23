import { useForm } from "react-hook-form"
import { useRouter } from 'next/router'
import axios from "axios";
import Swatch from "../swatch";

import styles from "./styles.module.css"

const PaletteForm = (props) => {
	const { palette } = props;
	const router = useRouter();

	const savePalette = async (newPalette) => {
		if (!newPalette) return;

		if (palette) {
			await axios.patch("/api/palettes", {
				...newPalette
			});
			router.push("/");
		} else {
			const updatedPalette = await axios.put("/api/palettes", {
				...newPalette
			});
			router.push(`/palettes/${updatedPalette.data.id}`);
		}
	};
	
	const deletePalette = async (paletteId) => {
		if (!paletteId) return;
		await axios.delete("/api/palettes", {
			data: {
				id: paletteId
			}
		})
		router.push("/");
	};
	const onSubmit = async (values) => await savePalette(values);

	const defaultValues = palette ?? { name: "New Palette" };
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues,
	});

	const formValues = watch();

	return (
		<>
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
								const fieldName = `${color}${colorNum}`

								return (
									<div key={fieldName}>
										<label htmlFor={fieldName} className={styles.label}>{color}</label>
										<input
											type="number"
											{...register(fieldName, { min: 0, max: 255 })}
											className={styles.input}
											aria-invalid={errors[fieldName] ? "true" : "false"}
										/>
									</div>
								)
							})}
							<Swatch red={formValues[`red${colorNum}`]} green={formValues[`green${colorNum}`]} blue={formValues[`blue${colorNum}`]} />
						</div>
					</div>
				))}
				<input type="submit" />
			</form>
			{palette?.id && <div><button onClick={() => deletePalette(palette.id)}>Delete Palette</button></div>}
		</>
	)
};

export default PaletteForm;