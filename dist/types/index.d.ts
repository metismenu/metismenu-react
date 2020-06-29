import { Component } from "react";
import metismenujs from 'metismenujs';
import { IMMOptions } from "metismenujs/dist/types/interface";
declare class MetisMenu extends Component<IMMOptions, {}> {
    protected mm: metismenujs;
    protected el: string | Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default MetisMenu;
//# sourceMappingURL=index.d.ts.map