formidable = require ('formidable')
express = require ('express')

routes = (app) ->
  app.use(express.bodyParser())
  app.post '/album', (req, res) ->
    console.log req.files
    # form = new formidable.IncomingForm()
    # form.on 'file', (name, file) ->
    #   console.log 'file'
    #   console.log name
    #   res.end
    # form.on 'field', (name, value) ->
    #   console.log 'field'
    # form.on 'fileBegin', (name, file) ->
    #   console.log 'fileBegin'
    # form.on 'progress', (br, be) ->
    #   console.log 'progress'
    #   console.log br
    #   console.log be
    # form.on 'end', ->
    #   console.log 'end'
    # form.on 'error', (err) ->
    #   console.log err
    # form.on 'end', ->
    #   console.log 'end'
    # form.parse req
    # # , (err, fields, files) ->
    #   console.log 'here2'
    #   console.log err
    #   console.log fields
    #   console.log files
    #   res.writeHead 200,
    #     "content-type": "text/plain"

    #   res.write "received upload:\\n\\n"
    #   # res.write util.inspect(
    #   #   fields: fields
    #   #   files: files
    #   # )
    #   res.end

module.exports = routes
