  import React, { useState } from "react";
  import "./ImprovementIdeaForm.css";
  import axios from "axios";

  const ImprovementIdeaForm = () => {
    const [formData, setFormData] = useState({
      plant: "",
      createdBy: "",
      pillar: "",
      mainCategory: "",
      unit: "",
      createdDate: "",
      kaizenType: "",
      subCategory: "",
      module: "",
      ideaDescription: "",
      targetMonth: "",
      ideaLevel: "",
      estimatedMRP: "",
      estimatedSavingsInRs: "",
      estimatedSavingsInLakhs: "",
      currentStatus: "",
      pendingWith: "",
      savingsBuiltintoBudget: "No",
      carriedForward: "",
      completedMrp: "",
      completedMonth: "",
      realisedSavings: "",
      completedSavingsinRs: "",
      completedSavingsinLakhs: "",
      ideaCompleted: "No",
      kaizenNo: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };


    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:8080/postIdea", formData);
        alert("Idea submitted successfully!");
        console.log(response.data);
        console.log(formData.savingsBuiltintoBudget);
      } catch (error) {
        console.error("Error submitting the idea:", error);
        alert("Failed to submit the idea.");
      }
    };

    return (
      <form className="idea-form" onSubmit={handleSubmit}>
    <h2>Improvement Idea Creation</h2>
    
    <div className="form-section">
      <h3>Header Information</h3>
      <hr class="custom-line" />
      <div className="form-row">
        <div className="newdiv" ><label className="inline-label">
          Plant:
        </label>
        <input type="text" name="plant" value={formData.plant} onChange={handleChange} />
        </div>
        <div className="newdiv">
        <label className="inline-label"> Created by: </label>
          <input type="text" name="createdBy" value={formData.createdBy} onChange={handleChange} />
          </div>
        <div className="newdiv" >
        <label className="inline-label">
          Pillar: 
        </label>
          <select name="pillar" value={formData.pillar} onChange={handleChange}>
            <option value="">Select</option>
            <option value="JH">JH</option>
            <option value="KK">KK</option>
            <option value="PM">PM</option>
          </select>
        </div>
        <div className="newdiv" >
        <label className="inline-label">
          Main Category:
        </label>
          <select name="mainCategory" value={formData.mainCategory} onChange={handleChange}>
            <option value="">Select</option>
            <option value="prod">Prod</option>
            <option value="MRP">MRP</option>
            <option value="VC">VC</option>
            <option value="Energy">Energy</option>
          </select>
          </div>
      </div>
      
      <div className="form-row">
        <div className="newdiv">
        <label className="inline-label"> Unit : </label>
          <input type="text" name="unit" value={formData.unit} onChange={handleChange} />
        </div>
        <div className="newdiv" >
        <label className="inline-label">
          Created date: &nbsp;
        </label>
          <input type="date" name="createdDate" value={formData.createdDate} onChange={handleChange} />
          </div>
        <div className="newdiv" >
        <label className="inline-label">
          Kaizen Type :
        </label>
          <select name="kaizenType" value={formData.kaizenType} onChange={handleChange}>
            <option value="">Select</option>
            <option value="LK">LK</option>
            <option value="CK">CK</option>
          </select>
          </div>
          <div className="newdiv" >
        <label className="inline-label">
          Sub-Category :
        </label>
          <select name="subCategory" value={formData.subCategory} onChange={handleChange}>
            <option value="">Select</option>
            <option value="FC1">FC1</option>
            <option value="FC2">FC2</option>
            <option value="VC1">VC1</option>
            <option value="VC2">VC2</option>
          </select>
          </div>
      </div>
      
      <div className="form-row">
      <div className="newdiv" >
        <label className="inline-label">
          Module:
        </label>
          <select name="module" value={formData.module} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Mfg">Mfg</option>
            <option value="Quality">Quality</option>
            <option value="Technical">Technical</option>
          </select>
          </div>
      </div>
    </div>


    <h3>Idea Details</h3>
  <hr className="custom-line" />
  <div className="form-row">
    <div className="newdiv">
    <label className="inline-label"> Idea Description: </label>
      <input type="text" name="ideaDescription" value={formData.ideaDescription} onChange={handleChange} />
    </div>
    <div className="newdiv" >
    <label className="inline-label">
      Target Month:
    </label>
      <input type="month" name="targetMonth" value={formData.targetMonth} onChange={handleChange} />
      </div>
      <div className="newdiv" >
    <label className="inline-label">
      Idea Level:
    </label>
      <select name="ideaLevel" value={formData.ideaLevel} onChange={handleChange}>
        <option value="">Select</option>
        <option value="JH">JH</option>
        <option value="KK">KK</option>
        <option value="PM">PM</option>
      </select>
      </div>
      <div className="newdiv" >
    <label className="inline-label">
      Estimated MRP:
    </label>
      <input type="text" name="estimatedMRP" value={formData.estimatedMRP} onChange={handleChange} />
      </div>
  </div>

  <div className="form-row">
  <div className="newdiv" >
    <label className="inline-label">
      Estimated Savings (Rs):
    </label>
      <input type="text" name="estimatedSavingsInRs" value={formData.estimatedSavingsInRs} onChange={handleChange} />
      </div>
      <div className="newdiv" >
    <label className="inline-label">
      Estimated Savings (Lakhs):
    </label>
      <input type="text" name="estimatedSavingsInLakhs" value={formData.estimatedSavingsInLakhs} onChange={handleChange} />
      </div>
      <div className="newdiv" >
    <label className="inline-label">
      Current Status:
    </label>
      <input type="text" name="currentStatus" value={formData.currentStatus} onChange={handleChange} />
      </div>
      <div className="newdiv" >
    <label className="inline-label">
      Pending With:
    </label>
      <select name="pendingWith" value={formData.pendingWith} onChange={handleChange}>
        <option value="">Select</option>
        <option value="FC1">QA</option>
        <option value="FC2">ER&D</option>
        <option value="VC1">SDI</option>
        <option value="VC2">Unit</option>
        <option value="VC2">Mktg</option>
      </select>
      </div>
  </div>

  <div className="form-row">
  <div className="newdiv" >
    <label className="inline-label">
      Savings Built into Budget:
        </label>
      <label className="switch">
        <input
          type="checkbox"
          className="toggle-input"
          name="savingsBuiltintoBudget"
          checked={formData.savingsBuiltintoBudget === "Yes"}
          onChange={(e) =>
            handleChange({
              target: {
                name: "savingsBuiltintoBudget",
                value: e.target.checked ? "Yes" : "No",
              },
            })
          }
        />
        <span className="slider"></span>
    </label>
    </div>
  <div className="newdiv" >
    <label className="inline-label">
      Carried Forward:
    </label>
      <select name="carriedForward" value={formData.carriedForward} onChange={handleChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      </div>
      <div className="newdiv" >
    <label className="inline-label">
      Completed MRP:
    </label>
      <input type="text" name="completedMrp" value={formData.completedMrp} onChange={handleChange} />
      </div>
      <div className="newdiv" >
    <label className="inline-label">
      Completed Month:
    </label>
      <input type="month" name="completedMonth" value={formData.completedMonth} onChange={handleChange} />
      </div>
      </div>
    





      <div className="form-row">
      <div className="newdiv" >
    <label className="inline-label">
      Realised Savings (Lakhs):
    </label>
      <input type="text" name="realisedSavings" value={formData.realisedSavings} onChange={handleChange} />
      </div>
      <div className="newdiv" >
    <label className="inline-label">
      Completed Savings (Rs):
    </label>
      <input type="text" name="completedSavingsInRs" value={formData.completedSavingsInRs} onChange={handleChange} />
      </div>
      <div className="newdiv" >
    <label className="inline-label">
      Completed Savings (Lakhs):
    </label>
      <input type="text" name="completedSavingsInLakhs" value={formData.completedSavingsInLakhs} onChange={handleChange} />
      </div>
      <div className="newdiv" >
    <label className="inline-label">
      Idea Completed:
        </label>
      <label className="switch">
        <input
          type="checkbox"
          className="toggle-input"
          name="ideaCompleted"
          checked={formData.ideaCompleted === "Yes"}
          onChange={(e) =>
            handleChange({
              target: {
                name: "ideaCompleted",
                value: e.target.checked ? "Yes" : "No",
              },
            })
          }
        />
        <span className="slider"></span>
    </label>
    </div>
  </div>

  <div className="form-row">
  <div className="newdiv" >
    <label className="inline-label">
      Kaizen No:
    </label>
      <select name="kaizenNo" value={formData.kaizenNo} onChange={handleChange}>
        <option value="">Select</option>
        <option value="K1">K1</option>
        <option value="K2">K2</option>
      </select>
    </div>
  </div>


    <button type="submit" className="submit">Submit</button>

    {/* <input type = "text" className="searchinput"></input>
    <button type="searchidea">Search idea by name</button>

    <input type = "text" className="deleteinput"></input>
    <button type="searchidea">Delete idea by name</button> */}

  </form>
    );
  };

  export default ImprovementIdeaForm;
