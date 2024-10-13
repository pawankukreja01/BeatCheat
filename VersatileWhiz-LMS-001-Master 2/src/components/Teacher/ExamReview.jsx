import React,{useState} from 'react';

function ExamReview({ questions, selectedAnswers }) {
    const [manualScores, setManualScores] = useState(questions.map(() => 0));

    const updateManualScore = (index, score) => {
        const newScores = [...manualScores];
        newScores[index] = Math.max(0, score); // Ensure score is non-negative
        setManualScores(newScores);
    };

    const handleSubmit = () => {
        // Handle the submission logic here
        // For example, calculate the total score and perform an action
        const totalScore = manualScores.reduce((acc, score) => acc + score, 0);
        console.log("Total Score:", totalScore); // Replace with your submission logic
        alert(`Total Score: ${totalScore}`); // Example action
    };
    return (
        <div className="exam-review p-4">
        <h2 className="text-3xl font-semibold text-left text-gray-700 mb-6">Check Exam</h2>
        <div className="border w-full max-w-4xl mx-auto border-gray-300 bg-white p-6 rounded-lg shadow">
            {questions.map((question, index) => (
                <div key={index} className="mb-6">
                    <div className="font-bold text-lg text-gray-800 mb-2">{question.questionText}</div>
                    <ul className="list-disc pl-5">
                        {question.answerOptions.map((option, optionIndex) => (
                            <li key={optionIndex} className={`py-1 ${selectedAnswers[index] === optionIndex ? 'text-green-600' : 'text-gray-600'} ${option.isCorrect ? 'font-bold' : 'font-normal'}`}>
                                {option.answerText}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <label className="text-gray-700 font-bold mr-2">Marks:</label>
                        <input 
                            type="number" 
                            value={manualScores[index]} 
                            onChange={(e) => updateManualScore(index, parseInt(e.target.value))} 
                            className="w-16 p-1 border rounded border-gray-400 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>
            ))}
            <div className="flex justify-center mt-6">
                <button 
                    onClick={handleSubmit} 
                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none"
                >
                    Submit
                </button>
            </div>
        </div>
    </div>
    );
}

export default ExamReview;
