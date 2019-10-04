import * as React from 'react';
import { ACUTE, CARON, GRAVE, MACRON } from '../convert';

export const DOTTED_CIRCLE = '\u25cc';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ToneButton: React.FC<Props> = (props) => (
  <button type="button" className="btn btn-light" {...props} />
);

export default ToneButton;

export const ToneButton1: React.FC<Props> = (props) => (
  <ToneButton value={1} {...props}>
    <big>{DOTTED_CIRCLE + MACRON}</big><br /><small>1</small>
  </ToneButton>
);

export const ToneButton2: React.FC<Props> = (props) => (
  <ToneButton value={2} {...props}>
    <big>{DOTTED_CIRCLE + ACUTE}</big><br /><small>2</small>
  </ToneButton>
);

export const ToneButton3: React.FC<Props> = (props) => (
  <ToneButton value={3} {...props}>
    <big>{DOTTED_CIRCLE + CARON}</big><br /><small>3</small>
  </ToneButton>
);

export const ToneButton4: React.FC<Props> = (props) => (
  <ToneButton value={4} {...props}>
    <big>{DOTTED_CIRCLE + GRAVE}</big><br /><small>4</small>
  </ToneButton>
);
