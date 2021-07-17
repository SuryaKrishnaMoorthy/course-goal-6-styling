import "./CourseGoaltem.css";

const CourseGoalItem = props => {

	const onDeleteHandler = (event) => props.onDelete(props.id);

	return (
		<li onClick={onDeleteHandler} className="goal-item">{ props.children }</li> 
	)
}

export default CourseGoalItem;