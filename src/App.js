import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseInput/CourseInput";

import "./App.css";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ])

  const addGoalHandler = (goal) => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({text: goal, id: Math.random().toString()});
      return updatedGoals;
    })
  }

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
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler}/>
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
}

export default App;
