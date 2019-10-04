import * as React from 'react';
import { convert } from '../convert';
import { ToneButton1, ToneButton2, ToneButton3, ToneButton4 } from './ToneButton';

export const DEFAULT_VALUE = 'wo3 de ma1ma1';

const Convert: React.FC = () => {
  // Refs
  const inputRef = React.useRef<HTMLInputElement>();
  // State
  const [inputValue, setInputValue] = React.useState(DEFAULT_VALUE);
  const [cursorPosition, setCursorPosition] = React.useState(DEFAULT_VALUE.length);
  // Handlers
  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.currentTarget.value);
  };
  const handleClickButton: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setInputValue(
      // Everything before the cursor
      inputValue.slice(0, inputRef.current.selectionStart) +
      // The number corresponding to the clicked button
      e.currentTarget.value +
      // Everything after the cursor
      inputValue.slice(inputRef.current.selectionEnd)
    );
    setCursorPosition(inputRef.current.selectionStart + 1);
    inputRef.current.focus();
  };
  // Add diacritics to input value
  const output = convert(inputValue);
  // Set the input ref cursor position
  React.useEffect(() => {
    const currentInput = inputRef.current;
    currentInput.selectionStart = cursorPosition;
    currentInput.selectionEnd = cursorPosition;
  }, [cursorPosition]);
  return (
    <div className="Convert">
      <div className="Convert-input-group form-group">
        <label htmlFor="Convert-input" className="sr-only">Pinyin</label><br />
        <input
          ref={inputRef}
          id="Convert-input"
          className="form-control"
          type="text"
          placeholder="Enter pinyin"
          value={inputValue}
          onChange={handleChangeInput}
          autoFocus={true}
        />
      </div>
      <div className="btn-group d-flex mt-3 mb-3" role="group" aria-label="Tone buttons">
        <ToneButton1 onClick={handleClickButton} />
        <ToneButton2 onClick={handleClickButton} />
        <ToneButton3 onClick={handleClickButton} />
        <ToneButton4 onClick={handleClickButton} />
      </div>
      <div className="Convert-output-group card card-body">
        <output className="display-4">
          {output || <>&zwj;</>}
        </output>
      </div>
    </div>
  );
};

export default Convert;
