import React from "react";
import Button from "./components/Button";
const App = () => {
	return (
		<>
			<div>
				<Button primary rounded outline>
					Click here!
				</Button>
			</div>
			<div>
				<Button secondary outline>
					Buy Now!
				</Button>
			</div>
			<div>
				<Button success rounded outline>
					See Deals!
				</Button>
			</div>
			<div>
				<Button warning outline>
					Hide Ads!
				</Button>
			</div>
			<div>
				<Button danger rounded>
					Something!
				</Button>
			</div>
		</>
	);
};

export default App;
