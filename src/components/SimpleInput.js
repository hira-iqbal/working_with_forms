import { useState } from 'react';

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';

  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

    if(enteredNameIsValid){
      formIsValid = true;
    }

  const nameChangeHandler = (event) => {
    console.log(event.target.value)
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (!enteredNameIsValid){
      return;
    }
    setEnteredName('');
    setEnteredNameTouched(false);
  };


  const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
        type='text' id='name'
        onChange={nameChangeHandler}
        value={enteredName}
        onBlur={nameInputBlurHandler}/>
        { nameInputIsValid && <p className='error-text'>Name must be valid </p> }
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
