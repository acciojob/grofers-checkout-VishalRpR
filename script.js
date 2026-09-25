const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices= document.querySelectorAll(".price")
	let sum=0;
    prices.forEach((price)=>{
       sum+=price
	})

	let pricerow=document.createElement("tr")
	let pricetd=document.createElement("td")
	document.table.apendChild(pricetd)
	pricetd.innerText=sum
	document.table.apendChild(row)
};

getSumBtn.addEventListener("click", getSum);

