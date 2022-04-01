import styled from "styled-components";

export const NavSelect = styled.div`
	font-size: 14px;
	border: ${(props) =>
		props.border ? props.border : "1px solid rgb(196, 196, 196)"};

	border-radius: 5px;
	padding: 8px 12px;
	background-color: white;
	color: grey;
	width: ${(props) => (props.width ? props.width : "180px")};
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	height: 23px;

	&:hover {
		cursor: pointer;
	}

	i.location {
		position: absolute;
		left: 5px;
	}

	i.down_arrow {
		position: absolute;
		right: 5px;
	}

	.l_options {
		display: ${(props) => (props.isSelect ? "block" : "none")};
		position: relative;
		top: 85px;
		z-index: 10;
		border: 1px solid black;
		width: 186px;
		padding: 5px 0;
		height: 160px;
		border: 1px solid grey;
		background-color: white;
		overflow-y: scroll;
		scrollbar-width: thin;

		.oneLocation {
			border-bottom: 1px solid rgb(196, 196, 196);
			transition: all 0.2s ease;
			margin: 2px 0;
			padding: 5px 0;

			&:hover {
				cursor: pointer;
				background-color: #e7e7e7;
			}
		}
	}

	p.first_last_name {
		position: absolute;
		color: #ff645a;
		font-weight: 600;
		left: 5px;
		border: 2px solid #ff645a;
		padding: 5px;
		border-radius: 50%;
	}

	.drop_down {
		display: ${(props) => (props.isSelect ? "block" : "none")};
		border: 1px solid grey;
		position: absolute;
		z-index: 10;
		width: 80%;
		top: 40px;
		height: 100px;
		background-color: white;
		border-radius: 10px;

		p {
			margin: 5px;
			padding: 3px 0;
			border-bottom: 1px solid #c7c7c7;

			&:hover {
				background-color: #dddddd;
				cursor: pointer;
			}
		}
	}
`;
