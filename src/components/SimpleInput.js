import { useState } from 'react';

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredInputTouched, setEnteredInputTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('')

  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredEmailIsValid = enteredEmail.includes('@');

  const nameInputIsValid = !enteredNameIsValid && enteredInputTouched;
  const emailInputIsValid = !enteredEmailIsValid && enteredInputTouched;

  let formIsValid = false;

    if(enteredNameIsValid && enteredEmailIsValid){
      formIsValid = true;
    }

  const nameChangeHandler = (event) => {
    console.log(event.target.value)
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredEmail(event.target.value);
  }



  const InputBlurHandler = (event) => {
    setEnteredInputTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredInputTouched(true);
    if (!enteredNameIsValid || !enteredEmailIsValid){
      return;
    }
    setEnteredName('');
    setEnteredEmail('');
    setEnteredInputTouched(false);
  };


  const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
        type='text' id='name'
        onChange={nameChangeHandler}
        value={enteredName}
        onBlur={InputBlurHandler}/>
        { nameInputIsValid && <p className='error-text'>Name must be valid </p> }
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Email</label>
        <input
        type='text' id='email'
        onChange={emailChangeHandler}
        value={enteredEmail}
        onBlur={InputBlurHandler}/>
        { emailInputIsValid && <p className='error-text'>Email must be valid </p> }
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
