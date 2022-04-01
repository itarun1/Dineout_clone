import styled from "styled-components";

export const FooterStyle = styled.div`
	z-index: 1000;
	hr {
		color: #d4d4d4;
	}

	.container-heading-second {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: center;
		gap: 0;
		h3 {
			font-weight: bold;
			font-size: 16px;
			line-height: 20px;
			margin: 0;
			color: #ff645a;
		}
		div {
			width: 32px;
			height: 2px;
			background: #ff645a;
			margin-bottom: 10px;
		}
	}

	p {
		margin: 0;
	}
	.footer-second-row {
		padding: 30px;
		width: 85%;
		margin: auto;
		display: flex;
		justify-content: space-around;

		.footerparent {
			display: flex;
			width: 240px;
			flex-direction: column;
			justify-content: flex-end;
		}
		p {
			font-size: 14px;
			line-height: 20px;
			color: #797979;
			cursor: pointer;
		}
		p:hover {
			color: black;
		}
	}
	.container-heading-part {
		height: 48px;
	}
	.footer_end_div {
		height: 234px;
		background: white;
		text-align: center;
		.footerlogodiv {
			height: 32px;
			width: 96px;
			margin: auto;
			margin-top: 40px;
		}
		p {
			font-weight: 700;
			font-size: 14px;
			line-height: 20px;
			color: #797979;
			margin: 10px;
			cursor: pointer;
		}
		.sociallinks {
			display: flex;
			gap: 10px;
			width: 300px;
			margin: auto;
			justify-content: center;
		}
	}
`;
