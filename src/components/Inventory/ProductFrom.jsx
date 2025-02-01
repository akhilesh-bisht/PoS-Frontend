import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";

const LOCAL_STORAGE_KEY = "purchaseDetails";

const ProductForm = ({
  productData,
  setProductData,
  handleSubmit,
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [animationClass, setAnimationClass] = useState("enter");
  const [direction, setDirection] = useState("forward");
  const [errors, setErrors] = useState({});

  const formSections = [
    {
      id: "basic",
      label: "Basic Info",
      fields: [
        { name: "product_name", label: "Product Name", type: "text" },
        {
          name: "category",
          label: "Category",
          type: "select",
          options: ["Fertilizers", "Seeds", "Machinery", "Pesticides"],
        },
        { name: "package", label: "Package", type: "text" },
      ],
    },
    {
      id: "tax",
      label: "Tax Details",
      fields: [
        { name: "hsn_code", label: "HSN Code", type: "number" },
        { name: "gst_rate", label: "GST Rate (%)", type: "number" },
      ],
    },
    {
      id: "inventory",
      label: "Inventory",
      fields: [
        { name: "quantity", label: "Quantity", type: "number" },
        { name: "min_quantity", label: "Min Quantity", type: "number" },
        { name: "batch_no", label: "Batch No.", type: "text" },
        { name: "exp_date", label: "Expiry Date", type: "date" },
      ],
    },
    {
      id: "purchase",
      label: "Purchase",
      fields: [
        { name: "purchase_date", label: "Purchase Date", type: "date" },
        { name: "party_id", label: "Party ID", type: "text" },
        { name: "purchase_invoice", label: "Invoice No.", type: "text" },
        { name: "rate", label: "Rate (₹)", type: "number" },
      ],
    },
  ];

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setProductData((prev) => ({
        ...prev,
        ...parsedData,
      }));
    }
  }, []);

  const validateField = (name, value) => {
    switch (name) {
      case "product_name":
        return value.trim() ? "" : "Product name is required";
      case "hsn_code":
        return /^\d{6}$/.test(value)
          ? ""
          : "Invalid HSN Code (6 digits required)";
      case "gst_rate":
        return value >= 0 && value <= 28 ? "" : "GST Rate must be 0-28%";
      case "exp_date":
        return new Date(value) > new Date()
          ? ""
          : "Expiry date must be in future";
      case "quantity":
      case "min_quantity":
        return value >= 0 ? "" : "Value cannot be negative";

      case "purchase_date":
        if (!value) return "Purchase date is required";
        return new Date(value) <= new Date()
          ? ""
          : "Purchase date cannot be in future";
      case "rate":
        return value >= 0 ? "" : "Rate must be non-negative";
      default:
        return "";
    }
  };

  const validateSection = (sectionIndex) => {
    const section = formSections[sectionIndex];
    const sectionErrors = section.fields.reduce((acc, field) => {
      const error = validateField(field.name, productData[field.name]);
      return error ? { ...acc, [field.name]: error } : acc;
    }, {});

    setErrors(sectionErrors);
    return Object.keys(sectionErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: name.endsWith("_date")
        ? value
        : isNaN(value) || value === ""
        ? value
        : Number(value),
    }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleNext = () => {
    if (validateSection(currentStep)) {
      setDirection("forward");
      setAnimationClass("exit");
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (currentStep === formSections.length - 1) {
      const allErrors = formSections.reduce((acc, section) => {
        const sectionErrors = section.fields.reduce((sectionAcc, field) => {
          const error = validateField(field.name, productData[field.name]);
          return error ? { ...sectionAcc, [field.name]: error } : sectionAcc;
        }, {});
        return { ...acc, ...sectionErrors };
      }, {});

      if (Object.keys(allErrors).length === 0) {
        const purchaseData = {
          party_id: productData.party_id,
          purchase_date: productData.purchase_date,
          purchase_invoice: productData.purchase_invoice,
        };
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(purchaseData));
        handleSubmit(productData);

        onClose();
      } else {
        setErrors(allErrors);
      }
    }
  };

  const handleAnimationEnd = () => {
    if (animationClass === "exit") {
      if (currentStep < formSections.length - 1) {
        setCurrentStep((prev) => prev + 1);
      }
      setAnimationClass("enter");
    }
  };

  useEffect(() => {
    if (currentStep === formSections.length - 1) {
      setAnimationClass("final-step");
    }
  }, [currentStep]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Product Details</h2>
          <button onClick={onClose} className="text-2xl">
            <IoClose />
          </button>
        </div>

        <div className="flex gap-2 mb-4">
          {formSections.map((section, index) => (
            <div key={section.id} className="relative flex-1">
              <div
                className={`h-1 bg-gray-200 rounded-full ${
                  index <= currentStep ? "bg-blue-500" : ""
                }`}
              >
                <div
                  className={`h-full bg-green-500 rounded-full transition-all duration-300 ${
                    index === currentStep ? "w-full" : "w-0"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmitForm} className="grid grid-cols-2 gap-4">
          <div
            className={`col-span-2 grid grid-cols-2 gap-4 transition-transform duration-300 ${
              animationClass === "exit"
                ? direction === "forward"
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
            }`}
            onTransitionEnd={handleAnimationEnd}
          >
            {formSections[currentStep].fields.map((field) => (
              <div key={field.name} className="space-y-1">
                <label className="block text-sm font-medium">
                  {field.label}
                </label>
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    value={productData[field.name]}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select {field.label}</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={productData[field.name]}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    min={field.type === "number" ? 0 : undefined}
                  />
                )}
                {errors[field.name] && (
                  <p className="text-red-500 text-sm">{errors[field.name]}</p>
                )}
              </div>
            ))}
          </div>

          <div className="col-span-2 mt-4 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type={
                currentStep === formSections.length - 1 ? "submit" : "button"
              }
              onClick={
                currentStep === formSections.length - 1 ? null : handleNext
              }
              className={`px-4 py-2 text-white rounded ${
                currentStep === formSections.length - 1
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {currentStep === formSections.length - 1 ? "Add Product" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ProductForm.propTypes = {
  productData: PropTypes.object.isRequired,
  setProductData: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProductForm;
