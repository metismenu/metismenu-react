import React, { Component, ElementType } from "react";
import metismenujs from "metismenujs";
import { IMMOptions } from "metismenujs/dist/types/interface";

interface IMetisMenuOptions extends IMMOptions {
  className?: string
}

class MetisMenu extends Component<IMetisMenuOptions, {}> {
  protected mm!: metismenujs;
  protected el!: string | Element;

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
