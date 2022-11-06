import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
            <header className="App-header">
            <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
    <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
    <div class="my-3 py-3">
      <div class="contact-info">
      <ul class="contact-collection">
        <h3 class="display-5">Ioulia Chyderiotou</h3>
        {/* <img class="contact-img" src="profile.jpg"></img> */}
        <li class="contact-item">Date of birth: 27/06/1995</li>
        <li class="contact-item">Tel: <strong>6938526917</strong></li>
        <li class="contact-item">E-mail: ichyderiotou@gmail.com</li>
        <li class="contact-item">Linkedln: Ioulia Chyderiotou</li>
        <li class="contact-item">Address: Agios Dimitrios, Attiki</li>
      </ul>
    </div>
    <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"><h3 class="display-5">Skills Qualified accountant with an academic background in Economics and Accounting. Highly organized individual with strong sense of discipline and eagerness to expand skills and knowledge. Ability to work under pressure with developed communication skills</h3></div>
    <div class="experience-container">
      <h3 class="display-5">Experience</h3>
      <h3 class="experienct-title">Harlas International Transport / Junior Accountant</h3>
      <p class="experience-title-period">22/07/2019 - PRESENT</p>
      <ul class="experience-list">
        <li class="experience-list-item" id="experience-list-item">Use of the company's accounting program for the registration of documents</li>
        <li class="experience-list-item" id="experience-list-item">Agreement of balance with customers and suppliers</li>
        <li class="experience-list-item" id="experience-list-item">Monitoring of transactions and bank reconciliation</li>
        <li class="experience-list-item" id="experience-list-item">Payroll monitoring: Knowledge of calculation the salary and employee's benefits</li>
        <li class="experience-list-item" id="experience-list-item">Answering questions from employees, scheduling interviews and effectively resolving labor issues</li>
        <li class="experience-list-item" id="experience-list-item">Dealing with the part of use the best practices to strengthen the climate of trust between customers and company, for mutual exchange of services, as well as providing information to settle customer's debt</li>
      </ul>
      <h3 class="experience-title">Central Clinic of Athens / Office employee — Accounting Department</h3>
      <p class="experience-title-period">01/03/2019 - 19/07/2019</p>
      <break></break>
      <h3 class="experience-title">Kapelos Company / Accounting Assistant</h3>
      <p class="experience-title-period">01/11/2017 - 31/08/2018</p>
      <ul class="experience-list">
        <li class="experience-list-item">Preparing and processing of client invoice</li>
        <li class="experience-list-item">Use of the company's accounting program for the registration of documents</li>
        <li class="experience-list-item">Entering data and reporting at a regular base</li>
        <li class="experience-list-item">Registration of customers and supplier data</li>
      </ul>
    </div>
  </div>
    
    <div class="education-container">
      <h3 class="education-headline">Education</h3>
      <p class="education-item">University of Piraeus / Bachelor of science - Bs, Department of Economics</p>
      <p class="education-item-duration">2013-2018</p>
      <p class="education-item">University of Piraeus / Master of science - Ms, Economics and Business Strategy</p>
      <p class="education-item-duration">2020-2022</p>
    </div>
    <div class="languages-container">
      <h3 class="languages-headling">Languagues</h3>
      <p class="languages-item">English: Level C2 —ECPE - Proffesional working ability</p>
      <p class="languages-item">Spanish: Limited working ability</p>
    </div>
    <div class="licences-container">
      <h3 class="licences-headline">Licences</h3>
      <p class="licences-item">License to practice the profession of accountant / (Economic Chamber of Greece)</p>
    </div>
    <div class="skills-container">
      <h3 class="skills-headling">Skills</h3>
      <p class="skills-item">European Computer Driving Licence (ECDL)</p>
      <p class="skills-item">Microsoft Office</p>
      <p class="skills-item">Kefalaio,Pegasus,Apollon</p>
    </div>
    <div class="hobbies-container">
      <h3 class="hobbies-title">Hobbies</h3>
      <p class="hobbies-item">Crossfit</p>
      <p class="hobbies-item">Track & Field</p>
      <p class="hobbies-item">Ski</p>
      <p class="hobbies-item">Cinema</p>
      <p class="hobbies-item">Travelling</p>
    </div>
  </div>
</div>
            </header>
        </div>
    );
}

export default App;
