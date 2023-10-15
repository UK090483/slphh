import clsx from "clsx";
import React, { Fragment } from "react";
import { useFormContext } from "react-hook-form";
import { useFieldContext } from "./FieldContext";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";

const selectItems = [
  {
    label: "Hamburg-based",
    items: [
      { value: "Hamburg-based:SME/Corporate", label: "SME/Corporate" },
      { value: "Hamburg-based:News Outlet", label: "News Outlet" },
      {
        value: "Hamburg-based:VC/CVC/BusinessAngel/Investor",
        label: "VC/CVC/ Business Angel / Investor",
      },
    ],
  },
  {
    label: "International",
    items: [
      { value: "International:Scaleup", label: "Scaleup" },
      { value: "International:News-Outlet", label: "News-Outlet" },
      {
        value: "International:VC/ CVC/ Business Angel / Investor",
        label: "VC/ CVC/ Business Angel / Investor",
      },
      {
        value: "International:Innovation Ecosystem Stakeholder",
        label: "Innovation Ecosystem Stakeholder",
      },
    ],
  },

  { value: "other", label: "other" },
];

const getLabel = (items: typeof selectItems, value?: string) => {
  if (!value) return "";

  return items.reduce((acc, item) => {
    if (item.items) {
      const found = item.items.find((i) => i.value === value);
      if (found) {
        return found.label;
      }
    }

    if (item.value === value) {
      return item.label;
    }

    return acc;
  }, "");
};

const Select: React.FC = () => {
  const { name, options } = useFieldContext();

  const { setValue, register, watch } = useFormContext();

  const value = watch(name);

  return (
    <div>
      <Listbox
        {...register(name, options)}
        value={value}
        onChange={(e) => setValue(name, e.value)}
      >
        <div className="relative mt-1">
          <Listbox.Button
            id={name}
            className="relative w-full cursor-default border-dotted border-0 border-b-2 border-primary h-7"
          >
            {({ open }) => {
              return (
                <span className="w-full h-full flex">
                  <span className="text-left w-full block pl-2 truncate">
                    {getLabel(selectItems, value)}
                  </span>
                  <span className="pointer-events-none flex items-center bg-black rounded-full shrink-0  justify-center w-6 h-6">
                    <ChevronDownIcon
                      className={clsx(
                        "h-5 w-5 transition-transform text-white ",
                        {
                          "rotate-180 ": open,
                        }
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </span>
              );
            }}
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute max-h-60 w-full z-50 overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {selectItems.map((item, itemIdx) => {
                if (item.items) {
                  return (
                    <figure
                      key={itemIdx}
                      className="border-dotted border-0 border-b-2 border-primary pb-2"
                    >
                      <figcaption className="pl-2 h-8 flex items-center font-bold text-base-mobile">
                        {item.label}
                      </figcaption>
                      <ul className="relative w-full">
                        {item.items.map((subitem, subitemIndex) => (
                          <Option key={subitemIndex} option={subitem} />
                        ))}
                      </ul>
                    </figure>
                  );
                }
                return <Option key={itemIdx} option={item} />;
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

const Option = ({ option }: { option: { value: string; label: string } }) => {
  return (
    <Listbox.Option
      className={({ active }) =>
        `relative cursor-default text-left select-none py-2 pl-10 pr-4 text-black text-sm md:text-base-mobile ${
          active ? "bg-secondary bg-opacity-50 " : ""
        }`
      }
      value={option}
    >
      {({ selected }) => (
        <>
          <span className={`block truncate`}>{option.label}</span>
          {selected ? (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          ) : null}
        </>
      )}
    </Listbox.Option>
  );
};

export default Select;
