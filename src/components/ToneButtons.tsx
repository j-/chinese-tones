import * as React from 'react';
import { ACUTE, CARON, GRAVE, MACRON } from '../convert';
import './ToneButtons.css';

export const DOTTED_CIRCLE = '\u25cc';

export interface Props {
  onClickButton: React.MouseEventHandler;
  currentVowel: string | null;
}

const ToneButtons: React.FC<Props> = ({ onClickButton: handleClickButton, currentVowel }) => {
  return (
    <div className="ToneButtons btn-group d-flex" role="group" aria-label="Tone buttons">
      <button
        type="button"
        className="btn btn-dark btn-lg"
        onClick={handleClickButton}
        style={{ color: 'hsl(0, 100%, 80%)' }}
        value={1}
      >
        <big>{(currentVowel || DOTTED_CIRCLE) + MACRON}</big><br />
        <small>1</small>
      </button>
      <button
        type="button"
        className="btn btn-dark btn-lg"
        onClick={handleClickButton}
        style={{ color: 'hsl(50, 100%, 80%)' }}
        value={2}
      >
        <big>{(currentVowel || DOTTED_CIRCLE) + ACUTE}</big><br />
        <small>2</small>
      </button>
      <button
        type="button"
        className="btn btn-dark btn-lg"
        onClick={handleClickButton}
        style={{ color: 'hsl(100, 100%, 80%)' }}
        value={3}
      >
        <big>{(currentVowel || DOTTED_CIRCLE) + CARON}</big><br />
        <small>3</small>
      </button>
      <button
        type="button"
        className="btn btn-dark btn-lg"
        onClick={handleClickButton}
        style={{ color: 'hsl(200, 100%, 80%)' }}
        value={4}
      >
        <big>{(currentVowel || DOTTED_CIRCLE) + GRAVE}</big><br />
        <small>4</small>
      </button>
    </div>
  );
};

export default ToneButtons;
