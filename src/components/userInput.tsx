import { UserInputInterface } from "../App";

interface UserInputPropsInterface {
  onChange: (
    inputIdentifier: keyof UserInputInterface,
    newValue: number
  ) => void;
  userInput: UserInputInterface;
}

export const UserInput: React.FC<UserInputPropsInterface> = (props) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={props.userInput.initialInvestment}
            onChange={(e) =>
              props.onChange("initialInvestment", parseInt(e.target.value))
            }
          />
        </p>
        <p>
          <label>Monthly Investment</label>
          <input
            type="number"
            required
            value={props.userInput.monthlyInvestment}
            onChange={(e) =>
              props.onChange("monthlyInvestment", parseInt(e.target.value))
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Interest Rate</label>
          <input
            type="number"
            required
            value={props.userInput.expectedReturn}
            onChange={(e) =>
              props.onChange("expectedReturn", parseInt(e.target.value))
            }
          />
        </p>
        <p>
          <label>
            Duration{" "}
            <span style={{ opacity: 0.5, fontSize: "0.6rem" }}>(years)</span>
          </label>
          <input
            type="number"
            required
            value={props.userInput.duration}
            onChange={(e) =>
              props.onChange("duration", parseInt(e.target.value))
            }
          />
        </p>
      </div>
    </section>
  );
};
