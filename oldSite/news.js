news=['Games to play on your calculator!','/calcgames.html']
document.write(`<div id=news>${news[0]} <a href=${news[1]}>Check it out</a><div id=exit onclick=closeNews()>X</div></div>`)
function closeNews(){document.getElementById('news').style.display='none'}