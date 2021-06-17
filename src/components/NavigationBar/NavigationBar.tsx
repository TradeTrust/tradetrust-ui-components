import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";
import { NavigationBarItem } from "./NavigationBarItem";
import { NavigationItem } from "./type";

export interface NavigationBarProps {
  logo: React.ReactElement;
  menuLeft: NavigationItem[];
  menuRight?: NavigationItem[];
  menuMobile: NavigationItem[];
  setToggleNavBar: (toggleNavBar: boolean) => void;
  toggleNavBar: boolean;
}

export const NavigationBarStyled = styled.nav`
  // try to avoid scoped styles here as much as possible
  a {
    font-size: 16px;
  }

  .dropdown {
    a {
      font-size: 14px;
    }
  }

  .navbar-toggler {
    .top-bar,
    .bottom-bar {
      height: 2px;
    }

    .top-bar {
      transform: translateY(0) rotate(45deg);
    }

    .bottom-bar {
      transform: translateY(0) rotate(-45deg);
    }

    &.collapsed {
      .top-bar {
        transform: translateY(-4px) rotate(0);
      }

      .bottom-bar {
        transform: translateY(4px) rotate(0);
      }
    }
  }
`;

export const NavigationBar: FunctionComponent<NavigationBarProps> = (props) => {
  return (
    <NavigationBarStyled>
      <div className={`container py-2`}>
        <div className="relative flex items-center justify-center">
          <div className="lg:hidden absolute left-0">
            <button
              className={`navbar-toggler relative w-6 h-6 ${props.toggleNavBar ? "" : "collapsed"}`}
              onClick={() => {
                props.setToggleNavBar(!props.toggleNavBar);
              }}
            >
              <span className="w-full bg-cloud-500 transition-transform duration-200 ease-out absolute block top-bar" />
              <span className="w-full bg-cloud-500 transition-transform duration-200 ease-out absolute block bottom-bar" />
            </button>
          </div>
          {props.logo}
          <div className="hidden lg:block md:ml-12">
            <div className="flex items-center">
              {props.menuLeft.map((item, index) => {
                return (
                  <div key={index} className="lg:ml-6">
                    <NavigationBarItem item={item} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hidden md:block lg:ml-auto absolute right-0 lg:relative">
            {props.menuRight && (
              <div className="flex items-center">
                {props.menuRight.map((item, index) => {
                  return (
                    <div key={index} className="md:ml-2 lg:ml-4">
                      <NavigationBarItem item={item} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`lg:hidden`}>
        <div
          className={`container rounded-md bg-white overflow-auto transition-height ease-in-out duration-700 ${
            props.toggleNavBar ? "max-h-screen" : "max-h-0"
          }`}
        >
          {props.menuMobile && (
            <>
              {props.menuMobile.map((item, index) => {
                if (item.id === "create-documents" || item.id === "verify" || item.id === "settings") {
                  return (
                    <div key={index} className="py-4 md:hidden">
                      <NavigationBarItem item={item} />
                    </div>
                  );
                }
                return (
                  <div key={index} className="py-4">
                    <NavigationBarItem item={item} />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </NavigationBarStyled>
  );
};
