const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (content) => (
  <div>
    {content.name} {content.exercises}
  </div>
)
const Content = (content) => (
  <div>
    <Part name = {content.parts[0].name} exercises = {content.parts[0].exercises} /> 
    <Part name = {content.parts[1].name} exercises = {content.parts[1].exercises} /> 
    <Part name = {content.parts[2].name} exercises = {content.parts[2].exercises} /> 
  </div>

)

const Total = (total) => (
  <p>Number of exercises {total.parts[0].exercises + total.parts[1].exercises + total.parts[2].exercises}</p>
)



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
 
  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

export default App