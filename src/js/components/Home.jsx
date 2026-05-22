import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {

	const [lightColor, setLightColor] = useState("")
	

	return (
		<div className="text-center d-flex flex-column align-items-center">
			<div className="d-flex flex-column bg-dark p-1">
			</div>
            <div className="d-inline-flex bg-dark m-0">
				<div className="d-flex flex-column align-items-center gap-2 p-2">
					<div className={ `col-4 rounded-4 p-3  ${lightColor === "red" ? "redlight shadowred" : "gray"}`} onClick={()=>setLightColor(lightColor == "red" ? "gray" : "red")}></div>
					<div className={`col-4 rounded-4 p-3 ${lightColor === "yellow" ? "yellowlight shadowyellow" : "gray"}`} onClick={()=>setLightColor(lightColor === "yellow" ? "gray" : "yellow")}></div>
					<div className={`col-4 rounded-4 p-3 ${lightColor === "green" ? "greenlight shadowgreen" : "gray"}`} onClick={()=>setLightColor(lightColor == "green" ? "gray" : "green")}></div>
				</div>
			</div>
		</div>
	);
};



export default Home;