import { TextareaHTMLAttributes } from "react";
import { IFieldProps } from "@/components/ui/field/field.interface";

type TypeInputPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> &
	IFieldProps;

export type ITextArea = TypeInputPropsField;
