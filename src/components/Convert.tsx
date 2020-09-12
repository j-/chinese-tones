import * as React from 'react';
import { getVowelAt } from '../convert';
import ToneButtons from './ToneButtons';
import Output from './Output';

export const DEFAULT_VALUE = 'nv ha2i zi';
export const IS_TOP_LEVEL = window.self === window.top;

const Convert: React.FC = () => {
  // Refs
  const inputRef = React.useRef<HTMLInputElement>(null);
  // State
  const [inputValue, setInputValue] = React.useState(DEFAULT_VALUE);
  const [currentVowel, setCurrentVowel] = React.useState<string | null>(null);
  // Handlers
  const handleChangeInput = React.useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
    setInputValue(e.currentTarget.value);
  }, []);
  const handleClickButton = React.useCallback<React.MouseEventHandler<HTMLButtonElement>>((e) => {
    e.preventDefault();
    const currentInput = inputRef.current;
    if (!currentInput) return;
    currentInput.focus();
    document.execCommand('insertText', false, e.currentTarget.value);
  }, []);
  const handleSelectInput = React.useCallback<React.ReactEventHandler<HTMLInputElement>>((e) => {
    const currentInput = inputRef.current;
    if (!currentInput) return;
    setCurrentVowel(
      getVowelAt(
        currentInput.value,
        currentInput.selectionStart === null ?
          currentInput.value.length :
          currentInput.selectionStart - 1
      )
    );
  }, []);
  return (
    <div className="Convert">
      <div className="form-group my-4">
        <label htmlFor="Convert-input" className="sr-only">Pinyin</label><br />
        <input
          ref={inputRef}
          id="Convert-input"
          className="form-control form-control-lg"
          type="text"
          placeholder="Enter pinyin"
          value={inputValue}
          onChange={handleChangeInput}
          onSelect={handleSelectInput}
          autoFocus={IS_TOP_LEVEL}
        />
      </div>
      <div className="my-4">
        <ToneButtons
          onClickButton={handleClickButton}
          currentVowel={currentVowel}
        />
      </div>
      <div className="my-4">
        <Output value={inputValue} />
      </div>
    </div>
  );
};

export default Convert;
