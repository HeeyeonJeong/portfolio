import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	html,body {
		height:100%;
	}

    body {
        box-sizing: border-box;
		font-family: 'Syncopate','Noto Sans KR', sans-serif;
		background: ${({ theme }) => theme.bgColor};
		color: ${({ theme }) => theme.textColor};
		transition: all 0.25s linear;
	}

	a {
		text-decoration:none;
		color: ${({ theme }) => theme.textColor};
	}

	li {
		list-style:none;
	}

	button {
		outline:none;
		border:none;
		color: ${({ theme }) => theme.textColor};
		background-color:transparent;
	}
`;

export default GlobalStyle;
