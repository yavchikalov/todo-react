import { DetailedHTMLProps, LabelHTMLAttributes } from "react";

export interface ICheckboxProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    value: boolean;
    onSetValue: (value: boolean) => void;
}