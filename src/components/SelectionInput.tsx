import * as React from 'react';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  selectionStart: number;
  setSelectionStart: React.Dispatch<React.SetStateAction<number>>;
  selectionEnd: number;
  setSelectionEnd: React.Dispatch<React.SetStateAction<number>>;
}

const SelectionInput = React.forwardRef<HTMLInputElement | null, Props>((props, forwardedRef) => {
  const ref = forwardedRef as React.MutableRefObject<HTMLInputElement | null>;

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
    if (!el.selectionStart) return;
    if (!el.selectionEnd) return;
    setSelectionStart(el.selectionStart);
    setSelectionEnd(el.selectionEnd);
    if (onSelect) onSelect(e);
  };

  return <input ref={ref} onSelect={handleSelect} {...rest} />;
});

export default SelectionInput;
