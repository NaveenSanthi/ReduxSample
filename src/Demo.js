import { useSelector } from "react-redux";

const Demo = () => {
  const counterValue = useSelector((state) => state.counterReducer.counter);
  const email = useSelector((state) => state.counterReducer.email);
  return (
    <>
      <p>New Counter Value</p>
      <p>{counterValue}</p>
      <p>{email}</p>
    </>
  );
};
export default Demo;
