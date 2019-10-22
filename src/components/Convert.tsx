import * as React from 'react';
import { convert, getVowelAt } from '../convert';
import SelectionInput from './SelectionInput';
import { ToneButtons } from './ToneButton';

export const DEFAULT_VALUE = 'nv ha2i zi';

const Convert: React.FC = () => {
  // Refs
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  // State
  const [inputValue, setInputValue] = React.useState(DEFAULT_VALUE);
  const [selectionStart, setSelectionStart] = React.useState(DEFAULT_VALUE.length);
  const [selectionEnd, setSelectionEnd] = React.useState(DEFAULT_VALUE.length);
  // Handlers
  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.currentTarget.value);
  };
  const handleClickButton: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const currentInput = inputRef.current;
    if (!currentInput) return;
    setInputValue(
      // Everything before the cursor
      inputValue.slice(0, selectionStart || 0) +
      // The number corresponding to the clicked button
      e.currentTarget.value +
      // Everything after the cursor
      inputValue.slice(selectionEnd || 0)
    );
    const cursorPosition = (selectionStart || 0) + 1;
    setSelectionStart(cursorPosition);
    setSelectionEnd(cursorPosition);
    currentInput.focus();
  };
  // Change the tone buttons to match the vowel at the cursor position
  const currentVowel = getVowelAt(inputValue, selectionStart - 1);
  // Add diacritics to input value
  const output = convert(inputValue);
  return (
    <div className="Convert">
      <div className="Convert-input-group form-group">
        <label htmlFor="Convert-input" className="sr-only">Pinyin</label><br />
        <SelectionInput
          ref={inputRef}
          id="Convert-input"
          className="form-control"
          type="text"
          placeholder="Enter pinyin"
          value={inputValue}
          onChange={handleChangeInput}
          autoFocus={true}
          selectionStart={selectionStart}
          setSelectionStart={setSelectionStart}
          selectionEnd={selectionEnd}
          setSelectionEnd={setSelectionEnd}
        />
      </div>
      <div className="btn-group d-flex mt-3 mb-3" role="group" aria-label="Tone buttons">
        <ToneButtons currentVowel={currentVowel} onClick={handleClickButton} />
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
