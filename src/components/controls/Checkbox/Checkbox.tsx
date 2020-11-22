import React from 'react';
import classNames from 'classnames';
import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa';
import './Checkbox.scss';

interface Props {
  readonly id: string;
  readonly onCheck: (isChecked: boolean) => void;
}

const Checkbox: React.FunctionComponent<Props> = (props: Props) => {
  const {
    id,
    onCheck
  } = props;

  const [isChecked, setIsChecked] = React.useState(false);

  const onChangeCheckbox = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    onCheck(event.target.checked);
  }, []);

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={onChangeCheckbox}
      />
      <label htmlFor={id}>
        <span className={classNames('icon-area', { 'is-checked': isChecked })}>
          {isChecked
            ? <FaCheckCircle />
            : <FaRegCheckCircle />
          }
        </span>
      </label>
    </div>
  );
};

export default React.memo(Checkbox);