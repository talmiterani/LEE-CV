import React, { Component } from "react";

class GoTop extends Component {
  state = {
    intervalId: 0,
    thePosition: false,
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        this.setState({ thePosition: true });
      } else {
        this.setState({ thePosition: false });
      }
    });
    window.scrollTo(0, 0);
  }

  onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  };

  scrollToTop = () => {
    let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  };

  renderGoTopIcon = () => {
    if (this.state.thePosition) {
      return (
        <>
          <div
            className="move-up"
            style={{
              position: "fixed",
              marginRight: "80px",
              cursor: "pointer",
              bottom: " 30px",
              right: "0",
              zIndex: "1",
              transition: " all .1s",
            }}
          >
            <span>
              <img src="/arrow_up.svg" alt="" onClick={this.scrollToTop}></img>
            </span>
          </div>
        </>
      );
    }
  };

  render() {
    return <>{this.renderGoTopIcon()}</>;
  }
}

export default GoTop;
