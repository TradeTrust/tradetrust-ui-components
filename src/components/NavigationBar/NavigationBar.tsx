import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";

export interface NavigationBarProps {
  leftMenuChildren: React.ReactNode;
  rightMenuChildren?: React.ReactNode;
  mobileMenuChildren?: React.ReactNode;
  setToggleNavBar: (toggleNavBar: boolean) => void;
  toggleNavBar: boolean;
}

const NavigationBarStyle = styled.nav`
  button {
    color: #6e787f;
    font-size: 16px;
    font-family: "Roboto";
  }

  a {
    color: #6e787f;
    display: block;
    font-size: 16px;
    font-family: "Roboto";
  }

  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;

    &:hover,
    &:focus {
      text-decoration: none;
      outline: none;
    }

    .icon-bar {
      background-color: #454b50;
      display: block;
      width: 22px;
      height: 2px;
      border-radius: 1px;
      transition: transform 0.2s ease-out;
      position: absolute;
    }

    .top-bar {
      transform: translateY(0) rotate(45deg);
    }

    .bottom-bar {
      transform: translateY(0) rotate(-45deg);
    }

    &.collapsed .top-bar {
      transform: translateY(-4px) rotate(0);
    }

    &.collapsed .bottom-bar {
      transform: translateY(4px) rotate(0);
    }
  }

  .dropdown-item {
    font-size: 14px;
  }

  .max-h-0 {
    max-height: 0px;
  }

  .max-h-full {
    max-height: 100vh;
  }
`;

export const NavigationButtonStyle = styled.div`
  .create-btn {
    font-size: 16px;
    color: #3b8cc5;
    background: #ffffff;
    border: 1px solid #e7eaec;
    box-sizing: border-box;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
  }

  .verify-btn {
    font-size: 16px;
    color: #ffffff;
    background: #3b8cc5;
    border: 2px solid #3b8cc5;
    box-sizing: border-box;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
  }
`;

export const NavigationBar: FunctionComponent<NavigationBarProps> = (props) => {
  return (
    <NavigationBarStyle>
      <div className={`container py-2`}>
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <button
              className={`navbar-toggler outline-none ${props.toggleNavBar ? "" : "collapsed"}`}
              onClick={() => {
                props.setToggleNavBar(!props.toggleNavBar);
                console.log("NavigationBar: ", props.toggleNavBar);
                // props.onClick(!props.toggleNavBar);
              }}
            >
              <span className="icon-bar top-bar" />
              <span className="icon-bar bottom-bar" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
            <div className="flex-shrink-0">
              <a href="https://www.tradetrust.io/">
                <img
                  data-testid="nav-logo-home"
                  className="img-fluid h-12"
                  src="https://www.tradetrust.io/static/images/tradetrust_logo.svg"
                  alt="TradeTrust"
                />
              </a>
            </div>
            <div className="hidden lg:block md:ml-12">
              <div className="flex h-full items-center">{props.leftMenuChildren}</div>
            </div>
            <div className="hidden md:block md:absolute md:right-0 lg:relative lg:ml-auto">
              <div className="flex h-full items-center">{props.rightMenuChildren}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={`lg:hidden`}>
        <div
          className={`container  w-full bg-white overflow-auto  transition-height ease-in-out duration-700 h-full max-h-0 ${
            props.toggleNavBar ? "max-h-full" : ""
          }`}
        >
          {props.mobileMenuChildren}
        </div>
      </div>
    </NavigationBarStyle>
  );
};
