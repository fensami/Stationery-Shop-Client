/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input } from "antd";
import { Controller, Control } from "react-hook-form"; // Import Control type

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
  control?: Control<any>; // Receive control prop
};

const SSInput = ({ type, name, label, disabled, control }: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        control={control} // Pass control prop
        render={({ field }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} disabled={disabled} />
          </Form.Item>
        )}
      ></Controller>
    </div>
  );
};

export default SSInput;
