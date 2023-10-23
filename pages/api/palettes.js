import knex from "../../clients/knex";

// with more time, would include input validations and better error handling / messaging

export default async (req, res) => {
  if (req.method === "GET") {
	if (req.query.id) {
		const [palette] = await knex("palettes").where({ id: req.query.id });
		res.status(200).json(palette);
	} else {
		// with more time, add pagination
		const palettes = await knex("palettes").orderBy("updatedAt", "DESC").limit(10);

		res.status(200).json(palettes);
	}
  } else if (req.method === "PUT") {
    const [newPaletteId] = await knex("palettes")
      .insert({
		...req.body
	  });

    res.status(200).json({ id: newPaletteId });
  } else if (req.method === "PATCH") {
	const palette = await knex("palettes")
		.where({ id: req.body.id })
		.update(req.body)
	res.status(200).json(palette);
  } else if (req.method === "DELETE") {
		await knex("palettes")
			.where({ id: req.body.id })
			.del();
		res.status(200).json({ okay: true });
  } else {
    res.status(404).json({ error: `${req.method} endpoint does not exist` });
  }
};
