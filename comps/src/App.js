import React from "react";
import Accordion from "./components/Accordion";
const App = () => {
	const items = [
		{
			id: "1",
			label: "Identify observation IDs for the data set",
			content:
				" Observation IDs are unique identifiers for each line of the data table. In the case of products, observation IDs could be product names or a numeric substitute. You need to identify the observations on which the table will be based. For example, you might use “PN1, PN2, PN3… PN10” as observation IDs for products",
		},
		{
			id: "2",
			label: "Identify dimensions for the data set",
			content:
				"Dimension (or field) is another word for characteristic or trait. They’re a piece of information about the observation ID. You need to identify what information you will include about each product, and include them as headers in your data table. For example, you might use “Product Category, Product Price, Product Weight, Product Brand” as dimensions.",
		},
		{
			id: "3",
			label: "Fill in observation ID titles",
			content:
				"Once you know them, fill in the observation IDs. To do this, choose cell A1 in an Excel sheet and write “Product ID.” In cell A2, write “PN1.” In cell A3, write “PN2.” Then highlight those two cells and drag the arrow in the bottom right corner down 8 cells. Excel will automatically create a sequence of ten PNs. Look at this short clip to understand:",
		},
	];
	return <Accordion items={items} />;
};

export default App;
