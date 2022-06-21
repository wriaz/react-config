import useInput from "../hooks/useInput/useInput";

const Form = () => {
  const [textProps, resetText] = useInput("");
  const submit = (e) => {
    e.preventDefault();
    resetText();
  };

  return (
    <form onSubmit={submit}>
      <input data-testid="inputField" type="text" {...textProps} />
      <button>Submit</button>
    </form>
  );
};

export default Form;
