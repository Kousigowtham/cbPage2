import { Divider, Grid, Paper, Card, Button } from '@material-ui/core'
import { Pagination } from '@material-ui/lab';
import React,{useState, useEffect} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './Page2.css';
import axios from 'axios';

const Page2 = () => {

const [learnAndMore, setlearnAndMore] = useState({ questionBlock : "col-md-12 p-3",
                                                    hintBlock: "col-md-4 d-none",
                                                    isOpened:false,
                                                    });
const [questions,setquestions]= useState({
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
    
  });
  const [page,setpage] = useState(1);
  const [correctAnswer,setcorrectAnswer] = useState("");

const learnAndMoreHandler=()=>{

setlearnAndMore({
    questionBlock: "col-md-7 p-2 pr-0",
    hintBlock:"col-md-5 pr-0",
    isOpened: true,
});
}

useEffect(()=>{
    axios.get("https://run.mocky.io/v3/eca37686-d0b7-4129-9d5d-dded7aeccff7")
    .then(response=>setquestions(response.data))
},[]);

const pageHandler=(event, value)=>{
    setpage(value);
    setcorrectAnswer("");
}

const prevHandler=()=>{
    setpage(page-1);
    setcorrectAnswer("");
}

const nextHandler=()=>{
    setpage(page+1);
    setcorrectAnswer("");
}

const checkAnswerHandler=(value)=>{
    value == questions.questionList[page-1].correctAnswer ? setcorrectAnswer("true") : setcorrectAnswer("false")
}

    return (
        <div className="container-fluid" >
            <div  className="containerbg1"/>
            <div className="row headerbg p-4 text-white" style={{position:'sticky', top:0, zIndex: 10}} >
                <div className="col-sm-10">
                    Class bridge
                </div>
                <div className="col-sm-2">
                    6:00 min left
                </div>
            </div>
            <div className="card shadow p-2 m-4 bg-white rounded-lg" style={{minHeight: '530px'}}>
                <div className="row m-2">
                    <div className="col-sm-2">
                        <h5>{questions.subject}</h5>
                        <span>Data Handling</span>
                    </div>
                    <div className="col-sm-2 text-center p-0" style={{maxWidth:'200px'}}>
                        Attempted
                        <h5 className="text-primary">30</h5>
                    </div>
                    <div className="col-sm-2 text-center p-0" style={{maxWidth:'200px'}}>
                        unattempted
                        <h5 className="text-primary">10</h5>
                    </div>
                    <div className="col-sm-2 text-center p-0" style={{maxWidth:'200px'}}>
                        Correct
                        <h5 className="text-primary">24</h5>
                    </div>
                    <div className="col-sm-2 text-center p-0" style={{maxWidth:'200px'}}>
                        Wrong
                        <h5 className="text-primary">6</h5>
                    </div>
                    <div className="col-sm-2 text-left" style={{display:'flex', justifyContent:'flex-end'}}>
                        <div  style={{display:'flex', flexDirection:'column',paddingRight:10}}>
                            <span className="font-weight-bold">Logesh</span>
                            <p>Level 10</p>
                        </div>
                        <img src="https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png" 
                        class="rounded-circle" alt="ProfilePic" style={{height:'60px',width:'60px'}} />
                        
                    </div>
                    <p><small className="p-3">Data handling is a process of having context of data and playing with it</small></p>
                </div>
                <Divider/>
                <div className="row p-2 ">
                    <div className="col-sm-1 p-0 mt-2 text-center" style={{width:100}}>skip to</div>
                    <div className="col-sm-11 p-0 text-left">
                <Pagination count={questions.totalQuestions} 
                hidePrevButton
                page={page}
                onChange={pageHandler}
                boundaryCount={(questions.totalQuestions/2)}
                size='large'
                color="primary"
                />
                </div>
                </div>
                <div className="row m-3">
                    <div className={learnAndMore.questionBlock} style={{border:'1px solid rgba(0,0,0,0.3)', borderRadius: '1%'}}>
                        <div className="row pb-2">
                            <div className="col-sm-6 font-weight-bold text-left">
                                Question {page}
                            </div>
                            <div className="col-sm-6 text-primary text-right" >
                                <small onClick={learnAndMoreHandler} style={{cursor:'pointer'}}>Learn and attempt</small>
                            </div>
                        </div>
                        <div className="row mb-5" style={ questions.questionList[page-1].imageList.length > 0 ? null : {minHeight:'100px'}}>
                            <div className="col-sm-12">
                                {questions.questionList[page-1].questionContent}
                            </div>
                        </div>
                        <div  className="row mb-5">
                        { questions.questionList[page-1].imageList.length > 0 ? 
                        (   
                            questions.questionList[page-1].imageList.map((url, index)=>(
                                <div key={index} className="col-sm-12">
                                    <img src={url} alt="imageDescription" style={ learnAndMore.isOpened ? {height:100,width:200} : {height:200,width:300}} />
                                </div>
                        ))) : null    
                    }
                            </div>
                            <Card  style={{width:'100%', marginBottom:10}}>
                                <div className="col-sm-12 p-3">
                                    <span className="font-weight-bold pr-3">A.</span>
                                    <span>{questions.questionList[page-1].options[0]}</span>
                                </div>
                            </Card>
                            <Card  style={ {width:'100%', marginBottom:10}}>
                                <div className="col-sm-12 p-3">
                                    <span className="font-weight-bold pr-3">B.</span>
                                    <span>{questions.questionList[page-1].options[1]}</span>
                                </div>
                            </Card>
                            <Card  style={{width:'100%', marginBottom:10}}>
                                <div className="col-sm-12 p-3">
                                    <span className="font-weight-bold pr-3">C.</span>
                                    <span>{questions.questionList[page-1].options[2]}</span>
                                </div>
                            </Card>
                            <Card  style={{width:'100%', marginBottom:10}}>
                                <div className="col-sm-12 p-3">
                                    <span className="font-weight-bold pr-3">D.</span>
                                    <span>{questions.questionList[page-1].options[3]}</span>
                                </div>
                            </Card>
                    </div>
                    <div className={learnAndMore.hintBlock} style={{border:'1px solid rgba(0,0,0,0.3)', borderRadius: '1%'}}>
                        <div className="row">
                            <div className="col-sm-12 mb-5">
                                <h4>Conceptual learning</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 mb-5">
                                Question {page}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                {questions.questionList[page-1].explanation}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ml-3">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-6">
                                <Button   disabled={ page==1 ? true : false }  onClick={prevHandler}>&lt; Prev</Button>
                            </div>
                            <div className="col-sm-6 text-right">
                                <Button    disabled={ page == questions.totalQuestions ? true : false }  onClick={nextHandler}>Next &gt;</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mr-0 text-right" style={{right:'1.8%'}}>
                        <Button variant="contained" color="Secondary" style={{marginRight:20}}>Check Answer</Button>
                        <Button variant="contained" color="primary">Submit</Button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Page2
