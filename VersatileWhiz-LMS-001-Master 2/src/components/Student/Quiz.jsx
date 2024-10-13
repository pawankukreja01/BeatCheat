import React, { useState , useEffect } from "react";
import { useOutletContext } from "react-router-dom";
// Table Componant
import { Link } from "react-router-dom";
import Datatables from "../Datatables/Table";
import TableCell from "../Datatables/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faRemove } from "@fortawesome/free-solid-svg-icons";

function Quiz() {
  const questions = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
            { answerText: 'Apple', isCorrect: true },
            { answerText: 'Intel', isCorrect: false },
            { answerText: 'Amazon', isCorrect: false },
            { answerText: 'Microsoft', isCorrect: false },
        ],
    },
    {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
        ],
    },
];


const [currentQuestion, setCurrentQuestion] = useState(0);
const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
const [score, setScore] = useState(0);
const [showScore, setShowScore] = useState(false);
const [timer, setTimer] = useState(10800); // 3 hours in seconds
const [lastAnswerGiven, setLastAnswerGiven] = useState(false); // New state to track if the last answer is given

useEffect(() => {
    if (timer === 0) {
        setShowScore(true);
        return;
    }

    const interval = setInterval(() => {
        setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(interval);
}, [timer]);

const handleAnswerOptionClick = (answerOption, index) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = index;
    setSelectedAnswers(updatedAnswers);

    if (answerOption.isCorrect) {
        setScore(score + 1);
    }

    if (currentQuestion === questions.length - 1) {
        setLastAnswerGiven(true); // Update state when the last answer is given
    }
};

const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
    }
};

const handlePreviousQuestion = () => {
    const previousQuestion = currentQuestion - 1;
    if (previousQuestion >= 0) {
        setCurrentQuestion(previousQuestion);
    }
};

const handleFinishExam = () => {
    setShowScore(true);
};

  return (
    <>
      <div className="mainCard">
            <h2 className="text-2xl font-semibold text-gray-600 mb-3">Exam</h2>
            <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
                <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500">
                    <div className="bg-white p-6 rounded shadow-md w-3/4">
                        {showScore ? (
                            <div className="text-xl font-bold mb-4 text-blue-600">
                                You scored {score} out of {questions.length}
                            </div>
                        ) : (
                            <>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="text-xl font-bold text-blue-600">
                                        {questions[currentQuestion].questionText}
                                    </div>
                                    <div className="text-lg font-bold text-blue-700">
                                        Time left: {Math.floor(timer / 3600)}h {Math.floor((timer % 3600) / 60)}m {timer % 60}s
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleAnswerOptionClick(answerOption, index)}
                                            className={`text-white font-bold py-2 px-4 rounded mb-2 transition duration-300 ease-in-out transform hover:scale-105 ${
                                                selectedAnswers[currentQuestion] === index ? "bg-blue-700" : "bg-blue-500"
                                            }`}
                                        >
                                            {answerOption.answerText}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-4">
                                    <button onClick={handlePreviousQuestion} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Previous</button>
                                    {currentQuestion === questions.length - 1 && selectedAnswers[currentQuestion] !== null && (
                                        <button onClick={handleFinishExam} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Finish Exam</button>
                                    )}
                                    {currentQuestion < questions.length - 1 && (
                                        <button onClick={handleNextQuestion} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div> 
        </div>
    </>
  );
}

export default Quiz;
