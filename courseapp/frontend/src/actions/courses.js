import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_COURSES, DELETE_COURSE, ADD_COURSE } from "./types";

// GET COURSES
export const getCourses = () => (dispatch) => {
  axios
    .get("/api/courses/")
    .then(res => {
      dispatch({
        type: GET_COURSES,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE COURSE
export const deleteCourse = id => (dispatch) => {
  axios
    .delete(`/api/courses/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteCourse: "Course Deleted" }));
      dispatch({
        type: DELETE_COURSE,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD LEAD
export const addCourse = course => (dispatch) => {
  axios
    .post("/api/courses/", course)
    .then(res => {
      dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: ADD_COURSE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
