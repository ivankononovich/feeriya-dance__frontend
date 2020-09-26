module.exports = {
  type: 'post',
  url: '/api/add-categories',
  cb: (client, req, res, next) => {
    const { name_ru, name_en, subcategories } = req.body

    client.query(
      `INSERT INTO categories (name_ru, name_en, subcategories) VALUES ($1, $2, $3);`,
      [name_ru, name_en, subcategories],
      (err) => {
        if (err) {
          return next(err)
        }
        res.send(200)
      },
    )
  },
}
