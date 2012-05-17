routes = (app) ->

  app.get '/', (req, res) ->
    res.render "#{__dirname}/views/welcome"

module.exports = routes
