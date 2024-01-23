import { useMemo, cloneElement, Children } from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  button: ReactNode;
}

const Dropdown = ({ children, button }: Props) => {
  const dropDownElements = useMemo(() => {
    const childrenArray = Children.toArray(children);
    const className = "last:border-b-0 border-1 transition-colors rounded-one whitespace-nowrap";
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return childrenArray.map((child: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      return cloneElement(child, { ...child.props, className });
    });
  }, [children]);

  return (
    <div className="group relative">
      {button}
      <div className="min-w-full hidden absolute group-hover:block transition-transform duration-1000 z-20 left-{50%] translate-x-[-50%]">
        <div className="p-3 bg-white rounded-lg overflow-hiidden w-auto">{dropDownElements}</div>
      </div>
    </div>
  );
};

export default Dropdown;
