let countId = document.getElementById("count-id")
let countVar = 0
let saveEl = document.getElementById("save-el")
let savedVal= 0

//both functions are DOM as they change the website

function increment()
{
	countVar = countVar + 1
	countId.innerText = countVar
}

function save()
{
	savedVal = countVar + " - "
	saveEl.textContent += savedVal 
	countVar = 0
	countId.textContent = countVar
	//writing textContent instead of innerText because innerText actually ommits the space after the space in savedVal as it is not human-readable idk
}