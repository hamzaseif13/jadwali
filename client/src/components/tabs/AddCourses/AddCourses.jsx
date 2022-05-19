import React from 'react'
import TabLayout from '../TabLayout';
import ChooseSchool from './ChooseSchool';
import SearchBox from './SearchBox';
import CourseWrapper from './CourseWrapper';
function AddCourses() {
  return (
      
    <TabLayout>
      <div className="">

       <ChooseSchool/>
       <SearchBox/>
       <CourseWrapper/>
      </div>

    </TabLayout>
     
  );
}

export default AddCourses