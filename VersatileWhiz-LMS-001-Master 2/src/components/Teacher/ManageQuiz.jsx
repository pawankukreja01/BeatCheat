import React, { useState , useEffect } from "react";
import { useOutletContext } from "react-router-dom";
// Table Componant
import { Link } from "react-router-dom";
import Datatables from "../Datatables/Table";
import TableCell from "../Datatables/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faRemove } from "@fortawesome/free-solid-svg-icons";
import CourseDropdown from "../Dropdown";
import { useAuth } from "../../AuthContext";

function ManageQuiz() {
    const {course, setCourse }= useAuth();
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [currentAnswers, setCurrentAnswers] = useState([{ answerText: '', isCorrect: false }]);
    const [sections, setSections] = useState({
        section1: [],
        section2: [],
        section3: []
    });

    const [allQuestions, setAllQuestions] = useState([]);
    const [totalMarks, setTotalMarks] = useState(0);

    const addQuestionToSection = (section) => {
        const newQuestion = { questionText: currentQuestion, answerOptions: currentAnswers };
        setSections(prevSections => ({
            ...prevSections,
            [section]: [...prevSections[section], newQuestion]
        }));

        // Reset fields for next question
        setCurrentQuestion('');
        setCurrentAnswers([{ answerText: '', isCorrect: false }]);
    };

    const handleQuestionChange = (e) => {
        setCurrentQuestion(e.target.value);
    };

    const handleAnswerChange = (index, e) => {
        const updatedAnswers = currentAnswers.map((answer, i) => {
            if (index === i) {
                return { ...answer, answerText: e.target.value };
            }
            return answer;
        });
        setCurrentAnswers(updatedAnswers);
    };

    const handleCorrectAnswerChange = (index) => {
        const updatedAnswers = currentAnswers.map((answer, i) => {
            return { ...answer, isCorrect: i === index };
        });
        setCurrentAnswers(updatedAnswers);
    };

    const addAnswerField = () => {
        setCurrentAnswers([...currentAnswers, { answerText: '', isCorrect: false }]);
    };

    const addQuestion = () => {
        const newQuestion = { questionText: currentQuestion, answerOptions: currentAnswers };
        setAllQuestions([...allQuestions, newQuestion]);
        // Reset fields for next question
        setCurrentQuestion('');
        setCurrentAnswers([{ answerText: '', isCorrect: false }]);
    };

    const deleteQuestion = (index) => {
        const updatedQuestions = allQuestions.filter((_, i) => i !== index);
        setAllQuestions(updatedQuestions);
    };

    const saveAllQuestions = () => {
        const quizData = {
            questions: allQuestions,
            totalMarks: totalMarks
        };
        // TODO: Add API call to save quizData to database
        console.log('Saving to database', quizData);
        // Optionally reset all questions and total marks after saving
        setAllQuestions([]);
        setTotalMarks(0);
    };

  return (
    <>
  <div className="mainCard">
          <h2 className="lg:text-2xl text-1xl font-semibold text-gray-600 mb-3" >
          { course == null ? '' : <span onClick={()=>setCourse(null)} className="cursor-pointer p-2">&#8592;</span> }
             Create {course} Exam.</h2>
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
          {course == null ? 
          <>
           <CourseDropdown />
           <label className="block text-gray-700 text-sm font-bold mb-2 py-3 text-red-500" htmlFor="question">
               Select Course Before Creating Exam
            </label>
          </>
          : 
          <div className="container mx-auto p-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question">
                Question
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="question"
                    type="text"
                    placeholder="Enter question"
                    value={currentQuestion}
                    onChange={handleQuestionChange}
                />
            </div>
            <div className="mb-4">
                {currentAnswers.map((answer, index) => (
                    <div key={index} className="flex items-center mb-2">
                        <input
                            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder={`Answer ${index + 1}`}
                            value={answer.answerText}
                            onChange={(e) => handleAnswerChange(index, e)}
                        />
                        <input
                            className="ml-2 leading-tight"
                            type="radio"
                            name="correctAnswer"
                            checked={answer.isCorrect}
                            onChange={() => handleCorrectAnswerChange(index)}
                        />
                    </div>
                ))}
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
                    onClick={addAnswerField}
                >
                    Add Answer
                </button>
            </div>


            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalMarks">
                    Total Marks
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="totalMarks"
                    type="number"
                    placeholder="Enter Total Exam Marks"
                    value={totalMarks}
                    onChange={(e) => setTotalMarks(e.target.value)}
                />
            </div>


            <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mb-4 mr-5"
                onClick={addQuestion}
            >
                Add Question
            </button>
            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={saveAllQuestions}
            >
                Save All Questions
            </button>

            {allQuestions.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-lg font-bold">Questions Preview:</h3>
                    <ul>
                        {allQuestions.map((question, index) => (
                            <li key={index} className="mt-2">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <strong>Q:</strong> {question.questionText}
                                        <ul>
                                            {question.answerOptions.map((answer, aIndex) => (
                                                <li key={aIndex}>{answer.answerText} {answer.isCorrect ? '(Correct)' : ''}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                        onClick={() => deleteQuestion(index)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
          }
    
          </div>
        </div>
    </>
  );
}

export default ManageQuiz;
