import { ContainerProp } from "../interfaces/Interfaces";

function Container({ children }: ContainerProp) {
  return (
    <div className=" bg-white/10 shadow-sm shadow-white/20 rounded-md p-3 mx-10 w-96">
      {/* <div className="w-96"> */}
      {children}
      {/* </div> */}
    </div>
  );
}

export default Container;
