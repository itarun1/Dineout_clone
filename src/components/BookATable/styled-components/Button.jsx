import styled from "styled-components";

export const Button = styled.button`
	color: white;
	background-color: #2b98f7;
	font-size: ${(props) => (props.fs ? props.fs : "14px")};
	font-weight: 500;
	text-decoration: rgb(255, 255, 255);
	border: none;
	border-radius: 5px;
	padding: 7px 12px;
	width: ${(props) => (props.wd ? props.wd : "fit-content")};
	cursor: pointer;
`;
