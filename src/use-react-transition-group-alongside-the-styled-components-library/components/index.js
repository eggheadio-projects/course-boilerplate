import styled from 'styled-components';
import transition from 'styled-transition-group';

export const Container = styled.div`
  --toggler-width: 120px;
  --toggler-height: 40px;
  --toggler-bg-color: #ffbf00;
  --toggler-active-bg-color: #ffcf40;
  --menu-starting-top: 0px;
  --menu-ending-top: 45px;
  --menu-width: 200px;
  --menu-max-height: 200px;
  --menu-bg-color: #ffdc73;
  --fade-from-color: transparent;
  --fade-to-color: black;
  position: relative;
`;

export const Toggler = styled.button`
  position: relative;
  z-index: 2;
  width: var(--toggler-width);
  height: var(--toggler-height);
  background-color: ${props =>
    props.active
      ? 'var(--toggler-active-bg-color)'
      : 'var(--toggler-bg-color)'};
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: background-color 350ms;
`;

export const List = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  padding: 5px 0;
`;

export const Menu = transition.div`
  position: absolute;
  top: var(--menu-ending-top);
  z-index: 1;
  box-sizing: border-box;
  width: var(--menu-width);
  padding: 0 20px;
  overflow: hidden;
  background-color: var(--menu-bg-color);
  border-radius: 5px;

  &:enter {
    top: var(--menu-starting-top);
    width: var(--toggler-width);
    max-height: var(--toggler-height);
    color: var(--fade-from-color);
    background-color: var(--toggler-bg-color);
  }

  &:enter-active {
    top: var(--menu-ending-top);
    width: var(--menu-width);
    max-height: var(--menu-max-height);
    color: var(--fade-to-color);
    background-color: var(--menu-bg-color);
    transition: all 350ms;
  }

  &:exit {
    top: var(--menu-ending-top);
    width: var(--menu-width);
    max-height: var(--menu-max-height);
    color: var(--fade-to-color);
    background-color: var(--menu-bg-color);
  }

  &:exit-active {
    top: var(--menu-starting-top);
    width: var(--toggler-width);
    max-height: var(--toggler-height);
    color: var(--fade-from-color);
    background-color: var(--toggler-bg-color);
    transition: all 350ms;
  }
`;
