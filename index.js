function getData(){
	alert("hello");
	var xmlhttp= new XMLHttpRequest();
	var url= "http://localhost:3000/db";

	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	xmlhttp.onreadystatechange= function(){
		if(this.readyState == 4 && this.status == 200)
		{
			var response=JSON.parse(this.responseText);
			var data=JSON.stringify(response);
			document.getElementById('correct_words_count').innerHTML="Word Count :"+response.spell[0].correct_words_count;
		}
	};
}