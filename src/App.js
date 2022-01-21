import { useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated, config, useSpring } from "react-spring";

import ImageShadow from "react-image-shadow";
import "react-image-shadow/assets/index.css";

import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import "./App.css";
import getAbout from "./services/AboutServices";

function App() {
  const [about, setAbout] = useState({});

  useEffect(() => {
    getAbout(setAbout);
  }, []);

  //statusbar
  const BorderLinearProgress = styled(LinearProgress)(
    ({ theme, backgroundColor }) => ({
      height: 10,
      borderRadius: 5,
      [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
          theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
      },
      [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor:
          theme.palette.mode === "light" ? backgroundColor : "#308fe8",
      },
    })
  );

  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <Parallax pages={3} style={{ top: "0", left: "0" }}>
      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <animated.h1 className={"header-text"} style={props}>
          DOĞUKAN KARASANSAR
        </animated.h1>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2 className="header-text">
          {about.title ? about.title : "Doğukan Karasansar Kimdir?"}
        </h2>

        <ImageShadow
          shadowBlur={15}
          shadowHover={true}
          src={
            about.image
              ? about.image
              : "https://media-exp1.licdn.com/dms/image/C4E03AQFL53I4RJrkKg/profile-displayphoto-shrink_100_100/0/1640802307804?e=1648080000&v=beta&t=n4QpoxwW481RuyXmsTyxnfOZ8Ah7KtzrhP9BbbewoJ8"
          }
          className="my-image"
          alt={about.tag ? about.tag : "Developer Doğukan Karasansar"}
        />

        <p className="description">
          {about.description
            ? about.description
            : "Merhaba, Ben Doğukan Karasansar 19 yaşındayım,  Web Tasarım ve Mobil Uygulama Geliştirmekle İlgileniyorum. Laravel, Vue, react vb.. web teknolojilerini kullanıyorum Mobil geliştirmeler için Flutter ve React Native kullanmaktayım."}
        </p>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={0.5}
        style={{
          backgroundColor: "#041562",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <div style={{ padding: 10 }}>
          <animated.h1 className={"experience-text"} style={props}>
            EXPERIENCE
          </animated.h1>
        </div>

        {/* Laravel */}
        <div style={{ width: "50%", margin: 10 }}>
          <span>Laravel</span>
          <br />
          <br />
          <BorderLinearProgress
            variant="determinate"
            value={90}
            backgroundColor={"#DA1212"}
          />
        </div>

        {/* Vue */}
        <div style={{ width: "50%", margin: 10 }}>
          <span>Vue</span>
          <br />
          <br />
          <BorderLinearProgress
            variant="determinate"
            value={60}
            backgroundColor={"#91C483"}
          />
        </div>

        {/* React */}
        <div style={{ width: "50%", margin: 10 }}>
          <span>React</span>
          <br />
          <br />
          <BorderLinearProgress
            variant="determinate"
            value={79}
            backgroundColor={"#11468F"}
          />
        </div>

        {/* MySql */}
        <div style={{ width: "50%", margin: 10 }}>
          <span>MySql</span>
          <br />
          <br />
          <BorderLinearProgress
            variant="determinate"
            value={79}
            backgroundColor={"#11468F"}
          />
        </div>

        {/* React Native */}
        <div style={{ width: "50%", margin: 10 }}>
          <span>React Native</span>
          <br />
          <br />
          <BorderLinearProgress
            variant="determinate"
            value={70}
            backgroundColor={"#AEFEFF"}
          />
        </div>

        {/* Flutter */}
        <div style={{ width: "50%", margin: 10 }}>
          <span>Flutter</span>
          <br />
          <br />
          <BorderLinearProgress
            variant="determinate"
            value={30}
            backgroundColor={"#406882"}
          />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
