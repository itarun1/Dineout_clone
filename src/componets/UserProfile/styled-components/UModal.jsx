import styled from "styled-components";

export const UModal = styled.div`
	height: fit-content;
	background-color: #fdfffc;
	width: 450px;
	border-radius: 20px;
	position: fixed;
	z-index: 20;
	padding: 20px 25px;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	top: 40%;
	color: black;
	left: 50%;
	transform: translate(-50%, -40%);

	.editForm {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
		margin-top: 20px;

		input[type="text"] {
			width: 100%;
			border: none;
			padding: 10px 0;
			font-size: 17px;
			border-bottom: 1px solid grey;

			&:focus {
				outline: none;
			}
		}
	}

	.topHeading {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		color: rgb(29, 29, 29);

		h2 {
			font-weight: 600;
			color: #ff645a;

			margin: 0;
		}

		i {
			font-size: 30px;

			&:hover {
				cursor: pointer;
			}
		}
	}
`;
