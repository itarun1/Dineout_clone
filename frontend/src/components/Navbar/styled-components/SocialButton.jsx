import styled from "styled-components";

export const SocialButton = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
	padding: 5px 15px;
	border-radius: 5px;
	border: ${(props) => (props.border ? props.border : "none")};
	background-color: ${(props) => (props.bgColor ? props.bgColor : "white")};
	color: ${(props) => (props.color ? props.color : "rgb(29, 29, 29)")};
	flex: 1;

	&:hover {
		cursor: pointer;
	}

	p {
		margin: 0;
	}

	img {
		width: 15px;
		height: 15px;
	}
`;
