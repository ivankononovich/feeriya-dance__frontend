module.exports = {
  type: 'post',
  url: '/api/remove-categories',
  cb: (client, req, res, next) => {
    const { name_en } = req.body
    client.query(`SELECT * FROM categories`).then((pgRes) => {
      client.query(
        `DELETE FROM categories WHERE name_en = '${name_en}'`,
        (err) => {
          if (err) {
            return next(err)
          }
          res.send(200)
        },
      )
    })
  },
}
