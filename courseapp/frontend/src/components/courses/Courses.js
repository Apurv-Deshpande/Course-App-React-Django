import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCourses } from "../../actions/courses";

export class Courses extends Component {
  static propTypes = {
    courses: PropTypes.array.isRequired,
    getCourses: PropTypes.func.isRequired,

  };

  componentDidMount() {
    this.props.getCourses();
  }

  render() {
    return (
      <Fragment>
        <h2>Leads</h2>
        <table className="table table-striped">
          <thead>
            <tr>

              <th>Title</th>
              <th>Publish Date</th>


            </tr>
          </thead>
          <tbody>
            {this.props.courses.map(course => (
              <tr key={course.id}>

                <td>{course.title}</td>
                <td>{course.published}</td>


              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  courses: state.courses.courses
});

export default connect(
  mapStateToProps,
  { getCourses }
)(Courses);