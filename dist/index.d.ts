import { Component, ReactNode } from "react";
interface MetisMenuProps {
    toggle?: boolean;
    triggerElement?: string;
    parentTrigger?: string;
    subMenu?: string;
    className?: string;
    children?: ReactNode;
}
declare class MetisMenu extends Component<MetisMenuProps, {}> {
    private mm;
    private el;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default MetisMenu;
//# sourceMappingURL=index.d.ts.map