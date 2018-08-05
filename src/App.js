import React, { Component } from 'react';
import jsonp from 'jsonp';
class Suggest extends Component {
  constructor(){
    super();
    this.state={
      index:-1,
      words:[]
    };
  }
  handleChange=(event)=>{
    let wd = event.target.value;
    this.wd=wd;

    jsonp(`http://www.baidu.com/su?wd=${wd}`,{
      param:"cb"
    },(err,data)=>{
         console.log(data);
         this.setState({words:data.s});
    })
  }
  handleKeyDown=(event)=>{
    let code = event.keyCode;
    if (code == 38 || code == 40||code == 13) {
      let index = this.state.index;
      if (code == 38) {
        if (index === -1) {
          index = this.state.words.length
        }
        console.log(this.state.words.length);
        index--;
      } else if(code == 40){
        if(index==this.state.words.length-1){
          index=-2;
        }
        index++;
        
      }
      this.setState({index})
      if(code == 13){
 
         window.location.href=`http://www.baidu.com/s?wd=${this.state.words[index]}`
      
       }
    }
  }
  // enter=(event)=>{

  // }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-xl-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <input type="text"  value={this.state.index==-1?this.wd:this.state.words[this.state.index]} onKeyDown={this.handleKeyDown} onChange={this.handleChange} className="form-control" />
              </div>
              <div className="panel-body">
                <ul className="list-group">
                {
                  this.state.words.map((word,index) => (
                    <li key={index} className={"list-group-item " + (index===this.state.index?"active":"")}>{word}</li>

                  ))
                }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Suggest;
