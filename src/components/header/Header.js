// import Announcement from '../../components/banner/Announcement';
import "./style.css";
import "./animate.css";

import { Button, Icon, Modal } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import logo from "./SACommunityFoodNetworkLogo.png";

ReactGA.initialize("UA-139413334-1");

const styles = {
  button: {
    width: "70%",
    minWidth: "calc(130px + 5vw)",
    height: 50,
    fontSize: 15,
  },
  buttonResource: {
    width: "40%",
    minWidth: "200px",
    height: 50,
    fontSize: 15,
  },
  announcementButton: {
    marginLeft: 8,
  },
};

function Header(props) {
  const [right, setRight] = useState("-150px");
  const [right2, setRight2] = useState("-150px");
  const [isCrisis, setIsCrisis] = useState(false);

  function handleCrisis() {
    setIsCrisis(true);
  }

  const onScrollDownClicked = () => {
    ReactGA.event({
      category: "Header",
      action: "Clicked Scroll Down Button",
    });
    props.scrollToContent();
  };

  const onFilterClicked = (filterName) => {
    ReactGA.event({
      category: "Header",
      action: "Clicked Top Preset Filer: " + filterName,
    });
    props.onPresetFilterChange(filterName);
    props.scrollToContent();
  };

  const startTimer = (e) => {
    let expiredAt = new Date();
    expiredAt = expiredAt.setSeconds(expiredAt.getSeconds());
    localStorage.setItem("expiration", expiredAt);
  };
  const scrollToMiddle = (e) => {
    const currentTime = new Date().getTime();
    const expireTime = localStorage.getItem("expiration");
    if (
      window.scrollY > 700 &&
      expireTime !== null &&
      currentTime - Number(expireTime) > 10000
    ) {
      setRight("30px");
      setRight2("12px");
    } else {
      setRight("-150p");
      setRight2("-150px");
    }
  };
  useEffect(() => {
    window.addEventListener("load", startTimer);
    window.addEventListener("scroll", scrollToMiddle);
  }, []);

  return (
    <section className="b1">
      <div className="stuff">
        <img className="titleImage" src={logo} alt="Campus Lightbox" />
        <div className="guide">Your Guide to BCITSA and external community food support</div>
        <div className="select">See below for on-campus and off-campus food support resources</div>

        
        <br />
        <br />
        
        <div className="ButtonClass animated fadeInDown">
          <Button
            onClick={onScrollDownClicked}
            inverted
            circular
            icon="angle down"
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
