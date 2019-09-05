import {
  SET_CURRENT_WEEK,
  SET_PLAN_DURATION,
  GET_MEAL_PLAN,
  SET_PROTEIN_OPTIONS
} from "./actionTypes";

export const setCurrentWeek = () => {
  return {
    type: SET_CURRENT_WEEK
  };
};

export const setPlanDuration = () => {
  return {
    type: SET_PLAN_DURATION
  };
};

export const getMealPlan = () => {
  return {
    type: GET_MEAL_PLAN
  };
};

export const setProteinOptions = () => {
  return {
    type: SET_PROTEIN_OPTIONS
  };
};
