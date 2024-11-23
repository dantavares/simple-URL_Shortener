var Request;
var Type;
var txtlink = document.getElementById("txlink");

var cpicon =  	'<svg width="15" height="15" viewBox="0 0 0.45 0.45">'+
				'<path d="M.394.167.392.163V.161L.389.155.277.043.271.039H.268L'+
				'.262.038H.187a.056.056 0 0 0-.056.056v.018H.112a.056.056 0 0 0'+
				'-.056.056v.188a.056.056 0 0 0 .056.057h.15A.056.056 0 0 0 .32.'+
				'356V.338h.019A.056.056 0 0 0 .395.281V.167M.281.101.33.15H.3A.'+
				'02.02 0 0 1 .281.131Zm0 .255a.02.02 0 0 1-.019.019h-.15A.02.02'+
				' 0 0 1 .095.356V.168A.02.02 0 0 1 .112.15h.019v.131a.056.056 0'+
				' 0 0 .057.057h.094ZM.356.281A.02.02 0 0 1 .338.3h-.15A.02.02 0'+
				' 0 1 .17.281V.093A.02.02 0 0 1 .188.075h.056v.056A.056.056 0 0'+
				' 0 .3.188h.056Z"/></svg>';

function pastetxt(txt) {
	var textArea = document.createElement("textarea");
	textArea.value = txt;
  	textArea.style.position = "fixed";
	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();
	textArea.setSelectionRange(0, 99999); // For mobile devices
	document.execCommand('copy');
	document.body.removeChild(textArea);
}

function btnclick(tp) {
	
	var tlink = encodeURIComponent(txtlink.value);
	txlink = tlink.replace("+", "%20");
				
	if (window.XMLHttpRequest) {
		Request = new XMLHttpRequest();
	} 
	else 
		if (window.ActiveXObject) {
			try {
				Request = new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch (e) {
				try {
					Request = new ActiveXObject("Microsoft.XMLHTTP");
				}
			catch (e) {}
			}
		}
	
	if (!Request) {
		alert('Não foi possivel concluir a solicitação!');
		return false;
	}
	
	Request.onreadystatechange = Resposta;
	Type = tp;
	
	if (tp == 1) {
		Request.open('GET', 'index.php?link='+txlink);
	}
	else {
		Request.open('GET', 'index.php?del='+txlink);
	}
	
	Request.send();
}

function Resposta() {
	var lblink = document.getElementById("lblink");
	
	if (Request.readyState === 4) {
		if (Request.status === 200) {
			txtlink.value = '';
			var resp = JSON.parse(Request.responseText);
			if (resp.id == 0) {
				if (Type == 1) { 
					lblink.innerHTML = 'Link Curto: '+resp.tnylink+' '+cpicon;
					lblink.onclick = function() { 
						pastetxt(resp.tnylink);
						lblink.innerHTML = 'Link Curto: '+resp.tnylink+' '+' <-- Copiado! '+cpicon;
					};
				}
				else {
					lblink.innerHTML = 'Link: '+resp.tnylink+' apagado.';
				}
			}
			else {
				lblink.innerHTML = resp.erro;
			}
		} 
		else {
			alert('Houve um erro na solicitação!');
		}
	}
}