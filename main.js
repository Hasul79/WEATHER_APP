function submition(){
	let input = document.getElementById("enter").value;
		if(input === ""){
			toast.innerHTML = "Input Field Can't Be Blank !";
	toast.classList.add("active");
			setTimeout(function () { toast.className = toast.classList.remove("active"); }, 2000);
		} else {
	
	 writeDate()
	 getData(input);
		}
	}
	
	function cancel(){
		document.getElementById('enter').value = "";
	}
	
	function writeDate(){
		date=new Date()
	   let  days = ["Կիրակի", "Երկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "Ուրբաթ", "Շաբաթ"]
	   
	let  months = ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"]   
	   
		document.getElementById("date").innerHTML=days[date.getDay()]+" , "+date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear()
	}
	
	             
	function getData(cityID) {  
	let unit = document.getElementById("select").value;
	fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityID + '&appid=8a58c838695dcc48f720934ab21f05f3&units=metric')  
		.then(function(resp) { 
			return resp.json() 
		}) // Convert data to json
		.then(function(data) {
		  getMain(data);
		})
		.catch(function() {
		  // catch any errors
	toast.innerHTML = "Invalid City Name !";
	toast.classList.add("active");
			setTimeout(function () { toast.className = toast.classList.remove("active");}, 2000);
			document.getElementById('card-prompt').classList.remove('hide');
		document.getElementById('enter').value = ""; document.getElementById('maincard').classList.add('hide');
		});
	  }
	  
	  function getMain(ab){
	   let unit = document.getElementById("select").value; document.getElementById('place').innerHTML = ab.name;
	   
			   document.getElementById('card-prompt').classList.add('hide'); document.getElementById('maincard').classList.remove('hide');
		
		/*if(unit === "Standard"){
			document.getElementById("temperature").innerHTML = ab.main.temp + " °K";
		}*/
		
		if(unit === "Ֆարենհեյթ"){
			document.getElementById("temperature").innerHTML = ((ab.main.temp) * 1.8 + 32).toFixed(2) + " F";
		} else if(unit === "Ցելսիուսի աստիճան"){
			document.getElementById("temperature").innerHTML = (ab.main.temp).toFixed(2) + " °C";
		} else {
			
		}
		document.getElementById('climate').innerHTML = "<br>"+ab.weather[0].description;
	  }
	
	function ask(){
		
		document.getElementById('card-prompt').classList.remove('hide'); document.getElementById('maincard').classList.add('hide');
		document.getElementById("enter").value = "";
			
	}
	
	function help(){
		document.getElementById("help-card").classList.remove("hide")
	document.getElementById('card-prompt').classList.add('hide');
	  
		
	}
	function closeHelp(){
		document.getElementById("help-card").classList.add("hide")
	document.getElementById('card-prompt').classList.remove('hide')
	}
	
	/*JS For Cloud Loader*/
	setInterval(()=>{ document.getElementById("l-w").style.animation="loader-fade .3s ease-out";
	   setInterval(()=>{
		   document.getElementById("l-w").style.display="none";
	   },290);
	   
	},3000)
	/*JS For Cloud Loader End*/
	
	
	function alert(){
		 setTimeout(function () {
	swal({
	  title: " Weather  app [ Ե Ղ Ա Ն Ա Կ ] ❄",
	  text: "Սա եղանակային տեսության հավելված է Հասմիկ Մինասյան-ի կողմից: Հուսով եմ, ձեզ դուր է գալիս... Խնդրում եմ համոզվեք, որ քաղաքի կամ նահանգի անունից հետո որևէ տեղ չեք հատկացրել: Օգնության համար հպեք հարցական նշանի պատկերին.",
	  icon: "",
	  button: "Շարունակել",
	  closeOnEsc: false,
	  closeOnClickOutside: false,
	})
	},2500)
	}