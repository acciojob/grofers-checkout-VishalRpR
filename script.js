const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices= document.querySelectorAll(".price")
	let sum=0;
    prices.forEach((price)=>{
       sum+=Number(price.textContent)
	})

	let pricerow=document.createElement("tr")
	let pricetd=document.createElement("td")
	pricerow.appendChild(pricetd)
	pricetd.innerText=sum
	document.getElementsByTagName("table")[0].appendChild(pricerow)
};

getSumBtn.addEventListener("click", getSum);

