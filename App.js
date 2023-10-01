import './App.css';
import { useState } from 'react';

const questions = [
  {
    question: 'What country has the highest life expectations?',
    options: ['Pakistan', 'India', 'HongKong', 'China'],
    correct: 'HongKong'
  },
  {
    question: 'What is the most common surname in the United States?',
    options: ['Simith', 'Siri', 'Smithy', 'Smith'],
    correct: 'Smith'
  },
  {
    question: 'How many minutes in a full week?',
    options: [10800, 10080, 10080, 18080],
    correct: 10080
  },
  {
    question: 'How many elements in the periodic table?',
    options: [115, 117, 118, 119],
    correct: 118
  },
  {
    question: 'Aureolin is a shade if what color?',
    options: ['Yellow', 'Blue', 'Green', 'Orange'],
    correct: 'Yellow'
  },
  {
    question: 'Which planet has the most moons?',
    options: ['Venus', 'Mercury', 'Jupiter', 'Saturn'],
    correct: 'Saturn'
  },
  {
    question: 'How many bones do we have in an ear?',
    options: [2, 1, 4, 3],
    correct: 3
  },
  {
    question: 'What is the only body part which is fully grown from birth?',
    options: ['Head', 'Eyes', 'Nose', 'Ear'],
    correct: 'Eyes'
  },
  {
    question: 'How many hearts does an octopus have?',
    options: [3, 2, 5, 1],
    correct: 3
  },
  {
    question: 'Where is the strongest human muscle located?',
    options: ['Calves', 'Shoulder', 'Arm', 'Jaw'],
    correct: 'Jaw'
  },
  {
    question: 'What phone company produced the 3310?',
    options: ['Nokia', 'Tecno', 'Itel', 'Infinix'],
    correct: 'Nokia'
  },
  {
    question: 'How many flags are on the chinese flag?',
    options: [2, 5, 7, 9],
    correct: 5
  },
  {
    question: 'Pink Ladies and Granny Smiths are types of which fruit?',
    options: ['Banana', 'Grapes', 'Apple', 'Orange'],
    correct: 'Apple'
  },
  {
    question: 'What color are Mickey Mouse shoes?',
    options: ['Yellow', 'White', 'Black', 'Pink'],
    correct: 'Yellow'
  },
  {
    question: 'Which animal is known as the Ship of the Dessert?',
    options: ['Horse', 'Turtle', 'Camel', 'Zebra'],
    correct: 'Camel'
  },
  {
    question: 'How many seconds make one hour?',
    options: [3000, 3600, 3400, 3200],
    correct: 3600
  },
  {
    question: 'How many consonants are there in the English alphabet?',
    options: ['Twenty-two', 'Twenty-three', 'Twenty-three', 'Twenty-one'],
    correct: 'Twenty-one'
  },
  {
    question: 'Name the primary colors?',
    options: ['Red-Yellow-Green', 'Red-Blue-Yellow', 'Red-Blue-Green', 'Yellow-Blue-Green'],
    correct: 'Red-Blue-Yellow'
  },
  {
    question: 'Anti-clockwise is it left or right?',
    options: ['Left', 'Right'],
    correct: 'Left'
  },
  {
    question: 'Do we have 34 teeth?',
    options: ['True', 'False', 'None of the above', 'I dont know'],
    correct: 'False'
  }
]

function App() {
  const [questionNo, setQuestionNo] = useState(0)
  const [selectedOption, setSelectedOption] = useState()
  const [submit, setSubmit] = useState(false)
  const [score, setScore] = useState(0)
  const option = questions[questionNo].options
  const percentage = (score / questions.length) * 100
  const correctAnswer = questions[questionNo].correct
  const selected = questions[questionNo].options[selectedOption]
  
  function nextQuestion() {
    let next = questionNo
    setQuestionNo(++next)
    setSelectedOption()
  }

  function selectOption(index) {
    setSelectedOption(index)
  }

  function submitQuiz(){
    let tempScore = score
    if(selected === correctAnswer){
      setScore(++tempScore)
    }
    setSubmit(true)
  }

  return (
    <div className="App">
      <header className="App-header">


        {submit ? (
          <div>
            <h1>RESULT</h1>
            <h4>Your score: {score}/{questions.length} </h4>
            <p>Percentage: {percentage.toFixed(2)}%</p>
          </div>
        ) : (
          <>
            <h1>Quiz App</h1>
            <h4>Q{questionNo + 1}: {questions[questionNo].question}</h4>

            {option.map(function (item, index) {
              return <div>
                <input
                  onChange={() => selectOption(index)}
                  checked={selectedOption === index}
                  type='radio'
                  name='inp'
                  value='options'
                />
                {item}
              </div>
            })}

            <br />

            {questionNo === questions.length - 1
              ? (
                <button
                 style={{ backgroundColor: 'Red', color: 'white', paddingTop: 7, paddingBottom: 7, paddingLeft: 13, paddingRight: 13, margin: 5 }} 
                 onClick={submitQuiz}> SUBMIT
                 </button>
              ) : (
                <button 
                 style={{ backgroundColor: 'blue', color: 'white', paddingTop: 7, paddingBottom: 7, paddingLeft: 13, paddingRight: 13, margin: 5 }}
                 onClick={nextQuestion}> NEXT
                 </button>
              )}
          </>
        )}

      </header>
    </div>
  );
}

export default App;