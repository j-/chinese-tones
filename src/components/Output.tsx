import * as React from 'react';
import { convert } from '../convert';

export interface Props {
  value: string;
}

const Output: React.FC<Props> = ({ value }) => (
  <div className="card card-body">
    <output className="display-4">
      {convert(value) || <>&zwj;</>}
    </output>
  </div>
);

export default Output;
