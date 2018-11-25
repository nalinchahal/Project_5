function getFormInput(){
	var formInput = document.getElementById('google-form').value;
	console.log(formInput);
	var urlpre = "https://www.bing.com/search?q=";
	console.log(urlpre);
	var change = formInput.replace(" ", "+");
	console.log(change);
	var searchUrl = urlpre+change;
	console.log(searchUrl);
	window.location.href = searchUrl;
}
