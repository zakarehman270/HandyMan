import React from "react";
import CountUp from "react-countup";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa";
import { GiHumanPyramid } from "react-icons/gi";
const ProjectCompleted = () => {
	return (
		<div className="outerContainerProjectCompleted text-white text-center pt-4 pb-5">
			<h2>The way to achieve your own success</h2>
			<div className="mt-3 d-flex align-item-center justify-content-center gap-50">
				<div className="text-center">
					<MdOutlineHomeWork className="outerWrapperIconInProjectCompleted mb-3" />
					<div className="CountUp">
						<CountUp className="account-balance" start={0} end={1000} delay={0}>
							{({ countUpRef }) => (
								<div>
									<span ref={countUpRef} />
								</div>
							)}
						</CountUp>
					</div>
					<h5>Project Completed</h5>
				</div>
				<div className="text-center">
					<FaPeopleArrows className="outerWrapperIconInProjectCompleted mb-3" />
					<div className="CountUp">
						<CountUp
							className="account-balance"
							start={1}
							end={100}
							duration={2.75}
							separator=" "
							decimals={2}
							decimal=","
							onEnd={() => console.log("Ended! 👏")}
							onStart={() => console.log("Started! 💨")}
						></CountUp>
					</div>
					<h5>Clients</h5>
				</div>
				<div className="text-center">
					<GiHumanPyramid className="outerWrapperIconInProjectCompleted mb-3" />
					<div className="CountUp">
						<CountUp
							className="account-balance"
							start={1}
							end={800}
							duration={2.75}
							separator=" "
							decimals={1}
							decimal=","
							onEnd={() => console.log("Ended! 👏")}
							onStart={() => console.log("Started! 💨")}
						></CountUp>
					</div>
					<h5>Worker</h5>
				</div>
			</div>
		</div>
	);
};

export default ProjectCompleted;
