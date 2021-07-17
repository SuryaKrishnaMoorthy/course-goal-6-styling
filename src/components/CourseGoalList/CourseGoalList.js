import CourseGoalItem from "../CourseGoalItem/CourseGoaltem";

import "./CourseGoalList.css";

const CourseGoalList = (props) => {
	return (
		<ul className="goal-list">
			{
				props.items.map(goal => (
					<CourseGoalItem
						onDelete={props.onDeleteItem}
						key={goal.id}
						id={goal.id}
					>
						{goal.text}
					</CourseGoalItem>
				))
			}
		</ul> 
	)
}

export default CourseGoalList;