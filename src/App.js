import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoalList/CourseGoalList";
import "./App.css";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ])

  const deleteItemHandler = (goalId) => {
    setCourseGoals(prevGoals => {
      let updatedGoals = prevGoals.filter(prevGoal => prevGoal.id !== goalId);
      return updatedGoals;
    })
  }

  let content = <p style={{ textAlign: 'center' }}>No goals found</p>

  if(courseGoals.length) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    )
  };

  return (
    <div>
      <section>
        {/* goal input */}
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
}

export default App;
