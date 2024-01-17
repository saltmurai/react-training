import { useState } from "react";

/* eslint-disable react/prop-types */
function SearchBar({fruitList, setFilter}) {
	const [searchTerm, setSearchTerm] = useState("");
	const [onlyStock, setOnlyStock] = useState(false);

	function handleSearch(e){
		const value = e.target.value.toLowerCase();
		setSearchTerm(value)
		
		if(e.target.value === "") {
			setFilter(fruitList)
			return
		}

		const filterItems = fruitList.filter((item) => {
			const name = item.name.toLowerCase()
			return name.startsWith(value.trim()) && (onlyStock ? item.stocked : true)
		})
		setFilter(filterItems)
	}
	function handleStock(e){
		setOnlyStock(e.target.checked)
	}

	
  return (
    <div className="flex flex-col justify-start">
      <input value={searchTerm} onChange={handleSearch} />
      <div>
        <input checked={onlyStock} onChange={handleStock} type="checkbox" /> Only in stock
      </div>
    </div>
  );
}

function Product({item}){
return (
<div className="bg-blue-500">
	<div className="w-full flex justify-between">
		<span className={item.stocked ? "" : "text-red-500"}>{item.name}</span>
		<span>{item.price}</span>
	</div>
</div>
)
}

function Table({fruitList}) {
	const fruitRows = []
	const vegRows = []

	fruitList.forEach((item) => {
		if(item.category === "Fruits") {
			fruitRows.push(<Product item={item} />)
		}
		if(item.category === "Vegetables") {
			vegRows.push(<Product item={item} />)
		}
	})

  return (
		<div className="flex flex-col gap-4">
			<div>
				<h4>Fruits</h4>
				{fruitRows}
			</div>
			<div>
				<h4>Vegetables</h4>
				{vegRows}
			</div>
		</div>

	);
}

function FilterTable() {
	const fruits = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ]
	const [filter, setFilter] = useState(fruits)
  return (
    <div>
      <SearchBar fruitList={fruits} setFilter={setFilter} />
      <Table fruitList={filter} />
    </div>
  );
}

export default FilterTable;
