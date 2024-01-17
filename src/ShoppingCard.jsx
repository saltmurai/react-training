

function ShoppingCard() {
	const myName = "SANG";

		return (
			<>
				<div>
						<h1>HELLO {myName}</h1>
						<p>
						{myName === 'SANG' ? 'YES' : 'NO'}
						{
							Array(10).fill(0).map((_, index) => (
								<p key={index}>index is {index}</p>
							))
						}
						</p>
				</div>
				<div>
					<h2>ABCD</h2>
				</div>
			</>
		)
}


export default ShoppingCard
