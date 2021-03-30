# portfolio

**HeeyeonJeong's Front-end Portfolio && Resume** | [Link](https://heeyeonportfolio.netlify.app)

<br/>

## ⚙ Stack

- **React**

  - styled-components
  - react-icons
  - react-responsive

- Context API
- 배포 - netlify

<br/>

## 📚 Features

- Dark / Light mode (material UI)
- scroll up
- text interaction
- emailjs

<br/>

## 👩‍💻 주요 기능 Component

- **Dark / Light mode**

  - useLigthMode hook
  - switch component (material UI)

```javascript
//useLigthMode hook
import { useState } from "react";
import { theme } from "../Styles/theme";

export const useLightMode = () => {
  const { lightTheme, darkTheme } = theme;
  const [mode, setMode] = useState(darkTheme);

  const toggleTheme = () => {
    mode === darkTheme ? setMode(lightTheme) : setMode(darkTheme);
  };

  return { mode, toggleTheme };
};
```

```javascript
//ToggleSwitch component (material UI)
import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { ThemeContext } from "../context/ThemeContext";

const OrangeSwitch = withStyles({
  root: {
    width: "60px",
    height: "40px",
  },
  switchBase: {
    color: "#F54404",
    "&$checked": {
      color: "#F54404",
    },
    "&$checked + $track": {
      backgroundColor: "#F54404",
    },

    "&$focusVisible $thumb": {
      border: "6px solid #F54404",
    },
  },
  track: {
    border: `1px solid black`,
    backgroundColor: "white",
  },
  checked: {},
})(Switch);

function ToggleSwitch() {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <FormControlLabel
        control={
          <OrangeSwitch onChange={toggleTheme} name="checkedA" mode={mode} />
        }
        label={
          mode.textColor === "white"
            ? "Switch to Light mode"
            : "Switch to Dark mode"
        }
      />
    </div>
  );
}

export default ToggleSwitch;
```

<br/>

- **Scroll에 따른 text interaction**

```javascript
//Home component 일부
const Title = styled.h2.attrs((props) => ({
  style: {
    transform: `translateX(-${props.offsetY > 50 ? props.offsetY * 1.5 : 0}px)`,
  },
}))`
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 30px;
  transition: all 500ms ease-out;

  @media ${(props) => props.theme.tabletMedium} {
    position: relative;
    left: -1%;
    font-size: 200px;
  }
`;

const TitleName = styled(Title).attrs((props) => ({
  style: {
    transform: `translateX(${props.offsetY > 180 ? props.offsetY * 1.5 : 0}px)`,
  },
}))``;

...

function Home() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  return (
    <Section id="home">
      <Title offsetY={offsetY}>Hello, I'm</Title>
      <TitleName offsetY={offsetY}>HeeYeon</TitleName>
      <DescTitle offsetY={offsetY}>Frontend</DescTitle>
      <Desc offsetY={offsetY}>Developer</Desc>
    </Section>
  );
}

export default Home;

```
