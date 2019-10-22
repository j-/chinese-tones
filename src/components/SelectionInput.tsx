import * as React from 'react';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  selectionStart: number;
  setSelectionStart: React.SetStateAction<number>;
  selectionEnd: number;
  setSelectionEnd: React.SetStateAction<number>;
}

const SelectionInput = React.forwardRef<HTMLInputElement | null, Props>((props, ref) => {
  const {
    selectionStart,
    setSelectionStart,
    selectionEnd,
    setSelectionEnd,
    onSelect,
    ...rest
  } = props;

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.selectionStart = selectionStart;
    el.selectionEnd = selectionEnd;
  }, [ref, selectionStart, selectionEnd]);

  const handleSelect: React.ReactEventHandler<HTMLInputElement> = (e) => {
    const el = ref.current;
    if (!el) return;
    setSelectionStart(el.selectionStart);
    setSelectionEnd(el.selectionEnd);
    if (onSelect) onSelect(e);
  };

  return <input ref={ref} onSelect={handleSelect} {...rest} />;
});

export default SelectionInput;
