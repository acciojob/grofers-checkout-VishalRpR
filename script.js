const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices= document.querySelectorAll(".price")
	let sum=0;
    prices.forEach((price)=>{
       sum+=Number(price)
	})

	let pricerow=document.createElement("tr")
	let pricetd=document.createElement("td")
	document.table.appendChild(pricetd)
	pricetd.innerText=sum
	document.table.appendChild(row)
};

getSumBtn.addEventListener("click", getSum);

