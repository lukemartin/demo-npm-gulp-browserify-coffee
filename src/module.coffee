module.exports =

  loadThatImage: ->
    console.log 'Loading the image'
    imagesLoaded 'body', ->
      console.log 'Image finished loading'
      $('img').fadeIn()