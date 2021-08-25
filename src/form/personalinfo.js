import React, { Component } from 'react'
import './personalinfo.css';

export default class Chefinfo extends Component
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
             POI: '', POIno: '',
             Kname : '',
             Preference: '',
             Exp:'',
             Nofy: '0',
             Promises: '',
             FSSAIno:'', True: '',
             Terms: '', Cdate: ''

        }
    }

     /*Fathername: '',
                DOB : '',
                Age: '',
                Martial: '',
                Nation: '',*/

    cname = (event) => {  this.setState ( {Name : event.target.value} ) }
   // cfname = (event) => {  this.setState ( {Fathername : event.target.value} ) }
    cgender = (event) => {  this.setState ( {Gender : event.target.value} ) }
  //  cdob = (event) => { this.setState( { DOB: event.target.value } ) }
 //   cage = (event) => { this.setState ( { Age: event.target.value} ) }
 //   cmartial = (event) => { this.setState ( { Martial: event.target.value} ) }
 //   cnation = (event) => { this.setState ( { Nation: event.target.value} ) }
    caddress = (event) => { this.setState ( { Address: event.target.value} ) }
    ccity = (event) => { this.setState ( { City: event.target.value} ) }
    cstate = (event) => { this.setState ( { State: event.target.value} ) }
    cpincode = (event) => { this.setState ( { Pincode: event.target.value} ) }
    cphno = (event) => { this.setState ( { Phno: event.target.value} ) } 
    caphno = (event) => { this.setState ( { Aphno: event.target.value} ) }
    cemail = (event) => { this.setState ( { Email: event.target.value} ) }
    cpoi = (event) => { this.setState ( { POI: event.target.value} ) }
    cpoin = (event) => { this.setState ( { POIno: event.target.value} ) }
    ckname = (event) => { this.setState ( { Kname: event.target.value} ) }
    cprefer = (event) => { this.setState ( { Preference: event.target.value} ) }
    cexp = (event) => { this.setState ( { Exp: event.target.value} ) }
    cnofy = (event) => { this.setState ( { Nofy: event.target.value} ) }
    cpromi = (event) => { this.setState ( { Promises: event.target.value} ) }
    cfssaino = (event) => { this.setState ( { FSSAIno: event.target.value} ) }
    ctrue = (event) => { this.setState ( { True: event.target.value} ) }
    cterms = (event) => { this.setState ( { Terms: event.target.value} ) }
    ccdate = (event) => { this.setState ( { Cdate: event.target.value} ) }

    submitted = (eve) => { eve.preventDefault(); console.log (this.Martial)}

    render() {
        return (
            <div className = "bod">
              <form onSubmit={this.submitted}> 

                <h4>Personal details</h4><br/>

               <label className="labelp"> Name <sup className="supersc">*</sup> : </label>
                <input type="text" placeholder= "Enter your name" value = {this.state.Name} onChange = {this.cname} className = "ip" required></input> <br/>

            {/*     <label className="labelp"> Fathername <sup className="supersc">*</sup> : </label>
                <input type="text" placeholder= "Enter your father name" value = {this.state.Fathername} onChange = {this.cfname} className = "ip" required></input> <br/> */} 
                
            {/*    <label className="labelp"> Date of Birth <sup className="supersc">*</sup> : </label>
                <input type="date" placeholder= "DOB" value = {this.state.DOB} onChange = {this.cdob} className = "ipdob" required></input>
                 <label> Age <sup className="supersc">*</sup>: </label>
                <input type="number" min = '18' max = '80' value = {this.state.Age} onChange = {this.cage} className = "ipage" required></input> <br/> */}
                
                <label className="labelp"> Gender <sup className="supersc">*</sup> : </label>
                <input type="text" placeholder= "Enter your gender" value = {this.state.Gender} onChange = {this.cgender} className = "ip" required></input> <br/> 

               {/*  <label className="phtposlab">Upload your Photo <sup className="supersc">*</sup> :</label>
                <input type="text" className=" ip ippht phtpos" placeholder ="photo size < 1MB"></input>
                <input type="file" required className="fileu" className="phtlab"></input>

                <label className="labelp"> Martial Status <sup className="supersc">*</sup> : </label>
                <select className = "ip selectarea" required value = {this.state.Martial} onChange = {this.cmartial}>
                    <option value='' selected disabled> select----</option>
                    <option value = "unmarried">Unmarried</option>
                    <option value = "married" >Married</option>
                    </select> <br/> 

                <label className="labelp"> Nationality <sup className="supersc">*</sup> : </label>
                <input type="text" value = {this.state.Nation} onChange = {this.cnation} className = "ip" required></input> <br/><br/> */}

                <p className="diiv"></p>

                <h4>Contact details</h4><br/>

                <label className="labelp"> Address <sup className="supersc">*</sup> : </label>                
                <input value = {this.state.Address} onChange ={this.caddress} className = "ipage kbox" required></input> &ensp; &ensp; &ensp; &nbsp;

                <label  className="labelp"> City <sup className="supersc">*</sup> : </label>
                <input type="text" value = {this.state.City} onChange = {this.ccity} className = "ipage kbox" required></input> <br/>

                <label className="labelp"> State <sup className="supersc">*</sup> : </label>
                <input type="text" value = {this.state.State} onChange = {this.cstate} className = "ipage kbox" required></input> &ensp; &ensp; &ensp; &nbsp;

                <label className="labelp" > Pincode <sup className="supersc">*</sup> : </label>
                <input type="text" inputMode= "numeric" value = {this.state.Pincode} onChange = {this.cpincode} className = "ipage kbox" required></input> <br/>

                 <label className="labelp"> Phone Number <sup className="supersc">*</sup> : </label>
                <input type="text" inputMode= "numeric" value = {this.state.Phno} onChange = {this.cphno} className = "ipage kbox" required></input> &ensp; &ensp; &ensp; &nbsp;

                <label className="labelp"> Alternative ph no <sup className="supersc">*</sup> : </label>
                <input type="text" inputMode= "numeric" value = {this.state.Aphno} onChange = {this.caphno} className = "ipage kbox" required></input> <br/>

                
                <label className="labelp"> E-mail ID <sup className="supersc">*</sup> : </label>
                <input type="email" value = {this.state.Email} onChange = {this.cemail} className = "ipage kbox" required></input> &ensp; &ensp; &ensp; &nbsp;

                <label className="labelp"> Proof of identity <sup className="supersc">*</sup> : </label>
                <select className = " ipage kbox selectarea" required  onChange = {this.cmartial}> 
                    <option value='' selected disabled> select----</option>
                    <option value = {this.state.POI} onChange = {this.cpoi}>PAN card</option>
                    <option value = {this.state.POI} onChange = {this.cpoi}>Aadhar card</option>
                    <option value = {this.state.POI} onChange = {this.cpoi}>License card</option>
                    </select> <br/>

                <label className="labelp"> Proof of ID number <sup className="supersc">*</sup> : </label>
                <input type="text" inputMode= "numeric" value = {this.state.POIno} onChange = {this.cpoin} className = "ipage kbox" required></input> <br/><br/>

                 <p className="diiv"></p>




 
                <h4>Kitchen details</h4><br/>
                
                <label className="labelp"> Your Kitchen Name <sup className="supersc">*</sup> : </label>                
                <input type="text" placeholder="Enter your preferable name" value = {this.state.Kname} onChange = {this.ckname} className = "ip" required></input> <br/>
                <label className="cmds">(This name will be visible in the availability)</label> <br/>

                <label className="labelp"> Dietry Restriction <sup className="supersc">*</sup> : </label>
                <select className = "ip selectarea" required  onChange = {this.cprefer}>
                    <option value='' selected disabled> Choose your preference that you cook</option>
                    <option value = {this.state.Preference} onChange = {this.cprefer}>Veg</option>
                    <option value = {this.state.Preference} onChange = {this.cprefer}>Non-veg</option>
                    <option value = {this.state.Preference} onChange = {this.cprefer}>Both</option>
                    </select> <br/> 

                <label className="labelp"> Any Experience : </label>
                <textarea placeholder="If any mention here" value = {this.state.Exp} onChange = {this.cexp} className = "ip txt" ></textarea>
                <label> No of years/ months: </label>
                <input type="number" value = {this.state.Nofy} onChange = {this.cnofy} className = "ipage" ></input> <br/>
                <label className="cmds">(If you have any experience working in hotel or homes)</label> <br/>

                <label className="labelp"> Promises : </label>                
                <input type="text" placeholder="eg: no ajinomoto, no food colorants, no artificial ingredients etc.." value = {this.state.Promises} onChange = {this.cpromi} className = "ip" ></input> <br/> <br/>

               {/* <label  className="uploadpht">Upload your Label photo <sup className="supersc">*</sup> :</label>                
                <input type="file" required className="fileu" ></input> <br/> */}

                <br/> <label  className="uploadpht">Upload your Kitchen photo :   </label>
                 <input type="file"></input><br/> <label className="cmdsupload">(Upload your Kitchen photos as .jpg file)</label><br/><br/>

                 <p className="diiv"></p>



                 <h4>Certificate details</h4><br/>

                <label className="labelp"> FSSAI License no <sup className="supersc">*</sup> : </label>
                <input type="text" inputMode="numeric" placeholder=" The 14-digit number" value = {this.state.FSSAIno} onChange = {this.cfssaino} className = "ip" required></input> <br/>

                <br/><label > Upload the FSSAI certificate <sup className="supersc">*</sup> : </label>
                 <input type="file" required></input><br/><br/>

                 <input type="checkbox"  value = {this.state.True} onChange = {this.ctrue} required className="agreem"></input> <label> <b> <u>The above license is true to my knowledge </u></b></label> <br/> 
                 <p className= "caution">
                     <h3> Note : </h3>
                     <div>If the above license is invalid, there will be</div>
                     <ul>
                         <li>Penalty for running business without a license</li>
                         <li>Penalty for false information</li>
                         <li>Penality for misleading advertisement</li>
                         <li>Penality for unsafe food</li>
                     </ul>
                 </p>

                  <p className="diiv"></p><br/>

                  <p>
                      <h3> DECLARATION </h3>
                      <b>
                          <ol>
                              <li> I certify that all information provided in this registration application is true , complete and correct to the best of my knowledge and belief.
I understand that any false information or ommission of information may reject me from consideration of a home chef with penality, if discovered at a later date.</li>
                              <br/> <li> I have read and understood the above declaration before signing this</li>
                          </ol>
 
                        <input type="checkbox"  value = {this.state.Terms} onChange = {this.cterms} required className="agreem"></input> <label> <u>I agree to the Terms and Conditions</u></label> <br/> 

                      </b>
                  </p>
                  <br/> <br/>

                

                <button type="submit" className="butn">SUBMIT</button>
                 <button type="reset" className="butn">RESET</button>
                  <button type="" className="butn">SAVE</button>
              </form> 
            </div>
        )
    }
}
