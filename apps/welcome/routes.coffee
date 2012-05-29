
random_string = require ('../../random_string')

routes = (app) ->

  app.get '/', (req, res) ->
    res.render "#{__dirname}/views/welcome",
      session_id: random_string.make_random_string()

module.exports = routes
