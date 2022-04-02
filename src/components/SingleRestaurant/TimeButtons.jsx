export const TimeButtons = ({ array, timeHandler }) => {
	return (
		<div className="time__buttons">
			{array.map((oneArr) => {
				return (
					<button
						onClick={() => timeHandler(oneArr)}
						key={oneArr + Math.floor(Math.random()) + 20}
					>
						{oneArr}PM
					</button>
				);
			})}
		</div>
	);
};
