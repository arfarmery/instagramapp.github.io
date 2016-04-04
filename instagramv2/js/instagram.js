console.log("instagram.js ready to roll")

var endpoint = 'https://api.instagram.com/v1/tags/'
var hashtag = 'rich'
var client_id = '4f1e8b5ed8a846c78250ebc97797b39d'

var URL = endpoint + hashtag + '/media/recent?client_id=' + client_id

$.ajax(
{
	dataType: "jsonp",
	url: URL,
	success: handleData
})

// $.getJSON( URL, handleData);

function handleData( json )
{
	console.log(json)
}