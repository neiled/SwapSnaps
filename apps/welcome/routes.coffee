routes = (app) ->

  app.get '/', (req, res) ->
    res.render "#{__dirname}/views/welcome",
      title: 'Welcome'
      stylesheet: 'welcome'

module.exports = routes
