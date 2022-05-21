import React from 'react'
import TabLayout from '../TabLayout';
import ChooseSchool from './ChooseSchool';
import SearchBox from './SearchBox';
import CourseWrapper from './CourseWrapper';
function AddCourses() {
  return (

    <TabLayout>
      <div className="lg:flex mt-5 ">
        <div className="lg:mr-20">
          <ChooseSchool />
          <SearchBox />
        </div>
        <CourseWrapper />
      </div>
    </TabLayout>

  );
}

export default AddCourses