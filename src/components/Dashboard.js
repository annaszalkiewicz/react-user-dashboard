import React, { Component } from "react";
import { connect } from "react-redux";

import Timeline from "./Timeline";
import Slider from "./Slider";
import MealPlan from "./MealPlan";

import { setPlanDuration, setCurrentWeek } from "../store/actions/userActions";
import ProteinOptions from "./ProteinOptions";

class Dashboard extends Component {
  componentDidMount = () => {
    this.props.setPlanDuration();
    this.props.setCurrentWeek();
  };

  render() {
    return (
      <div className="dashboard_container">
        <div className="dashboard_info">
          <Timeline />
          <Slider />
          <ProteinOptions />
        </div>
        <MealPlan />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weeks: state.userReducer.weeks,
    currentWeek: state.userReducer.currentWeek
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPlanDuration: () => dispatch(setPlanDuration()),
    setCurrentWeek: () => dispatch(setCurrentWeek())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
