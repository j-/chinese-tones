import * as React from 'react';
import { ACUTE, CARON, GRAVE, MACRON } from '../convert';

export const DOTTED_CIRCLE = '\u25cc';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  currentVowel: string | null;
}

const ToneButton: React.FC<Props> = (props) => (
  <button type="button" className="btn btn-light" {...props} />
);

export default ToneButton;

export const ToneButton1: React.FC<Props> = ({ currentVowel, ...props }) => (
  <ToneButton value={1} style={{ color: 'red' }} {...props}>
    <big>{(currentVowel || DOTTED_CIRCLE) + MACRON}</big><br /><small>1</small>
  </ToneButton>
);

export const ToneButton2: React.FC<Props> = ({ currentVowel, ...props }) => (
  <ToneButton value={2} style={{ color: 'orange' }} {...props}>
    <big>{(currentVowel || DOTTED_CIRCLE) + ACUTE}</big><br /><small>2</small>
  </ToneButton>
);

export const ToneButton3: React.FC<Props> = ({ currentVowel, ...props }) => (
  <ToneButton value={3} style={{ color: 'green' }} {...props}>
    <big>{(currentVowel || DOTTED_CIRCLE) + CARON}</big><br /><small>3</small>
  </ToneButton>
);

export const ToneButton4: React.FC<Props> = ({ currentVowel, ...props }) => (
  <ToneButton value={4} style={{ color: 'blue' }} {...props}>
    <big>{(currentVowel || DOTTED_CIRCLE) + GRAVE}</big><br /><small>4</small>
  </ToneButton>
);

export const ToneButtons: React.FC<Props> = (props) => (
  <>
    <ToneButton1 {...props} />
    <ToneButton2 {...props} />
    <ToneButton3 {...props} />
    <ToneButton4 {...props} />
  </>
);
