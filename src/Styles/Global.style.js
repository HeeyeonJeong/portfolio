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
		background-color: #F1EFED;
	}

	a {
		text-decoration:none;
		color:black;
	}

	li {
		list-style:none;
	}

	button {
		outline:none;
		border:none;
	}
`;

export default GlobalStyle;
