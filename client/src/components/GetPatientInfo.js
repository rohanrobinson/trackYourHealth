import '../GetPatientInfo.css';

const GetPatientInfo = ({ handleClose, show, handleKeyPress, plusButtonClick}) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
            <button type="button" className="modalButton" onClick={handleClose}>Close</button>    
                <h2>Let's Get Started</h2>


            <div id="firstSet">


                <p>Type out your symptoms here.</p>
                <input className="inputSymptom" placeholder="Symptom 1" onKeyPress={handleKeyPress}></input>

                <br />

                <input className="inputSymptom"  placeholder="Symptom 2" onKeyPress={handleKeyPress}></input>

                <br />

                <input className="inputSymptom"  placeholder="Symptom 3" onKeyPress={handleKeyPress}></input>

                <br />

                <button onClick={plusButtonClick}>Next</button>
            </div>

            </section>
        </div>
    );
};

export default GetPatientInfo;



  


