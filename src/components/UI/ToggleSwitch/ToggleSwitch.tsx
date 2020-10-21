import styled from "@emotion/styled";
import React from "react";
import { vars } from "../../../styles";
import "../../../index.css";

export interface ToggleSwitchProps {
  isOn: boolean;
  handleToggle?: () => void;
  className?: string;
}

export const ToggleSwitch = styled(({ className, isOn, handleToggle }: ToggleSwitchProps) => {
  return (
    <div className={className}>
      <input
        className="toggle-switch-checkbox"
        id={`toggle-switch`}
        data-testid={"toggle-switch"}
        checked={isOn}
        onChange={handleToggle}
        type="checkbox"
      />
      <label className="toggle-switch-label" htmlFor={`toggle-switch`}>
        <span className={`toggle-switch-button`} />
      </label>
    </div>
  );
})`
  .toggle-switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .toggle-switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 5rem;
    height: 2rem;
    border-radius: 9999px;
    position: relative;
    margin-top: -1.5rem;
    margin-left: 1rem;
    background-color: ${(props) => (props.isOn ? vars.tealLighter : vars.pink)};
    transition: background-color 0.2s;
  }

  .toggle-switch-label .toggle-switch-button {
    position: "absolute"
    border-radius: 9999px;
    background-color: #fff;
    width: 1.5rem;
    height: 1.5rem;
    content: "";
    top: 4px;
    left: 4px;
    transition: 0.2s;
    box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.2), 2px 2px 5px rgba(0, 0, 0, 0.1);
  }

  .toggle-switch-label:before {
    content: "On";
    text-transform: uppercase;
    font-weight: 700;
    opacity: 0;
    padding-left: 0.75rem;
    color: ${vars.teal}
    
  }

  .toggle-switch-label:after {
    content: "Off";
    text-transform: uppercase;
    font-weight: 700;
    padding-right: 0.75rem;
    color: ${vars.red}
  }

  .toggle-switch-checkbox:checked ~ .toggle-switch-label:after {
    opacity: 0;
  }

  .toggle-switch-checkbox:checked ~ .toggle-switch-label:before {
    opacity: 1;
  }

  .toggle-switch-checkbox:checked + .toggle-switch-label .toggle-switch-button {
    left: calc(100% - 4px);
    transform: translateX(-100%);
  }
`;
