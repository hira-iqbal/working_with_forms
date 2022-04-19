import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameChangeHandler = (event) => {
    console.log(event.target.value)
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === ''){
      setEnteredNameIsValid(false);
      return;
    }
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (enteredName.trim() === ''){

      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);

    const eneteredValue = nameInputRef.current.value;
    nameInputRef.current.value = ''; //not an ideal way as it directly manipulate the react dom.

    console.log(eneteredValue);
    setEnteredName('');
  };

  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef}
        type='text' id='name'
        onChange={nameChangeHandler}
        value={enteredName}
        onBlur={nameInputBlurHandler}/>
        { nameInputIsValid && <p className='error-text'>Name must be valid </p> }
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
