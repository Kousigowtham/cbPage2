import { Divider, Grid, Paper, Card, Button } from '@material-ui/core'
import { Pagination } from '@material-ui/lab';
import React,{useState, useEffect} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './Page2.css';
import axios from 'axios';
import { connect } from "react-redux";
import setquestions from "../redux/questions/questionsAction";
import setlearnAndMore from '../redux/learnAndMore/learnAndMoreAction';


const Page2 = ({questions,learnAndMore,setquestions,setlearnAndMore}) => {

  const [QA,setQA]= useState({
        attempted:0,
        unattemted:0,
        Correct:0,
        Incorrect:0,
  });

  const [CA,setCA]= useState([{
      pageNumber: 0,
      AttemptedStatus: false,
  }])
  const [page,setpage] = useState(1);
  const [selectedAnswer,setselectedAnswer] = useState("");
  const [correctAnswer,setcorrectAnswer] = useState("");

const learnAndMoreHandler=()=>{

setlearnAndMore({
    hintBlock:"col-lg-6 p-3 mt-3 hintblock",
    isOpened: true,
});
}

useEffect(()=>{
    axios.get("https://run.mocky.io/v3/077623ec-b480-42df-a8d2-579c24ae85a5")
    .then(response=>setquestions(response.data))
    console.log(questions)
},[]);

useEffect(()=>{
    setQA({...QA, unattemted : questions.totalQuestions})
},[questions]);

 
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
const AnswerSelectHandler=(event)=>{
        setselectedAnswer(event);
        setcorrectAnswer("");
}

const checkAnswerHandler=()=>{
    questions.questionList[page-1].correctAnswer==selectedAnswer ? setcorrectAnswer("true") : setcorrectAnswer("false")
    questions.questionList[page-1].correctAnswer==selectedAnswer ? setQA({...QA,attempted : QA.attempted+1, unattemted: QA.unattemted-1, Correct : QA.Correct+1}) : setQA({...QA,attempted : QA.attempted+1, unattemted: QA.unattemted-1, Incorrect: QA.Incorrect+1})
    CA.push({pageNumber: page, AttemptedStatus : true});
    console.log(CA);
}

    return (
        <div className="container-fluid" >
            <div  className="containerbg1"/>
            <div className="card shadow p-2 m-4 bg-white rounded-lg" style={{minHeight: '530px'}}>
                <div className="row m-2">
                    <div className="col-lg-2">
                        <h5>{questions.subject}</h5>
                        <span>Data Handling</span>
                    </div>
                    <div className="col-lg-2 text-center p-0" style={{maxWidth:'200px'}}>
                        Attempted
                        <h5 style={{color:'#0D76A8'}}>{QA.attempted}</h5>
                    </div>
                    <div className="col-lg-2 text-center p-0" style={{maxWidth:'200px'}}>
                        unattempted
                        <h5 style={{color:'#0D76A8'}}>{QA.unattemted}</h5>
                    </div>
                    <div className="col-lg-2 text-center p-0" style={{maxWidth:'200px'}}>
                        Correct
                        <h5 style={{color:'#0D76A8'}}>{QA.Correct}</h5>
                    </div>
                    <div className="col-lg-2 text-center p-0" style={{maxWidth:'200px'}}>
                        Wrong
                        <h5 style={{color:'#0D76A8'}}>{QA.Incorrect}</h5>
                    </div>
                    <div className="col-lg-2 text-left" style={{display:'flex', justifyContent:'flex-end', position:'relative'}}>
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
                boundaryCount={(5)}
                size='large'
                color="primary"
                />
                </div>
                </div>
                <div className="row mx-3">
                    <div className='col-lg-6 p-3 mt-3' style={{border:'1.5px solid rgba(0,0,0,0.7)', borderRadius: '1.5%'}}>
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
                            {
                                questions.questionList[page-1].options.map((option,index)=>(
                                    <Card className="options" style={ selectedAnswer==option ? ( 
                                                                                correctAnswer!="" ? (
                                                                                    correctAnswer=="true" ? {backgroundColor:'#5cff7f'} : ( {backgroundColor:'#ff6f5c'} )
                                                                                ) :{backgroundColor:'rgba(0,0,0,0.08)'}
                                                                                ) : null
                                                                       
                                                                    }
                                     >
                                    <div className="col-sm-12 p-3 " style={CA.find(x=>x.pageNumber==page) != undefined ? {pointerEvents:'none', backgroundColor:'inherit'} :
                                                                                                                {backgroundColor:'inherit'}

                                    } onClick={()=>AnswerSelectHandler(option)}>
                                        <span className="font-weight-bold pr-3">{
                                            index ==0 ? "A." : (index==1 ? "B." :(index==2 ? "C." : "D."))
                                        }</span>
                                        <span>{option}</span>
                                    </div>
                                </Card>
                                ))
                            }
                    <   div className="row mt-3">
                            <div className="col-sm-6 ">
                                <Button  className="font-weight-bold" disabled={ page==1 ? true : false }  onClick={prevHandler}>&lt; Prev</Button>
                            </div>
                            <div className="col-sm-6 text-right ">
                                <Button   className="font-weight-bold" disabled={ page == questions.totalQuestions ? true : false }  onClick={nextHandler}>Next &gt;</Button>
                            </div>
                        </div>
                    </div>
                    <div className={learnAndMore.hintBlock} style={{border:'1.5px solid rgba(0,0,0,0.7)', borderRadius: '1.5%', position: 'relative', left:'10px'}}>
                        <div className="row py-2">
                            <div className="col-sm-11  font-weight-bold">
                                Conceptual learning
                            </div>
                            <div  onClick={()=>setlearnAndMore({questionBlock : "col-md-12 p-3", hintBlock:"col-md-4 d-none hintblock", isOpened : false})} className="col-sm-1  font-weight-bold text-left"
                            style={{cursor:'pointer', position:'absolute', right: 0}} >
                                X
                            </div>
                        </div>
                        <div className="row pb-2">
                            <div className="col-sm-12 font-weight-bold">
                                Question {page}
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-sm-12">
                                {questions.questionList[page-1].explanation}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ml-3" style={{position:'relative', bottom:'50px', left:'650px'}}>
                    <div className="col-sm-6 mr-0" style={{right:'1.8%'}}>
                        <Button  disabled = {CA.find(x=>x.pageNumber==page) != undefined ?  true : false}
                         variant="contained" onClick={checkAnswerHandler} color="Secondary" style={{marginRight:20}}>Check Answer</Button>
                        <Button variant="contained" color="primary">Submit</Button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

const mapDispatchToProps=dispatch=>({
    setquestions : user=>(dispatch(setquestions(user))),
    setlearnAndMore : hint =>(dispatch(setlearnAndMore(hint))),    
  })
  
  const mapStateToProps= state=>({
    questions : state.question,
    learnAndMore : state.hint,
  })
  
export default connect(mapStateToProps,mapDispatchToProps)(Page2);
