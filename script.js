const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices= document.querySelectorAll(".price")
	let sum=0;
    prices.foreach((price)=>{
       sum+=price
	})

	let priceDiv=document.createElement("div")
	priceDiv.innerText=sum
	document.body.apendChild(priceDiv)
};

getSumBtn.addEventListener("click", getSum);

