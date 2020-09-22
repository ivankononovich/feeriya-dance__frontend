import backend from './../../backend.json'

export default (req, res) => {
  const { query } = req

  res.json(backend[query.name])
}
