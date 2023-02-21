const Header = ({name}) => (
  <h2>{name}</h2>
)

const Part = (content) => (
  <div>
    {content.name} {content.exercises}
  </div>
)
const Content = ({parts}) => (
  <div>
    {parts.map(part => (
      <Part key = {part.id} name = {part.name} exercises = {part.exercises} />
    ))}
  </div>

)
const Total = ({parts}) => {
  const total = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises, 0)
  return <strong>total of {total} exercises</strong>
}

const Course = ({course}) => {
  return  (
  <div>
    <Header name = {course.name} />
    <Content parts = {course.parts} />
    <Total parts = {course.parts} />
  </div>
)
  }

export default Course