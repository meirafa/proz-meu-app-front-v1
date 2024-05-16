import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { clsx } from 'clsx';

const Dropdown = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.black};
  cursor: default;
`;
const Control = styled.div``;
const SelectedValue = styled.div``;
const InputSearch = styled.input`
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fonts.base};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
  cursor: default;
  outline: none;
  padding: 8px 52px 8px 10px;
  transition: all 200ms ease;
  width: 100%;

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.without};
  }
`;
const ArrowIcon = styled.div`
  border-color: #999 transparent transparent;
  border-style: solid;
  border-width: 5px 5px 0;
  content: ' ';
  display: block;
  margin-top: 0.3rem;
  position: absolute;
  right: 0.5rem;
  bottom: 1rem;

  &.open {
    border-color: transparent transparent #999;
    border-width: 0 5px 5px;
  }
`;
const OptionsSelect = styled.div`
  display: none;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #ccc;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  margin-top: -1px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1000;
  -webkit-overflow-scrolling: touch;
  &.open {
    display: block;
  }
`;
const OptionSelected = styled.div`
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  display: block;
  padding: 8px 10px;

  &.selected,
  &:hover {
    background-color: ${({ theme }) => theme.colors.inputPlaceholder};
    color: ${({ theme }) => theme.colors.blue};
  }
`;
const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  margin-top: 0.5rem;
`;

const InputSelect = (props) => {
  const {
    dataList,
    labelText,
    buttonText,
    isDisable = false,
    onSelect,
    parseSelectedOption,
    reduxState,
    status,
  } = props;

  const [inputText, setInputText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const selectedItem = reduxState?.selected;

  useEffect(() => {
    const selected = reduxState.selected;
    if (selected) {
      const all = dataList.map((el) => parseSelectedOption(el));
      const value = all.find((el) => el.value === selected);
      setInputText(value.label || '');
    } else {
      setInputText('');
    }
  }, [reduxState.selected]);

  const selectOption = (option) => {
    const { value, label } = parseSelectedOption(option);
    onSelect(value);
    setInputText(label);
    setIsOpen(false);
  };
  const filter = (dataList) => {
    return dataList?.filter?.(
      (option) => option['nome'].toLowerCase().indexOf(inputText.toLowerCase()) > -1,
    );
  };

  return (
    <Dropdown>
      <Control>
        {labelText}
        <SelectedValue>
          <InputSearch
            type="text"
            value={inputText}
            placeholder={buttonText}
            onChange={(e) => setInputText(e.target.value)}
            onFocus={() => setInputText('')}
            onClick={() => setIsOpen((prev) => !prev)}
            disabled={isDisable}
          />
        </SelectedValue>
        <ArrowIcon className={clsx({ open: isOpen })} />
      </Control>

      {status === 'FAILED' && <ErrorMessage>{status.error}</ErrorMessage>}

      <OptionsSelect className={clsx({ open: isOpen })}>
        {filter(dataList)?.map((option) => {
          const { value } = parseSelectedOption(option);
          return (
            <OptionSelected
              onClick={() => selectOption(option)}
              className={clsx({ selected: value === selectedItem })}
              key={option.id}
            >
              {option['nome']}
            </OptionSelected>
          );
        })}
      </OptionsSelect>
    </Dropdown>
  );
};

export default InputSelect;
