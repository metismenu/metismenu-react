import React, { Component, ElementType, ReactNode } from "react";
import metismenujs from "metismenujs";

interface MetisMenuProps {
  toggle?: boolean;
  triggerElement?: string;
  parentTrigger?: string;
  subMenu?: string;
  className?: string;
  children?: ReactNode;
}

class MetisMenu extends Component<MetisMenuProps, {}> {
  private mm!: metismenujs;
  private el!: string | Element;

  componentDidMount() {
    this.mm = new metismenujs(this.el, this.props);
  }

  componentWillUnmount() {
    this.mm.dispose();
  }

  render() {
    const { subMenu, children, className } = this.props;
    const MMTag = subMenu || ("ul" as ElementType);
    return (
      <MMTag className={`metismenu ${className}`} ref={(el: string | Element) => (this.el = el)}>{children}</MMTag>
    );
  }
}

export default MetisMenu;
