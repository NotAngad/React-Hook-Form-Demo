import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  // Extract the key components from useForm():
  const { register, handleSubmit, errors } = useForm();
  // onSubmit to log the result. The result will be an object:
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      {/* Add the handleSubmit before your onSubmit function */}
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <label>First Name:</label>
        <input
          name="firstName"
          ref={register({ required: true, minLength: 4 })}
        />
        {errors.firstName?.type === "required" && <p>This is required!</p>}
        {errors.firstName?.type === "minLength" && (
          <p>First Name length should be atleast 6 characters!!</p>
        )}

        <label>Last Name:</label>
        <input name="lastname" ref={register({ required: true })} />
        {errors.lastName?.type === "required" && <p>This is required!</p>}

        <label>Gender</label>
        <select name="gender" ref={register({ required: true })}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender?.type === "required" && <p>This is required!</p>}

        <label>Username</label>
        <input name="username" ref={register({ required: true })} />
        {errors.username?.type === "required" && <p>This is required!</p>}

        <label>Email</label>
        <input name="email" ref={register({ required: true })} />
        {errors.email?.type === "required" && <p>This is required!</p>}

        <label>About you</label>
        <textarea name="aboutYou" />

        <input type="submit" ref={register({ required: true })} />
      </form>
    </div>
  );
}

export default App;
