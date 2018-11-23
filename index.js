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


//["Oops! You broke the internet. Good Job. *SlowClap*",
//"AT&T has denied your service due to you forget to pay your bill. Be an Adult.",
//"Hey, you remember that song. It went like TA TA TA TA TA TA. Yeah, I miss that. Anyways your Internet Broke."
//"There is no Google, Only Bing."
//"Welcome To ALtavista, Your Access to 1992."]