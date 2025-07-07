const capitalize = (str) =>
  str
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

// Render a single form field based on its configuration
const renderFields = ({ field, handleInputChange, formData }) => {
  const commonInputClass =
    "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

  const label = (
    <label
      htmlFor={field.name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {field.label} {field.required && <span className="text-red-500">*</span>}
    </label>
  );

  switch (field.type) {
    case "select":
      return (
        <div key={field.name}>
          {label}
          <select
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleInputChange}
            required={field.required}
            className={commonInputClass}
          >
            {field.options.map((option) => (
              <option key={option} value={option}>
                {capitalize(option)}
              </option>
            ))}
          </select>
        </div>
      );

    case "number":
      return (
        <div key={field.name}>
          {label}
          <div className="relative">
            {field.prefix && (
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                {field.prefix}
              </span>
            )}
            <input
              id={field.name}
              type="number"
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
              required={field.required}
              placeholder={field.placeholder}
              step={field.step}
              min={field.min}
              className={`${commonInputClass} ${field.prefix ? "pl-7" : ""}`}
            />
          </div>
        </div>
      );

    default: // Handles 'text', 'date', etc.
      return (
        <div key={field.name}>
          {label}
          <input
            id={field.name}
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleInputChange}
            required={field.required}
            placeholder={field.placeholder}
            className={commonInputClass}
          />
        </div>
      );
  }
};
export default renderFields;
