/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactFormDataUpdateFormInputValues = {
    name?: string;
    email?: string;
    phoneNumber?: string;
    message?: string;
};
export declare type ContactFormDataUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactFormDataUpdateFormOverridesProps = {
    ContactFormDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactFormDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContactFormDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contactFormData?: any;
    onSubmit?: (fields: ContactFormDataUpdateFormInputValues) => ContactFormDataUpdateFormInputValues;
    onSuccess?: (fields: ContactFormDataUpdateFormInputValues) => void;
    onError?: (fields: ContactFormDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactFormDataUpdateFormInputValues) => ContactFormDataUpdateFormInputValues;
    onValidate?: ContactFormDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContactFormDataUpdateForm(props: ContactFormDataUpdateFormProps): React.ReactElement;
