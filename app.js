const last_char = document.getElementById("last_char");
const user_text = document.getElementById("user_text");
const ttw = document.getElementById("text_to_write");
const speed = document.getElementById("speed");

let last_type = 0;

async function handle_keypress(key) {
	user_text.innerHTML += key;
	last_char.innerHTML = key;
	if (key == ttw.innerHTML.charAt(0)) {
		ttw.innerHTML = ttw.innerHTML.slice(1);
	}
	if (ttw.innerHTML.length == 0) {
		var nw = await fetch("https://random-word-api.herokuapp.com/word?number=5");
		nw = await nw.json();
		console.log(nw);
		ttw.innerHTML = nw.toString().replace(/,/g," ");
	}
	cur_type = Date.now();
	var diff = (cur_type-last_type).toString();
	speed.innerHTML = (Math.round(60000/diff,1).toString())+" chpm";
	last_type = cur_type;
}

window.addEventListener('keydown', function(event) {
    var key = event.key;

    handle_keypress(key);
});

// Polibte mi prdel, až zase někdy budeme psát. -F