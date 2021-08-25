import React, { Component } from 'react'
import './userinfo.css';

export default class Userinfo extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             Name: '',
             Gender: '',
             Address: '',
             City: '',
             State: '',
             Pincode: '',
             Phno: '', Aphno: '',
             Email:'',
             Allergy:'no'
        }
    }
    
    cname = (event) => {  this.setState ( {Name : event.target.value} ) }
    cgender = (event) => { this.setState ( {Gender : event.target.value} )  }
    caddress = (event) => { this.setState ( { Address: event.target.value} ) }
    ccity = (event) => { this.setState ( { City: event.target.value} ) }
    cstate = (event) => { this.setState ( { State: event.target.value} ) }
    cpincode = (event) => { this.setState ( { Pincode: event.target.value} ) }
    cphno = (event) => { this.setState ( { Phno: event.target.value} ) } 
    caphno = (event) => { this.setState ( { Aphno: event.target.value} ) }
    cemail = (event) => { this.setState ( { Email: event.target.value} ) }
    callergy = (event) => { this.setState ( { Allergy: event.target.value} ) }
    
    submitted = (eve) => { eve.preventDefault(); console.log (this.Martial)}
    setclean = () => {
        this.setState ( {Name : ''} ) 
        this.setState ( {Gender :''} )  
        this.setState ( {Address :''} ) 
        this.setState ( {City :''} ) 
        this.setState ( {State :''} ) 
        this.setState ( {Pincode :''} ) 
        this.setState ( {Phno :''} )
        this.setState ( {Aphno :''} ) 
        this.setState ( {Email :''} )
        this.setState ( {Allergy :'no'} )
    }

    render() {
        return (
            <div className = "bod">
                <form onSubmit={this.submitted}> 

                <h4>Personal details</h4><br/>

                <label className="labelp"> Name <sup className="supersc">*</sup> : </label>
                <input type="text" placeholder= "Enter your name" value = {this.state.Name} onChange = {this.cname} className = "ip" required></input> <br/>

                
                
            {/*    <label className="labelp"> Date of Birth <sup className="supersc">*</sup> : </label>
                <input type="date" placeholder= "DOB" value = {this.state.DOB} onChange = {this.cdob} className = "ipdob" required></input>
                 <label> Age <sup className="supersc">*</sup>: </label>
        <input type="number" min = '18' max = '80' value = {this.state.Age} onChange = {this.cage} className = "ipage" required></input> <br/> */}
                
                <label className="labelp"> Gender <sup className="supersc">*</sup> : </label>
                <input type="text" placeholder= "Enter your gender" value = {this.state.Gender} onChange = {this.cgender} className = "ip" required></input> <br/>

            

                <p className="diiv"></p>

                <h4>Contact details</h4><br/>

                <label className="labelp"> Address <sup className="supersc">*</sup> : </label>                
                <input value = {this.state.Address} onChange ={this.caddress} className = "ipage kbox" required></input> &ensp; &ensp; &ensp; &nbsp;

                <label  className ="labelp"> City <sup className="supersc">*</sup> : </label>
                <input type="text" value = {this.state.City} onChange = {this.ccity} className = "ipage kbox" required></input> <br/>

                <label className ="labelp"> State <sup className="supersc">*</sup> : </label>
                <input type="text" value = {this.state.State} onChange = {this.cstate} className = "ipage kbox" required></input> &ensp; &ensp; &ensp; &nbsp;

                <label className ="labelp"> Pincode <sup className="supersc">*</sup> : </label>
                <input type="text" inputMode= "numeric" value = {this.state.Pincode} onChange = {this.cpincode} className = "ipage kbox" required></input> <br/>

                 <label className ="labelp"> Phone Number <sup className="supersc">*</sup> : </label>
                <input type="text" inputMode= "numeric" value = {this.state.Phno} onChange = {this.cphno} className = "ipage kbox" required></input> &ensp; &ensp; &ensp; &nbsp;

               {/* <label className ="labelp"> Alternative ph no : </label>
                <input type="text" inputMode= "numeric" value = {this.state.Aphno} onChange = {this.caphno} className = "ipage kbox" ></input> <br/> */}

                
                <label className ="labelp"> E-mail ID : </label>
                <input type="email" value = {this.state.Email} onChange = {this.cemail} className = "ipage kbox"></input>


                <p className="diiv"></p>

                <h4>Additional details</h4>

                 <p className= "caution">
                     <h3> Information : </h3>
                     <div>We can provide food on,</div>
                     <ul>
                         <li>Monthly bases</li>
                         <li>Weekly bases</li>
                         <li>Random days bases</li>
                         
                     </ul>
                     Choose your plan accordingly
                 </p>

                <label className="labelp"> Any Allergies : </label>
                <input type="text" value = {this.state.Allergy} onChange = {this.callergy} className = "ip"></input> <br/>
                <label className="cmds">If YES mention here</label> <br/>

                <label className="labelp"> Your Plan <sup className="supersc">*</sup> : </label>
                <select className = "ip selectarea" value = {this.state.Plan} required  onChange = {this.cplan}>
                    <option value='' selected disabled> Select your Plan</option>
                    <option value = 'Monthly Bases' > Random Days Bases</option>
                    <option value = 'weekly Bases' >Weekly Bases</option>
                    <option value = 'Random Days Bases' > Monthly Bases</option>
                    </select> <br/> <br/> <br/>

                
                <button type="submit" className="butnu">SUBMIT</button>
                <button type="reset" onClick={this.setclean} className="butnu">RESET</button>

                </form>
            </div>
        )
    }
}
