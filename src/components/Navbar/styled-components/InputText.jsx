import styled from "styled-components";

export const InputText = styled.input`
	font-size: ${(props) => (props.fntsize ? props.fntsize : "14px")};
	border: none;
	border-radius: 5px;
	padding: ${(props) => (props.pd ? props.pd : "7px 12px")};
	width: ${(props) => (props.wd ? props.wd : "600px")};
	background: ${(props) =>
		props.isPopup
			? "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))"
			: "white"};

	&:focus {
		outline: none;
	}
`;
