import { Input } from "components/widgets/input";

const SignupView = () => {
  return (
    <div className="w-full">
      <form className="space-y-3">
        <div>
          <label htmlFor="ogNumber" className="block text-lg text-gray-200">
            Your OgNumber (starting with OG)*
          </label>
          <Input
            size="lg"
            type="text"
            id="ogNumber"
            placeholder="Og Number"
            onChange={() => {
              console.log("hi");
            }}
            className="w-full"
          />
        </div>
      </form>
      <h1>I am the Signup page</h1>
    </div>
  );
};

export default SignupView;
