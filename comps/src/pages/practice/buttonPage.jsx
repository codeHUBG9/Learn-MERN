import React from "react";
import Button from "../../components/Button";
import {} from "react-icons/md";
import {
	FcDataConfiguration,
	FcDataEncryption,
	FcDoughnutChart,
	FcLike,
	FcServices,
} from "react-icons/fc";
const ButtonPage = () => {
	const handleClick = () => {
		console.log("Click");
	};
	return (
		<>
			<div>
				<Button secondary onClick={handleClick} className='mb-5'>
					<FcDataEncryption />
					Click here!
				</Button>
			</div>
			<div>
				<Button danger outline>
					<FcDataConfiguration />
					Buy Now!
				</Button>
			</div>
			<div>
				<Button success outline>
					<FcDoughnutChart />
					See Deals!
				</Button>
			</div>
			<div>
				<Button warning outline>
					<FcLike />
					Hide Ads!
				</Button>
			</div>
			<div>
				<Button secondary rounded>
					<FcServices />
					Something!
				</Button>
			</div>
		</>
	);
};

export default ButtonPage;
