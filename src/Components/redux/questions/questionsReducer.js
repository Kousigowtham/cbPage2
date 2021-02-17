const INITIAL_STATE_VALUE={
        "subject" : "",
        "concept" : "",
        "totalQuestions" : 0,
        "questionList" : [
          {
            "questionContent" : "",
            "imageList" : [""],
            "options" : [""],
            "correctAnswer" : "",
            "explanation" : ""
          }
          ]
};

const questionsReducer=(state=INITIAL_STATE_VALUE,action)=>{

    switch (action.type) {
        case 'QUESTIONS':
            return state=action.payload;
        default:
            return state;
    }
}

export default questionsReducer;